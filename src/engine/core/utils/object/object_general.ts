import { alife, entity_action, game, game_graph, level, stalker_ids } from "xray16";

import { IRegistryObjectState, registry } from "@/engine/core/database";
import { AnomalyZoneBinder, SmartTerrain } from "@/engine/core/objects";
import { Squad } from "@/engine/core/objects/server/squad/Squad";
import { EStalkerState } from "@/engine/core/objects/state";
import { abort, assertDefined } from "@/engine/core/utils/assertion";
import { isCseAlifeObject, isStalker } from "@/engine/core/utils/check/is";
import { getInfosFromData, pickSectionFromCondList } from "@/engine/core/utils/ini/config";
import { parseConditionsList } from "@/engine/core/utils/ini/parse";
import { readIniBoolean, readIniNumber, readIniString } from "@/engine/core/utils/ini/read";
import { TConditionList } from "@/engine/core/utils/ini/types";
import { LuaLogger } from "@/engine/core/utils/logging";
import { wait } from "@/engine/core/utils/time";
import { createEmptyVector, graphDistance } from "@/engine/core/utils/vector";
import { communities, TCommunity } from "@/engine/lib/constants/communities";
import { TInfoPortion } from "@/engine/lib/constants/info_portions";
import { MAX_U16 } from "@/engine/lib/constants/memory";
import { NIL, TRUE } from "@/engine/lib/constants/words";
import {
  ActionPlanner,
  AlifeSimulator,
  AnyGameObject,
  ClientObject,
  EntityAction,
  EScheme,
  IniFile,
  LuaArray,
  Optional,
  ServerCreatureObject,
  ServerGroupObject,
  ServerHumanObject,
  ServerObject,
  TDistance,
  TEntityActionType,
  TIndex,
  TName,
  TNumberId,
  TRate,
  TSection,
  TTimestamp,
  Vector,
} from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * @param object - any game object used by the game engine.
 * @returns tuple of object position details: id, gvi, lvi, position.
 */
export function getObjectPositioning(object: AnyGameObject): LuaMultiReturn<[TNumberId, TNumberId, TNumberId, Vector]> {
  if (isCseAlifeObject(object)) {
    return $multi(object.id, object.m_game_vertex_id, object.m_level_vertex_id, object.position);
  } else {
    return $multi(object.id(), object.game_vertex_id(), object.level_vertex_id(), object.position());
  }
}

/**
 * Get squad of provided object.
 *
 * @param object - server or client object
 * @return object squad or null
 */
export function getObjectSquad(object: Optional<ClientObject | ServerCreatureObject>): Optional<Squad> {
  assertDefined(object, "Attempt to get squad object from null value.");

  if (type(object.id) === "function") {
    const serverObject: Optional<ServerCreatureObject> = alife().object((object as ClientObject).id());

    return !serverObject || serverObject.group_id === MAX_U16 ? null : alife().object<Squad>(serverObject.group_id);
  } else {
    return (object as ServerCreatureObject).group_id === MAX_U16
      ? null
      : alife().object<Squad>((object as ServerCreatureObject).group_id);
  }
}

/**
 * Get smart terrain linked to object.
 *
 * @param object - client object to check
 * @returns server representation of smart terrain or null
 */
export function getObjectSmartTerrain(object: ClientObject): Optional<SmartTerrain> {
  const simulator: AlifeSimulator = alife();
  const serverObject: Optional<ServerCreatureObject> = simulator.object(object.id());

  if (serverObject === null) {
    return null;
  } else {
    return serverObject.m_smart_terrain_id === MAX_U16 ? null : simulator.object(serverObject.m_smart_terrain_id);
  }
}

/**
 * Set item condition.
 *
 * @param object - client object to change condition
 * @param condition - value from 0 to 100, percents
 */
export function setItemCondition(object: ClientObject, condition: TRate): void {
  object.set_condition(condition / 100);
}

/**
 * Check whether provided object ID is online.
 *
 * @param objectId - object identifier
 */
export function isObjectOnline(objectId: TNumberId): boolean {
  return level.object_by_id(objectId) !== null;
}

/**
 * Set current time in level.
 * Creates idle state with multiplied time factor.
 */
export function setCurrentTime(hour: number, min: number, sec: number): void {
  const currentTimeFactor: TRate = level.get_time_factor();
  const currentGameTime: TTimestamp = game.time();

  // todo: Magic constants.
  let currentDay: number = math.floor(currentGameTime / 86_400_000);
  const currentTime: number = currentGameTime - currentDay * 86_400_000;
  let newTime: number = (sec + min * 60 + hour * 3_600) * 1000;

  if (currentTime > newTime) {
    currentDay = currentDay + 1;
  }

  newTime = newTime + currentDay * 86_400_000;

  level.set_time_factor(10_000);

  while (game.time() < newTime) {
    wait();
  }

  level.set_time_factor(currentTimeFactor);
}

/**
 * todo;
 */
export function stopObjectPlayingSound(object: ClientObject): void {
  if (object.alive()) {
    object.set_sound_mask(-1);
    object.set_sound_mask(0);
  }
}

/**
 * todo;
 * @param serverObject - alife server object to change team parameters
 * @param teamId - ?
 * @param squadId - id of the parent squad, bound to spawning smart
 * @param groupId - id of the level group
 *
 */
export function changeTeamSquadGroup(
  serverObject: ServerCreatureObject,
  teamId: TNumberId,
  squadId: TNumberId,
  groupId: TNumberId
): void {
  const clientObject: Optional<ClientObject> = registry.objects.get(serverObject.id)?.object;

  if (clientObject === null) {
    serverObject.team = teamId;
    serverObject.squad = squadId;
    serverObject.group = groupId;
  } else {
    clientObject.change_team(teamId, squadId, groupId);
  }
}

/**
 * todo;
 */
export function action(object: Optional<ClientObject>, ...actions: Array<TEntityActionType>): EntityAction {
  const entityAction: EntityAction = new entity_action();
  let index: TIndex = 0;

  while (actions[index] !== null) {
    entityAction.set_action(actions[index]);
    index += 1;
  }

  if (object !== null) {
    object.command(entityAction, false);
  }

  // todo: Is copy needed?
  return new entity_action(entityAction);
}

/**
 * todo;
 */
export function resetObjectAction(object: ClientObject, scriptName: TName): void {
  if (object.get_script()) {
    object.script(false, scriptName);
  }

  object.script(true, scriptName);
}

/**
 * todo;
 */
export function interruptObjectAction(object: ClientObject, scriptName: TName): void {
  if (object.get_script()) {
    object.script(false, scriptName);
  }
}

/**
 * todo;
 */
export function getObjectCommunity(object: AnyGameObject): TCommunity {
  if (type(object.id) === "function") {
    return getCharacterCommunity(object as ClientObject);
  } else {
    return getAlifeCharacterCommunity(object as ServerHumanObject);
  }
}

/**
 * todo;
 */
export function getCharacterCommunity(object: ClientObject): TCommunity {
  if (isStalker(object)) {
    return object.character_community() as TCommunity;
  }

  return communities.monster;
}

/**
 * todo;
 */
export function getAlifeCharacterCommunity(object: ServerHumanObject | ServerGroupObject): TCommunity {
  if (isStalker(object)) {
    return object.community() as TCommunity;
  }

  return communities.monster;
}

/**
 * todo;
 */
export function getServerDistanceBetween(first: ServerObject, second: ServerObject): TDistance {
  return graphDistance(first.m_game_vertex_id, second.m_game_vertex_id);
}

/**
 * todo;
 */
export function getServerDistanceBetweenSafe(
  first: Optional<ServerObject>,
  second: Optional<ServerObject>
): Optional<TDistance> {
  return first && second && graphDistance(first.m_game_vertex_id, second.m_game_vertex_id);
}

/**
 * todo;
 */
export function areObjectsOnSameLevel(first: ServerObject, second: ServerObject): boolean {
  return (
    game_graph().vertex(first.m_game_vertex_id).level_id() === game_graph().vertex(second.m_game_vertex_id).level_id()
  );
}

/**
 * todo;
 */
export function setObjectInfo(object: ClientObject, ini: IniFile, section: TSection): void {
  const inInfosList: LuaArray<TInfoPortion> = getInfosFromData(object, readIniString(ini, section, "in", false, ""));
  const outInfosList: LuaArray<TInfoPortion> = getInfosFromData(object, readIniString(ini, section, "out", false, ""));

  for (const [index, infoPortion] of inInfosList) {
    object.give_info_portion(infoPortion);
  }

  for (const [index, infoPortion] of outInfosList) {
    object.disable_info_portion(infoPortion);
  }
}

/**
 * todo: rename, update
 */
export function resetObjectGroup(object: ClientObject, ini: IniFile, section: TSection): void {
  const group: TNumberId = readIniNumber(ini, section, "group", false, -1);

  if (group !== -1) {
    object.change_team(object.team(), object.squad(), group);
  }
}

/**
 * todo: rename, update
 */
export function initializeObjectTakeItemsEnabledState(
  object: ClientObject,
  scheme: EScheme,
  state: IRegistryObjectState,
  section: TSection
): void {
  const isTakeItemsEnabled: boolean = state.ini.line_exist(section, "take_items")
    ? readIniBoolean(state.ini, section, "take_items", false, true)
    : readIniBoolean(state.ini, state.sectionLogic, "take_items", false, true);

  object.take_items_enabled(isTakeItemsEnabled);
}

/**
 * todo: rename, update
 */
export function initializeObjectCanSelectWeaponState(
  object: ClientObject,
  scheme: EScheme,
  state: IRegistryObjectState,
  section: TSection
): void {
  let data: string = readIniString(state.ini, section, "can_select_weapon", false, "", "");

  if (data === "") {
    data = readIniString(state.ini, state.sectionLogic, "can_select_weapon", false, "", TRUE);
  }

  const conditionsList: TConditionList = parseConditionsList(data);
  const canSelectSection: TSection = pickSectionFromCondList(registry.actor, object, conditionsList)!;

  object.can_select_weapon(canSelectSection === TRUE);
}

/**
 * todo;
 */
export function isObjectInvulnerabilityNeeded(object: ClientObject): boolean {
  const state: IRegistryObjectState = registry.objects.get(object.id());
  const invulnerability: Optional<string> = readIniString(
    state.ini,
    state.activeSection,
    "invulnerable",
    false,
    "",
    null
  );

  if (invulnerability === null) {
    return false;
  }

  return pickSectionFromCondList(registry.actor, object, parseConditionsList(invulnerability)) === TRUE;
}

/**
 * todo;
 */
export function resetObjectInvulnerability(object: ClientObject): void {
  const nextInvulnerabilityState: boolean = isObjectInvulnerabilityNeeded(object);

  if (object.invulnerable() !== nextInvulnerabilityState) {
    object.invulnerable(nextInvulnerabilityState);
  }
}

/**
 * todo;
 */
export function disableObjectInvulnerability(object: ClientObject): void {
  object.invulnerable(false);
}

/**
 * todo;
 */
export function updateObjectInvulnerability(object: ClientObject): void {
  const isInvulnerabilityNeeded: boolean = isObjectInvulnerabilityNeeded(object);

  if (object.invulnerable() !== isInvulnerabilityNeeded) {
    object.invulnerable(isInvulnerabilityNeeded);
  }
}

/**
 * todo
 */
export function resetObjectIgnoreThreshold(
  object: ClientObject,
  scheme: Optional<EScheme>,
  state: IRegistryObjectState,
  section: TSection
): void {
  const thresholdSection: Optional<TSection> =
    scheme === null || scheme === NIL
      ? readIniString(state.ini, state.sectionLogic, "threshold", false, "")
      : readIniString(state.ini, section, "threshold", false, "");

  if (thresholdSection) {
    const maxIgnoreDistance: Optional<TDistance> = readIniNumber(
      state.ini,
      thresholdSection,
      "max_ignore_distance",
      false
    );

    if (maxIgnoreDistance === null) {
      object.restore_max_ignore_monster_distance();
    } else {
      object.max_ignore_monster_distance(maxIgnoreDistance);
    }

    const ignoreMonster: Optional<TNumberId> = readIniNumber(state.ini, thresholdSection, "ignore_monster", false);

    if (ignoreMonster === null) {
      object.restore_ignore_monster_threshold();
    } else {
      object.ignore_monster_threshold(ignoreMonster);
    }
  }
}

/**
 * todo;
 */
export function isObjectInCombat(object: ClientObject): boolean {
  const actionPlanner: ActionPlanner = object.motivation_action_manager();

  if (!actionPlanner.initialized()) {
    return false;
  }

  const currentActionId: Optional<TNumberId> = actionPlanner.current_action_id();

  return (
    currentActionId === stalker_ids.action_combat_planner || currentActionId === stalker_ids.action_post_combat_wait
  );
}

/**
 * todo: description
 */
export function isActorSeenByObject(object: ClientObject): boolean {
  return object.alive() && object.see(registry.actor);
}

/**
 * todo: description
 */
export function sendToNearestAccessibleVertex(object: ClientObject, vertexId: TNumberId): TNumberId {
  if (!object.accessible(vertexId)) {
    vertexId = object.accessible_nearest(level.vertex_position(vertexId), createEmptyVector());
  }

  object.set_dest_level_vertex_id(vertexId);

  return vertexId;
}

/**
 * todo;
 */
export function anomalyHasArtefact(
  actor: ClientObject,
  object: Optional<ClientObject>,
  params: [TName, Optional<TName>]
): LuaMultiReturn<[boolean, Optional<LuaArray<TName>>]> {
  const anomalyZoneName: TName = params && params[0];
  const artefactName: Optional<TName> = params && params[1];
  const anomalyZone: AnomalyZoneBinder = registry.anomalyZones.get(anomalyZoneName);

  if (anomalyZone === null) {
    return $multi(false, null);
  }

  if (anomalyZone.spawnedArtefactsCount < 1) {
    return $multi(false, null);
  }

  if (artefactName === null) {
    const artefactsList: LuaArray<TName> = new LuaTable();

    for (const [k, v] of registry.artefacts.ways) {
      const artefactObject: Optional<ServerObject> = alife().object(tonumber(k)!);

      if (artefactObject) {
        table.insert(artefactsList, artefactObject.section_name());
      }
    }

    return $multi(true, artefactsList);
  }

  for (const [artefactId] of registry.artefacts.ways) {
    if (
      alife().object(tonumber(artefactId)!) &&
      artefactName === alife().object(tonumber(artefactId)!)!.section_name()
    ) {
      return $multi(true, null);
    }
  }

  return $multi(false, null);
}

/**
 * todo;
 */
export function isObjectAsleep(object: ClientObject): boolean {
  return registry.objects.get(object.id()).stateManager!.animstate.states.currentState === EStalkerState.SLEEP;
}

/**
 * todo;
 * todo;
 * todo;
 */
export function scriptReleaseObject(object: ClientObject, scriptName: TName = $filename): void {
  if (object.get_script()) {
    object.script(false, scriptName);
  }
}

/**
 * todo;
 * todo;
 * todo;
 */
export function scriptCaptureObject(
  object: ClientObject,
  resetActions: Optional<boolean>,
  scriptName: TName = $filename
): void {
  if (resetActions === null) {
    abort("mob_capture: reset_actions parameter's value is !specified");
  }

  if (resetActions !== null) {
    resetObjectAction(object, scriptName);
  } else {
    if (!object.get_script()) {
      object.script(true, scriptName);
    }
  }
}

/**
 * todo;
 * todo;
 * todo;
 */
export function isObjectScriptCaptured(object: ClientObject): boolean {
  return object.get_script() !== null;
}

/**
 * Check whether object is in provided smart terrain (name).
 *
 * @param object - client object to check
 * @param smartTerrainName - desired smart terrain to check
 * @returns whether object is assigned to smart terrain with desired name
 */
export function isObjectInSmartTerrain(object: ClientObject, smartTerrainName: TName): boolean {
  const smartTerrain: Optional<SmartTerrain> = getObjectSmartTerrain(object);

  return smartTerrain ? smartTerrain.name() === smartTerrainName : false;
}
