import { describe, expect, it } from "@jest/globals";

import { scenarioAnimations } from "@/engine/core/objects/animation/animations/scenarios";
import { assertArraysIntersecting } from "@/fixtures/engine";
import { mockFromLuaTable } from "@/fixtures/lua";

describe("scenario animations list", () => {
  it("should list all needed animations", () => {
    expect(scenarioAnimations.length()).toBe(88);

    assertArraysIntersecting(mockFromLuaTable(scenarioAnimations).getKeysArray(), [
      "zat_b14_give_artefact_idle",
      "zat_b14_give_artefact_act",
      "zat_b14_stay_wall",
      "zat_b38_stalker_break_lock",
      "zat_b38_stalker_turn_on_lift",
      "zat_b38_stalker_jump_tonnel",
      "zat_b20_noah_jump",
      "zat_b38_stalker_alert",
      "pri_a17_ice_climb",
      "pri_a17_fall_down",
      "pri_a17_pray_in",
      "pri_a17_pray",
      "dynamite",
      "bloodsucker_panic",
      "bloodsucker_search",
      "give_orders",
      "zat_b22_medic_turn_idle",
      "zat_b22_medic_turn_out",
      "zat_b22_medic_suicide",
      "zat_b3_tech_drunk",
      "zat_b3_tech_idle_1",
      "zat_b3_tech_surprise",
      "zat_b3_tech_drink",
      "jup_b10_drunk_ravings",
      "pas_b400_vano_probe",
      "pri_a28_kirillov_sit_high_radio",
      "pri_a18_inspert_monolit_actor",
      "pri_a21_sentry_madness",
      "pri_a21_sentry_madness_suicide",
      "pri_a22_colonel_lean_on_table_in",
      "pri_a22_colonel_lean_on_table_idle",
      "pri_a22_colonel_stand_from_table",
      "pri_a28_army_trance_out",
      "zat_b106_wounded_idle",
      "zat_b38_cop_dead",
      "jup_b15_zulus_sit_drink",
      "jup_b15_zulus_sit_idle",
      "jup_b15_zulus_sit_idle_short",
      "jup_b15_zulus_sit_out",
      "jup_b219_actor_one",
      "jup_b219_actor_one_vano",
      "jup_b219_actor_one_monolith",
      "jup_b219_actor_one_soldier",
      "jup_b219_actor_all",
      "jup_b219_actor_soldier_vano",
      "jup_b219_actor_soldier_monolith",
      "jup_b219_actor_vano_monolith",
      "jup_b219_zulus_one",
      "jup_b219_zulus_one_vano",
      "jup_b219_zulus_one_monolith",
      "jup_b219_zulus_one_soldier",
      "jup_b219_zulus_all",
      "jup_b219_zulus_soldier_vano",
      "jup_b219_zulus_soldier_monolith",
      "jup_b219_zulus_vano_monolith",
      "jup_b219_soldier_one",
      "jup_b219_soldier_all",
      "jup_b219_soldier_soldier_vano",
      "jup_b219_soldier_soldier_monolith",
      "jup_b219_monolith_one",
      "jup_b219_monolith_all",
      "jup_b219_monolith_soldier_monolith",
      "jup_b219_monolith_vano_monolith",
      "jup_b219_vano_one",
      "jup_b219_vano_all",
      "jup_b219_vano_soldier_vano",
      "jup_b219_vano_vano_monolith",
      "jup_b219_azot_one",
      "jup_b219_azot_one_vano",
      "jup_b219_azot_one_monolith",
      "jup_b219_azot_one_soldier",
      "jup_b219_azot_soldier_vano",
      "jup_b219_azot_soldier_monolith",
      "jup_b219_azot_vano_monolith",
      "jup_b219_azot_all",
      "zat_b100_heli_2_serch",
      "zat_b101_heli_5_serch",
      "zat_b28_heli3_serch",
      "jup_b217_guide_stand",
      "jup_b217_nitro_stand",
      "jup_b41_novikov_stand",
      "pri_b305_actor",
      "jup_a9_cam1_actor",
      "jup_a9_cam2_actor",
      "jup_a9_cam3_actor",
      "jup_b217_nitro_straight",
      "pri_a25_psy_medic_idle",
      "pri_a25_psy_medic_out",
    ]);
  });
});
