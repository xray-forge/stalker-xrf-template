import { IAnimationDescriptor } from "@/engine/core/objects/animation/types";
import { createSequence } from "@/engine/core/utils/animation";
import { getExtern } from "@/engine/core/utils/binding";
import { AnyCallablesModule, TName } from "@/engine/lib/types";

/**
 * List of scenario animations.
 */
export const scenarioAnimations: LuaTable<TName, IAnimationDescriptor> = $fromObject<TName, IAnimationDescriptor>({
  zat_b14_give_artefact_idle: {
    prop: {
      maxidle: 1,
      sumidle: 4,
      rnd: 100,
      moving: false,
    },
    into: createSequence(["zat_b14_give_artefact_ible", { a: "af_quest_b14_twisted" }]),
    out: null,
    idle: createSequence("zat_b14_give_artefact_ible"),
    rnd: null,
  },
  zat_b14_give_artefact_act: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: createSequence(["zat_b14_give_artefact_in", { d: "af_quest_b14_twisted" }, "zat_b14_give_artefact_out"]),
    out: null,
    idle: null,
    rnd: null,
  },
  zat_b14_stay_wall: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["animpoint_stay_wall_in_1"]),
    out: createSequence(["animpoint_stay_wall_out_1"]),
    idle: createSequence("animpoint_stay_wall_idle_1"),
    rnd: null,
  },
  zat_b38_stalker_break_lock: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "zat_b38_stalker_break_lock",
      {
        f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").zat_b38_underground_door_open(...args),
      },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  zat_b38_stalker_turn_on_lift: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "zat_b38_stalker_jump_lift_in_1",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").zat_b38_open_info(...args) },
      "zat_b38_stalker_jump_lift_in_2",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").zat_b38_switch_info(...args) },
      "zat_b38_stalker_jump_lift_in_3",
      "zat_b38_stalker_jump_lift_idle",
      "zat_b38_stalker_jump_lift_out",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  zat_b38_stalker_jump_tonnel: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "zat_b38_stalker_jump_tonnel",
      {
        f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").zat_b38_jump_tonnel_info(...args),
      },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  zat_b20_noah_jump: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["zat_b20_noah_jump"]),
    out: null,
    idle: null,
    rnd: null,
  },
  zat_b38_stalker_alert: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    idle: null,
    out: null,
    into: createSequence([
      "zat_b38_stalker_alert",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").pri_a17_ice_climb_end(...args) },
    ]),
    rnd: null,
  },
  pri_a17_ice_climb: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["pri_a17_sniper_climbing"]),
    out: null,
    idle: null,
    rnd: null,
  },
  pri_a17_fall_down: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "ragdoll_sniper_body_front_2",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").pri_a17_preacher_death(...args) },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  pri_a17_pray_in: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "pri_a17_preacher_sermon_in",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").pri_a17_pray_start(...args) },
      "pri_a17_preacher_sermon_out",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  pri_a17_pray: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: null,
    out: null,
    idle: createSequence("pri_a17_preacher_sermon_out"),
    rnd: null,
  },
  dynamite: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: null,
    },
    into: createSequence(["dinamit_1"]),
    out: null,
    rnd: null,
    idle: null,
  },
  bloodsucker_panic: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: null,
    },
    idle: createSequence("norm_alert_attack_0"),
    out: null,
    rnd: null,
    into: null,
  },
  bloodsucker_search: {
    prop: {
      maxidle: 0,
      sumidle: 0,
      rnd: 100,
      moving: null,
    },
    idle: createSequence("norm_alert_idle_0"),
    out: createSequence(["norm_alert_out_0"]),
    rnd: createSequence(["norm_alert_idle_0", "norm_alert_idle_1", "norm_alert_idle_3"]),
    into: createSequence(["norm_alert_in_0"]),
  },
  give_orders: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: null,
    },
    idle: null,
    out: null,
    rnd: null,
    into: createSequence(["norm_alert_idle_0", "norm_alert_command_0"]),
  },
  zat_b22_medic_turn_idle: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: null,
      moving: true,
    },
    into: null,
    out: null,
    idle: createSequence("zat_b22_medic_turn_idle"),
    rnd: null,
  },
  zat_b22_medic_turn_out: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: null,
      moving: true,
    },
    into: createSequence(["zat_b22_medic_turn_out"]),
    out: null,
    idle: null,
    rnd: null,
  },
  zat_b22_medic_suicide: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: null,
      moving: true,
    },
    into: createSequence(["zat_b22_medic_suicide_in"]),
    out: null,
    idle: createSequence("zat_b22_medic_suicide_idle"),
    rnd: null,
  },
  zat_b3_tech_drunk: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["zat_b3_tech_drunk_in"]),
    out: createSequence([
      "zat_b3_tech_drunk_out",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").zat_b3_tech_waked_up(...args) },
    ]),
    idle: createSequence("zat_b3_tech_drunk_idle"),
    rnd: null,
  },
  zat_b3_tech_idle_1: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: null,
    out: null,
    idle: createSequence("zat_b3_tech_idle_1"),
    rnd: null,
  },
  zat_b3_tech_surprise: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "zat_b3_tech_surprise",
      {
        f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").zat_b3_tech_surprise_anim_end(...args),
      },
    ]),
    out: createSequence(["zat_b3_tech_drunk_idle"]),
    idle: createSequence("zat_b3_tech_drunk_idle"),
    rnd: null,
  },
  zat_b3_tech_drink: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["zat_b3_tech_drink_in", { a: "vodka" }]),
    out: createSequence([
      { d: "vodka" },
      "zat_b3_tech_drink_out",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").zat_b3_tech_drinked_out(...args) },
    ]),
    idle: createSequence("zat_b3_tech_drink_idle"),
    rnd: null,
  },
  jup_b10_drunk_ravings: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: null,
    out: null,
    idle: createSequence("zat_b3_tech_drunk_idle"),
    rnd: null,
  },
  pas_b400_vano_probe: {
    prop: {
      maxidle: 0,
      sumidle: 0,
      rnd: 100,
      moving: null,
    },
    into: createSequence(["metering_anomalys_0_draw_0", { a: "detector_elite" }, "metering_anomalys_0_draw_1"]),
    out: createSequence(["metering_anomalys_0_hide_0", { d: "detector_elite" }, "metering_anomalys_0_hide_1"]),
    idle: createSequence("metering_anomalys_0_idle_0"),
    rnd: null,
  },
  pri_a28_kirillov_sit_high_radio: {
    prop: {
      maxidle: 0,
      sumidle: 0,
      rnd: 100,
      moving: false,
    },
    into: createSequence([
      "pri_a28_kirillov_radio_on_in",
      {
        f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").pri_a28_kirillov_hq_online(...args),
      },
    ]),
    out: createSequence(["pri_a28_kirillov_radio_on_out"]),
    idle: createSequence("pri_a28_kirillov_radio_on_idle"),
    rnd: null,
  },
  pri_a18_inspert_monolit_actor: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: null,
      moving: true,
    },
    into: createSequence([
      { a: "hand_radio_r" },
      "pri_a18_inspert_monolit_actor_in",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").pri_a18_radio_start(...args) },
      "pri_a18_inspert_monolit_actor_idle",
      "pri_a18_inspert_monolit_actor_idle",
      "pri_a18_inspert_monolit_actor_idle",
      "pri_a18_inspert_monolit_actor_out",
      { d: "hand_radio_r" },
    ]),
    idle: null,
    out: null,
    rnd: null,
  },
  pri_a21_sentry_madness: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: null,
      moving: true,
    },
    into: null,
    out: null,
    idle: createSequence("pri_a21_sentry_madness_idle"),
    rnd: null,
  },
  pri_a21_sentry_madness_suicide: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: null,
      moving: true,
    },
    into: createSequence(["pri_a21_sentry_madness_suicide"]),
    out: null,
    idle: createSequence("pri_a21_sentry_madness_suicide_idle"),
    rnd: null,
  },
  pri_a22_colonel_lean_on_table_in: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["pri_a22_colonel_lean_on_tadl_in"]),
    out: null,
    idle: createSequence("pri_a22_colonel_lean_on_tadl_idle"),
    rnd: null,
  },
  pri_a22_colonel_lean_on_table_idle: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: null,
    out: null,
    idle: createSequence("pri_a22_colonel_lean_on_tadl_idle"),
    rnd: null,
  },
  pri_a22_colonel_stand_from_table: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["pri_a22_colonel_lean_on_tadl_out"]),
    out: null,
    idle: null,
    rnd: null,
  },
  pri_a28_army_trance_out: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: null,
      moving: true,
    },
    into: createSequence(["pri_a28_army_trance_out_in"]),
    out: createSequence(["pri_a28_army_trance_out_out"]),
    idle: createSequence("pri_a28_army_trance_out_idle"),
    rnd: null,
  },
  zat_b106_wounded_idle: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: null,
    out: null,
    idle: createSequence("cut_scene_0_actor_1"),
    rnd: null,
  },
  zat_b38_cop_dead: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "cut_scene_0_actor",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").zat_b38_cop_dead(...args) },
    ]),
    out: null,
    idle: createSequence("cut_scene_0_actor"),
    rnd: null,
  },
  jup_b15_zulus_sit_drink: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b15_zulus_sit_drink_in",
      { a: "vodka" },
      "jup_b15_zulus_sit_drink_idle",
      { d: "vodka" },
      "jup_b15_zulus_sit_drink_out",
      {
        f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b15_zulus_drink_anim_info(...args),
      },
    ]),
    out: null,
    idle: createSequence("jup_b15_zulus_sit_idle_short"),
    rnd: null,
  },
  jup_b15_zulus_sit_idle: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: null,
    out: null,
    idle: createSequence("jup_b15_zulus_sit_idle"),
    rnd: null,
  },
  jup_b15_zulus_sit_idle_short: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: null,
    out: null,
    idle: createSequence("jup_b15_zulus_sit_idle_short"),
    rnd: null,
  },
  jup_b15_zulus_sit_out: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: null,
    out: null,
    idle: createSequence("jup_b15_zulus_sit_out"),
    rnd: null,
  },
  jup_b219_actor_one: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(
      [
        "jup_b219_descent_actor_1",
        "jup_b219_descent_actor_2",
        "jup_b219_descent_actor_3",
        "jup_b219_descent_actor_4",
        { s: "jup_b219_actor_ready" },
        "jup_b219_descent_actor_8",
        { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
        "jup_b219_descent_actor_9",
        { s: "jup_b219_actor_go" },
        "jup_b219_descent_actor_10",
      ],
      [
        "jup_b219_descent_actor_1",
        "jup_b219_descent_actor_2",
        "jup_b219_descent_actor_3",
        "jup_b219_descent_actor_4",
        { s: "jup_b219_actor_ready" },
        "jup_b219_descent_actor_8",
        { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
        "jup_b219_descent_actor_9",
        { s: "jup_b219_actor_go" },
        "jup_b219_descent_actor_10",
      ]
    ),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_actor_one_vano: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_actor_1",
      "jup_b219_descent_actor_2",
      "jup_b219_descent_actor_3",
      "jup_b219_descent_actor_4",
      "jup_b219_descent_actor_5",
      { s: "jup_b219_actor_ready" },
      "jup_b219_descent_actor_8",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
      "jup_b219_descent_actor_9",
      { s: "jup_b219_actor_go" },
      "jup_b219_descent_actor_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_actor_one_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_actor_1",
      "jup_b219_descent_actor_2",
      "jup_b219_descent_actor_3",
      "jup_b219_descent_actor_4",
      "jup_b219_descent_actor_6",
      { s: "jup_b219_actor_ready" },
      "jup_b219_descent_actor_8",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
      "jup_b219_descent_actor_9",
      { s: "jup_b219_actor_go" },
      "jup_b219_descent_actor_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_actor_one_soldier: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_actor_1",
      "jup_b219_descent_actor_2",
      "jup_b219_descent_actor_3",
      "jup_b219_descent_actor_4",
      "jup_b219_descent_actor_7",
      { s: "jup_b219_actor_ready" },
      "jup_b219_descent_actor_8",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
      "jup_b219_descent_actor_9",
      { s: "jup_b219_actor_go" },
      "jup_b219_descent_actor_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_actor_all: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_actor_1",
      "jup_b219_descent_actor_2",
      "jup_b219_descent_actor_3",
      "jup_b219_descent_actor_4",
      "jup_b219_descent_actor_5",
      "jup_b219_descent_actor_6",
      "jup_b219_descent_actor_7",
      { s: "jup_b219_actor_ready" },
      "jup_b219_descent_actor_8",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
      "jup_b219_descent_actor_9",
      { s: "jup_b219_actor_go" },
      "jup_b219_descent_actor_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_actor_soldier_vano: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_actor_1",
      "jup_b219_descent_actor_2",
      "jup_b219_descent_actor_3",
      "jup_b219_descent_actor_4",
      "jup_b219_descent_actor_5",
      "jup_b219_descent_actor_7",
      { s: "jup_b219_actor_ready" },
      "jup_b219_descent_actor_8",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
      "jup_b219_descent_actor_9",
      { s: "jup_b219_actor_go" },
      "jup_b219_descent_actor_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_actor_soldier_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_actor_1",
      "jup_b219_descent_actor_2",
      "jup_b219_descent_actor_3",
      "jup_b219_descent_actor_4",
      "jup_b219_descent_actor_6",
      "jup_b219_descent_actor_7",
      { s: "jup_b219_actor_ready" },
      "jup_b219_descent_actor_8",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
      "jup_b219_descent_actor_9",
      { s: "jup_b219_actor_go" },
      "jup_b219_descent_actor_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_actor_vano_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_actor_1",
      "jup_b219_descent_actor_2",
      "jup_b219_descent_actor_3",
      "jup_b219_descent_actor_4",
      "jup_b219_descent_actor_5",
      "jup_b219_descent_actor_6",
      { s: "jup_b219_actor_ready" },
      "jup_b219_descent_actor_8",
      { f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_b219_opening(...args) },
      "jup_b219_descent_actor_9",
      { s: "jup_b219_actor_go" },
      "jup_b219_descent_actor_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_zulus_one: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_duty_1",
      "jup_b219_descent_duty_2",
      "jup_b219_descent_duty_3",
      { s: "jup_b219_duty_ready" },
      "jup_b219_descent_duty_4",
      "jup_b219_descent_duty_8",
      "jup_b219_descent_duty_9",
      "jup_b219_descent_duty_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_zulus_one_vano: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_duty_1",
      "jup_b219_descent_duty_2",
      "jup_b219_descent_duty_3",
      { s: "jup_b219_duty_ready" },
      "jup_b219_descent_duty_4",
      "jup_b219_descent_duty_5",
      "jup_b219_descent_duty_8",
      "jup_b219_descent_duty_9",
      "jup_b219_descent_duty_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_zulus_one_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_duty_1",
      "jup_b219_descent_duty_2",
      "jup_b219_descent_duty_3",
      { s: "jup_b219_duty_ready" },
      "jup_b219_descent_duty_4",
      "jup_b219_descent_duty_6",
      "jup_b219_descent_duty_8",
      "jup_b219_descent_duty_9",
      "jup_b219_descent_duty_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_zulus_one_soldier: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_duty_1",
      "jup_b219_descent_duty_2",
      "jup_b219_descent_duty_3",
      { s: "jup_b219_duty_ready" },
      "jup_b219_descent_duty_4",
      "jup_b219_descent_duty_7",
      "jup_b219_descent_duty_8",
      "jup_b219_descent_duty_9",
      "jup_b219_descent_duty_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_zulus_all: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_duty_1",
      "jup_b219_descent_duty_2",
      "jup_b219_descent_duty_3",
      { s: "jup_b219_duty_ready" },
      "jup_b219_descent_duty_4",
      "jup_b219_descent_duty_5",
      "jup_b219_descent_duty_6",
      "jup_b219_descent_duty_7",
      "jup_b219_descent_duty_8",
      "jup_b219_descent_duty_9",
      "jup_b219_descent_duty_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_zulus_soldier_vano: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_duty_1",
      "jup_b219_descent_duty_2",
      "jup_b219_descent_duty_3",
      { s: "jup_b219_duty_ready" },
      "jup_b219_descent_duty_4",
      "jup_b219_descent_duty_5",
      "jup_b219_descent_duty_7",
      "jup_b219_descent_duty_8",
      "jup_b219_descent_duty_9",
      "jup_b219_descent_duty_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_zulus_soldier_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_duty_1",
      "jup_b219_descent_duty_2",
      "jup_b219_descent_duty_3",
      { s: "jup_b219_duty_ready" },
      "jup_b219_descent_duty_4",
      "jup_b219_descent_duty_6",
      "jup_b219_descent_duty_7",
      "jup_b219_descent_duty_8",
      "jup_b219_descent_duty_9",
      "jup_b219_descent_duty_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_zulus_vano_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_duty_1",
      "jup_b219_descent_duty_2",
      "jup_b219_descent_duty_3",
      { s: "jup_b219_duty_ready" },
      "jup_b219_descent_duty_4",
      "jup_b219_descent_duty_5",
      "jup_b219_descent_duty_6",
      "jup_b219_descent_duty_8",
      "jup_b219_descent_duty_9",
      "jup_b219_descent_duty_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_soldier_one: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_soldier_1",
      "jup_b219_descent_soldier_2",
      "jup_b219_descent_soldier_3",
      "jup_b219_descent_soldier_4",
      { s: "jup_b219_soldier_ready" },
      "jup_b219_descent_soldier_7",
      "jup_b219_descent_soldier_8",
      "jup_b219_descent_soldier_9",
      "jup_b219_descent_soldier_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_soldier_all: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_soldier_1",
      "jup_b219_descent_soldier_2",
      "jup_b219_descent_soldier_3",
      "jup_b219_descent_soldier_4",
      "jup_b219_descent_soldier_5",
      "jup_b219_descent_soldier_6",
      { s: "jup_b219_soldier_ready" },
      "jup_b219_descent_soldier_7",
      "jup_b219_descent_soldier_8",
      "jup_b219_descent_soldier_9",
      "jup_b219_descent_soldier_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_soldier_soldier_vano: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_soldier_1",
      "jup_b219_descent_soldier_2",
      "jup_b219_descent_soldier_3",
      "jup_b219_descent_soldier_4",
      "jup_b219_descent_soldier_5",
      { s: "jup_b219_soldier_ready" },
      "jup_b219_descent_soldier_7",
      "jup_b219_descent_soldier_8",
      "jup_b219_descent_soldier_9",
      "jup_b219_descent_soldier_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_soldier_soldier_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_soldier_1",
      "jup_b219_descent_soldier_2",
      "jup_b219_descent_soldier_3",
      "jup_b219_descent_soldier_4",
      "jup_b219_descent_soldier_6",
      { s: "jup_b219_soldier_ready" },
      "jup_b219_descent_soldier_7",
      "jup_b219_descent_soldier_8",
      "jup_b219_descent_soldier_9",
      "jup_b219_descent_soldier_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_monolith_one: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_monolit_1",
      "jup_b219_descent_monolit_2",
      "jup_b219_descent_monolit_3",
      "jup_b219_descent_monolit_4",
      { s: "jup_b219_monolith_ready" },
      "jup_b219_descent_monolit_6",
      "jup_b219_descent_monolit_8",
      "jup_b219_descent_monolit_9",
      "jup_b219_descent_monolit_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_monolith_all: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_monolit_1",
      "jup_b219_descent_monolit_2",
      "jup_b219_descent_monolit_3",
      "jup_b219_descent_monolit_4",
      "jup_b219_descent_monolit_5",
      { s: "jup_b219_monolith_ready" },
      "jup_b219_descent_monolit_6",
      "jup_b219_descent_monolit_7",
      "jup_b219_descent_monolit_8",
      "jup_b219_descent_monolit_9",
      "jup_b219_descent_monolit_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_monolith_soldier_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_monolit_1",
      "jup_b219_descent_monolit_2",
      "jup_b219_descent_monolit_3",
      "jup_b219_descent_monolit_4",
      { s: "jup_b219_monolith_ready" },
      "jup_b219_descent_monolit_6",
      "jup_b219_descent_monolit_7",
      "jup_b219_descent_monolit_8",
      "jup_b219_descent_monolit_9",
      "jup_b219_descent_monolit_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_monolith_vano_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_monolit_1",
      "jup_b219_descent_monolit_2",
      "jup_b219_descent_monolit_3",
      "jup_b219_descent_monolit_4",
      "jup_b219_descent_monolit_5",
      { s: "jup_b219_monolith_ready" },
      "jup_b219_descent_monolit_6",
      "jup_b219_descent_monolit_8",
      "jup_b219_descent_monolit_9",
      "jup_b219_descent_monolit_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_vano_one: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_stalker_1",
      "jup_b219_descent_stalker_2",
      "jup_b219_descent_stalker_3",
      "jup_b219_descent_stalker_4",
      { s: "jup_b219_stalker_ready" },
      "jup_b219_descent_stalker_5",
      "jup_b219_descent_stalker_8",
      "jup_b219_descent_stalker_9",
      "jup_b219_descent_stalker_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_vano_all: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_stalker_1",
      "jup_b219_descent_stalker_2",
      "jup_b219_descent_stalker_3",
      "jup_b219_descent_stalker_4",
      { s: "jup_b219_stalker_ready" },
      "jup_b219_descent_stalker_5",
      "jup_b219_descent_stalker_6",
      "jup_b219_descent_stalker_7",
      "jup_b219_descent_stalker_8",
      "jup_b219_descent_stalker_9",
      "jup_b219_descent_stalker_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_vano_soldier_vano: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_stalker_1",
      "jup_b219_descent_stalker_2",
      "jup_b219_descent_stalker_3",
      "jup_b219_descent_stalker_4",
      { s: "jup_b219_stalker_ready" },
      "jup_b219_descent_stalker_5",
      "jup_b219_descent_stalker_7",
      "jup_b219_descent_stalker_8",
      "jup_b219_descent_stalker_9",
      "jup_b219_descent_stalker_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_vano_vano_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      "jup_b219_descent_stalker_1",
      "jup_b219_descent_stalker_2",
      "jup_b219_descent_stalker_3",
      "jup_b219_descent_stalker_4",
      { s: "jup_b219_stalker_ready" },
      "jup_b219_descent_stalker_5",
      "jup_b219_descent_stalker_6",
      "jup_b219_descent_stalker_8",
      "jup_b219_descent_stalker_9",
      "jup_b219_descent_stalker_10",
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_azot_one: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      { s: "jup_b219_tech_damn" },
      "jup_b219_descent_tech_1",
      { s: "jup_b219_tech_success" },
      "jup_b219_descent_tech_1_1",
      "jup_b219_descent_tech_2",
      { s: "jup_b219_tech_ready" },
      "jup_b219_descent_tech_3",
      "jup_b219_descent_tech_4",
      "jup_b219_descent_tech_8",
      { s: "jup_b219_tech_opening" },
      "jup_b219_descent_tech_9",
      "jup_b219_descent_tech_10",
      { s: "jup_b219_tech_to_duty" },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_azot_one_vano: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      { s: "jup_b219_tech_damn" },
      "jup_b219_descent_tech_1",
      { s: "jup_b219_tech_success" },
      "jup_b219_descent_tech_1_1",
      "jup_b219_descent_tech_2",
      { s: "jup_b219_tech_ready" },
      "jup_b219_descent_tech_3",
      "jup_b219_descent_tech_4",
      "jup_b219_descent_tech_5",
      "jup_b219_descent_tech_8",
      { s: "jup_b219_tech_opening" },
      "jup_b219_descent_tech_9",
      "jup_b219_descent_tech_10",
      { s: "jup_b219_tech_to_duty" },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_azot_one_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      { s: "jup_b219_tech_damn" },
      "jup_b219_descent_tech_1",
      { s: "jup_b219_tech_success" },
      "jup_b219_descent_tech_1_1",
      "jup_b219_descent_tech_2",
      { s: "jup_b219_tech_ready" },
      "jup_b219_descent_tech_3",
      "jup_b219_descent_tech_4",
      "jup_b219_descent_tech_6",
      "jup_b219_descent_tech_8",
      { s: "jup_b219_tech_opening" },
      "jup_b219_descent_tech_9",
      "jup_b219_descent_tech_10",
      { s: "jup_b219_tech_to_duty" },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_azot_one_soldier: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      { s: "jup_b219_tech_damn" },
      "jup_b219_descent_tech_1",
      { s: "jup_b219_tech_success" },
      "jup_b219_descent_tech_1_1",
      "jup_b219_descent_tech_2",
      { s: "jup_b219_tech_ready" },
      "jup_b219_descent_tech_3",
      "jup_b219_descent_tech_4",
      "jup_b219_descent_tech_7",
      "jup_b219_descent_tech_8",
      { s: "jup_b219_tech_opening" },
      "jup_b219_descent_tech_9",
      "jup_b219_descent_tech_10",
      { s: "jup_b219_tech_to_duty" },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_azot_soldier_vano: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      { s: "jup_b219_tech_damn" },
      "jup_b219_descent_tech_1",
      { s: "jup_b219_tech_success" },
      "jup_b219_descent_tech_1_1",
      "jup_b219_descent_tech_2",
      { s: "jup_b219_tech_ready" },
      "jup_b219_descent_tech_3",
      "jup_b219_descent_tech_4",
      "jup_b219_descent_tech_5",
      "jup_b219_descent_tech_7",
      "jup_b219_descent_tech_8",
      { s: "jup_b219_tech_opening" },
      "jup_b219_descent_tech_9",
      "jup_b219_descent_tech_10",
      { s: "jup_b219_tech_to_duty" },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_azot_soldier_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      { s: "jup_b219_tech_damn" },
      "jup_b219_descent_tech_1",
      { s: "jup_b219_tech_success" },
      "jup_b219_descent_tech_1_1",
      "jup_b219_descent_tech_2",
      { s: "jup_b219_tech_ready" },
      "jup_b219_descent_tech_3",
      "jup_b219_descent_tech_4",
      "jup_b219_descent_tech_6",
      "jup_b219_descent_tech_7",
      "jup_b219_descent_tech_8",
      { s: "jup_b219_tech_opening" },
      "jup_b219_descent_tech_9",
      "jup_b219_descent_tech_10",
      { s: "jup_b219_tech_to_duty" },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_azot_vano_monolith: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      { s: "jup_b219_tech_damn" },
      "jup_b219_descent_tech_1",
      { s: "jup_b219_tech_success" },
      "jup_b219_descent_tech_1_1",
      "jup_b219_descent_tech_2",
      { s: "jup_b219_tech_ready" },
      "jup_b219_descent_tech_3",
      "jup_b219_descent_tech_4",
      "jup_b219_descent_tech_5",
      "jup_b219_descent_tech_6",
      "jup_b219_descent_tech_8",
      { s: "jup_b219_tech_opening" },
      "jup_b219_descent_tech_9",
      "jup_b219_descent_tech_10",
      { s: "jup_b219_tech_to_duty" },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b219_azot_all: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence([
      { s: "jup_b219_tech_damn" },
      "jup_b219_descent_tech_1",
      { s: "jup_b219_tech_success" },
      "jup_b219_descent_tech_1_1",
      "jup_b219_descent_tech_2",
      { s: "jup_b219_tech_ready" },
      "jup_b219_descent_tech_3",
      "jup_b219_descent_tech_4",
      "jup_b219_descent_tech_5",
      "jup_b219_descent_tech_6",
      "jup_b219_descent_tech_7",
      "jup_b219_descent_tech_8",
      { s: "jup_b219_tech_opening" },
      "jup_b219_descent_tech_9",
      "jup_b219_descent_tech_10",
      { s: "jup_b219_tech_to_duty" },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  zat_b100_heli_2_serch: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: createSequence([{ a: "device_pda" }, "zat_b100_heli_2_serch"]),
    out: null,
    idle: createSequence("zat_b100_heli_2_serch"),
    rnd: null,
  },
  zat_b101_heli_5_serch: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: createSequence([{ a: "device_pda" }, "zat_b101_heli_5_serch"]),
    out: null,
    idle: createSequence("zat_b101_heli_5_serch"),
    rnd: null,
  },
  zat_b28_heli3_serch: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: createSequence([{ a: "device_pda" }, "zat_b28_heli3_serch"]),
    out: null,
    idle: createSequence("zat_b28_heli3_serch"),
    rnd: null,
  },
  jup_b217_guide_stand: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["jup_b217_guide_stand"]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b217_nitro_stand: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["jup_b217_nitro_stand"]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b41_novikov_stand: {
    prop: {
      maxidle: 10,
      sumidle: 8,
      rnd: 80,
      moving: true,
    },
    into: createSequence(["lead_1_in_0"]),
    out: createSequence(["lead_1_out_0"]),
    idle: createSequence("lead_1_idle"),
    rnd: createSequence([
      "lead_1_idle_0",
      "lead_1_idle_1",
      "lead_1_idle_2",
      "lead_1_idle_3",
      "lead_1_idle_4",
      "lead_1_idle_5",
    ]),
  },
  pri_b305_actor: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: true,
    },
    into: createSequence(["pri_b305_actor"]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_a9_cam1_actor: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: createSequence([
      "poisk_8_idle_2",
      {
        f: (...args: Array<any>) => getExtern<AnyCallablesModule>("xr_effects").jup_a9_cam1_actor_anim_end(...args),
      },
    ]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_a9_cam2_actor: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: createSequence(["poisk_2_idle_1"]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_a9_cam3_actor: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: createSequence(["poisk_2_idle_1"]),
    out: null,
    idle: null,
    rnd: null,
  },
  jup_b217_nitro_straight: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: null,
    out: null,
    idle: createSequence("idle_0_idle_1"),
    rnd: null,
  },
  pri_a25_psy_medic_idle: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: null, // --{	[0]	= {"psy_0_idle_0"} },
    out: null, // --{	[0]	= {"psy_0_idle_0_to_idle_0"} },
    idle: createSequence("psy_0_idle_0"),
    rnd: null,
  },
  pri_a25_psy_medic_out: {
    prop: {
      maxidle: 1,
      sumidle: 1,
      rnd: 100,
      moving: false,
    },
    into: createSequence(["psy_0_idle_0_to_idle_0"]),
    out: null, // --{	[0]	= {"psy_0_idle_0_to_idle_0"} },
    idle: null, // --{	[0]	= "psy_0_idle_0" },
    rnd: null,
  },
});
