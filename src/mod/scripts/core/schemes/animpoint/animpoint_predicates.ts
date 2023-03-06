// todo: Probably pick && move some to globals

import { XR_game_object } from "xray16";

import { misc } from "@/mod/globals/items/misc";
import { Optional, TNumberId } from "@/mod/lib/types";
import { SmartTerrain } from "@/mod/scripts/core/alife/SmartTerrain";
import { registry } from "@/mod/scripts/core/database";
import { getObjectBoundSmart } from "@/mod/scripts/utils/gulag";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("animpoint_predicates");

/**
 * todo;
 */
export const smart_table: LuaTable<number, string> = [
  "zat_stalker_base_smart",
  "jup_b41",
  "jup_a6",
  "pri_a16",
] as unknown as LuaTable<number, string>;

/**
 * todo;
 */
const eatable_visuals = {
  ["actors\\stalker_hero\\stalker_hero_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_novice_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_stalker_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_dolg_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_dolg_2"]: true,
  ["actors\\stalker_hero\\stalker_hero_freedom_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_freedom_2"]: true,
  ["actors\\stalker_hero\\stalker_hero_specops"]: true,
  ["actors\\stalker_hero\\stalker_hero_military"]: true,
  ["actors\\stalker_hero\\stalker_hero_neutral_nauchniy"]: true,
  ["actors\\stalker_hero\\stalker_hero_cs_heavy"]: true,
  ["actors\\stalker_hero\\stalker_hero_exo"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3_face_1"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3_mask"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_4"]: true,
  ["actors\\stalker_dolg\\stalker_dolg_2_face_1"]: true,
  ["actors\\stalker_dolg\\stalker_dolg_1_face_1"]: true,
  ["actors\\stalker_dolg\\stalker_dolg_3_face_1"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_1_face_1"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_2_face_1"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_2_face_2"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_3"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_3_face_1"]: true,
  ["actors\\stalker_monolith\\stalker_monolith_1_face_1"]: true,
  ["actors\\stalker_nebo\\stalker_nebo_2_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_1_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_1_face_2"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_1_face_3"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3_face_3"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_2"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_3"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_4"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_5"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_6"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_7"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3_face_2"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_3_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_nauchniy_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_nauchniy_face_3"]: true,
  ["actors\\stalker_soldier\\stalker_soldier_1"]: true,
  ["actors\\stalker_soldier\\stalker_soldier_1_face_1"]: true,
  ["actors\\stalker_soldier\\stalker_solider_2"]: true,
  ["actors\\stalker_soldier\\stalker_solider_2_face_1"]: true,
  ["actors\\stalker_soldier\\stalker_solider_3_face_1"]: true,
  ["actors\\stalker_soldier\\stalker_solider_ecolog_face_1"]: true,
  ["actors\\stalker_ucheniy\\stalker_ucheniy_1_face_1"]: true,
  ["actors\\stalker_ucheniy\\stalker_ucheniy_1_face_2"]: true,
  ["actors\\stalker_zombied\\stalker_zombied_1"]: true,
  ["actors\\stalker_zombied\\stalker_zombied_3"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_nauchniy_face_2"]: true,
};

export type TEatableVisual = keyof typeof eatable_visuals;

const harmonica_visuals = {
  ["actors\\stalker_hero\\stalker_hero_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_novice_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_stalker_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_dolg_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_dolg_2"]: true,
  ["actors\\stalker_hero\\stalker_hero_freedom_1"]: true,
  ["actors\\stalker_hero\\stalker_hero_freedom_2"]: true,
  ["actors\\stalker_hero\\stalker_hero_specops"]: true,
  ["actors\\stalker_hero\\stalker_hero_military"]: true,
  ["actors\\stalker_hero\\stalker_hero_neutral_nauchniy"]: true,
  ["actors\\stalker_hero\\stalker_hero_cs_heavy"]: true,
  ["actors\\stalker_hero\\stalker_hero_exo"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_1"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_2"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3_face_1"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3_mask"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_4"]: true,
  ["actors\\stalker_dolg\\stalker_dolg_2_face_1"]: true,
  ["actors\\stalker_dolg\\stalker_dolg_1_face_1"]: true,
  ["actors\\stalker_dolg\\stalker_dolg_2_mask"]: true,
  ["actors\\stalker_dolg\\stalker_dolg_3_face_1"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_1_face_1"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_2_face_1"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_2_face_2"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_2_mask"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_3"]: true,
  ["actors\\stalker_freedom\\stalker_freedom_3_face_1"]: true,
  ["actors\\stalker_monolith\\stalker_monolith_1_face_1"]: true,
  ["actors\\stalker_nebo\\stalker_nebo_2_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_1_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_1_face_2"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_1_face_3"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3_face_3"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_2"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_3"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_4"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_5"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_6"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_face_7"]: true,
  ["actors\\stalker_bandit\\stalker_bandit_3_face_2"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_2_mask"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_3_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_nauchniy_face_1"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_nauchniy_face_3"]: true,
  ["actors\\stalker_soldier\\stalker_soldier_1"]: true,
  ["actors\\stalker_soldier\\stalker_soldier_1_face_1"]: true,
  ["actors\\stalker_soldier\\stalker_solider_2"]: true,
  ["actors\\stalker_soldier\\stalker_solider_2_face_1"]: true,
  ["actors\\stalker_soldier\\stalker_solider_3_face_1"]: true,
  ["actors\\stalker_soldier\\stalker_solider_ecolog_face_1"]: true,
  ["actors\\stalker_ucheniy\\stalker_ucheniy_1_face_1"]: true,
  ["actors\\stalker_ucheniy\\stalker_ucheniy_1_face_2"]: true,
  ["actors\\stalker_zombied\\stalker_zombied_1"]: true,
  ["actors\\stalker_zombied\\stalker_zombied_2"]: true,
  ["actors\\stalker_zombied\\stalker_zombied_3"]: true,
  ["actors\\stalker_zombied\\stalker_zombied_4"]: true,
  ["actors\\stalker_neutral\\stalker_neutral_nauchniy_face_2"]: true,
};

/**
 * todo;
 */
function const_predicate_true(npc_id: number) {
  return true;
}

// todo: Optimize.
function animpoint_predicate_bread(npc_id: number): boolean {
  if (
    registry.objects.get(npc_id) &&
    registry.objects.get(npc_id).object &&
    eatable_visuals[registry.objects.get(npc_id).object!.get_visual_name<TEatableVisual>()] &&
    registry.objects.get(npc_id).object!.object("bread")
  ) {
    return true;
  }

  return false;
}

/**
 * todo;
 */
function animpoint_predicate_kolbasa(npc_id: number): boolean {
  if (
    registry.objects.get(npc_id) &&
    registry.objects.get(npc_id).object &&
    eatable_visuals[registry.objects.get(npc_id).object!.get_visual_name<TEatableVisual>()] &&
    registry.objects.get(npc_id).object!.object("kolbasa")
  ) {
    return true;
  }

  return false;
}

/**
 * todo;
 */
function animpoint_predicate_vodka(npc_id: number): boolean {
  if (
    registry.objects.get(npc_id) &&
    registry.objects.get(npc_id).object &&
    eatable_visuals[registry.objects.get(npc_id).object!.get_visual_name<TEatableVisual>()] &&
    registry.objects.get(npc_id).object!.object("vodka")
  ) {
    return true;
  }

  return false;
}

/**
 * todo;
 */
function animpoint_predicate_energy(npc_id: number): boolean {
  if (
    registry.objects.get(npc_id) &&
    registry.objects.get(npc_id).object &&
    eatable_visuals[registry.objects.get(npc_id).object!.get_visual_name<TEatableVisual>()] &&
    registry.objects.get(npc_id).object!.object("energy_drink")
  ) {
    return true;
  }

  return false;
}

/**
 * todo;
 */
function animpoint_predicate_guitar(npc_id: number, is_in_camp?: Optional<boolean>): boolean {
  if (
    is_in_camp === true &&
    registry.objects.get(npc_id) &&
    registry.objects.get(npc_id).object &&
    registry.objects.get(npc_id).object!.object(misc.guitar_a)
  ) {
    return true;
  }

  return false;
}

/**
 * todo;
 */
function animpoint_predicate_harmonica(npc_id: number, is_in_camp?: Optional<boolean>): boolean {
  if (
    is_in_camp === true &&
    registry.objects.get(npc_id) &&
    registry.objects.get(npc_id).object &&
    harmonica_visuals[registry.objects.get(npc_id).object!.get_visual_name<TEatableVisual>()] &&
    registry.objects.get(npc_id).object!.object(misc.harmonica_a)
  ) {
    return true;
  }

  return false;
}

/**
 * todo;
 */
function animpoint_predicate_weapon(objectId: TNumberId): boolean {
  const object: Optional<XR_game_object> = registry.objects.get(objectId)?.object;

  if (object !== null) {
    const smart: Optional<SmartTerrain> = getObjectBoundSmart(object);

    if (smart) {
      for (const [k, v] of smart_table) {
        if (smart.name() === v) {
          return false;
        }
      }
    }
  }

  return true;
}

/**
 * todo;
 */
export interface IAnimpointDescriptor {
  predicate: (id?: number) => boolean;
  name: string;
}

/**
 * todo;
 */
export const associations: LuaTable<string, LuaTable<number, IAnimpointDescriptor>> = {
  animpoint_stay_wall: [
    { name: "animpoint_stay_wall", predicate: const_predicate_true },
    { name: "animpoint_stay_wall_eat_bread", predicate: animpoint_predicate_bread },
    { name: "animpoint_stay_wall_eat_kolbasa", predicate: animpoint_predicate_kolbasa },
    { name: "animpoint_stay_wall_drink_vodka", predicate: animpoint_predicate_vodka },
    { name: "animpoint_stay_wall_drink_energy", predicate: animpoint_predicate_energy },
    // --  {name = "animpoint_stay_wall_guitar", predicate: animpoint_predicate_guitar},
    // --  {name = "animpoint_stay_wall_harmonica", predicate: animpoint_predicate_harmonica},
    { name: "animpoint_stay_wall_weapon", predicate: animpoint_predicate_weapon },
  ],
  animpoint_stay_table: [
    { name: "animpoint_stay_table", predicate: const_predicate_true },
    { name: "animpoint_stay_table_eat_bread", predicate: animpoint_predicate_bread },
    { name: "animpoint_stay_table_eat_kolbasa", predicate: animpoint_predicate_kolbasa },
    { name: "animpoint_stay_table_drink_vodka", predicate: animpoint_predicate_vodka },
    { name: "animpoint_stay_table_drink_energy", predicate: animpoint_predicate_energy },
    // --  {name = "animpoint_stay_table_guitar", predicate: animpoint_predicate_guitar},
    // --  {name = "animpoint_stay_table_harmonica", predicate: animpoint_predicate_harmonica},
    { name: "animpoint_stay_table_weapon", predicate: animpoint_predicate_weapon },
  ],
  animpoint_sit_high: [
    { name: "animpoint_sit_high", predicate: const_predicate_true },
    { name: "animpoint_sit_high_eat_bread", predicate: animpoint_predicate_bread },
    { name: "animpoint_sit_high_eat_kolbasa", predicate: animpoint_predicate_kolbasa },
    { name: "animpoint_sit_high_drink_vodka", predicate: animpoint_predicate_vodka },
    { name: "animpoint_sit_high_drink_energy", predicate: animpoint_predicate_energy },
    // --  {name = "animpoint_sit_high_guitar", predicate: animpoint_predicate_guitar},
    { name: "animpoint_sit_high_harmonica", predicate: animpoint_predicate_harmonica },
    // --  {name = "animpoint_sit_high_weapon", predicate: animpoint_predicate_weapon},
  ],
  animpoint_sit_normal: [
    { name: "animpoint_sit_normal", predicate: const_predicate_true },
    { name: "animpoint_sit_normal_eat_bread", predicate: animpoint_predicate_bread },
    { name: "animpoint_sit_normal_eat_kolbasa", predicate: animpoint_predicate_kolbasa },
    { name: "animpoint_sit_normal_drink_vodka", predicate: animpoint_predicate_vodka },
    { name: "animpoint_sit_normal_drink_energy", predicate: animpoint_predicate_energy },
    { name: "animpoint_sit_normal_guitar", predicate: animpoint_predicate_guitar },
    // --  {name = "animpoint_sit_normal_harmonica", predicate: animpoint_predicate_harmonica},
    // --  {name = "animpoint_sit_normal_weapon", predicate: animpoint_predicate_weapon},
  ],
  animpoint_sit_low: [
    { name: "animpoint_sit_low", predicate: const_predicate_true },
    { name: "animpoint_sit_low_eat_bread", predicate: animpoint_predicate_bread },
    { name: "animpoint_sit_low_eat_kolbasa", predicate: animpoint_predicate_kolbasa },
    { name: "animpoint_sit_low_drink_vodka", predicate: animpoint_predicate_vodka },
    { name: "animpoint_sit_low_drink_energy", predicate: animpoint_predicate_energy },
    { name: "animpoint_sit_low_guitar", predicate: animpoint_predicate_guitar },
    { name: "animpoint_sit_low_harmonica", predicate: animpoint_predicate_harmonica },
    // --  {name = "animpoint_sit_low_weapon", predicate: animpoint_predicate_weapon},
  ],
  walker_camp: [
    { name: "play_guitar", predicate: animpoint_predicate_guitar },
    { name: "play_harmonica", predicate: animpoint_predicate_harmonica },
  ],
} as any;
