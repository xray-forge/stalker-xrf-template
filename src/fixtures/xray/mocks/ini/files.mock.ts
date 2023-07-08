import { ammo } from "@/engine/lib/constants/items/ammo";
import { detectors } from "@/engine/lib/constants/items/detectors";
import { weapons } from "@/engine/lib/constants/items/weapons";
import { iconTextures } from "@/engine/lib/constants/textures/icon_textures";

/**
 * Mock ini files for testing.
 */
export const FILES_MOCKS = {
  "system.ini": {
    actor: {
      quick_item_1: "qi_1",
      quick_item_2: "qi_2",
      quick_item_3: "qi_3",
      quick_item_4: "qi_4",
    },
    [detectors.detector_advanced]: {
      inv_name: "st_detector2",
    },
    [ammo.ammo_9x18_pmm]: {
      box_size: 30,
    },
    [ammo["ammo_5.45x39_ap"]]: {
      box_size: 30,
    },
    sim_default_first: {},
    sim_default_second: {},
    simulation_first: {},
    first_sim_squad_example: {},
    without_outfit: {},
    outfit_base: {},
    first_outfit: {},
    first_outfit_immunities: {},
    second_outfit: {},
    second_outfit_bones: {},
    up_outfit: {},
    sect_outfit: {},
    prop_outfit: {},
    af_base: {},
    af_first: {},
    af_second: {},
    af_second_absorbation: {},
    af_activation_first: {},
    ammo_base: {},
    helm_first: {},
    helm_second: {},
    [weapons.wpn_ak74]: {
      inv_name: "AK-74",
      strap_bone0: "some_bone",
    },
    [weapons.wpn_svu]: {
      strap_bone0: "some_bone",
    },
    [weapons.grenade_f1]: {},
    squad: {},
  },
  "spawn.ini": {
    story_object: {
      story_id: "test-story-id",
    },
  },
  "object_spawn.ini": {},
  "misc\\script_sound.ltx": {
    list: ["pda_task"],
    pda_task: {
      type: "actor",
      npc_prefix: false,
      path: "device\\pda\\pda_objective",
      shuffle: "rnd",
      idle: "1,1,100",
    },
  },
  "misc\\death_generic.ltx": {
    keep_items: {},
  },
  "misc\\surge_manager.ltx": {
    settings: {
      condlist: "true",
      survive: "{+actor_marked_by_zone_3_times} true, {+anabiotic_in_process} true, false",
    },
  },
  "environment\\dynamic_weather_graphs.ltx": {
    dynamic_default: {
      clear: 0.4,
      cloudy: 0.4,
      rain: 0.1,
      thunder: 0.1,
    },
  },
  "misc\\task_manager.ltx": {
    hide_from_surge: {
      icon: iconTextures.ui_inGame2_Vibros,
      prior: 200,
      title_functor: "surge_task_title",
      descr_functor: "surge_task_descr",
      target_functor: "surge_task_target",
      condlist_0: "{=surge_complete()} complete",
      condlist_1: "{!actor_alive()} fail",
    },
    zat_b28_heli_3_crash: {
      icon: iconTextures.ui_inGame2_Skat_3,
      prior: 103,
      storyline: true,
      title: "zat_b28_heli_3_crash_name",
      descr: "zat_b28_heli_3_crash_text",
      target: "zat_b28_heli_3",
      condlist_0: "{+zat_b28_heli_3_searched} complete",
    },
  },
  "misc\\trade\\trade_generic.ltx": {
    trader: {
      buy_condition: "generic_buy",
      sell_condition: "generic_sell",
    },
    buy_item_condition_factor: 0.7,
    generic_buy: {},
    generic_sell: {},
  },
};
