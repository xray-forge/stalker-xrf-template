import { actor_stats, callback, game_graph, level, LuabindClass, object_binder, patrol, time_global } from "xray16";

import { StalkerPatrolManager } from "@/engine/core/ai/patrol/StalkerPatrolManager";
import { setupStalkerMotivationPlanner, setupStalkerStatePlanner } from "@/engine/core/ai/planner/setup";
import { StalkerStateManager } from "@/engine/core/ai/state";
import {
  closeLoadMarker,
  closeSaveMarker,
  getManager,
  IRegistryObjectState,
  loadObjectLogic,
  openLoadMarker,
  openSaveMarker,
  registerHelicopterEnemy,
  registerStalker,
  registry,
  resetObject,
  saveObjectLogic,
  softResetOfflineObject,
  unregisterHelicopterEnemy,
  unregisterStalker,
} from "@/engine/core/database";
import { ReleaseBodyManager } from "@/engine/core/managers/death/ReleaseBodyManager";
import { DialogManager } from "@/engine/core/managers/dialogs";
import { DropManager } from "@/engine/core/managers/drop";
import { EGameEvent, EventsManager } from "@/engine/core/managers/events";
import { MapDisplayManager } from "@/engine/core/managers/map/MapDisplayManager";
import { SimulationManager } from "@/engine/core/managers/simulation/SimulationManager";
import { GlobalSoundManager } from "@/engine/core/managers/sounds/GlobalSoundManager";
import { initializeObjectThemes } from "@/engine/core/managers/sounds/utils";
import { TradeManager } from "@/engine/core/managers/trade/TradeManager";
import type { ISmartTerrainJobDescriptor, SmartTerrain } from "@/engine/core/objects/smart_terrain";
import { Squad } from "@/engine/core/objects/squad";
import { SchemeHear } from "@/engine/core/schemes/shared/hear/SchemeHear";
import { SchemePostCombatIdle } from "@/engine/core/schemes/stalker/combat_idle/SchemePostCombatIdle";
import { activateMeetWithObject, updateObjectMeetAvailability } from "@/engine/core/schemes/stalker/meet/utils";
import { SchemeReachTask } from "@/engine/core/schemes/stalker/reach_task/SchemeReachTask";
import { ISchemeWoundedState } from "@/engine/core/schemes/stalker/wounded";
import { assert } from "@/engine/core/utils/assertion";
import { getObjectCommunity } from "@/engine/core/utils/community";
import { pickSectionFromCondList, readIniString, TConditionList } from "@/engine/core/utils/ini";
import { isUndergroundLevel } from "@/engine/core/utils/level";
import { LuaLogger } from "@/engine/core/utils/logging";
import { updateStalkerLogic } from "@/engine/core/utils/logics";
import { getObjectStalkerIni, setupObjectInfoPortions, setupObjectStalkerVisual } from "@/engine/core/utils/object";
import { ERelation, setGameObjectRelation, setObjectSympathy } from "@/engine/core/utils/relation";
import {
  emitSchemeEvent,
  initializeObjectInvulnerability,
  setupObjectSmartJobsAndLogicOnSpawn,
} from "@/engine/core/utils/scheme";
import { getObjectSquad } from "@/engine/core/utils/squad";
import { createEmptyVector } from "@/engine/core/utils/vector";
import { communities, TCommunity } from "@/engine/lib/constants/communities";
import { ACTOR_ID } from "@/engine/lib/constants/ids";
import { misc } from "@/engine/lib/constants/items/misc";
import { MAX_U16 } from "@/engine/lib/constants/memory";
import {
  EGameObjectRelation,
  EScheme,
  ESchemeEvent,
  GameObject,
  NetPacket,
  Optional,
  Reader,
  ServerCreatureObject,
  ServerHumanObject,
  TCount,
  TDuration,
  TIndex,
  TName,
  TNumberId,
  TRate,
  TSoundType,
  TTimestamp,
  Vector,
} from "@/engine/lib/types";
import { ESchemeType } from "@/engine/lib/types/scheme";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Binder for client side objects representing stalkers.
 * Wraps logics and adds additional layers when stalker objects are online.
 */
@LuabindClass()
export class StalkerBinder extends object_binder {
  public lastUpdatedAt: TTimestamp = 0;
  public isFirstUpdate: boolean = false;
  public isLoaded: boolean = false;

  public state!: IRegistryObjectState;
  public helicopterEnemyIndex: Optional<TIndex> = null; // todo: create binding somewhere in DB.

  public override reinit(): void {
    super.reinit();

    this.state = resetObject(this.object);
    this.state.stateManager = new StalkerStateManager(this.object);
    this.state.patrolManager = new StalkerPatrolManager(this.object).initialize();

    setupStalkerStatePlanner(this.state.stateManager.planner, this.state.stateManager);
    setupStalkerMotivationPlanner(this.object.motivation_action_manager(), this.state.stateManager);

    // Expose state planner for in-game debugging tools.
    if (this.object.debug_planner !== null) {
      this.object.debug_planner(this.state.stateManager.planner);
    }
  }

  public override net_spawn(object: ServerCreatureObject): boolean {
    setupObjectStalkerVisual(this.object);

    if (!super.net_spawn(object)) {
      return false;
    }

    const objectId: TNumberId = this.object.id();
    const actor: GameObject = registry.actor;

    logger.info("Go online:", object.name());

    registerStalker(this);

    this.setupCallbacks();

    this.object.apply_loophole_direction_distance(1.0);

    if (!this.isLoaded) {
      setupObjectInfoPortions(this.object, getObjectStalkerIni(this.object));
    }

    if (!this.object.alive()) {
      this.object.death_sound_enabled(false);
      getManager(ReleaseBodyManager).addDeadBody(this.object);

      return true;
    }

    const relation: Optional<ERelation> = registry.goodwill.relations.get(objectId) as Optional<ERelation>;

    if (relation) {
      setGameObjectRelation(this.object, actor, relation);
    }

    const sympathy: Optional<TCount> = registry.goodwill.sympathy.get(objectId);

    if (sympathy !== null) {
      setObjectSympathy(this.object, sympathy);
    }

    this.helicopterEnemyIndex = registerHelicopterEnemy(this.object);

    initializeObjectThemes(this.object);
    SchemeReachTask.setup(this.object);

    // todo: Why? Already same ref in parameter?
    const serverObject: Optional<ServerHumanObject> = registry.simulator.object(objectId);

    if (serverObject) {
      if (registry.spawnedVertexes.get(serverObject.id) !== null) {
        this.object.set_npc_position(level.vertex_position(registry.spawnedVertexes.get(serverObject.id)));
        registry.spawnedVertexes.delete(serverObject.id);
      } else if (registry.offlineObjects.get(serverObject.id)?.levelVertexId !== null) {
        this.object.set_npc_position(
          level.vertex_position(registry.offlineObjects.get(serverObject.id).levelVertexId as TNumberId)
        );
      } else if (serverObject.m_smart_terrain_id !== MAX_U16) {
        const smartTerrain: SmartTerrain = registry.simulator.object<SmartTerrain>(serverObject.m_smart_terrain_id)!;

        if (smartTerrain.arrivingObjects.get(serverObject.id) === null) {
          const job: Optional<ISmartTerrainJobDescriptor> = smartTerrain.objectJobDescriptors.get(serverObject.id)?.job;

          assert(
            job?.alifeTask,
            "Expected terrain task to exist when spawning in smart terrain: '%s' in '%s', job: '%s'.",
            this.object.name(),
            smartTerrain.name(),
            job?.section
          );

          this.object.set_npc_position(job.alifeTask.position());
        }
      }
    }

    setupObjectSmartJobsAndLogicOnSpawn(this.object, this.state, ESchemeType.STALKER, this.isLoaded);

    SchemePostCombatIdle.setup(this.object);

    this.object.group_throw_time_interval(2_000); // todo: Interval to check danger from group objects?

    return true;
  }

  public override net_destroy(): void {
    const object: GameObject = this.object;
    const objectId: TNumberId = object.id();
    const state: IRegistryObjectState = this.state;

    logger.info("Go offline:", object.name());

    this.resetCallbacks();

    getManager(GlobalSoundManager).stopSoundByObjectId(objectId);

    registry.actorCombat.delete(objectId);

    if (state.activeScheme) {
      emitSchemeEvent(object, state[state.activeScheme]!, ESchemeEvent.SWITCH_OFFLINE, object);
    }

    if (state[EScheme.REACH_TASK]) {
      emitSchemeEvent(object, state[EScheme.REACH_TASK], ESchemeEvent.SWITCH_OFFLINE, object);
    }

    // Call logics on offline.
    const onOfflineConditionList: Optional<TConditionList> = state.overrides?.onOffline as Optional<TConditionList>;

    if (onOfflineConditionList) {
      pickSectionFromCondList(registry.actor, object, onOfflineConditionList);
    }

    softResetOfflineObject(objectId, {
      levelVertexId: object.level_vertex_id(),
      activeSection: state.activeSection,
    });

    if (this.helicopterEnemyIndex) {
      unregisterHelicopterEnemy(this.helicopterEnemyIndex);
    }

    unregisterStalker(this);

    super.net_destroy();
  }

  public override update(delta: TDuration): void {
    super.update(delta);

    const now: TTimestamp = time_global();
    const object: GameObject = this.object;
    const objectId: TNumberId = object.id();
    const squad: Optional<Squad> = getObjectSquad(this.object);
    const isObjectAlive: boolean = object.alive();
    const isSquadCommander: boolean = squad?.commander_id() === objectId;

    if (registry.actorCombat.get(objectId) && !object.best_enemy()) {
      registry.actorCombat.delete(objectId);
    }

    updateStalkerLogic(object);

    if (!this.isFirstUpdate) {
      this.isFirstUpdate = true;

      if (!isObjectAlive) {
        getManager(DropManager).createCorpseReleaseItems(object);
      }
    }

    if (now - this.lastUpdatedAt > 1000) {
      this.lastUpdatedAt = now;
      this.updateLightState(object);
    }

    if (this.state.stateManager) {
      if (isObjectAlive) {
        this.state.stateManager.update();

        if (!this.state.stateManager.isCombat && !this.state.stateManager.isAlife) {
          // --and this.st.state_mgr.planner:current_action_id() == this.st.state_mgr.operators["}"]
          getManager(TradeManager).updateForObject(object);
        }
      } else {
        this.state.stateManager = null;
      }
    }

    if (isObjectAlive) {
      getManager(GlobalSoundManager).update(object.id());
      updateObjectMeetAvailability(object);
      initializeObjectInvulnerability(this.object);
    } else {
      object.set_tip_text_default();
    }

    if (isSquadCommander) {
      (squad as Squad).update();
    }
  }

  /**
   * todo: Description.
   */
  public updateLightState(object: GameObject): void {
    if (object === null) {
      return;
    }

    const torch: Optional<GameObject> = object.object(misc.device_torch);
    const isCurrentlyIndoor: boolean = isUndergroundLevel(level.name());

    if (torch === null) {
      return;
    }

    let light: boolean = false;
    let forced: boolean = false;

    /*
      if (benchmark.light) {
        light = true;
        forced = true;
      }
     */

    if (!object.alive()) {
      light = false;
      forced = true;
    }

    if (!forced) {
      for (const [, manager] of registry.lightZones) {
        [light, forced] = manager.checkStalker(object);

        if (forced === true) {
          break;
        }
      }
    }

    if (!forced) {
      const htime = level.get_time_hours();

      if (htime <= 4 || htime >= 22) {
        light = true;
      }

      if (light === false) {
        if (isCurrentlyIndoor) {
          light = true;
        }
      }
    }

    if (!forced && light === true) {
      const scheme = registry.objects.get(object.id()).activeScheme!;

      if (scheme === EScheme.CAMPER || scheme === EScheme.SLEEPER) {
        light = false;
        forced = true;
      }
    }

    if (!forced && light) {
      if (object.best_enemy() !== null && !isCurrentlyIndoor) {
        light = false;
      }
    }

    if (light !== null) {
      torch.enable_attachable_item(light);
    }
  }

  public override net_save_relevant(): boolean {
    return true;
  }

  public override save(packet: NetPacket): void {
    openSaveMarker(packet, StalkerBinder.__name);

    super.save(packet);
    saveObjectLogic(this.object, packet);

    getManager(TradeManager).saveObjectState(packet, this.object);
    getManager(GlobalSoundManager).saveObject(packet, this.object);
    getManager(DialogManager).saveObjectDialogs(packet, this.object);

    closeSaveMarker(packet, StalkerBinder.__name);
  }

  public override load(reader: Reader): void {
    this.isLoaded = true;

    openLoadMarker(reader, StalkerBinder.__name);

    super.load(reader);
    loadObjectLogic(this.object, reader);

    getManager(TradeManager).loadObjectState(reader, this.object);
    getManager(GlobalSoundManager).loadObject(reader, this.object);
    getManager(DialogManager).loadObjectDialogs(reader, this.object);

    closeLoadMarker(reader, StalkerBinder.__name);
  }

  /**
   * Setup stalker binder callback on going online.
   */
  public setupCallbacks(): void {
    this.object.set_patrol_extrapolate_callback(this.onPatrolExtrapolate, this);
    this.object.set_callback(callback.hit, this.onHit, this);
    this.object.set_callback(callback.death, this.onDeath, this);
    this.object.set_callback(callback.use_object, this.onUse, this);
    this.object.set_callback(callback.sound, this.onHearSound, this);
  }

  /**
   * Reset callbacks and unsubscribe from events on going offline.
   */
  public resetCallbacks(): void {
    this.object.set_patrol_extrapolate_callback(null);
    this.object.set_callback(callback.hit, null);
    this.object.set_callback(callback.death, null);
    this.object.set_callback(callback.sound, null);
  }

  /**
   * todo: Description.
   */
  public onHearSound(
    target: GameObject,
    whoId: TNumberId,
    soundType: TSoundType,
    soundPosition: Vector,
    soundPower: TRate
  ): void {
    // Dont handle own sounds.
    if (whoId === target.id()) {
      return;
    }

    SchemeHear.onObjectHearSound(target, whoId, soundType, soundPosition, soundPower);
  }

  /**
   * todo: Description.
   */
  public onDeath(victim: GameObject, who: Optional<GameObject>): void {
    logger.info("Stalker death:", this.object.name());

    this.onHit(victim, 1, createEmptyVector(), who, "from_death_callback");

    registry.actorCombat.delete(this.object.id());

    const state: IRegistryObjectState = registry.objects.get(this.object.id());

    getManager(MapDisplayManager).removeObjectMapSpot(this.object, state);

    setupObjectInfoPortions(this.object, state.ini, readIniString(state.ini, state.sectionLogic, "known_info", false));

    if (this.state.stateManager !== null) {
      this.state.stateManager!.animation.setState(null, true);
    }

    this.updateLightState(this.object);
    getManager(DropManager).onObjectDeath(this.object);

    if (this.state[EScheme.REACH_TASK]) {
      emitSchemeEvent(this.object, this.state[EScheme.REACH_TASK], ESchemeEvent.DEATH, victim, who);
    }

    if (this.state[EScheme.DEATH]) {
      emitSchemeEvent(this.object, this.state[EScheme.DEATH], ESchemeEvent.DEATH, victim, who);
    }

    if (this.state.activeSection) {
      emitSchemeEvent(this.object, this.state[this.state.activeScheme!]!, ESchemeEvent.DEATH, victim, who);
    }

    unregisterHelicopterEnemy(this.helicopterEnemyIndex!);
    unregisterStalker(this, false);

    this.resetCallbacks();

    if (actor_stats.remove_from_ranking !== null) {
      const community: TCommunity = getObjectCommunity(this.object);

      if (community !== communities.zombied && community !== communities.monolith) {
        actor_stats.remove_from_ranking(this.object.id());
      }
    }

    EventsManager.emitEvent(EGameEvent.STALKER_KILLED, this.object, who);

    getManager(ReleaseBodyManager).addDeadBody(this.object);
  }

  /**
   * todo: Description.
   */
  public onUse(object: GameObject, who: GameObject): void {
    logger.info("Stalker used:", this.object.name(), "by", who.name());

    if (this.object.alive()) {
      EventsManager.emitEvent(EGameEvent.STALKER_INTERACTION, object, who);
      getManager(DialogManager).resetForObject(this.object);

      activateMeetWithObject(object);

      if (this.state.activeSection) {
        emitSchemeEvent(this.object, this.state[this.state.activeScheme!]!, ESchemeEvent.USE, object, who);
      }
    }
  }

  /**
   * todo: Description.
   */
  public onPatrolExtrapolate(pointIndex: TIndex): boolean {
    if (this.state.activeSection) {
      emitSchemeEvent(this.object, this.state[this.state.activeScheme!]!, ESchemeEvent.EXTRAPOLATE, pointIndex);
      (this.state.patrolManager as StalkerPatrolManager).onExtrapolate(this.object, pointIndex);
    }

    return new patrol(this.object.patrol() as TName).flags(pointIndex).get() === 0;
  }

  /**
   * todo: Description.
   */
  public onHit(
    object: GameObject,
    amount: TRate,
    direction: Vector,
    who: Optional<GameObject>,
    boneIndex: string | number
  ): void {
    const actor: GameObject = registry.actor;

    // -- FIXME: �������� ������� ���� �� �������������� � ����� storage, � �� ��������...
    if (who?.id() === ACTOR_ID) {
      if (amount > 0) {
        for (const [, descriptor] of getManager(SimulationManager).getSmartTerrainDescriptors()) {
          const smartTerrain: SmartTerrain = descriptor.smartTerrain;

          if (smartTerrain.smartTerrainActorControl !== null) {
            const levelId: TNumberId = game_graph().vertex(smartTerrain.m_game_vertex_id).level_id();
            const actorLevelId: TNumberId = game_graph().vertex(registry.actorServer.m_game_vertex_id).level_id();

            if (levelId === actorLevelId && actor.position().distance_to_sqr(smartTerrain.position) <= 6400) {
              if (this.object.relation(actor) !== EGameObjectRelation.ENEMY) {
                smartTerrain.smartTerrainActorControl.onActorAttackSmartTerrain();
              }
            }
          }
        }
      }
    }

    if (this.state.activeSection) {
      emitSchemeEvent(
        this.object,
        this.state[this.state.activeScheme!]!,
        ESchemeEvent.HIT,
        object,
        amount,
        direction,
        who,
        boneIndex
      );
    }

    // Probably should be reversed?
    if (this.state[EScheme.COMBAT_IGNORE]) {
      emitSchemeEvent(
        this.object,
        this.state[EScheme.COMBAT_IGNORE],
        ESchemeEvent.HIT,
        object,
        amount,
        direction,
        who,
        boneIndex
      );
    }

    if (this.state[EScheme.COMBAT]) {
      emitSchemeEvent(
        this.object,
        this.state[EScheme.COMBAT],
        ESchemeEvent.HIT,
        object,
        amount,
        direction,
        who,
        boneIndex
      );
    }

    if (this.state[EScheme.HIT]) {
      emitSchemeEvent(
        this.object,
        this.state[EScheme.HIT],
        ESchemeEvent.HIT,
        object,
        amount,
        direction,
        who,
        boneIndex
      );
    }

    if (boneIndex !== 15 && amount > this.object.health * 100) {
      this.object.health = 0.15;
    }

    if (amount > 0) {
      (this.state[EScheme.WOUNDED] as ISchemeWoundedState)?.woundManager.onHit();
    }

    EventsManager.emitEvent(EGameEvent.STALKER_HIT, this.object, amount, direction, who, boneIndex);
  }
}
