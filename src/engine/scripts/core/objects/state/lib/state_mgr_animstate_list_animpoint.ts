import { AnyArgs, AnyCallablesModule } from "@/engine/lib/types";
import { IAnimationStateDescriptor } from "@/engine/scripts/core/objects/state/lib/state_mgr_animstate_list";
import { getExtern } from "@/engine/scripts/utils/binding";

export function add_animstate_animation_list(): LuaTable<string, IAnimationStateDescriptor> {
  return {
    animpoint_stay_wall: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_stay_wall_in_1"],
        [1]: ["animpoint_stay_wall_in_1"],
      },
      out: {
        [0]: ["animpoint_stay_wall_out_1"],
        [1]: ["animpoint_stay_wall_out_1"],
      },
      idle: {
        [0]: "animpoint_stay_wall_idle_1",
        [1]: "animpoint_stay_wall_idle_1",
      },
      rnd: {
        [0]: ["animpoint_stay_wall_idle_1"],
        [1]: ["animpoint_stay_wall_idle_1"],
      },
    },

    animpoint_stay_table: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_stay_table_in_1"],
        [1]: ["animpoint_stay_table_in_1"],
      },
      out: {
        [0]: ["animpoint_stay_table_out_1"],
        [1]: ["animpoint_stay_table_out_1"],
      },
      idle: {
        [0]: "animpoint_stay_table_idle_1",
        [1]: "animpoint_stay_table_idle_1",
      },
      rnd: null,
    },

    animpoint_sit_high: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_sit_high_in_1"],
        [1]: ["animpoint_sit_high_in_1"],
      },
      out: {
        [0]: ["animpoint_sit_high_out_1"],
        [1]: ["animpoint_sit_high_out_1"],
      },
      idle: {
        [0]: "animpoint_sit_high_idle_1",
        [1]: "animpoint_sit_high_idle_1",
      },
      rnd: null,
    },

    animpoint_sit_normal: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_sit_normal_in_1"],
        [1]: ["animpoint_sit_normal_in_1"],
      },
      out: {
        [0]: ["animpoint_sit_normal_out_1"],
        [1]: ["animpoint_sit_normal_out_1"],
      },
      idle: {
        [0]: "animpoint_sit_normal_idle_1",
        [1]: "animpoint_sit_normal_idle_1",
      },
      rnd: null,
    },

    animpoint_sit_low: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_sit_low_in_1"],
        [1]: ["animpoint_sit_low_in_1"],
      },
      out: {
        [0]: ["animpoint_sit_low_out_1"],
        [1]: ["animpoint_sit_low_out_1"],
      },
      idle: {
        [0]: "animpoint_sit_low_idle_1",
        [1]: "animpoint_sit_low_idle_1",
      },
      rnd: null,
    },

    animpoint_stay_wall_weapon: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_stay_wall_weapon_in_1"],
        [1]: ["animpoint_stay_wall_weapon_in_1"],
      },
      out: {
        [0]: ["animpoint_stay_wall_weapon_out_1"],
        [1]: ["animpoint_stay_wall_weapon_out_1"],
      },
      idle: {
        [0]: "animpoint_stay_wall_weapon_idle_1",
        [1]: "animpoint_stay_wall_weapon_idle_1",
      },
      rnd: {
        [0]: [
          "animpoint_stay_wall_weapon_idle_rnd_1",
          "animpoint_stay_wall_weapon_idle_rnd_2",
          "animpoint_stay_wall_weapon_idle_rnd_3",
          "animpoint_stay_wall_weapon_idle_rnd_4",
        ],
        [1]: [
          "animpoint_stay_wall_weapon_idle_rnd_1",
          "animpoint_stay_wall_weapon_idle_rnd_2",
          "animpoint_stay_wall_weapon_idle_rnd_3",
          "animpoint_stay_wall_weapon_idle_rnd_4",
        ],
      },
    },

    animpoint_stay_table_weapon: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_stay_table_weapon_in_1"],
        [1]: ["animpoint_stay_table_weapon_in_1"],
      },
      out: {
        [0]: ["animpoint_stay_table_weapon_out_1"],
        [1]: ["animpoint_stay_table_weapon_out_1"],
      },
      idle: {
        [0]: "animpoint_stay_table_weapon_idle_1",
        [1]: "animpoint_stay_table_weapon_idle_1",
      },
      rnd: {
        [0]: [
          "animpoint_stay_table_weapon_idle_rnd_1",
          "animpoint_stay_table_weapon_idle_rnd_2",
          "animpoint_stay_table_weapon_idle_rnd_3",
          "animpoint_stay_table_weapon_idle_rnd_4",
          "animpoint_stay_table_weapon_idle_rnd_5",
          "animpoint_stay_table_weapon_idle_rnd_6",
        ],
        [1]: [
          "animpoint_stay_table_weapon_idle_rnd_1",
          "animpoint_stay_table_weapon_idle_rnd_2",
          "animpoint_stay_table_weapon_idle_rnd_3",
          "animpoint_stay_table_weapon_idle_rnd_4",
          "animpoint_stay_table_weapon_idle_rnd_5",
          "animpoint_stay_table_weapon_idle_rnd_6",
        ],
      },
    },

    animpoint_sit_high_weapon: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_sit_high_weapon_in_1"],
        [1]: ["animpoint_sit_high_weapon_in_1"],
      },
      out: {
        [0]: ["animpoint_sit_high_weapon_out_1"],
        [1]: ["animpoint_sit_high_weapon_out_1"],
      },
      idle: {
        [0]: "animpoint_sit_high_weapon_idle_1",
        [1]: "animpoint_sit_high_weapon_idle_1",
      },
      rnd: {
        [0]: [
          "animpoint_sit_high_weapon_idle_rnd_1",
          "animpoint_sit_high_weapon_idle_rnd_2",
          "animpoint_sit_high_weapon_idle_rnd_3",
          "animpoint_sit_high_weapon_idle_rnd_4",
          "animpoint_sit_high_weapon_idle_rnd_5",
          "animpoint_sit_high_weapon_idle_rnd_6",
        ],
        [1]: [
          "animpoint_sit_high_weapon_idle_rnd_1",
          "animpoint_sit_high_weapon_idle_rnd_2",
          "animpoint_sit_high_weapon_idle_rnd_3",
          "animpoint_sit_high_weapon_idle_rnd_4",
          "animpoint_sit_high_weapon_idle_rnd_5",
          "animpoint_sit_high_weapon_idle_rnd_6",
        ],
      },
    },

    animpoint_sit_normal_weapon: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_sit_normal_weapon_in_1"],
        [1]: ["animpoint_sit_normal_weapon_in_1"],
      },
      out: {
        [0]: ["animpoint_sit_normal_weapon_out_1"],
        [1]: ["animpoint_sit_normal_weapon_out_1"],
      },
      idle: {
        [0]: "animpoint_sit_normal_weapon_idle_1",
        [1]: "animpoint_sit_normal_weapon_idle_1",
      },
      rnd: {
        [0]: [
          "animpoint_sit_normal_weapon_idle_rnd_1",
          "animpoint_sit_normal_weapon_idle_rnd_2",
          "animpoint_sit_normal_weapon_idle_rnd_3",
          "animpoint_sit_normal_weapon_idle_rnd_4",
          "animpoint_sit_normal_weapon_idle_rnd_5",
          "animpoint_sit_normal_weapon_idle_rnd_6",
        ],
        [1]: [
          "animpoint_sit_normal_weapon_idle_rnd_1",
          "animpoint_sit_normal_weapon_idle_rnd_2",
          "animpoint_sit_normal_weapon_idle_rnd_3",
          "animpoint_sit_normal_weapon_idle_rnd_4",
          "animpoint_sit_normal_weapon_idle_rnd_5",
          "animpoint_sit_normal_weapon_idle_rnd_6",
        ],
      },
    },

    animpoint_sit_low_weapon: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
        moving: true,
      },
      into: {
        [0]: ["animpoint_sit_low_weapon_in_1"],
        [1]: ["animpoint_sit_low_weapon_in_1"],
      },
      out: {
        [0]: ["animpoint_sit_low_weapon_out_1"],
        [1]: ["animpoint_sit_low_weapon_out_1"],
      },
      idle: {
        [0]: "animpoint_sit_low_weapon_idle_1",
        [1]: "animpoint_sit_low_weapon_idle_1",
      },
      rnd: {
        [0]: [
          "animpoint_sit_low_weapon_idle_rnd_1",
          "animpoint_sit_low_weapon_idle_rnd_2",
          "animpoint_sit_low_weapon_idle_rnd_3",
          "animpoint_sit_low_weapon_idle_rnd_4",
          "animpoint_sit_low_weapon_idle_rnd_5",
          "animpoint_sit_low_weapon_idle_rnd_6",
        ],
        [1]: [
          "animpoint_sit_low_weapon_idle_rnd_1",
          "animpoint_sit_low_weapon_idle_rnd_2",
          "animpoint_sit_low_weapon_idle_rnd_3",
          "animpoint_sit_low_weapon_idle_rnd_4",
          "animpoint_sit_low_weapon_idle_rnd_5",
          "animpoint_sit_low_weapon_idle_rnd_6",
        ],
      },
    },

    zat_b3_tech_idle: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true,
      },
      into: null,
      out: null,
      idle: {
        [0]: "zat_b3_tech_idle",
        [1]: "zat_b3_tech_idle",
      },
      rnd: null,
    },

    zat_b22_medic_turn_idle: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true,
      },
      into: null,
      out: null,
      idle: {
        [0]: "zat_b22_medic_turn_idle",
        [1]: "zat_b22_medic_turn_idle",
      },
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
      idle: {
        [0]: "jup_b15_zulus_sit_idle_short",
        [1]: "jup_b15_zulus_sit_idle_short",
      },
      rnd: null,
    },

    pri_a21_sentry_madness_idle: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true,
      },
      into: null,
      out: null,
      idle: {
        [0]: "pri_a21_sentry_madness_idle",
        [1]: "pri_a21_sentry_madness_idle",
      },
      rnd: null,
    },

    pri_a20_colonel_radio: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true,
      },
      into: {
        [0]: [
          "pri_a20_colonel_radio_in",
          { f: (...args: AnyArgs) => getExtern<AnyCallablesModule>("xr_effects").pri_a20_radio_start(...args) },
        ],
      },
      out: { [0]: ["pri_a20_colonel_radio_out"] },
      idle: { [0]: "pri_a20_colonel_radio_idle" },
      rnd: null,
    },

    pri_a22_colonel_lean_on_table: {
      prop: {
        maxidle: 1,
        sumidle: 1,
        rnd: 100,
        moving: true,
      },
      into: {
        [0]: [
          "pri_a22_colonel_lean_on_tabl_in",
          { f: (...args: AnyArgs) => getExtern<AnyCallablesModule>("xr_effects").pri_a22_kovalski_speak(...args) },
        ],
      },
      out: { [0]: ["pri_a22_colonel_lean_on_tabl_out"] },
      idle: { [0]: "pri_a22_colonel_lean_on_tabl_idle" },
      rnd: null,
    },
  } as any;
}
