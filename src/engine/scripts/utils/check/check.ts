import {
  alife,
  device,
  game_graph,
  relation_registry,
  XR_action_planner,
  XR_alife_simulator,
  XR_cse_alife_human_abstract,
  XR_cse_alife_object,
  XR_game_object,
} from "xray16";

import { surgeConfig } from "@/engine/lib/configs/SurgeConfig";
import { TCommunity } from "@/engine/lib/constants/communities";
import { lootable_table_exclude, TLootableExcludeItem } from "@/engine/lib/constants/items/lootable_table";
import { TLevel } from "@/engine/lib/constants/levels";
import { STRINGIFIED_NIL } from "@/engine/lib/constants/lua";
import { ERelation } from "@/engine/lib/constants/relations";
import { EScheme, Optional, TName, TNumberId, TStringId } from "@/engine/lib/types";
import { IRegistryObjectState, registry } from "@/engine/scripts/core/database";
import { StoryObjectsManager } from "@/engine/scripts/core/managers/StoryObjectsManager";
import { Squad } from "@/engine/scripts/core/objects/alife/Squad";
import { action_ids } from "@/engine/scripts/core/schemes/base/actions_id";
import { ISchemeWoundedState } from "@/engine/scripts/core/schemes/wounded";
import { isStalker } from "@/engine/scripts/utils/check/is";

/**
 * todo;
 */
export function isSquadExisting(squadId: TStringId): boolean {
  return StoryObjectsManager.getStorySquad(squadId) !== null;
}

/**
 * Is provided target stalker and alive.
 */
export function isStalkerAlive(targetObject: XR_game_object | XR_cse_alife_human_abstract | TStringId): boolean {
  let targetId: Optional<TNumberId> = null;

  if (type(targetObject) === "string") {
    targetId = StoryObjectsManager.getStoryObjectId(targetObject as TStringId);
  } else if (type((targetObject as XR_cse_alife_human_abstract).id) === "number") {
    targetId = (targetObject as XR_cse_alife_human_abstract).id;
  } else {
    targetId = (targetObject as XR_game_object).id();
  }

  if (targetId === null) {
    return false;
  } else {
    const object: Optional<XR_cse_alife_human_abstract> = alife().object(targetId);

    return object !== null && isStalker(object) && object.alive();
  }
}

/**
 * todo;
 */
export function isActorEnemyWithFaction(faction: TCommunity, actor: XR_game_object = registry.actor): boolean {
  return relation_registry.community_goodwill(faction, actor.id()) <= ERelation.ENEMIES;
}

/**
 * todo;
 */
export function isActorFriendWithFaction(faction: TCommunity, actor: XR_game_object = registry.actor): boolean {
  return relation_registry.community_goodwill(faction, actor.id()) >= ERelation.FRIENDS;
}

/**
 * todo;
 */
export function isActorNeutralWithFaction(faction: TCommunity, actor: XR_game_object = registry.actor): boolean {
  const goodwill: number = relation_registry.community_goodwill(faction, actor.id());

  return goodwill > ERelation.ENEMIES && goodwill < ERelation.FRIENDS;
}

/**
 * @returns whether provided object is on a provided level.
 */
export function isObjectOnLevel(object: Optional<XR_cse_alife_object>, levelName: TName): boolean {
  return object !== null && alife().level_name(game_graph().vertex(object.m_game_vertex_id).level_id()) === levelName;
}

/**
 * @returns whether provided community squad is immune to surge.
 */
export function isImmuneToSurge(object: Squad): boolean {
  return surgeConfig.IMMUNE_SQUDS[object.player_id] === true;
}

/**
 * @returns whether surge can be started on provided level.
 */
export function isSurgeEnabledOnLevel(levelName: TLevel): boolean {
  return surgeConfig.SURGE_DISABLED_LEVELS[levelName] !== true;
}

/**
 * @returns whether object is excluded from loot drop.
 */
export function isExcludedFromLootDropItem(object: XR_game_object): boolean {
  return lootable_table_exclude[object.section<TLootableExcludeItem>()] !== null;
}

/**
 * @returns whether current game level is changing.
 */
export function isLevelChanging(): boolean {
  const simulator: Optional<XR_alife_simulator> = alife();

  return simulator === null
    ? false
    : game_graph().vertex(simulator.actor().m_game_vertex_id).level_id() !== simulator?.level_id();
}

/**
 * @returns whether object is inside another object.
 */
export function isObjectInZone(object: Optional<XR_game_object>, zone: Optional<XR_game_object>): boolean {
  return object !== null && zone !== null && zone.inside(object.position());
}

/**
 * @returns whether object is wounded.
 */
export function isObjectWounded(object: XR_game_object): boolean {
  const state = registry.objects.get(object.id());

  if (state === null) {
    return false;
  } else if (state[EScheme.WOUNDED] !== null) {
    return tostring((state[EScheme.WOUNDED] as ISchemeWoundedState).wound_manager.wound_state) !== STRINGIFIED_NIL;
  } else {
    return false;
  }
}

/**
 * @returns whether object is meeting with someone.
 */
export function isObjectMeeting(object: XR_game_object): boolean {
  const actionPlanner: XR_action_planner = object.motivation_action_manager();

  if (actionPlanner !== null && actionPlanner.initialized()) {
    // todo: Hardcoded constant.
    if (actionPlanner.current_action_id() === action_ids.stohe_meet_base + 1) {
      return true;
    }
  }

  return false;
}

/**
 * @returns whether object is heavily wounded.
 */
export function isHeavilyWounded(objectId: TNumberId): boolean {
  const state: Optional<IRegistryObjectState> = registry.objects.get(objectId);

  return (
    state[EScheme.WOUNDED] !== null &&
    tostring((state[EScheme.WOUNDED] as ISchemeWoundedState).wound_manager.wound_state) !== STRINGIFIED_NIL
  );
}

/**
 * todo;
 * todo;
 * todo;
 */
export function isActorInZone(zone: Optional<XR_game_object>): boolean {
  const actor: Optional<XR_game_object> = registry.actor;

  return actor !== null && zone !== null && zone.inside(actor.position());
}

/**
 * todo;
 * todo;
 * todo;
 */
export function isActorInZoneWithName(zoneName: TName, actor: Optional<XR_game_object> = registry.actor): boolean {
  const zone: Optional<XR_game_object> = registry.zones.get(zoneName);

  return actor !== null && zone !== null && zone.inside(actor.position());
}

/**
 * @returns whether provided enemy object is actor.
 */
export function isActorEnemy(object: XR_game_object): boolean {
  return object.id() === registry.actor.id();
}

/**
 * @returns whether actor is alive.
 */
export function isActorAlive(): boolean {
  return registry.actor?.alive() === true;
}

/**
 * @returns whether actor see the object.
 */
export function isSeenByActor(object: XR_game_object): boolean {
  return registry.actor.see(object);
}

/**
 * @returns whether distance between objects greater or equal.
 */
export function isDistanceBetweenObjectsGreaterOrEqual(
  first: XR_game_object,
  second: XR_game_object,
  distance: number
): boolean {
  return first.position().distance_to_sqr(second.position()) >= distance * distance;
}

/**
 * @returns whether distance between objects less or equal.
 */
export function isDistanceBetweenObjectsLessOrEqual(
  first: XR_game_object,
  second: XR_game_object,
  distance: number
): boolean {
  return first.position().distance_to_sqr(second.position()) <= distance * distance;
}

/**
 * @returns whether distance to actor greater or equal.
 */
export function isDistanceToActorGreaterOrEqual(object: XR_game_object, distance: number): boolean {
  return object.position().distance_to_sqr(registry.actor.position()) >= distance * distance;
}

/**
 * @returns whether distance to actor less or equal.
 */
export function isDistanceToActorLessOrEqual(object: XR_game_object, distance: number): boolean {
  return object.position().distance_to_sqr(registry.actor.position()) <= distance * distance;
}

/**
 * @returns whether currently black screen is visible and rendering is paused.
 */
export function isBlackScreen(): boolean {
  return device().precache_frame > 1;
}

/**
 * @returns whether currently sound is playing.
 */
export function isPlayingSound(object: XR_game_object): boolean {
  return registry.sounds.generic.has(object.id());
}
