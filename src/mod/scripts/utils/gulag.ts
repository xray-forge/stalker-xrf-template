import { alife, game_object, XR_cse_alife_creature_abstract, XR_game_object, XR_vector } from "xray16";

import { MAX_UNSIGNED_16_BIT } from "@/mod/globals/memory";
import { Optional } from "@/mod/lib/types";
import { SimulationBoardManager } from "@/mod/scripts/core/database/SimulationBoardManager";
import { SmartTerrain } from "@/mod/scripts/core/objects/alife/smart/SmartTerrain";
import { getStoryObjectId } from "@/mod/scripts/utils/id";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export function get_gulag_by_name(name: string): Optional<SmartTerrain> {
  return SimulationBoardManager.getInstance().smarts_by_names.get(name);
}

/**
 * todo;
 */
export function get_gulag_by_sid(sid: string): Optional<SmartTerrain> {
  return alife().object(getStoryObjectId(sid)!);
}

/**
 * todo;
 * todo: Fix SID number/string mismatch.
 */
export function get_gulag(name_or_sid: string | number): Optional<SmartTerrain> {
  return type(name_or_sid) === "number"
    ? get_gulag_by_sid(name_or_sid as string)
    : get_gulag_by_name(name_or_sid as string);
}

/**
 * todo;
 * todo;
 */
export function getObjectBoundSmart(obj: XR_game_object): Optional<SmartTerrain> {
  const se_obj: Optional<XR_cse_alife_creature_abstract> = alife().object(obj.id());

  if (se_obj === null) {
    return null;
  }

  return se_obj.m_smart_terrain_id === MAX_UNSIGNED_16_BIT ? null : alife().object(se_obj.m_smart_terrain_id);
}

/**
 * todo;
 * todo;
 */
export function setGulagRelation(name_or_sid: string | number, relation: number, target_obj: XR_game_object): void {
  const gulag = get_gulag(name_or_sid);

  if (gulag) {
    // todo: check how is used, not valid typing or mistake?
    // todo: check how is used, not valid typing or mistake?
    // todo: check how is used, not valid typing or mistake?
    (gulag as unknown as XR_game_object).set_relation(relation, target_obj);
  }
}

/**
 * todo;
 * todo;
 */
export function setGulagGoodwill(name_or_sid: string | number, goodwill: number, target_obj: XR_game_object): void {
  const gulag = get_gulag(name_or_sid);

  if (gulag) {
    // todo: check how is used, not valid typing or mistake?
    // todo: check how is used, not valid typing or mistake?
    // todo: check how is used, not valid typing or mistake?
    (gulag as unknown as XR_game_object).set_goodwill(goodwill, target_obj);
  }
}

/**
 * todo;
 * todo;
 */
export function setGulagEnemy(name_or_sid: string | number, target_obj: XR_game_object): void {
  setGulagRelation(name_or_sid, game_object.enemy, target_obj);
}

/**
 * todo;
 * todo;
 */
export function setGulagNeutral(name_or_sid: string | number, target_obj: XR_game_object): void {
  setGulagRelation(name_or_sid, game_object.neutral, target_obj);
}

/**
 * todo;
 * todo;
 */
export function resetJob(obj: XR_game_object): void {
  const gulag = getObjectBoundSmart(obj);

  if (gulag) {
    // todo: check how is used, not valid typing or mistake?
    // todo: check how is used, not valid typing or mistake?
    (gulag as any).free_obj_and_reinit(obj.id());
    gulag.update();
  }
}

/**
 * todo;
 * todo;
 */
export function free_object(obj: XR_game_object): void {
  const gulag = getObjectBoundSmart(obj);

  if (gulag) {
    (gulag as any).free_obj(obj.id());
    // --gulag:update()
  }
}

/**
 * todo;
 * todo;
 */
export function find_stalker_for_job(obj: XR_game_object, need_job: string): void {
  const smart = getObjectBoundSmart(obj)!;

  for (const [k, v] of smart.npc_info) {
    const objectJob = smart.job_data.get(v.job_id);

    if (objectJob !== null && objectJob.reserve_job === true) {
      const selected_npc_data = smart.npc_info.get(k);

      selected_npc_data.need_job = need_job;

      return;
    }
  }
}

/**
 * todo;
 * todo;
 */
export function switch_to_desired_job(npc: XR_game_object): void {
  const smart = getObjectBoundSmart(npc)!;

  smart.switch_to_desired_job(npc);
}
