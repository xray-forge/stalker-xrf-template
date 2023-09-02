import {
  alife,
  CALifeSmartTerrainTask,
  clsid,
  cse_alife_online_offline_group,
  level,
  LuabindClass,
  patrol,
} from "xray16";

import {
  closeLoadMarker,
  closeSaveMarker,
  openLoadMarker,
  openSaveMarker,
  registerObjectStoryLinks,
  registry,
  resetStalkerState,
  SMART_TERRAIN_MASKS_LTX,
  softResetOfflineObject,
  SQUAD_BEHAVIOURS_LTX,
  SYSTEM_INI,
} from "@/engine/core/database";
import {
  registerSimulationObject,
  unregisterSimulationObject,
  updateSimulationObjectAvailability,
} from "@/engine/core/database/simulation";
import { unregisterStoryLinkByObjectId } from "@/engine/core/database/story_objects";
import { MapDisplayManager } from "@/engine/core/managers/interface/MapDisplayManager";
import {
  ISimulationActivityDescriptor,
  ISimulationTarget,
  simulationActivities,
  TSimulationActivityPrecondition,
  TSimulationObject,
} from "@/engine/core/managers/simulation";
import { SimulationBoardManager } from "@/engine/core/managers/simulation/SimulationBoardManager";
import { ISquadAction } from "@/engine/core/objects";
import type { SmartTerrain } from "@/engine/core/objects/server/smart_terrain/SmartTerrain";
import { ESmartTerrainStatus } from "@/engine/core/objects/server/smart_terrain/types";
import { SquadReachTargetAction, SquadStayOnTargetAction } from "@/engine/core/objects/server/squad/action";
import { StoryManager } from "@/engine/core/objects/sounds/stories";
import { abort, assertDefined } from "@/engine/core/utils/assertion";
import {
  parseConditionsList,
  parseStringsList,
  pickSectionFromCondList,
  readIniBoolean,
  readIniNumber,
  readIniString,
  readIniTwoNumbers,
  TConditionList,
} from "@/engine/core/utils/ini";
import { LuaLogger } from "@/engine/core/utils/logging";
import { areObjectsOnSameLevel, hasAlifeInfo } from "@/engine/core/utils/object";
import { areCommunitiesEnemies, ERelation, setObjectSympathy } from "@/engine/core/utils/relation";
import { isEmpty } from "@/engine/core/utils/table";
import { gameConfig } from "@/engine/lib/configs/GameConfig";
import { squadCommunityByBehaviour } from "@/engine/lib/constants/behaviours";
import { communities, TCommunity } from "@/engine/lib/constants/communities";
import { infoPortions } from "@/engine/lib/constants/info_portions";
import { MAX_U16 } from "@/engine/lib/constants/memory";
import { SMART_TERRAIN_SECTION } from "@/engine/lib/constants/sections";
import { FALSE, NIL, TRUE } from "@/engine/lib/constants/words";
import {
  ALifeSmartTerrainTask,
  AnyObject,
  ClientObject,
  LuaArray,
  NetPacket,
  Optional,
  ServerCreatureObject,
  ServerObject,
  StringOptional,
  TCount,
  TIndex,
  TLabel,
  TName,
  TNumberId,
  Vector,
} from "@/engine/lib/types";
import { TSection } from "@/engine/lib/types/scheme";

const logger: LuaLogger = new LuaLogger($filename);
const simulationLogger: LuaLogger = new LuaLogger($filename, { file: "simulation" });

/**
 * Server object implementation for squad groups.
 */
@LuabindClass()
export class Squad extends cse_alife_online_offline_group implements ISimulationTarget {
  public isItemListSpawned: Optional<boolean> = null;
  public isSquadOnline: boolean = false;
  public isSimulationAvailableConditionList: TConditionList = parseConditionsList(TRUE);
  public isMapDisplayHidden: boolean = false;
  public isAlwaysArrived: boolean = false;
  public isLocationMasksResetNeeded: boolean = true;

  public faction!: TCommunity;
  public behaviour: LuaTable<string, string> = new LuaTable();

  public assignedSmartTerrainId: Optional<TNumberId> = null;
  public enteredSmartTerrainId: Optional<TNumberId> = null;

  public mapDisplayManager: MapDisplayManager = MapDisplayManager.getInstance();
  public simulationBoardManager: SimulationBoardManager = SimulationBoardManager.getInstance();
  public simulationProperties!: AnyObject;

  /**
   * Meta-info about spawn point of the squad.
   */
  public respawnPointId: Optional<TNumberId> = null;
  public respawnPointSection: Optional<TSection> = null;

  public currentMapSpotId: Optional<TNumberId> = null;
  public currentMapSpotSection: Optional<TName> = null;

  public currentAction: Optional<ISquadAction> = null;
  public currentTargetId: Optional<TNumberId> = null;
  public assignedTargetId: Optional<TNumberId> = null;

  public nextTargetId: Optional<TNumberId> = null;
  public parsedTargets: LuaTable<number, string> = new LuaTable();

  public invulnerability: Optional<TConditionList> = null;
  public lastTarget: Optional<string> = null;

  public actionConditionList: TConditionList = new LuaTable();
  public deathConditionList: TConditionList = new LuaTable();

  public sympathy: Optional<TCount> = null;
  public isSpotVisible: Optional<TConditionList> = null;
  public relationship: Optional<ERelation> = null;

  public readonly soundManager: StoryManager = StoryManager.getStoryManagerForId("squad_" + this.section_name());

  public constructor(section: TSection) {
    super(section);

    this.initialize();
    this.initializeSquadBehaviour();
  }

  public override update(): void {
    super.update();
    this.mapDisplayManager.updateSquadMapSpot(this);

    updateSimulationObjectAvailability(this);

    this.updateInvulnerability();

    const scriptTarget: Optional<TNumberId> = this.getScriptTarget();

    if (scriptTarget === null) {
      this.genericUpdate();

      if (this.isLocationMasksResetNeeded) {
        this.setLocationTypes();
        this.isLocationMasksResetNeeded = false;
      }

      return;
    }

    this.soundManager.update();

    let isNewActionNeeded: boolean = false;

    if (this.assignedTargetId !== null && this.assignedTargetId === scriptTarget) {
      if (this.currentAction !== null) {
        if (this.currentAction.name === SquadStayOnTargetAction.ACTION_NAME) {
          if (this.isSquadOnPoint()) {
            isNewActionNeeded = true;
          } else {
            isNewActionNeeded = this.currentAction!.update(false);
          }
        } else {
          if (this.currentAction!.update(false)) {
            this.isSquadOnPoint();
            isNewActionNeeded = true;
          }
        }
      } else {
        this.isSquadOnPoint();
        isNewActionNeeded = true;
      }
    } else {
      isNewActionNeeded = true;
    }

    if (isNewActionNeeded) {
      this.assignedTargetId = scriptTarget;

      if (this.currentAction !== null) {
        this.currentAction.finalize();
        this.currentAction = null;
      }

      this.getNextAction(false);
    }

    if (this.isLocationMasksResetNeeded) {
      this.setLocationTypes();
      this.isLocationMasksResetNeeded = false;
    }
  }

  public override STATE_Write(packet: NetPacket): void {
    super.STATE_Write(packet);

    openSaveMarker(packet, Squad.__name);

    packet.w_stringZ(tostring(this.currentTargetId));
    packet.w_stringZ(tostring(this.respawnPointId));
    packet.w_stringZ(tostring(this.respawnPointSection));
    packet.w_stringZ(tostring(this.assignedSmartTerrainId));

    closeSaveMarker(packet, Squad.__name);
  }

  public override STATE_Read(packet: NetPacket, size: TCount): void {
    super.STATE_Read(packet, size);

    openLoadMarker(packet, Squad.__name);

    const currentTargetId: StringOptional = packet.r_stringZ();

    this.currentTargetId = currentTargetId === NIL ? null : (tonumber(currentTargetId) as TNumberId);

    const respawnPointId = packet.r_stringZ();

    this.respawnPointId = respawnPointId === NIL ? null : (tonumber(respawnPointId) as TNumberId);
    this.respawnPointSection = packet.r_stringZ();

    if (this.respawnPointSection === NIL) {
      this.respawnPointSection = null;
    }

    const smartTerrainId: StringOptional = packet.r_stringZ();

    this.assignedSmartTerrainId = smartTerrainId === NIL ? null : (tonumber(smartTerrainId) as TNumberId);

    this.initializeOnLoad();

    closeLoadMarker(packet, Squad.__name);
  }

  public override on_register(): void {
    super.on_register();

    this.simulationBoardManager.registerSquad(this);

    registerObjectStoryLinks(this);
    registerSimulationObject(this);
  }

  public override on_unregister(): void {
    super.on_unregister();

    unregisterStoryLinkByObjectId(this.id);
    unregisterSimulationObject(this);

    this.simulationBoardManager.unRegisterSquad(this);
    this.simulationBoardManager.assignSquadToSmartTerrain(this, null);

    // todo: Method for smart terrain onSpawnedSquadKilled.
    if (this.respawnPointId !== null) {
      const smartTerrain: Optional<SmartTerrain> = alife().object(this.respawnPointId)!;

      if (smartTerrain === null) {
        return;
      } else {
        smartTerrain.alreadySpawned.get(this.respawnPointSection!).num -= 1;
      }
    }
  }

  /**
   * todo: Description.
   */
  public initialize(): void {
    const sectionName: TSection = this.section_name();

    this.faction = readIniString(SYSTEM_INI, sectionName, "faction", true, "") as TCommunity;
    this.actionConditionList = parseConditionsList(
      readIniString(SYSTEM_INI, sectionName, "target_smart", false, "", "")
    );
    this.deathConditionList = parseConditionsList(readIniString(SYSTEM_INI, sectionName, "on_death", false, "", ""));
    this.invulnerability = parseConditionsList(
      readIniString(SYSTEM_INI, sectionName, "invulnerability", false, "", "")
    );
    this.relationship =
      this.relationship || (readIniString(SYSTEM_INI, sectionName, "relationship", false, "", null) as ERelation);
    this.sympathy = readIniNumber(SYSTEM_INI, sectionName, "sympathy", false, null);
    this.isSpotVisible = parseConditionsList(readIniString(SYSTEM_INI, sectionName, "show_spot", false, "", FALSE));
    this.isAlwaysArrived = readIniBoolean(SYSTEM_INI, sectionName, "always_arrived", false);

    this.setLocationTypesSection("stalker_terrain");
    this.updateSquadSympathy();
  }

  /**
   * todo: Description.
   */
  public initializeSquadBehaviour(): void {
    this.behaviour = new LuaTable();

    const behaviourSection: TSection = readIniString(
      SYSTEM_INI,
      this.section_name(),
      "behaviour",
      false,
      "",
      this.faction
    );

    if (!SQUAD_BEHAVIOURS_LTX.section_exist(behaviourSection)) {
      abort("There is no section [" + behaviourSection + "] in 'squad_behaviours.ltx'");
    }

    const behaviourParametersCount: TCount = SQUAD_BEHAVIOURS_LTX.line_count(behaviourSection);

    for (const it of $range(0, behaviourParametersCount - 1)) {
      const [result, name, conditionsList] = SQUAD_BEHAVIOURS_LTX.r_line(behaviourSection, it, "", "");

      this.behaviour.set(name, conditionsList);
    }
  }

  /**
   * todo: Description.
   */
  public initializeOnLoad(): void {
    logger.info("Init squad on load:", this.name());

    this.updateSquadSympathy();
    this.simulationBoardManager.assignSquadToSmartTerrain(this, this.assignedSmartTerrainId);

    if (this.assignedSmartTerrainId !== null) {
      this.simulationBoardManager.enterSmartTerrain(this, this.assignedSmartTerrainId);
    }

    this.isLocationMasksResetNeeded = true;
  }

  /**
   * todo: Description.
   */
  public getScriptTarget(): Optional<TNumberId> {
    const newTarget: Optional<TSection> = pickSectionFromCondList(registry.actor, this, this.actionConditionList);

    if (newTarget === null) {
      return null;
    }

    if (newTarget !== this.lastTarget) {
      this.lastTarget = newTarget;
      this.parsedTargets = parseStringsList(newTarget);
      this.nextTargetId = 1;
    }

    if (this.parsedTargets.get(this.nextTargetId as number) === null) {
      this.nextTargetId = 1;
    }

    let nextTargetName: StringOptional<TName> = this.selectNextTarget();

    if (nextTargetName === NIL) {
      return null;
    } else if (nextTargetName === "loop") {
      this.nextTargetId = 1;
      nextTargetName = this.selectNextTarget();
    }

    const smartTerrain: Optional<SmartTerrain> = this.simulationBoardManager.getSmartTerrainByName(nextTargetName);

    assertDefined(smartTerrain, "Incorrect next smart terrain [%s] for squad [%s].", nextTargetName, this.id);

    return smartTerrain.id;
  }

  /**
   * todo: Description.
   */
  public selectNextTarget(): StringOptional<TName> {
    return this.parsedTargets.get(this.nextTargetId as TNumberId);
  }

  /**
   * todo: Description.
   */
  public isSquadOnPoint(): boolean {
    if (this.parsedTargets === null) {
      return true;
    }

    const nextTargetId: TNumberId = this.nextTargetId || 0;

    if (this.assignedTargetId !== null && this.assignedSmartTerrainId === this.assignedTargetId) {
      if (this.parsedTargets.get(nextTargetId + 1) !== null) {
        this.nextTargetId = nextTargetId + 1;

        return true;
      }
    }

    return false;
  }

  /**
   * Clear assigned to the squad target.
   */
  public clearAssignedTarget(): void {
    simulationLogger.format("Clear squad assigned target: '%s' x '%s'", this.name(), this.assignedTargetId);
    this.assignedTargetId = null;
  }

  /**
   * Check whether squad assigned target available.
   *
   * @returns if currently assigned target written in field is available and can be reached in simulation
   */
  public isAssignedTargetAvailable(): boolean {
    return this.assignedTargetId
      ? alife().object<TSimulationObject>(this.assignedTargetId)?.isValidSquadTarget(this, true) === true
      : false;
  }

  /**
   * todo: Description.
   */
  public genericUpdate(): void {
    this.soundManager.update();

    const helpTargetId: Optional<TNumberId> = this.getHelpTargetId();

    if (helpTargetId) {
      simulationLogger.info("Assign squad new help target_id:", this.name(), helpTargetId);

      this.assignedTargetId = helpTargetId;
      this.currentAction = null;
      this.getNextAction(false);

      return;
    }

    if (
      this.assignedTargetId &&
      alife().object(this.assignedTargetId)! &&
      alife().object(this.assignedTargetId)!.clsid() !== clsid.online_offline_group_s
    ) {
      const target: TSimulationObject = this.simulationBoardManager.getSquadSimulationTarget(this)!;

      if (target.clsid() === clsid.online_offline_group_s) {
        this.assignedTargetId = target.id;
        this.currentAction = null;
        this.getNextAction(true);

        return;
      }
    }

    if (this.currentAction !== null && this.isAssignedTargetAvailable()) {
      const isFinished: boolean = this.currentAction.update(true);

      if (isFinished) {
        this.currentAction.finalize();

        if (this.currentAction.name === SquadStayOnTargetAction.ACTION_NAME || this.assignedTargetId === null) {
          this.assignedTargetId = this.simulationBoardManager.getSquadSimulationTarget(this)!.id;
        }

        this.currentAction = null;
      } else {
        return;
      }
    } else {
      this.currentAction = null;
      this.currentTargetId = null;
      this.assignedTargetId = this.simulationBoardManager.getSquadSimulationTarget(this)!.id;
    }

    this.getNextAction(true);
  }

  /**
   * todo: Description.
   */
  public getNextAction(isUnderSimulation: boolean): void {
    const squadTarget: Optional<TSimulationObject> = alife().object<TSimulationObject>(this.assignedTargetId!);

    if (this.currentTargetId === null) {
      if (squadTarget === null || squadTarget.isReachedBySquad(this)) {
        if (squadTarget !== null) {
          squadTarget.onStartedBeingReachedBySquad(this);
          squadTarget.onEndedBeingReachedBySquad(this);
        }

        this.currentAction = new SquadStayOnTargetAction(this);
        this.currentTargetId = this.assignedTargetId;
        this.currentAction.initialize(isUnderSimulation);

        return;
      }
    }

    if (this.assignedTargetId === this.currentTargetId || this.assignedTargetId === null) {
      this.currentAction = new SquadStayOnTargetAction(this);
      this.currentTargetId = this.assignedTargetId;
      this.currentAction.initialize(isUnderSimulation);
    } else {
      this.currentAction = new SquadReachTargetAction(this);
      this.currentAction.initialize(isUnderSimulation);
    }
  }

  /**
   * todo: Description.
   */
  public onSquadObjectDeath(object: ServerObject): void {
    simulationLogger.info("On squad object death:", this.name(), object.name());

    this.soundManager.unregisterObject(object.id);
    this.unregister_member(object.id);

    if (this.npc_count() === 0) {
      logger.info("Removing dead squad:", this.name());

      if (this.currentAction !== null) {
        this.currentAction.finalize();
        this.currentAction = null;
      }

      if (this.deathConditionList !== null) {
        pickSectionFromCondList(registry.actor, this, this.deathConditionList as any);
      }

      this.simulationBoardManager.releaseSquad(this);

      return;
    }

    this.mapDisplayManager.updateSquadMapSpot(this);
  }

  /**
   * todo: Description.
   */
  public assignSquadMemberToSmartTerrain(
    memberId: TNumberId,
    smartTerrain: Optional<SmartTerrain>,
    oldSmartTerrainId: Optional<TNumberId>
  ): void {
    const object: Optional<ServerCreatureObject> = alife().object(memberId);

    if (object !== null) {
      simulationLogger.info("Assign squad member to squad:", this.name(), smartTerrain?.name(), object.name());

      if (object.m_smart_terrain_id === this.assignedSmartTerrainId) {
        return;
      }

      if (
        object.m_smart_terrain_id !== MAX_U16 &&
        oldSmartTerrainId !== null &&
        object.m_smart_terrain_id === oldSmartTerrainId &&
        this.simulationBoardManager.getSmartTerrainDescriptor(oldSmartTerrainId) !== null
      ) {
        this.simulationBoardManager.getSmartTerrainDescriptor(oldSmartTerrainId)!.smartTerrain.unregister_npc(object);
      }

      if (smartTerrain !== null) {
        smartTerrain.register_npc(object);
      }
    }
  }

  /**
   * todo: Description.
   */
  public assignSmartTerrain(smartTerrain: Optional<SmartTerrain>): void {
    if (smartTerrain) {
      simulationLogger.info("Assign squad to smart terrain:", this.name(), smartTerrain.name());
    } else {
      simulationLogger.info("Un-assign squad from smart:", this.name());
    }

    const oldSmartId: TNumberId = this.assignedSmartTerrainId!;

    this.assignedSmartTerrainId = smartTerrain && smartTerrain.id;

    for (const squadMember of this.squad_members()) {
      this.assignSquadMemberToSmartTerrain(squadMember.id, smartTerrain, oldSmartId);
    }
  }

  /**
   * todo: Description.
   */
  public updateInvulnerability(): void {
    if (!this.isSquadOnline) {
      return;
    }

    const invulnerability: boolean =
      pickSectionFromCondList(registry.actor, this, this.invulnerability as any) === TRUE;

    for (const squadMember of this.squad_members()) {
      const objectState = registry.objects.get(squadMember.id);

      if (objectState !== null) {
        const object = objectState.object;

        if (
          object.invulnerable() !== invulnerability &&
          readIniString(objectState.ini, objectState.activeSection!, "invulnerable", false, "", null) === null
        ) {
          object.invulnerable(invulnerability);
        }
      }
    }
  }

  /**
   * todo: Description.
   */
  public setLocationTypesSection(section: TSection): void {
    if (SMART_TERRAIN_MASKS_LTX.section_exist(section)) {
      const [result, id, value] = SMART_TERRAIN_MASKS_LTX.r_line(section, 0, "", "");

      this.add_location_type(id);
    }
  }

  /**
   * todo: Description.
   */
  public setLocationTypes(newLocationSection?: TSection): void {
    const defaultLocation: TSection = "stalker_terrain";

    this.clear_location_types();

    if (alife().object(this.assignedTargetId!)!.clsid() === clsid.smart_terrain) {
      this.setLocationTypesSection(defaultLocation);

      const oldSmartName = this.assignedSmartTerrainId !== null && alife().object(this.assignedSmartTerrainId)?.name();

      if (oldSmartName) {
        this.setLocationTypesSection(oldSmartName);
      }

      if (newLocationSection) {
        this.setLocationTypesSection(newLocationSection);
      }
    } else {
      this.setLocationTypesSection("squad_terrain");

      for (const [k, v] of registry.simulationObjects) {
        if (alife().object(k)?.clsid() === clsid.smart_terrain) {
          const propertiesBase =
            alife().object<SmartTerrain>(k)!.simulationProperties &&
            alife().object<SmartTerrain>(k)!.simulationProperties["base"];

          if (propertiesBase && tonumber(propertiesBase) === 0) {
            this.setLocationTypesSection(alife().object(k)!.name());
          }
        }
      }
    }
  }

  /**
   * todo: Description.
   */
  public addSquadMember(spawnSection: TSection, spawnPosition: Vector, lvi: TNumberId, gvi: TNumberId): TNumberId {
    // logger.info("Add squad member:", this.name());

    const customData = readIniString(SYSTEM_INI, spawnSection, "custom_data", false, "", "default_custom_data.ltx");

    if (customData !== "default_custom_data.ltx") {
      logger.format(
        "INCORRECT npc_spawn_section used for '%s'. You cannot use npc with custom_data in squad",
        spawnSection
      );
    }

    const serverObject = alife().create(spawnSection, spawnPosition, lvi, gvi);

    this.register_member(serverObject.id);
    this.soundManager.registerObject(serverObject.id);

    if (
      areObjectsOnSameLevel(serverObject, alife().actor()) &&
      spawnPosition.distance_to_sqr(alife().actor().position) <= alife().switch_distance() * alife().switch_distance()
    ) {
      // todo: Delete also, same as with stalkers and monsters?
      registry.spawnedVertexes.set(serverObject.id, lvi);
    }

    return serverObject.id;
  }

  /**
   * todo: Description.
   */
  public createSquadMembers(spawnSmartTerrain: SmartTerrain): void {
    simulationLogger.info("Create squad members:", this.name(), spawnSmartTerrain?.name());

    const sectionName: TName = this.section_name();

    const spawnSections: LuaArray<TSection> = parseStringsList(
      readIniString(SYSTEM_INI, sectionName, "npc", false, "", "")
    );
    const spawnPointData =
      readIniString(SYSTEM_INI, sectionName, "spawn_point", false, "", "self") ||
      readIniString(spawnSmartTerrain.ini, SMART_TERRAIN_SECTION, "spawn_point", false, "", "self");

    const spawnPoint: Optional<TName> = pickSectionFromCondList(
      registry.actor,
      this,
      parseConditionsList(spawnPointData)
    )!;

    let baseSpawnPosition: Vector = spawnSmartTerrain.position;
    let baseLevelVertexId: TNumberId = spawnSmartTerrain.m_level_vertex_id;
    let baseGameVertexId: TNumberId = spawnSmartTerrain.m_game_vertex_id;

    if (spawnPoint !== null) {
      if (spawnPoint === "self") {
        baseSpawnPosition = spawnSmartTerrain.position;
        baseLevelVertexId = spawnSmartTerrain.m_level_vertex_id;
        baseGameVertexId = spawnSmartTerrain.m_game_vertex_id;
      } else {
        baseSpawnPosition = new patrol(spawnPoint).point(0);
        baseLevelVertexId = new patrol(spawnPoint).level_vertex_id(0);
        baseGameVertexId = new patrol(spawnPoint).game_vertex_id(0);
      }
    } else if (spawnSmartTerrain.spawnPointName !== null) {
      baseSpawnPosition = new patrol(spawnSmartTerrain.spawnPointName).point(0);
      baseLevelVertexId = new patrol(spawnSmartTerrain.spawnPointName).level_vertex_id(0);
      baseGameVertexId = new patrol(spawnSmartTerrain.spawnPointName).game_vertex_id(0);
    }

    if (spawnSections.length() !== 0) {
      for (const [k, v] of spawnSections) {
        this.addSquadMember(v, baseSpawnPosition, baseLevelVertexId, baseGameVertexId);
      }
    }

    const randomSpawnConfig: Optional<string> = readIniString(SYSTEM_INI, sectionName, "npc_random", false, "", null);

    if (randomSpawnConfig !== null) {
      const randomSpawn: LuaArray<string> = parseStringsList(randomSpawnConfig)!;

      const [countMin, countMax] = readIniTwoNumbers(SYSTEM_INI, sectionName, "npc_in_squad", 1 as any, 2 as any);

      if (countMin > countMax) {
        abort("min_count can't be greater then max_count [%s]!", this.section_name());
      }

      const randomCount: TCount = math.random(countMin, countMax);

      for (const it of $range(1, randomCount)) {
        const randomId: TIndex = math.random(1, randomSpawn!.length());

        this.addSquadMember(randomSpawn!.get(randomId), baseSpawnPosition, baseLevelVertexId, baseGameVertexId);
      }
    } else if (spawnSections.length() === 0) {
      abort("You are trying to spawn an empty squad [%s]!", this.section_name());
    }

    this.assignedSmartTerrainId = spawnSmartTerrain.id;
    this.mapDisplayManager.updateSquadMapSpot(this);
  }

  /**
   * Update objects sympathy between objects within squad.
   */
  public updateSquadSympathy(sympathy?: Optional<TCount>): void {
    const squadSympathy: Optional<TCount> = sympathy || this.sympathy;

    if (squadSympathy !== null) {
      for (const squadMembers of this.squad_members()) {
        const object: Optional<ClientObject> =
          registry.objects.get(squadMembers.id) && registry.objects.get(squadMembers.id).object!;

        if (object !== null) {
          setObjectSympathy(object, squadSympathy);
        } else {
          registry.goodwill.sympathy.set(squadMembers.id, squadSympathy);
        }
      }
    }
  }

  /**
   * Set squad position in current level by supplied vector.
   */
  public setSquadPosition(position: Vector): void {
    if (!this.online) {
      this.force_change_position(position);
    }

    for (const squadMember of this.squad_members()) {
      const object: Optional<ClientObject> = level.object_by_id(squadMember.id);

      registry.offlineObjects.get(squadMember.id).levelVertexId = level.vertex_id(position);

      if (object !== null) {
        resetStalkerState(object);
        object.set_npc_position(position);
      } else {
        squadMember.object.position = position;
      }
    }
  }

  /**
   * @returns squad community section
   */
  public getCommunity(): TCommunity {
    return squadCommunityByBehaviour.get(this.faction);
  }

  /**
   * Get map display hint for debugging and display in game UI map.
   */
  public getMapDisplayHint(): TLabel {
    if (gameConfig.DEBUG.IS_SIMULATION_DEBUG_ENABLED) {
      let hint: TLabel = string.format(
        "[%s]\\nonline = %s\\ncurrent_target = [%s]\\nassigned_target = [%s]\\ncurrent_action = [%s]\\n",
        this.name(),
        this.online,
        tostring(this.currentTargetId && alife().object(this.currentTargetId)?.name()),
        tostring(this.assignedTargetId && alife().object(this.assignedTargetId)?.name()),
        tostring(this.currentAction?.name)
      );

      if (this.currentAction?.name === SquadStayOnTargetAction.ACTION_NAME) {
        hint += string.format(
          "stay_on_target_for = [%.2f]",
          (this.currentAction as SquadStayOnTargetAction).getStayIdleDuration()
        );
      }

      return hint;
    } else {
      return "";
    }
  }

  /**
   * todo;
   */
  public getHelpTargetId(): Optional<TNumberId> {
    if (!this.canHelpActor()) {
      return null;
    }

    const currentCommunity: TCommunity = this.getCommunity();

    for (const [id, v] of registry.actorCombat) {
      const enemySquadId: Optional<TNumberId> = alife().object<ServerCreatureObject>(id)
        ?.group_id as Optional<TNumberId>;

      if (enemySquadId !== null) {
        const targetSquad: Optional<Squad> = alife().object<Squad>(enemySquadId);

        if (
          targetSquad &&
          this.position.distance_to_sqr(targetSquad.position) < 150 * 150 &&
          areCommunitiesEnemies(currentCommunity, targetSquad.getCommunity())
        ) {
          return enemySquadId;
        }
      }
    }

    return null;
  }

  /**
   * todo;
   */
  public canHelpActor(): boolean {
    if (isEmpty(registry.actorCombat) || !areObjectsOnSameLevel(this, alife().actor())) {
      return false;
    }

    switch (this.getCommunity()) {
      case communities.stalker:
        return hasAlifeInfo(infoPortions.sim_stalker_help_harder);

      case communities.dolg:
        return hasAlifeInfo(infoPortions.sim_duty_help_harder);

      case communities.freedom:
        return hasAlifeInfo(infoPortions.sim_freedom_help_harder);

      default:
        return false;
    }
  }

  /**
   * todo: Description.
   */
  public getGameLocation(): LuaMultiReturn<[Vector, TNumberId, TNumberId]> {
    return $multi(this.position, this.m_level_vertex_id, this.m_game_vertex_id);
  }

  /**
   * todo: Description.
   */
  public override get_current_task(): CALifeSmartTerrainTask {
    const smartTerrain: Optional<SmartTerrain> =
      this.assignedTargetId === null ? null : alife().object<SmartTerrain>(this.assignedTargetId);

    if (smartTerrain) {
      const commanderId: TNumberId = this.commander_id();

      if (
        smartTerrain.arrivingObjects !== null &&
        smartTerrain.arrivingObjects.get(commanderId) === null &&
        smartTerrain.objectJobDescriptors &&
        smartTerrain.objectJobDescriptors.get(commanderId) &&
        smartTerrain.objectJobDescriptors.get(commanderId).jobId &&
        smartTerrain.jobs.get(smartTerrain.objectJobDescriptors.get(commanderId).jobId)
      ) {
        return smartTerrain.objectJobDescriptors.get(this.commander_id()).job!.alifeTask as CALifeSmartTerrainTask;
      }

      return smartTerrain.getAlifeSmartTerrainTask();
    }

    return this.getAlifeSmartTerrainTask();
  }

  /**
   * @returns whether squad targeting another squad can be finished since one is eliminated
   */
  public isReachedBySquad(squad: Squad): boolean {
    return this.npc_count() === 0;
  }

  /**
   * todo: Description.
   */
  public onEndedBeingReachedBySquad(squad: Squad): void {}

  /**
   * todo: Description.
   */
  public onStartedBeingReachedBySquad(squad: Squad): void {
    squad.setLocationTypes();

    for (const it of squad.squad_members()) {
      softResetOfflineObject(it.id);
    }

    this.simulationBoardManager.assignSquadToSmartTerrain(squad, null);
  }

  /**
   * @returns alife smart terrain task to reach/stay on current object
   */
  public getAlifeSmartTerrainTask(): ALifeSmartTerrainTask {
    return new CALifeSmartTerrainTask(this.m_game_vertex_id, this.m_level_vertex_id);
  }

  /**
   * todo: Description.
   */
  public isSimulationAvailable(): boolean {
    if (pickSectionFromCondList(registry.actor, this, this.isSimulationAvailableConditionList) !== TRUE) {
      return false;
    }

    for (const [zoneName, smartTerrainName] of registry.noCombatZones) {
      const zone: ClientObject = registry.zones.get(zoneName);

      if (zone && zone.inside(this.position)) {
        const smartTerrain: Optional<SmartTerrain> =
          SimulationBoardManager.getInstance().getSmartTerrainByName(smartTerrainName);

        if (
          smartTerrain &&
          smartTerrain.smartTerrainActorControl !== null &&
          smartTerrain.smartTerrainActorControl.status !== ESmartTerrainStatus.ALARM
        ) {
          return false;
        }
      }
    }

    if (this.assignedSmartTerrainId === null) {
      return true;
    }

    const assignedSmartTerrain: SmartTerrain = alife().object(this.assignedSmartTerrainId) as SmartTerrain;
    const smartTerrainBaseProperties =
      assignedSmartTerrain!.simulationProperties && assignedSmartTerrain!.simulationProperties["base"];

    if (smartTerrainBaseProperties !== null && tonumber(smartTerrainBaseProperties)! > 0) {
      return false;
    }

    if (
      assignedSmartTerrain.smartTerrainActorControl !== null &&
      assignedSmartTerrain.smartTerrainActorControl.status !== ESmartTerrainStatus.NORMAL
    ) {
      if (
        registry.zones.get(assignedSmartTerrain.smartTerrainActorControl.noWeaponZone) === null ||
        !registry.zones.get(assignedSmartTerrain.smartTerrainActorControl.noWeaponZone).inside(this.position)
      ) {
        return false;
      }
    }

    return true;
  }

  /**
   * @param squad - another squad checking availability of current instance
   * @returns whether the squad is valid simulation target for provided squad parameter.
   */
  public isValidSquadTarget(squad: Squad): boolean {
    const squadActivityDescriptor: ISimulationActivityDescriptor = simulationActivities.get(squad.faction);

    if (squadActivityDescriptor === null || squadActivityDescriptor.squad === null) {
      return false;
    }

    const currentFactionPrecondition: Optional<TSimulationActivityPrecondition> = squadActivityDescriptor.squad[
      this.faction
    ] as Optional<TSimulationActivityPrecondition>;

    return currentFactionPrecondition !== null && currentFactionPrecondition(squad, this);
  }
}
