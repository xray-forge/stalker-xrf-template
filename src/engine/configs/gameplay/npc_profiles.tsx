﻿import { Fragment, JSXNode, JSXXML } from "jsx-xml";

export function create(): JSXNode {
  return (
    <xml>
      <ActorProfiles />
      <DutyProfiles />
      <MonolithProfiles />
      <FreedomProfiles />
      <BanditProfiles />
      <StalkerProfiles />
      <ArmyProfiles />
      <MercenaryProfiles />
      <ZombiedProfiles />
      <SpecificProfiles />
    </xml>
  );
}

function ActorProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"actor"}>
        <class>Actor</class>
        <specific_character>actor</specific_character>
      </character>
      <character id={"default"}>
        <class>Stalker_general</class>
      </character>
      <character id={"mp_actor"}>
        <class>mp_actor</class>
        <specific_character>mp_actor</specific_character>
      </character>
      <character id={"actor_visual_stalker"}>
        <class>actor_visual_stalker</class>
      </character>
    </Fragment>
  );
}

export function DutyProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"sim_default_duty_0"}>
        <class>sim_default_duty_0</class>
      </character>
      <character id={"sim_default_duty_1"}>
        <class>sim_default_duty_1</class>
      </character>
      <character id={"sim_default_duty_2"}>
        <class>sim_default_duty_2</class>
      </character>
      <character id={"sim_default_duty_3"}>
        <class>sim_default_duty_3</class>
      </character>
      <character id={"sim_default_duty_4"}>
        <class>sim_default_duty_4</class>
      </character>
    </Fragment>
  );
}

export function BanditProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"sim_default_bandit_0"}>
        <class>sim_default_bandit_0</class>
      </character>
      <character id={"sim_default_bandit_1"}>
        <class>sim_default_bandit_1</class>
      </character>
      <character id={"sim_default_bandit_2"}>
        <class>sim_default_bandit_2</class>
      </character>
      <character id={"sim_default_bandit_3"}>
        <class>sim_default_bandit_3</class>
      </character>
      <character id={"sim_default_bandit_4"}>
        <class>sim_default_bandit_4</class>
      </character>
    </Fragment>
  );
}

export function MercenaryProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"sim_default_killer_0"}>
        <class>sim_default_killer_0</class>
      </character>
      <character id={"sim_default_killer_1"}>
        <class>sim_default_killer_1</class>
      </character>
      <character id={"sim_default_killer_2"}>
        <class>sim_default_killer_2</class>
      </character>
      <character id={"sim_default_killer_3"}>
        <class>sim_default_killer_3</class>
      </character>
      <character id={"sim_default_killer_4"}>
        <class>sim_default_killer_4</class>
      </character>
    </Fragment>
  );
}

export function ArmyProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"sim_default_military_0"}>
        <class>sim_default_military_0</class>
      </character>
      <character id={"sim_default_military_1"}>
        <class>sim_default_military_1</class>
      </character>
      <character id={"sim_default_military_2"}>
        <class>sim_default_military_2</class>
      </character>
      <character id={"sim_default_military_3"}>
        <class>sim_default_military_3</class>
      </character>
      <character id={"sim_default_military_3_sniper"}>
        <class>sim_default_military_3_sniper</class>
      </character>
      <character id={"sim_default_military_4"}>
        <class>sim_default_military_4</class>
      </character>
    </Fragment>
  );
}

export function StalkerProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"sim_default_stalker_0"}>
        <class>sim_default_stalker_0</class>
      </character>
      <character id={"sim_default_stalker_1"}>
        <class>sim_default_stalker_1</class>
      </character>
      <character id={"sim_default_stalker_2"}>
        <class>sim_default_stalker_2</class>
      </character>
      <character id={"sim_default_stalker_3"}>
        <class>sim_default_stalker_3</class>
      </character>
      <character id={"sim_default_stalker_4"}>
        <class>sim_default_stalker_4</class>
      </character>
    </Fragment>
  );
}

export function FreedomProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"sim_default_freedom_0"}>
        <class>sim_default_freedom_0</class>
      </character>
      <character id={"sim_default_freedom_1"}>
        <class>sim_default_freedom_1</class>
      </character>
      <character id={"sim_default_freedom_2"}>
        <class>sim_default_freedom_2</class>
      </character>
      <character id={"sim_default_freedom_3"}>
        <class>sim_default_freedom_3</class>
      </character>
      <character id={"sim_default_freedom_4"}>
        <class>sim_default_freedom_4</class>
      </character>
    </Fragment>
  );
}

export function MonolithProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"sim_default_monolith_0"}>
        <class>sim_default_monolith_0</class>
      </character>
      <character id={"sim_default_monolith_1"}>
        <class>sim_default_monolith_1</class>
      </character>
      <character id={"sim_default_monolith_2"}>
        <class>sim_default_monolith_2</class>
      </character>
      <character id={"sim_default_monolith_3"}>
        <class>sim_default_monolith_3</class>
      </character>
      <character id={"sim_default_monolith_4"}>
        <class>sim_default_monolith_4</class>
      </character>
    </Fragment>
  );
}

export function ZombiedProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"sim_default_zombied_1"}>
        <class>sim_default_zombied_1</class>
      </character>
      <character id={"sim_default_zombied_2"}>
        <class>sim_default_zombied_2</class>
      </character>
      <character id={"sim_default_zombied_3"}>
        <class>sim_default_zombied_3</class>
      </character>
      <character id={"sim_default_zombied_4"}>
        <class>sim_default_zombied_4</class>
      </character>
    </Fragment>
  );
}

export function SpecificProfiles(): JSXNode {
  return (
    <Fragment>
      <character id={"zat_b106_stalker_gonta"}>
        <class>zat_b106_stalker_gonta</class>
      </character>
      <character id={"zat_b14_stalker_1"}>
        <class>zat_b14_stalker_1</class>
      </character>
      <character id={"zat_b38_stalker_cop"}>
        <class>zat_b38_stalker_cop</class>
      </character>
      <character id={"zat_b38_stalker_corpse_1"}>
        <class>zat_b38_stalker_corpse_1</class>
      </character>
      <character id={"zat_b38_stalker_corpse_2"}>
        <class>zat_b38_stalker_corpse_2</class>
      </character>
      <character id={"zat_b38_stalker_corpse_3"}>
        <class>zat_b38_stalker_corpse_3</class>
      </character>
      <character id={"zat_b38_stalker_cop_dead"}>
        <class>zat_b38_stalker_cop_dead</class>
      </character>
      <character id={"zat_b38_stalker_hunter"}>
        <class>zat_b38_stalker_hunter</class>
      </character>
      <character id={"zat_b30_owl_stalker_trader"}>
        <class>zat_b30_owl_stalker_trader</class>
      </character>
      <character id={"zat_b7_duty_illicit_dealer"}>
        <class>zat_b7_duty_illicit_dealer</class>
      </character>
      <character id={"zat_b5_stalker_raider_1"}>
        <class>zat_b5_stalker_raider_1</class>
      </character>
      <character id={"zat_b5_stalker_raider_2"}>
        <class>zat_b5_stalker_raider_2</class>
      </character>
      <character id={"zat_b5_stalker_raider_3"}>
        <class>zat_b5_stalker_raider_3</class>
      </character>
      <character id={"zat_b5_stalker_raider_4"}>
        <class>zat_b5_stalker_raider_4</class>
      </character>
      <character id={"zat_b5_stalker_raider_leader"}>
        <class>zat_b5_stalker_raider_leader</class>
      </character>
      <character id={"zat_b7_bandit_boss_dead"}>
        <class>zat_b7_bandit_boss_dead</class>
      </character>
      <character id={"zat_b5_stalker_commander"}>
        <class>zat_b5_stalker_commander</class>
      </character>
      <character id={"zat_b5_stalker_commander_b7"}>
        <class>zat_b5_stalker_commander_b7</class>
      </character>
      <character id={"zat_b5_stalker_1"}>
        <class>zat_b5_stalker_1</class>
      </character>
      <character id={"zat_b5_stalker_2"}>
        <class>zat_b5_stalker_2</class>
      </character>
      <character id={"zat_b5_stalker_3"}>
        <class>zat_b5_stalker_3</class>
      </character>
      <character id={"zat_b5_stalker_4"}>
        <class>zat_b5_stalker_4</class>
      </character>
      <character id={"zat_b5_dealer_assistant_1"}>
        <class>zat_b5_dealer_assistant_1</class>
      </character>
      <character id={"zat_b5_dealer_assistant_2"}>
        <class>zat_b5_dealer_assistant_2</class>
      </character>
      <character id={"zat_b7_bandit_boss_sultan"}>
        <class>zat_b7_bandit_boss_sultan</class>
      </character>

      <character id={"zat_b18_noah"}>
        <class>zat_b18_noah</class>
      </character>

      <character id={"pri_a17_military_captain_tarasov"}>
        <class>pri_a17_military_captain_tarasov</class>
      </character>
      <character id={"pri_a17_military_prapor_valentyr"}>
        <class>pri_a17_military_prapor_valentyr</class>
      </character>
      <character id={"pri_a17_military_sergeant_morozov"}>
        <class>pri_a17_military_sergeant_morozov</class>
      </character>
      <character id={"pri_a17_military_lieutenant_podorojniy"}>
        <class>pri_a17_military_lieutenant_podorojniy</class>
      </character>
      <character id={"pri_a17_monolith_preacher"}>
        <class>pri_a17_monolith_preacher</class>
      </character>
      <character id={"pri_a17_military_colonel_kovalski"}>
        <class>pri_a17_military_colonel_kovalski</class>
      </character>

      <character id={"pri_a15_military_recon_leader"}>
        <class>pri_a15_military_recon_leader</class>
      </character>
      <character id={"pri_a15_military_recon_1"}>
        <class>pri_a15_military_recon_1</class>
      </character>
      <character id={"pri_a15_military_recon_2"}>
        <class>pri_a15_military_recon_2</class>
      </character>
      <character id={"pri_a15_military_recon_3"}>
        <class>pri_a15_military_recon_3</class>
      </character>

      <character id={"jup_b218_vano_in_suit"}>
        <class>jup_b218_vano_in_suit</class>
      </character>
      <character id={"pri_a15_sokolov"}>
        <class>pri_a15_sokolov</class>
      </character>
      <character id={"pri_a15_sokolov_sci"}>
        <class>pri_a15_sokolov_sci</class>
      </character>
      <character id={"pri_a15_sokolov_sci_head"}>
        <class>pri_a15_sokolov_sci_head</class>
      </character>
      <character id={"pri_a22_military_merkulov"}>
        <class>pri_a22_military_merkulov</class>
      </character>
      <character id={"pri_a22_military_skelja"}>
        <class>pri_a22_military_skelja</class>
      </character>

      <character id={"pri_a21_sentry_lieutenant_stecenko"}>
        <class>pri_a21_sentry_lieutenant_stecenko</class>
      </character>

      <character id={"jup_a12_stalker_assaulter"}>
        <class>jup_a12_stalker_assaulter</class>
      </character>
      <character id={"jup_a12_stalker_diplomat"}>
        <class>jup_a12_stalker_diplomat</class>
      </character>
      <character id={"jup_a12_stalker_prisoner"}>
        <class>jup_a12_stalker_prisoner</class>
      </character>
      <character id={"jup_a12_bandit_chief"}>
        <class>jup_a12_bandit_chief</class>
      </character>
      <character id={"jup_a12_bandit_guard"}>
        <class>jup_a12_bandit_guard</class>
      </character>
      <character id={"jup_a12_bandit_cashier"}>
        <class>jup_a12_bandit_cashier</class>
      </character>
      <character id={"jup_a12_merc_cover"}>
        <class>jup_a12_merc_cover</class>
      </character>

      <character id={"jup_b207_merc_illicit_dealer"}>
        <class>jup_b207_merc_illicit_dealer</class>
      </character>
      <character id={"jup_b207_merc_leader"}>
        <class>jup_b207_merc_leader</class>
      </character>
      <character id={"jup_b207_duty_security_squad_leader"}>
        <class>jup_b207_duty_security_squad_leader</class>
      </character>
      <character id={"jup_b207_freedom_recon_squad_leader"}>
        <class>jup_b207_freedom_recon_squad_leader</class>
      </character>
      <character id={"jup_b207_freedom_assault_squad_leader"}>
        <class>jup_b207_freedom_assault_squad_leader</class>
      </character>

      <character id={"jup_a10_bandit_leader"}>
        <class>jup_a10_bandit_leader</class>
      </character>
      <character id={"jup_a10_stalker_vano"}>
        <class>jup_a10_stalker_vano</class>
      </character>

      <character id={"jup_b6_scientist_biochemist"}>
        <class>jup_b6_scientist_biochemist</class>
      </character>

      <character id={"jup_b6_scientist_nuclear_physicist"}>
        <class>jup_b6_scientist_nuclear_physicist</class>
      </character>

      <character id={"jup_b9_shliachin"}>
        <class>jup_b9_shliachin</class>
      </character>

      <character id={"jup_b217_stalker_tech"}>
        <class>jup_b217_stalker_tech</class>
      </character>

      <character id={"jup_b10_stalker_drunk"}>
        <class>jup_b10_stalker_drunk</class>
      </character>

      <character id={"jup_b10_stalker_drunk_dead"}>
        <class>jup_b10_stalker_drunk_dead</class>
      </character>

      <character id={"jup_b220_trapper"}>
        <class>jup_b220_trapper</class>
      </character>

      <character id={"jup_b4_monolith_squad_leader_monolith_skin"}>
        <class>jup_b4_monolith_squad_leader_monolith_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_leader_duty_skin"}>
        <class>jup_b4_monolith_squad_leader_duty_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_leader_freedom_skin"}>
        <class>jup_b4_monolith_squad_leader_freedom_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_leader_freedom_mon_skin"}>
        <class>jup_b4_monolith_squad_leader_freedom_mon_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_leader_duty_mon_skin"}>
        <class>jup_b4_monolith_squad_leader_duty_mon_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_1_monolith_skin"}>
        <class>jup_b4_monolith_squad_soldier_1_monolith_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_1_duty_skin"}>
        <class>jup_b4_monolith_squad_soldier_1_duty_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_1_freedom_skin"}>
        <class>jup_b4_monolith_squad_soldier_1_freedom_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_2_monolith_skin"}>
        <class>jup_b4_monolith_squad_soldier_2_monolith_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_2_duty_skin"}>
        <class>jup_b4_monolith_squad_soldier_2_duty_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_2_freedom_skin"}>
        <class>jup_b4_monolith_squad_soldier_2_freedom_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_3_monolith_skin"}>
        <class>jup_b4_monolith_squad_soldier_3_monolith_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_3_duty_skin"}>
        <class>jup_b4_monolith_squad_soldier_3_duty_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_3_freedom_skin"}>
        <class>jup_b4_monolith_squad_soldier_3_freedom_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_4_monolith_skin"}>
        <class>jup_b4_monolith_squad_soldier_4_monolith_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_4_duty_skin"}>
        <class>jup_b4_monolith_squad_soldier_4_duty_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_4_freedom_skin"}>
        <class>jup_b4_monolith_squad_soldier_4_freedom_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_5_monolith_skin"}>
        <class>jup_b4_monolith_squad_soldier_5_monolith_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_5_duty_skin"}>
        <class>jup_b4_monolith_squad_soldier_5_duty_skin</class>
      </character>

      <character id={"jup_b4_monolith_squad_soldier_5_freedom_skin"}>
        <class>jup_b4_monolith_squad_soldier_5_freedom_skin</class>
      </character>

      <character id={"jup_b4_freedom_help"}>
        <class>jup_b4_freedom_help</class>
      </character>

      <character id={"jup_b4_duty_help"}>
        <class>jup_b4_duty_help</class>
      </character>

      <character id={"jup_b4_freedom_leader"}>
        <class>jup_b4_freedom_leader</class>
      </character>

      <character id={"jup_b4_duty_leader"}>
        <class>jup_b4_duty_leader</class>
      </character>

      <character id={"jup_b6_scientist_tech"}>
        <class>jup_b6_scientist_tech</class>
      </character>
      <character id={"jup_b1_stalker_1"}>
        <class>jup_b1_stalker_1</class>
      </character>
      <character id={"jup_b1_stalker_2"}>
        <class>jup_b1_stalker_2</class>
      </character>
      <character id={"jup_b1_stalker_3"}>
        <class>jup_b1_stalker_3</class>
      </character>
      <character id={"jup_b1_stalker_4"}>
        <class>jup_b1_stalker_4</class>
      </character>
      <character id={"jup_b1_pro_stalker_1"}>
        <class>jup_b1_pro_stalker_1</class>
      </character>
      <character id={"jup_b1_pro_stalker_2"}>
        <class>jup_b1_pro_stalker_2</class>
      </character>
      <character id={"jup_b1_pro_stalker_3"}>
        <class>jup_b1_pro_stalker_3</class>
      </character>
      <character id={"jup_b1_pro_stalker_4"}>
        <class>jup_b1_pro_stalker_4</class>
      </character>

      <character id={"jup_b6_freedom_stalker_1"}>
        <class>jup_b6_freedom_stalker_1</class>
      </character>
      <character id={"jup_b6_freedom_stalker_2"}>
        <class>jup_b6_freedom_stalker_2</class>
      </character>
      <character id={"jup_b6_freedom_stalker_3"}>
        <class>jup_b6_freedom_stalker_3</class>
      </character>
      <character id={"jup_b6_freedom_stalker_4"}>
        <class>jup_b6_freedom_stalker_4</class>
      </character>

      <character id={"jup_b6_duty_stalker_1"}>
        <class>jup_b6_duty_stalker_1</class>
      </character>
      <character id={"jup_b6_duty_stalker_2"}>
        <class>jup_b6_duty_stalker_2</class>
      </character>
      <character id={"jup_b6_duty_stalker_3"}>
        <class>jup_b6_duty_stalker_3</class>
      </character>
      <character id={"jup_b6_duty_stalker_4"}>
        <class>jup_b6_duty_stalker_4</class>
      </character>

      <character id={"jup_b6_stalker_prisoner"}>
        <class>jup_b6_stalker_prisoner</class>
      </character>
      <character id={"jup_b6_stalker_assaulter"}>
        <class>jup_b6_stalker_assaulter</class>
      </character>
      <character id={"jup_b6_stalker_diplomat"}>
        <class>jup_b6_stalker_diplomat</class>
      </character>

      <character id={"jup_b6_stalker_gonta"}>
        <class>jup_b6_stalker_gonta</class>
      </character>
      <character id={"jup_b6_stalker_garmata"}>
        <class>jup_b6_stalker_garmata</class>
      </character>
      <character id={"jup_b6_stalker_crab"}>
        <class>jup_b6_stalker_crab</class>
      </character>

      <character id={"zat_a2_stalker_barmen"}>
        <class>zat_a2_stalker_barmen</class>
      </character>
      <character id={"zat_a2_stalker_mechanic"}>
        <class>zat_a2_stalker_mechanic</class>
      </character>
      <character id={"zat_a2_stalker_nimble"}>
        <class>zat_a2_stalker_nimble</class>
      </character>

      <character id={"zat_b22_stalker_medic"}>
        <class>zat_b22_stalker_medic</class>
      </character>

      <character id={"jup_b25_stalker_senya"}>
        <class>jup_b25_stalker_senya</class>
      </character>
      <character id={"jup_b25_freedom_flint"}>
        <class>jup_b25_freedom_flint</class>
      </character>

      <character id={"zat_b103_lost_merc_leader"}>
        <class>zat_b103_lost_merc_leader</class>
      </character>
      <character id={"zat_b103_lost_merc_1"}>
        <class>zat_b103_lost_merc_1</class>
      </character>
      <character id={"zat_b103_lost_merc_2"}>
        <class>zat_b103_lost_merc_2</class>
      </character>
      <character id={"zat_b103_lost_merc_3"}>
        <class>zat_b103_lost_merc_3</class>
      </character>
      <character id={"zat_b103_lost_merc_4"}>
        <class>zat_b103_lost_merc_4</class>
      </character>
      <character id={"zat_b103_lost_merc_5"}>
        <class>zat_b103_lost_merc_5</class>
      </character>
      <character id={"zat_b103_lost_merc_6"}>
        <class>zat_b103_lost_merc_6</class>
      </character>
      <character id={"zat_b103_lost_merc_7"}>
        <class>zat_b103_lost_merc_7</class>
      </character>

      <character id={"zat_b7_stalker_raider_leader"}>
        <class>zat_b7_stalker_raider_leader</class>
      </character>
      <character id={"zat_b7_stalker_raider_1"}>
        <class>zat_b7_stalker_raider_1</class>
      </character>
      <character id={"zat_b7_stalker_raider_2"}>
        <class>zat_b7_stalker_raider_2</class>
      </character>
      <character id={"zat_b7_stalker_raider_3"}>
        <class>zat_b7_stalker_raider_3</class>
      </character>
      <character id={"zat_b7_stalker_victim_1"}>
        <class>zat_b7_stalker_victim_1</class>
      </character>

      <character id={"zat_b33_stalker_snag"}>
        <class>zat_b33_stalker_snag</class>
      </character>

      <character id={"zat_b28_draper"}>
        <class>zat_b28_draper</class>
      </character>
      <character id={"zat_b28_umerov"}>
        <class>zat_b28_umerov</class>
      </character>
      <character id={"zat_b28_smoliak"}>
        <class>zat_b28_smoliak</class>
      </character>

      <character id={"zat_b100_military_1"}>
        <class>zat_b100_military_1</class>
      </character>
      <character id={"zat_b100_military_2"}>
        <class>zat_b100_military_2</class>
      </character>
      <character id={"zat_b100_military_3"}>
        <class>zat_b100_military_3</class>
      </character>

      <character id={"zat_b42_mayron"}>
        <class>zat_b42_mayron</class>
      </character>

      <character id={"zat_b29_stalker_rival_1"}>
        <class>zat_b29_stalker_rival_1</class>
      </character>
      <character id={"zat_b29_stalker_rival_2"}>
        <class>zat_b29_stalker_rival_2</class>
      </character>
      <character id={"zat_b29_stalker_rival_default_1"}>
        <class>zat_b29_stalker_rival_default_1</class>
      </character>
      <character id={"zat_b29_stalker_rival_default_2"}>
        <class>zat_b29_stalker_rival_default_2</class>
      </character>

      <character id={"zat_b52_port_bandit_leader"}>
        <class>zat_b52_port_bandit_leader</class>
      </character>

      <character id={"jup_a6_stalker_medik"}>
        <class>jup_a6_stalker_medik</class>
      </character>
      <character id={"jup_b15_zulus"}>
        <class>jup_b15_zulus</class>
      </character>
      <character id={"jup_b202_stalker_snag"}>
        <class>jup_b202_stalker_snag</class>
      </character>
      <character id={"jup_a6_stalker_barmen"}>
        <class>jup_a6_stalker_barmen</class>
      </character>
      <character id={"jup_b202_bandit"}>
        <class>jup_b202_bandit</class>
      </character>

      <character id={"jup_b19_freedom_yar"}>
        <class>jup_b19_freedom_yar</class>
      </character>
      <character id={"jup_b19_merc_1"}>
        <class>jup_b19_merc_1</class>
      </character>
      <character id={"jup_b19_merc_2"}>
        <class>jup_b19_merc_2</class>
      </character>
      <character id={"jup_b19_merc_3"}>
        <class>jup_b19_merc_3</class>
      </character>
      <character id={"jup_b19_merc_4"}>
        <class>jup_b19_merc_4</class>
      </character>
      <character id={"jup_b19_merc_5"}>
        <class>jup_b19_merc_5</class>
      </character>

      <character id={"jup_b43_stalker_assistant"}>
        <class>jup_b43_stalker_assistant</class>
      </character>

      <character id={"zat_b215_stalker_guide"}>
        <class>zat_b215_stalker_guide</class>
      </character>

      <character id={"pri_a25_army_medic"}>
        <class>pri_a25_army_medic</class>
      </character>

      <character id={"pri_a15_actor"}>
        <class>pri_a15_actor</class>
      </character>
      <character id={"pri_a15_vano"}>
        <class>pri_a15_vano</class>
      </character>
      <character id={"pri_a15_sokolov_scene"}>
        <class>pri_a15_sokolov_scene</class>
      </character>
      <character id={"pri_a15_zulus"}>
        <class>pri_a15_zulus</class>
      </character>
      <character id={"pri_a15_wanderer"}>
        <class>pri_a15_wanderer</class>
      </character>
      <character id={"pri_a15_military_tarasov"}>
        <class>pri_a15_military_tarasov</class>
      </character>
      <character id={"pri_a15_military_2"}>
        <class>pri_a15_military_2</class>
      </character>
      <character id={"pri_a15_military_3"}>
        <class>pri_a15_military_3</class>
      </character>
      <character id={"pri_a15_military_4"}>
        <class>pri_a15_military_4</class>
      </character>

      <character id={"pri_a22_army_signaller"}>
        <class>pri_a22_army_signaller</class>
      </character>
      <character id={"pri_b35_merc_leader"}>
        <class>pri_b35_merc_leader</class>
      </character>
      <character id={"pri_b35_merc_grenade_launcher_1"}>
        <class>pri_b35_merc_grenade_launcher_1</class>
      </character>
      <character id={"pri_b35_merc_grenade_launcher_2"}>
        <class>pri_b35_merc_grenade_launcher_2</class>
      </character>
      <character id={"pri_b35_envoy"}>
        <class>pri_b35_envoy</class>
      </character>
      <character id={"pri_b35_guard_envoy_1"}>
        <class>pri_b35_guard_envoy_1</class>
      </character>
      <character id={"pri_b35_guard_envoy_2"}>
        <class>pri_b35_guard_envoy_2</class>
      </character>

      <character id={"pri_b306_envoy"}>
        <class>pri_b306_envoy</class>
      </character>

      <character id={"jup_b46_duty_founder"}>
        <class>jup_b46_duty_founder</class>
      </character>
      <character id={"jup_b46_duty_founder_squad_01"}>
        <class>jup_b46_duty_founder_squad_01</class>
      </character>
      <character id={"jup_b46_duty_founder_squad_02"}>
        <class>jup_b46_duty_founder_squad_02</class>
      </character>
      <character id={"jup_b46_duty_founder_squad_03"}>
        <class>jup_b46_duty_founder_squad_03</class>
      </character>
      <character id={"jup_b46_duty_founder_squad_04"}>
        <class>jup_b46_duty_founder_squad_04</class>
      </character>
      <character id={"jup_a6_freedom_leader"}>
        <class>jup_a6_freedom_leader</class>
      </character>
      <character id={"jup_a6_duty_leader"}>
        <class>jup_a6_duty_leader</class>
      </character>

      <character id={"zat_b40_merc_squad_leader_1"}>
        <class>zat_b40_merc_squad_leader_1</class>
      </character>
      <character id={"zat_b40_merc_squad_leader_2"}>
        <class>zat_b40_merc_squad_leader_2</class>
      </character>

      <character id={"zat_b20_noah_teleport"}>
        <class>zat_b20_noah_teleport</class>
      </character>

      <character id={"zat_b44_stalker_barge"}>
        <class>zat_b44_stalker_barge</class>
      </character>

      <character id={"pri_b36_monolith_sniper"}>
        <class>pri_b36_monolith_sniper</class>
      </character>
      <character id={"pri_b36_monolith_master_hiding_place"}>
        <class>pri_b36_monolith_master_hiding_place</class>
      </character>
      <character id={"pri_b36_monolith_marine_sniper"}>
        <class>pri_b36_monolith_marine_sniper</class>
      </character>

      <character id={"zat_b53_artefact_hunter_1"}>
        <class>zat_b53_artefact_hunter_1</class>
      </character>
      <character id={"zat_b53_artefact_hunter_2"}>
        <class>zat_b53_artefact_hunter_2</class>
      </character>

      <character id={"pri_a22_military_yarmoshuk"}>
        <class>pri_a22_military_yarmoshuk</class>
      </character>

      <character id={"pri_b305_strelok"}>
        <class>pri_b305_strelok</class>
      </character>

      <character id={"pri_a28_evac_com"}>
        <class>pri_a28_evac_com</class>
      </character>

      <character id={"zat_b106_stalker_garmata"}>
        <class>zat_b106_stalker_garmata</class>
      </character>
      <character id={"zat_b106_stalker_crab"}>
        <class>zat_b106_stalker_crab</class>
      </character>

      <character id={"jup_b47_merc_01"}>
        <class>jup_b47_merc_01</class>
      </character>
      <character id={"jup_b47_merc_02"}>
        <class>jup_b47_merc_02</class>
      </character>
      <character id={"jup_b47_merc_03"}>
        <class>jup_b47_merc_03</class>
      </character>
      <character id={"jup_b47_merc_04"}>
        <class>jup_b47_merc_04</class>
      </character>
      <character id={"jup_b47_merc_05"}>
        <class>jup_b47_merc_05</class>
      </character>
      <character id={"jup_b47_merc_06"}>
        <class>jup_b47_merc_06</class>
      </character>
      <character id={"jup_b47_merc_07"}>
        <class>jup_b47_merc_07</class>
      </character>

      <character id={"jup_b219_stalker_tech"}>
        <class>jup_b219_stalker_tech</class>
      </character>
      <character id={"jup_b219_monolith_squad_leader_freedom_skin"}>
        <class>jup_b219_monolith_squad_leader_freedom_skin</class>
      </character>
      <character id={"jup_b219_vano"}>
        <class>jup_b219_vano</class>
      </character>
      <character id={"jup_b219_soldier"}>
        <class>jup_b219_soldier</class>
      </character>
      <character id={"jup_b219_zulus"}>
        <class>jup_b219_zulus</class>
      </character>

      <character id={"pas_b400_vano"}>
        <class>pas_b400_vano</class>
      </character>
      <character id={"pas_b400_sokolov"}>
        <class>pas_b400_sokolov</class>
      </character>
      <character id={"pas_b400_zulus"}>
        <class>pas_b400_zulus</class>
      </character>
      <character id={"pas_b400_wanderer"}>
        <class>pas_b400_wanderer</class>
      </character>
      <character id={"pas_b400_monolith_sniper"}>
        <class>pas_b400_monolith_sniper</class>
      </character>

      <character id={"sim_default_stalker_pri_a16"}>
        <class>sim_default_stalker_pri_a16</class>
      </character>
    </Fragment>
  );
}
