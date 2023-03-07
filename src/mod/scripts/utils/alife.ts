import {
  alife,
  entity_action,
  game,
  game_graph,
  level,
  stalker_ids,
  vector,
  XR_action_planner,
  XR_cse_alife_creature_abstract,
  XR_cse_alife_human_abstract,
  XR_cse_alife_object,
  XR_cse_alife_online_offline_group,
  XR_entity_action,
  XR_game_object,
  XR_ini_file,
} from "xray16";

import { communities, TCommunity } from "@/mod/globals/communities";
import { STRINGIFIED_NIL, STRINGIFIED_TRUE } from "@/mod/globals/lua";
import { MAX_UNSIGNED_16_BIT } from "@/mod/globals/memory";
import {
  AnyArgs,
  AnyObject,
  EScheme,
  LuaArray,
  Maybe,
  Optional,
  TCount,
  TName,
  TNumberId,
  TSection,
  TStringId,
} from "@/mod/lib/types";
import { SimSquadReachTargetAction } from "@/mod/scripts/core/alife/SimSquadReachTargetAction";
import { SimSquadStayOnTargetAction } from "@/mod/scripts/core/alife/SimSquadStayOnTargetAction";
import { Squad } from "@/mod/scripts/core/alife/Squad";
import { IRegistryObjectState, registry } from "@/mod/scripts/core/database";
import { getStoryObjectsRegistry } from "@/mod/scripts/core/database/StoryObjectsRegistry";
import { spawnItemsForObject } from "@/mod/scripts/utils/alife_spawn";
import { isStalker } from "@/mod/scripts/utils/checkers/is";
import {
  getConfigBoolean,
  getConfigNumber,
  getConfigString,
  getInfosFromData,
  pickSectionFromCondList,
} from "@/mod/scripts/utils/configs";
import { abort } from "@/mod/scripts/utils/debug";
import { getStoryObjectId } from "@/mod/scripts/utils/ids";
import { LuaLogger } from "@/mod/scripts/utils/logging";
import { parseConditionsList, TConditionList } from "@/mod/scripts/utils/parse";
import { graphDistance } from "@/mod/scripts/utils/physics";
import { wait } from "@/mod/scripts/utils/time";

const logger: LuaLogger = new LuaLogger("alife");

/**
 * todo;
 */
export function addStoryObject(objectId: number, storyObjectId: string): void {
  getStoryObjectsRegistry().register(objectId, storyObjectId);
}

/**
 * todo;
 */
export function getStoryObject(storyObjectId: string): Optional<XR_game_object> {
  const objectId: Optional<number> = getStoryObjectsRegistry().get(storyObjectId);
  const possibleObject: Maybe<XR_game_object> = objectId ? registry.objects.get(objectId)?.object : null;

  if (possibleObject) {
    return possibleObject;
  } else if (level && objectId) {
    return level.object_by_id(objectId);
  }

  return null;
}

/**
 * todo;
 */
export function unregisterStoryObjectById(id: number): void {
  getStoryObjectsRegistry().unregister_by_id(id);
}

/**
 * todo;
 */
export function unregisterStoryId(id: string): void {
  getStoryObjectsRegistry().unregister_by_story_id(id);
}

/**
 * todo;
 */
export function getObjectSquad(object: Optional<XR_game_object | XR_cse_alife_creature_abstract>): Optional<Squad> {
  if (object === null) {
    return abort("Attempt to get squad object from NIL.") as never;
  }

  const objectId: number =
    type(object.id) === "function" ? (object as XR_game_object).id() : (object as XR_cse_alife_creature_abstract).id;
  const se_obj: Optional<any> = alife().object(objectId);

  if (se_obj && se_obj.group_id !== MAX_UNSIGNED_16_BIT) {
    return alife().object<Squad>(se_obj.group_id);
  }

  return null;
}

export function getObjectSquadAction(
  object: XR_game_object
): Optional<SimSquadReachTargetAction | SimSquadStayOnTargetAction> {
  return getObjectSquad(object)?.current_action as Optional<SimSquadReachTargetAction | SimSquadStayOnTargetAction>;
}

/**
 * todo;
 */
export function getStorySquad<T extends XR_cse_alife_online_offline_group>(storyId: string): Optional<T> {
  const squadId: Optional<number> = getStoryObjectId(storyId);

  return squadId ? alife().object<T>(squadId) : null;
}

/**
 * Set item condition.
 *
 * @param item
 * @param condition - value from 0 to 100, percents
 */
export function setItemCondition(item: XR_game_object, condition: number): void {
  item.set_condition(condition / 100);
}

/**
 * -- ��������� �� ������ � �������.
 * function is_object_online(obj_id)
 *  return level.object_by_id(obj_id) ~= nil
 * end
 */
export function isObjectOnline(objectId: number): boolean {
  return level.object_by_id(objectId) !== null;
}

/**
 * todo;
 */
export function setCurrentTime(hour: number, min: number, sec: number) {
  const current_time_factor = level.get_time_factor();
  const current_time = game.time();

  let c_day = math.floor(current_time / 86400000);
  const c_time = current_time - c_day * 86400000;
  let n_time = (sec + min * 60 + hour * 3600) * 1000;

  if (c_time > n_time) {
    c_day = c_day + 1;
  }

  n_time = n_time + c_day * 86400000;

  level.set_time_factor(10000);

  while (game.time() < n_time) {
    wait();
  }

  level.set_time_factor(current_time_factor);
}

/**
 * todo;
 */
export function stopPlaySound(object: XR_game_object): void {
  if (object.alive()) {
    object.set_sound_mask(-1);
    object.set_sound_mask(0);
  }
}

/**
 * todo;
 */
export function changeTeamSquadGroup(
  serverObject: XR_cse_alife_creature_abstract,
  team: TNumberId,
  squad: TNumberId,
  group: TNumberId
): void {
  const clientObject: Optional<XR_game_object> = registry.objects.get(serverObject.id)?.object;

  if (clientObject === null) {
    serverObject.team = team;
    serverObject.squad = squad;
    serverObject.group = group;
  } else {
    clientObject.change_team(team, squad, group);
  }
}

export function action(obj: Optional<XR_game_object>, ...args: AnyArgs): XR_entity_action {
  const act: XR_entity_action = new entity_action();
  let i: number = 0;

  while (args[i] !== null) {
    act.set_action(args[i]);
    i = i + 1;
  }

  if (obj !== null) {
    obj.command(act, false);
  }

  return new entity_action(act);
}

export function actionFirst(obj: Optional<XR_game_object>, ...args: AnyArgs): XR_entity_action {
  const act: XR_entity_action = new entity_action();
  let i: number = 0;

  while (args[i] !== null) {
    act.set_action(args[i]);
    i = i + 1;
  }

  if (obj !== null) {
    obj.command(act, true);
  }

  return new entity_action(act);
}

/**
 * todo;
 */
export function resetAction(npc: XR_game_object, scriptName: TName): void {
  if (npc.get_script()) {
    npc.script(false, scriptName);
  }

  npc.script(true, scriptName);
}

/**
 * todo;
 */
export function interruptAction(npc: XR_game_object, scriptName: TName): void {
  if (npc.get_script()) {
    npc.script(false, scriptName);
  }
}

/**
 * todo;
 */
export function getObjectCommunity(object: XR_game_object | XR_cse_alife_creature_abstract) {
  if (type(object.id) === "function") {
    return getCharacterCommunity(object as XR_game_object);
  } else {
    getAlifeCharacterCommunity(object as XR_cse_alife_human_abstract);
  }
}

/**
 * todo;
 */
export function getCharacterCommunity(object: XR_game_object): TCommunity {
  if (isStalker(object)) {
    return object.character_community() as TCommunity;
  }

  return communities.monster;
}

/**
 * todo;
 */
export function getAlifeCharacterCommunity(
  object: XR_cse_alife_human_abstract | XR_cse_alife_online_offline_group
): TCommunity {
  if (isStalker(object, object.clsid())) {
    return object.community() as TCommunity;
  }

  return communities.monster;
}

/**
 * todo;
 */
export function getAlifeDistanceBetween(first: XR_cse_alife_object, second: XR_cse_alife_object): number {
  return graphDistance(first.m_game_vertex_id, second.m_game_vertex_id);
}

/**
 * todo;
 */
export function areOnSameAlifeLevel(first: XR_cse_alife_object, second: XR_cse_alife_object): boolean {
  return (
    game_graph().vertex(first.m_game_vertex_id).level_id() === game_graph().vertex(second.m_game_vertex_id).level_id()
  );
}

/**
 * todo;
 */
export function setObjectInfo(object: XR_game_object, ini: XR_ini_file, section: TSection): void {
  const in_info = getInfosFromData(object, getConfigString(ini, section, "in", object, false, ""));
  const out_info = getInfosFromData(object, getConfigString(ini, section, "out", object, false, ""));

  for (const [k, v] of in_info) {
    object.give_info_portion(v);
  }

  for (const [k, v] of out_info) {
    object.disable_info_portion(v);
  }
}

/**
 * todo: rename, update
 */
export function resetObjectGroup(object: XR_game_object, ini: XR_ini_file, section: TSection): void {
  const group = getConfigNumber(ini, section, "group", object, false, -1);

  if (group !== -1) {
    object.change_team(object.team(), object.squad(), group);
  }
}

/**
 * todo: rename, update
 */
export function take_items_enabled(
  object: XR_game_object,
  scheme: EScheme,
  state: IRegistryObjectState,
  section: TSection
): void {
  const isTakeItemsEnabled: boolean = state.ini.line_exist(section, "take_items")
    ? getConfigBoolean(state.ini, section, "take_items", object, false, true)
    : getConfigBoolean(state.ini, state.section_logic, "take_items", object, false, true);

  object.take_items_enabled(isTakeItemsEnabled);
}

/**
 * todo: rename, update
 */
export function can_select_weapon(
  object: XR_game_object,
  scheme: EScheme,
  state: IRegistryObjectState,
  section: TSection
): void {
  let str = getConfigString(state.ini, section, "can_select_weapon", object, false, "", "");

  if (str === "") {
    str = getConfigString(state.ini, state.section_logic, "can_select_weapon", object, false, "", "true");
  }

  const cond: TConditionList = parseConditionsList(object, section, "can_select_weapon", str);
  const can: TSection = pickSectionFromCondList(registry.actor, object, cond)!;

  object.can_select_weapon(can === STRINGIFIED_TRUE);
}

/**
 * todo;
 */
export function isInvulnerabilityNeeded(object: XR_game_object): boolean {
  const state: IRegistryObjectState = registry.objects.get(object.id());
  const invulnerability: Optional<string> = getConfigString(
    state.ini,
    state.active_section,
    "invulnerable",
    object,
    false,
    "",
    null
  );

  if (invulnerability === null) {
    return false;
  }

  const invulnerability_condlist = parseConditionsList(object, "invulnerability", "invulnerability", invulnerability);

  return pickSectionFromCondList(registry.actor, object, invulnerability_condlist) === STRINGIFIED_TRUE;
}

/**
 * todo;
 */
export function resetInvulnerability(object: XR_game_object): void {
  const invulnerability = isInvulnerabilityNeeded(object);

  if (object.invulnerable() !== invulnerability) {
    object.invulnerable(invulnerability);
  }
}

/**
 * todo;
 */
export function disableInvulnerability(object: XR_game_object): void {
  object.invulnerable(false);
}

/**
 * todo;
 */
export function updateInvulnerability(object: XR_game_object): void {
  const invulnerability = isInvulnerabilityNeeded(object);

  if (object.invulnerable() !== invulnerability) {
    object.invulnerable(invulnerability);
  }
}

/**
 * todo
 */
export function resetThreshold(
  object: XR_game_object,
  scheme: Optional<EScheme>,
  state: IRegistryObjectState,
  section: TSection
): void {
  const threshold_section: Optional<TSection> =
    scheme === null || scheme === STRINGIFIED_NIL
      ? getConfigString(state.ini, state.section_logic, "threshold", object, false, "")
      : getConfigString(state.ini, section, "threshold", object, false, "");

  if (threshold_section !== null) {
    const max_ignore_distance = getConfigNumber(state.ini, threshold_section, "max_ignore_distance", object, false);

    if (max_ignore_distance !== null) {
      object.max_ignore_monster_distance(max_ignore_distance);
    } else {
      object.restore_max_ignore_monster_distance();
    }

    const ignore_monster: number = getConfigNumber(state.ini, threshold_section, "ignore_monster", object, false);

    if (ignore_monster !== null) {
      object.ignore_monster_threshold(ignore_monster);
    } else {
      object.restore_ignore_monster_threshold();
    }
  }
}

/**
 * todo;
 */
export function isObjectInCombat(object: XR_game_object): boolean {
  const actionPlanner: XR_action_planner = object.motivation_action_manager();

  if (!actionPlanner.initialized()) {
    return false;
  }

  const current_action_id: TNumberId = actionPlanner.current_action_id();

  return (
    current_action_id === stalker_ids.action_combat_planner || current_action_id === stalker_ids.action_post_combat_wait
  );
}

/**
 * todo: description
 */
export function spawnDefaultNpcItems(object: XR_game_object, state: IRegistryObjectState): void {
  const itemsToSpawn: LuaTable<TStringId, TCount> = new LuaTable();
  const spawnItemsSection: Optional<string> = getConfigString(
    state.ini,
    state.section_logic,
    "spawn",
    object,
    false,
    "",
    null
  );

  if (spawnItemsSection === null) {
    return;
  }

  const itemSectionsCount: TCount = state.ini!.line_count(spawnItemsSection);

  for (const it of $range(0, itemSectionsCount - 1)) {
    const [result, id, value] = state.ini!.r_line(spawnItemsSection, it, "", "");

    itemsToSpawn.set(id, value === "" ? 1 : tonumber(value)!);
  }

  for (const [id, count] of itemsToSpawn) {
    if (object.object(id) === null) {
      spawnItemsForObject(object, id, count);
    }
  }
}

/**
 * todo: description
 */
export function isActorSeenByObject(object: XR_game_object): boolean {
  return object.alive() && object.see(registry.actor);
}

/**
 * todo: description
 */
export function sendToNearestAccessibleVertex(object: XR_game_object, vertexId: TNumberId): TNumberId {
  if (!object.accessible(vertexId)) {
    vertexId = object.accessible_nearest(level.vertex_position(vertexId), new vector());
  }

  object.set_dest_level_vertex_id(vertexId);

  return vertexId;
}

/**
 * todo;
 */
export function anomalyHasArtefact(
  actor: XR_game_object,
  npc: Optional<XR_game_object>,
  params: [TName, Optional<TName>]
): LuaMultiReturn<[boolean, Optional<LuaArray<TName>>]> {
  const az_name = params && params[0];
  const af_name = params && params[1];
  const anomalyZone = registry.anomalies.get(az_name);

  if (anomalyZone === null) {
    return $multi(false, null);
  }

  if (anomalyZone.spawnedArtefactsCount < 1) {
    return $multi(false, null);
  }

  if (af_name === null) {
    const af_table: LuaArray<string> = new LuaTable();

    for (const [k, v] of registry.artefacts.ways) {
      const artefactObject: Optional<XR_cse_alife_object> = alife().object(tonumber(k)!);

      if (artefactObject) {
        table.insert(af_table, artefactObject.section_name());
      }
    }

    return $multi(true, af_table);
  }

  for (const [artefactId] of registry.artefacts.ways) {
    if (alife().object(tonumber(artefactId)!) && af_name === alife().object(tonumber(artefactId)!)!.section_name()) {
      return $multi(true, null);
    }
  }

  return $multi(false, null);
}

/**
 * todo;
 */
export function is_npc_asleep(npc: XR_game_object): boolean {
  return (registry.objects.get(npc.id())!.state_mgr!.animstate as AnyObject).current_state === "sleep";
}
