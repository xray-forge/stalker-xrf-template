import { JSXNode, JSXXML } from "jsx-xml";

import {
  CharacterProfileCriticals,
  DefaultCharacterDialogs,
  DefaultCharacterDialogsNoGuide,
  loadoutAbakan,
  loadoutAk74,
  loadoutAk74u,
  loadoutBeretta,
  loadoutBinocular,
  loadoutBm16,
  loadoutCharacterDrugs,
  loadoutCharacterDrugs2,
  loadoutCharacterDrugs3,
  loadoutCharacterDrugs4,
  loadoutCharacterDrugsMilitary,
  loadoutCharacterDrugsScientific,
  loadoutCharacterFood,
  loadoutCharacterItems,
  loadoutCharacterItems2,
  loadoutCharacterItems3,
  loadoutCharacterItemsWithoutDetector,
  loadoutCharacterItemsWithoutTorch3,
  loadoutCharacterItemsWithoutTorchAndDetector,
  loadoutColt1911,
  loadoutDesertEagle,
  loadoutDetectorAdvanced,
  loadoutDetectorElite,
  loadoutF1Grenades,
  loadoutFort,
  loadoutHpsa,
  loadoutL85,
  loadoutLr300,
  loadoutMp5,
  loadoutPm,
  loadoutRgd5Grenades,
  loadoutSig550,
  loadoutSpas12,
  loadoutTorch,
  loadoutToz34,
  loadoutUsp,
  loadoutWalther,
  loadoutWincheaster1300,
} from "@/engine/configs/gameplay/loadouts";
import { ActorDialog, SpecificCharacter, StartDialog } from "@/engine/configs/gameplay/utils";
import { communities } from "@/engine/lib/constants/communities";
import { ammo } from "@/engine/lib/constants/items/ammo";
import { artefacts } from "@/engine/lib/constants/items/artefacts";
import { detectors } from "@/engine/lib/constants/items/detectors";
import { drugs } from "@/engine/lib/constants/items/drugs";
import { misc } from "@/engine/lib/constants/items/misc";
import { outfits } from "@/engine/lib/constants/items/outfits";
import { questItems } from "@/engine/lib/constants/items/quest_items";
import { weapons } from "@/engine/lib/constants/items/weapons";
import { GENERATE_BANDIT_NAME, GENERATE_STALKER_NAME } from "@/engine/lib/constants/names";

export function create(): JSXNode {
  return (
    <xml>
      <SpecificCharacter
        id={"zat_b30_owl_stalker_trader"}
        class={"zat_b30_owl_stalker_trader"}
        name={"st_zat_b30_owl_stalker_trader_name"}
        icon={"ui_inGame2_Sich"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3_face_1"}
        moneyMin={480_000}
        moneyMax={480_000}
        moneyInfinite={true}
        rank={60}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b30_owl_stalker_trader_StartDialog</StartDialog>
        <ActorDialog>zat_b30_owl_stalker_trader_choose_task</ActorDialog>
        <ActorDialog>zat_b30_owl_stalker_trader_sell_items</ActorDialog>
        <ActorDialog>zat_b30_owl_stalker_trader_buy_info</ActorDialog>
        <ActorDialog>zat_b30_owl_stalker_trader_stages</ActorDialog>
        <ActorDialog>zat_b30_owl_stalker_trader_b30_actor_after_barmen</ActorDialog>
        <ActorDialog>zat_b30_owl_stalker_trader_about_nimble</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b106_stalker_gonta"}
        class={"zat_b106_stalker_gonta"}
        name={"st_zat_b106_stalker_gonta_name"}
        icon={"ui_inGame2_Gonta"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_face_6"}
        moneyMin={1000}
        moneyMax={1000}
        rank={50}
        supplies={[
          { section: detectors.detector_advanced },
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b106_stalker_gonta_start</StartDialog>
        <ActorDialog>jup_b1_stalker_about_scrutiny</ActorDialog>
        <ActorDialog>jup_b1_stalker_about_scrutiny_2</ActorDialog>
        <ActorDialog>jup_b1_stalker_about_scrutiny_3</ActorDialog>
        <ActorDialog>zat_b106_hunt_himera</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_info_about_soroka</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_info_about_soroka_gone</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_about_soroka_dialog</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_about_soroka_actor_task</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_trapper_send</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_about_himself</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_b22_about_stalker_vampire</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_employ_stalkers</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_come_with_me</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_b52_about_nimble</ActorDialog>
        <ActorDialog>zat_b106_stalker_gonta_about_mutants</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b106_stalker_garmata"}
        class={"zat_b106_stalker_garmata"}
        name={"st_zat_b106_stalker_garmata_name"}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        moneyMin={1000}
        moneyMax={1000}
        rank={45}
        supplies={[
          { section: weapons.wpn_spas12 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_f1 },
          { section: ammo.ammo_12x70_buck },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
        <ActorDialog>jup_b1_stalker_about_scrutiny</ActorDialog>
        <ActorDialog>jup_b1_stalker_about_scrutiny_2</ActorDialog>
        <ActorDialog>jup_b1_stalker_about_scrutiny_3</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b106_stalker_crab"}
        class={"zat_b106_stalker_crab"}
        name={"st_zat_b106_stalker_crab_name"}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        moneyMin={1000}
        moneyMax={1000}
        rank={35}
        supplies={[
          { section: detectors.detector_advanced },
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_pm },
          { section: weapons.grenade_f1 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
        <ActorDialog>jup_b1_stalker_about_scrutiny</ActorDialog>
        <ActorDialog>jup_b1_stalker_about_scrutiny_2</ActorDialog>
        <ActorDialog>jup_b1_stalker_about_scrutiny_3</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b14_stalker_1"}
        class={"zat_b14_stalker_1"}
        name={"zat_b14_stalker_1_name"}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        moneyMin={1000}
        moneyMax={1000}
        rank={25}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_pm },
          { section: weapons.grenade_f1 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutTorchAndDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        <CharacterProfileCriticals />
        <ActorDialog>zat_b14_stalker_at_bar_start</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_a2_stalker_nimble"}
        class={"zat_a2_stalker_nimble"}
        name={"st_zat_a2_stalker_nimble_name"}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        moneyMin={10_000}
        moneyMax={10_000}
        rank={40}
        supplies={[
          { section: misc.device_torch },
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_pm },
          { section: weapons.grenade_f1 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b51_stalker_nimble_start</StartDialog>
        <ActorDialog>zat_b51_stalker_nimble_b52_about_gun_questions</ActorDialog>
        <ActorDialog>zat_b51_stalker_nimble_place_order</ActorDialog>
        <ActorDialog>zat_b51_stalker_nimble_get_order</ActorDialog>
        <ActorDialog>zat_b51_stalker_nimble_about</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b38_stalker_cop"}
        class={"zat_b38_stalker_cop"}
        name={"st_zat_b38_stalker_cop_name"}
        icon={"ui_inGame2_Gluhar"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_face_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={55}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_pm },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b38_stalker_cop_StartDialog</StartDialog>
        <ActorDialog>zat_a2_stalker_barmen_b7_actor_start</ActorDialog>
        <ActorDialog>zat_b38_stalker_cop_task_dialog</ActorDialog>
        <ActorDialog>zat_b38_cop_about_himself_dialog</ActorDialog>
        <ActorDialog>zat_b38_stalker_cop_b52_about_nimble</ActorDialog>
        <ActorDialog>zat_b38_stalker_cop_b52_about_snag</ActorDialog>
        <ActorDialog>zat_b38_stalker_cop_about_sci_guards</ActorDialog>
        <ActorDialog>zat_b38_stalker_cop_about_sci_helpers</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b38_stalker_cop_dead"}
        class={"zat_b38_stalker_cop_dead"}
        name={"st_zat_b38_stalker_cop_name"}
        icon={"ui_inGame2_Gluhar"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_face_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={55}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_pm },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      />

      <SpecificCharacter
        id={"zat_b38_stalker_hunter"}
        class={"zat_b38_stalker_hunter"}
        name={"st_zat_b38_stalker_hunter_name"}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        moneyMin={3_000}
        moneyMax={3_000}
        rank={50}
        supplies={[...loadoutCharacterFood, ...loadoutCharacterDrugs]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b7_duty_illicit_dealer"}
        class={"zat_b7_duty_illicit_dealer"}
        name={"st_zat_b7_duty_illicit_dealer_name"}
        icon={"ui_inGame2_Dolg_4"}
        community={communities.dolg}
        soundConfig={"characters_voice\\human_01\\dolg\\"}
        visual={"actors\\stalker_dolg\\stalker_dolg_4"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={60}
        supplies={[
          { section: questItems.device_pda_zat_b5_dealer },
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_fort },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs4,
          ...loadoutCharacterDrugsMilitary,
        ]}
      >
        <CharacterProfileCriticals />
        <ActorDialog>zat_b7_duty_illicit_dealer_b207_blackmail</ActorDialog>
        <ActorDialog>zat_b7_duty_illicit_dealer_b207_blackmail_with_pda</ActorDialog>
        <ActorDialog>zat_b7_duty_illicit_dealer_b207_blackmail_with_pda_2</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_dealer_assistant_1"}
        class={"zat_b5_dealer_assistant_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_merc_2"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={40}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_pbp },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_dealer_assistant_2"}
        class={"zat_b5_dealer_assistant_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_merc_2"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={40}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_pbp },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_raider_1"}
        class={"zat_b5_stalker_raider_1"}
        name={GENERATE_BANDIT_NAME}
        icon={"ui_inGame2_bandit_2"}
        community={communities.bandit}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={30}
        supplies={[
          { section: weapons.wpn_wincheaster1300 },
          { section: weapons.wpn_pm },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_raider_2"}
        class={"zat_b5_stalker_raider_2"}
        name={GENERATE_BANDIT_NAME}
        icon={"ui_inGame2_bandit_2"}
        community={communities.bandit}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={35}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_raider_3"}
        class={"zat_b5_stalker_raider_3"}
        name={GENERATE_BANDIT_NAME}
        icon={"ui_inGame2_bandit_1"}
        community={communities.bandit}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_1"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={30}
        supplies={[
          { section: weapons.wpn_mp5 },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5 },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_raider_4"}
        class={"zat_b5_stalker_raider_4"}
        name={GENERATE_BANDIT_NAME}
        icon={"ui_inGame2_bandit_1"}
        community={communities.bandit}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_1"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={35}
        supplies={[
          { section: weapons.wpn_mp5 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5 },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_raider_leader"}
        class={"zat_b5_stalker_raider_leader"}
        name={"st_zat_b7_stalker_raider_leader"}
        icon={"ui_inGame2_bandit_2"}
        community={communities.bandit}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={40}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutBeretta(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b7_bandit_boss_dead"}
        class={"zat_b7_bandit_boss_dead"}
        name={GENERATE_BANDIT_NAME}
        icon={"ui_inGame2_bandit_4"}
        community={communities.bandit}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_4"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={50}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_ap"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b7_bandit_boss_sultan"}
        class={"zat_b7_bandit_boss_sultan"}
        name={"st_zat_b7_bandit_boss_sultan_name"}
        icon={"ui_inGame2_Sultan"}
        community={communities.bandit}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3_face_3"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={60}
        supplies={[
          ...loadoutDesertEagle(true),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b7_bandit_boss_sultan_StartDialog</StartDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b7_give_task_dialog</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b30_start_ActorDialog</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b30_detectors_ActorDialog</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b30_compass_ActorDialog</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b30_compass_give_ActorDialog</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b30_compass_revert_ActorDialog</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b30_ruin_ActorDialog</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b30_barmen_under_ActorDialog</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b52_about_snag</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_b52_about_nimble</ActorDialog>
        <ActorDialog>zat_b7_bandit_boss_sultan_about</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_commander"}
        class={"zat_b5_stalker_commander"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={50}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutColt1911(),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_commander_b7"}
        class={"zat_b5_stalker_commander_b7"}
        name={"st_zat_b7_stalker_squad_leader"}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={50}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutColt1911(),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_1"}
        class={"zat_b5_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={35}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutWincheaster1300(),
          ...loadoutHpsa(),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_2"}
        class={"zat_b5_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={35}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutBeretta(),
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_3"}
        class={"zat_b5_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={35}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74u(),
          ...loadoutBeretta(),
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b5_stalker_4"}
        class={"zat_b5_stalker_4"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        moneyMin={8_000}
        moneyMax={8_000}
        rank={35}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutL85(),
          ...loadoutBeretta(),
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_a2_stalker_barmen"}
        class={"zat_a2_stalker_barmen"}
        name={"zat_a2_stalker_barmen_name"}
        icon={"ui_inGame2_Boroda"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_3_face_1"}
        moneyMin={480_000}
        moneyMax={480_000}
        moneyInfinite={true}
        rank={60}
        reputation={300}
        supplies={[
          ...loadoutRgd5Grenades(3),
          ...loadoutSig550({ ap: true }),
          ...loadoutBeretta(),
          ...loadoutCharacterItemsWithoutTorch3,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_a2_stalker_barmen_StartDialog</StartDialog>
        <ActorDialog>zat_a2_linker_b14_quest_init</ActorDialog>
        <ActorDialog>zat_a2_linker_b14_quest_done</ActorDialog>
        <ActorDialog>zat_a2_linker_b14_quest_strange_item</ActorDialog>
        <ActorDialog>zat_a2_linker_b14_quest_sell_artefact</ActorDialog>
        <ActorDialog>zat_a2_linker_b14_quest_wrong</ActorDialog>
        <ActorDialog>zat_b57_barmen_about_bloodsucker_lair_dialog</ActorDialog>
        <ActorDialog>zat_b57_barman_reward_dialog</ActorDialog>
        <ActorDialog>zat_b22_barmen_about_vampire_actor1</ActorDialog>
        <ActorDialog>zat_b22_barmen_about_vampire_actor2</ActorDialog>
        <ActorDialog>zat_b22_barmen_about_vampire_actor3</ActorDialog>
        <ActorDialog>zat_b22_barmen_about_vampire_actor4</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b7_actor_start</ActorDialog>
        <ActorDialog>zat_b22_barmen_b5_daring_quest_stalkers</ActorDialog>
        <ActorDialog>zat_b22_barmen_about_after_quest_b5_dealer_actor4</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b30_about_new_detector</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b30_about_compass</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b30_compass_give_dialog</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b30_compass_double_dialog</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b30_compass_revert_dialog</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b30_take_business_ActorDialog</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_army</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_about_sci_guards</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_about_sci_helpers</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b30_about_halfart_jup_b1</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_oasis_art_sell</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b52_about_snag</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b52_about_nimble</ActorDialog>
        <ActorDialog>zat_a2_linker_b29_actor_info</ActorDialog>
        <ActorDialog>zat_a2_linker_b29_actor_get_adv_task</ActorDialog>
        <ActorDialog>zat_a2_linker_b29_actor_give_adv_task</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_b30_take_money_ActorDialog</ActorDialog>
        <ActorDialog>zat_a2_stalker_barmen_actor_info</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b22_stalker_medic"}
        class={"zat_b22_stalker_medic"}
        name={"zat_b22_stalker_medic_name"}
        icon={"ui_inGame2_Tremor"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1_face_3"}
        moneyMin={480_000}
        moneyMax={480_000}
        moneyInfinite={true}
        rank={30}
        supplies={[
          ...loadoutHpsa(),
          ...loadoutCharacterItemsWithoutTorchAndDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b22_stalker_medic_dialog_start</StartDialog>
        <ActorDialog>zat_b38_stalker_medic_bloodsucker_dialog</ActorDialog>
        <ActorDialog>zat_b38_stalker_medic_info_ActorDialog</ActorDialog>
        <ActorDialog>zat_b22_stalker_medic_b52_about_nimble</ActorDialog>
        <ActorDialog>zat_b22_stalker_medic_need_health_care</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_a2_stalker_mechanic"}
        class={"zat_a2_stalker_mechanic"}
        name={"zat_a2_stalker_mechanic_name"}
        icon={"ui_inGame2_Kardan"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_face_1"}
        mechanicMode={true}
        rank={30}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutPm(),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b3_stalker_tech_start</StartDialog>
        <ActorDialog>zat_b3_stalker_tech_produce_62_show</ActorDialog>
        <ActorDialog>zat_b3_stalker_tech_produce_62_end</ActorDialog>
        <ActorDialog>zat_b3_stalker_tech_return_access_card</ActorDialog>
        <ActorDialog>zat_b3_stalker_tech_produce_62_repair_gauss</ActorDialog>
        <ActorDialog>zat_b3_stalker_tech_produce_62_make_battery</ActorDialog>
        <ActorDialog>zat_b3_tech_buddies_about</ActorDialog>
        <ActorDialog>zat_b3_tech_buddies_apologies_both</ActorDialog>
        <ActorDialog>zat_b3_tech_buddies_apologies_joker</ActorDialog>
        <ActorDialog>zat_b3_tech_buddies_apologies_barge</ActorDialog>
        <ActorDialog>zat_b3_tech_buddies_pda</ActorDialog>
        <ActorDialog>zat_b3_stalker_mechanic_ufo_memory_repair</ActorDialog>
        <ActorDialog>zat_b3_stalker_tech_b33_about_snags_container</ActorDialog>
        <ActorDialog>zat_b3_stalker_mechanic_b52_about_nimble</ActorDialog>
        <ActorDialog>zat_b3_stalker_mechanic_b207_about_dealer_pda</ActorDialog>
        <ActorDialog>zat_b3_stalker_mechanic_electro_toolkit_dialog</ActorDialog>
        <ActorDialog>zat_b3_stalker_tech_instruments</ActorDialog>
        <ActorDialog>zat_b3_stalker_tech_drink_1</ActorDialog>
        <ActorDialog>zat_b3_stalker_tech_drink_2</ActorDialog>
        <ActorDialog>zat_b3_stalker_tech_drink_3</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b103_lost_merc_leader"}
        class={"zat_b103_lost_merc_leader"}
        name={"zat_b103_lost_merc_leader_name"}
        icon={"ui_inGame2_merc_4"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_4"}
        rank={55}
        supplies={[
          ...loadoutRgd5Grenades(3),
          ...loadoutLr300({ ap: true, scope: true, silencer: true }),
          ...loadoutWalther(true),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        <StartDialog>zat_b103_merc_dialog_start</StartDialog>
        <ActorDialog>zat_b103_lost_merc_leader_come_with_me</ActorDialog>
        <ActorDialog>zat_b103_merc_dialog_about_toolkit</ActorDialog>
        <ActorDialog>zat_b103_merc_dialog_find_supplies</ActorDialog>
        <ActorDialog>zat_b103_merc_dialog_about_supplies</ActorDialog>
        <ActorDialog>zat_b103_lost_merc_leader_employ_stalkers</ActorDialog>
        <ActorDialog>zat_b103_lost_merc_leader_bunker_guarding</ActorDialog>
        <ActorDialog>zat_b103_lost_merc_leader_b40_about_merc_camp</ActorDialog>

        <DefaultCharacterDialogsNoGuide />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b103_lost_merc_1"}
        class={"zat_b103_lost_merc_1"}
        name={"zat_b103_lost_merc_1_name"}
        icon={"ui_inGame2_merc_2"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_2"}
        rank={40}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutMp5({ ap: true, silencer: true }),
          ...loadoutBeretta(true),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogsNoGuide />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b103_lost_merc_2"}
        class={"zat_b103_lost_merc_2"}
        name={"zat_b103_lost_merc_2_name"}
        icon={"ui_inGame2_merc_2"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_2"}
        rank={40}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutL85(),
          ...loadoutBeretta(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogsNoGuide />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b103_lost_merc_3"}
        class={"zat_b103_lost_merc_3"}
        name={"zat_b103_lost_merc_3_name"}
        icon={"ui_inGame2_merc_2"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_2"}
        rank={40}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutAk74(),
          ...loadoutHpsa(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogsNoGuide />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b103_lost_merc_4"}
        class={"zat_b103_lost_merc_4"}
        name={"zat_b103_lost_merc_4_name"}
        icon={"ui_inGame2_merc_2"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_2"}
        rank={40}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutMp5({ silencer: true }),
          ...loadoutBeretta(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogsNoGuide />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b103_lost_merc_5"}
        class={"zat_b103_lost_merc_5"}
        name={"zat_b103_lost_merc_5_name"}
        icon={"ui_inGame2_merc_2"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_2"}
        rank={40}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutL85(),
          ...loadoutHpsa(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogsNoGuide />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b103_lost_merc_6"}
        class={"zat_b103_lost_merc_6"}
        name={"zat_b103_lost_merc_6_name"}
        icon={"ui_inGame2_merc_2"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_2"}
        rank={40}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutSpas12(),
          ...loadoutHpsa(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogsNoGuide />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b103_lost_merc_7"}
        class={"zat_b103_lost_merc_7"}
        name={"zat_b103_lost_merc_6_name"}
        icon={"ui_inGame2_merc_2"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_2"}
        rank={40}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutAk74(),
          ...loadoutBeretta(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogsNoGuide />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b7_stalker_raider_leader"}
        class={"zat_b7_stalker_raider_leader"}
        name={"st_zat_b7_stalker_raider_leader"}
        icon={"ui_inGame2_bandit_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutAk74(),
          ...loadoutBeretta(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b7_stalkers_raiders_dialog</StartDialog>
        <ActorDialog>zat_b7_stalkers_raiders_actor_choose_dialog</ActorDialog>
        <ActorDialog>zat_b7_killed_self_ActorDialog</ActorDialog>
        <ActorDialog>zat_b7_stalkers_raiders_actor_teleport_dialog</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b7_stalker_raider_1"}
        class={"zat_b7_stalker_raider_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_bandit_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutAk74(),
          ...loadoutHpsa(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b7_stalker_raider_2"}
        class={"zat_b7_stalker_raider_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_bandit_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutWincheaster1300(),
          ...loadoutBeretta(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b7_stalker_raider_3"}
        class={"zat_b7_stalker_raider_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_bandit_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        supplies={[
          ...loadoutRgd5Grenades(2),
          ...loadoutMp5(),
          ...loadoutFort(),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b7_stalker_victim_1"}
        class={"zat_b7_stalker_victim_1"}
        name={"st_zat_b7_stalker_squad_leader"}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        rank={50}
        moneyMin={1500}
        moneyMax={3500}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutColt1911(),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b7_stalkers_victims_dialog</StartDialog>
        <ActorDialog>zat_b7_stalkers_victims_actor_StartDialog</ActorDialog>
        <ActorDialog>zat_b7_stalkers_victims_actor_choose_dialog</ActorDialog>
        <ActorDialog>zat_b7_stalker_squad_leader_employ_stalkers</ActorDialog>
        <ActorDialog>zat_b7_stalker_squad_leader_bunker_guarding</ActorDialog>
        <ActorDialog>zat_b7_stalker_squad_leader_come_with_me</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b33_stalker_snag"}
        class={"zat_b33_stalker_snag"}
        name={"zat_b33_stalker_snag"}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        rank={25}
        moneyMin={1500}
        moneyMax={3500}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutBm16(),
          ...loadoutPm(),
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b33_stalker_snag_about_cache_dialog</StartDialog>
        <ActorDialog>zat_b33_stalker_snag_share_package_dialog</ActorDialog>
        <ActorDialog>zat_b33_stalker_snag_refuse_task</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b42_mayron"}
        class={"zat_b42_mayron"}
        name={"zat_b42_mayron_name"}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        rank={80}
        moneyMin={1500}
        moneyMax={3500}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b28_draper"}
        class={"zat_b28_draper"}
        name={"zat_b28_draper_name"}
        icon={"ui_inGame2_Soldier_3"}
        community={communities.army}
        soundConfig={"characters_voice\\human_03\\military\\"}
        visual={"actors\\stalker_soldier\\stalker_soldier_3"}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutFort(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugsMilitary,
          ...loadoutCharacterDrugsScientific,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b28_umerov"}
        class={"zat_b28_umerov"}
        name={"zat_b28_umerov_name"}
        icon={"ui_inGame2_Soldier_2"}
        community={communities.army}
        soundConfig={"characters_voice\\human_01\\military\\"}
        visual={"actors\\stalker_soldier\\stalker_soldier_2"}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutFort(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterDrugsMilitary,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b28_smoliak"}
        class={"zat_b28_smoliak"}
        name={"zat_b28_smoliak_name"}
        icon={"ui_inGame2_Soldier_2"}
        community={communities.army}
        soundConfig={"characters_voice\\human_02\\military\\"}
        visual={"actors\\stalker_soldier\\stalker_soldier_2"}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        supplies={[
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutFort(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterDrugsMilitary,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b29_stalker_rival_1"}
        class={"zat_b29_stalker_rival_1"}
        name={"st_zat_b29_stalker_rival_1"}
        icon={"ui_inGame2_neutral_nauchniy"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_nauchniy"}
        rank={50}
        moneyMin={2000}
        moneyMax={4000}
        supplies={[
          ...loadoutBinocular(),
          ...loadoutRgd5Grenades(),
          ...loadoutLr300(),
          ...loadoutColt1911(true),
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterDrugsScientific,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
        <ActorDialog>zat_b29_stalker_rival_exchange_ActorDialog</ActorDialog>
        <ActorDialog>zat_b30_stalker_rival_1_about_detector</ActorDialog>
        <ActorDialog>zat_b30_stalker_rival_2_about_detector</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b29_stalker_rival_2"}
        class={"zat_b29_stalker_rival_2"}
        name={"st_zat_b29_stalker_rival_1"}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        rank={50}
        moneyMin={2000}
        moneyMax={4000}
        supplies={[
          ...loadoutTorch(),
          ...loadoutBinocular(),
          ...loadoutF1Grenades(),
          ...loadoutAbakan({ ap: true, scope: true }),
          ...loadoutWalther(),
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
        <ActorDialog>zat_b29_stalker_rival_exchange_ActorDialog</ActorDialog>
        <ActorDialog>zat_b30_stalker_rival_1_about_detector</ActorDialog>
        <ActorDialog>zat_b30_stalker_rival_2_about_detector</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b29_stalker_rival_default_1"}
        class={"zat_b29_stalker_rival_default_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        rank={30}
        moneyMin={1000}
        moneyMax={2500}
        supplies={[
          ...loadoutTorch(),
          ...loadoutDetectorElite(),
          ...loadoutBinocular(),
          ...loadoutRgd5Grenades(),
          ...loadoutAk74(),
          ...loadoutHpsa(),
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
        <ActorDialog>zat_b29_stalker_rival_exchange_ActorDialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b29_stalker_rival_default_2"}
        class={"zat_b29_stalker_rival_default_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        rank={30}
        moneyMin={1000}
        moneyMax={2500}
        supplies={[
          ...loadoutTorch(),
          ...loadoutDetectorElite(),
          ...loadoutBinocular(),
          ...loadoutRgd5Grenades(),
          ...loadoutAk74u(),
          ...loadoutFort(),
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
        <ActorDialog>zat_b29_stalker_rival_exchange_ActorDialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b18_noah"}
        class={"zat_b18_noah"}
        name={"zat_b18_noah_name"}
        icon={"ui_inGame2_Noy"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3_face_2"}
        rank={50}
        moneyMin={1000}
        moneyMax={2500}
        supplies={[
          { section: artefacts.af_compass, count: 2 },
          { section: questItems.zat_b20_noah_pda },
          ...loadoutSpas12(),
          ...loadoutColt1911(),
          ...loadoutF1Grenades(3),
          ...loadoutCharacterItemsWithoutTorch3,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b18_noah_start</StartDialog>
        <ActorDialog>zat_b18_noah_plateau_way</ActorDialog>
        <ActorDialog>zat_b18_noah_first_artefact</ActorDialog>
        <ActorDialog>zat_b18_noah_second_artefact</ActorDialog>
        <ActorDialog>zat_b18_noah_third_artefact</ActorDialog>
        <ActorDialog>zat_b18_noah_arc</ActorDialog>
        <ActorDialog>zat_b18_noah_catastrophe</ActorDialog>
        <ActorDialog>zat_b18_noah_dog</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b52_port_bandit_leader"}
        class={"zat_b52_port_bandit_leader"}
        name={GENERATE_BANDIT_NAME}
        icon={"ui_inGame2_bandit_2"}
        community={communities.bandit}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={50}
        supplies={[
          ...loadoutMp5(),
          ...loadoutColt1911(true),
          ...loadoutF1Grenades(2),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b215_stalker_guide"}
        class={"zat_b215_stalker_guide"}
        name={"zat_b215_stalker_guide_name"}
        icon={"ui_inGame2_Lotsman"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_face_5"}
        rank={65}
        supplies={[
          ...loadoutAk74(),
          ...loadoutDesertEagle(),
          ...loadoutRgd5Grenades(),
          ...loadoutCharacterItems3,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <StartDialog>zat_b215_stalker_guide_start</StartDialog>
        <ActorDialog>zat_b215_stalker_guide_leave_zone</ActorDialog>
        <ActorDialog>zat_b215_stalker_guide_maps</ActorDialog>
        <ActorDialog>zat_b215_stalker_guide_to_pripyat_no_way</ActorDialog>
        <ActorDialog>zat_b215_stalker_guide_to_pripyat</ActorDialog>
        <ActorDialog>zat_b215_stalker_guide_to_jupiter</ActorDialog>
        <ActorDialog>zat_b215_stalker_guide_to_zaton</ActorDialog>
        <ActorDialog>zat_b215_stalker_guide_where_to</ActorDialog>
        <ActorDialog>zat_b215_stalker_guide_about_himself</ActorDialog>
        <ActorDialog>zat_b215_stalker_guide_about_anomalies</ActorDialog>
        <ActorDialog>zat_b215_stalker_guide_about_surge</ActorDialog>
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b40_merc_squad_leader_1"}
        class={"zat_b40_merc_squad_leader_1"}
        name={"zat_b40_merc_squad_leader_1_name"}
        icon={"ui_inGame2_merc_4"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_4"}
        rank={55}
        supplies={[
          { section: questItems.zat_b40_pda_1 },
          ...loadoutLr300({ silencer: true, scope: true, ap: true }),
          ...loadoutWalther(true),
          ...loadoutF1Grenades(4),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b40_merc_squad_leader_2"}
        class={"zat_b40_merc_squad_leader_2"}
        name={"zat_b40_merc_squad_leader_2_name"}
        icon={"ui_inGame2_merc_4"}
        community={communities.killer}
        soundConfig={"characters_voice\\human_03\\killer\\"}
        visual={"actors\\stalker_merc\\stalker_merc_4"}
        rank={55}
        supplies={[
          { section: questItems.zat_b40_pda_2 },
          ...loadoutLr300({ scope: true, ap: true }),
          ...loadoutUsp({ ap: true, silencer: true }),
          ...loadoutF1Grenades(4),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b20_noah_teleport"}
        class={"zat_b20_noah_teleport"}
        name={"zat_b18_noah_name"}
        icon={"ui_inGame2_Noy"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3_face_2"}
        rank={30}
        supplies={[
          { section: questItems.zat_b20_noah_pda },
          { section: artefacts.af_compass, count: 2 },
          ...loadoutSpas12(),
          ...loadoutColt1911(),
          ...loadoutF1Grenades(3),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
        <ActorDialog>actor_break_dialog</ActorDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b44_stalker_barge"}
        class={"zat_b44_stalker_barge"}
        name={"zat_b44_stalker_barge_name"}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        rank={35}
        supplies={[
          { section: questItems.zat_b44_barge_pda },
          { section: outfits.stalker_outfit_barge },
          ...loadoutAk74(),
          ...loadoutFort(),
          ...loadoutRgd5Grenades(),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b53_artefact_hunter_1"}
        class={"zat_b53_artefact_hunter_1"}
        name={"zat_b53_artefact_hunter_1_name"}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        rank={35}
        supplies={[
          { section: artefacts.af_fireball },
          ...loadoutDetectorAdvanced(),
          ...loadoutTorch(),
          ...loadoutBinocular(),
          ...loadoutMp5(),
          ...loadoutBeretta(),
          ...loadoutRgd5Grenades(),
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogsNoGuide />
        <StartDialog>zat_b53_artefact_hunter_1_gathering_artefacts</StartDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b53_artefact_hunter_2"}
        class={"zat_b53_artefact_hunter_2"}
        name={"zat_b53_artefact_hunter_2_name"}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        rank={20}
        supplies={[
          { section: drugs.medkit },
          ...loadoutToz34(),
          ...loadoutPm(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
        <StartDialog>zat_b53_artefact_hunter_2_gathering_artefacts</StartDialog>
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b38_stalker_corpse_1"}
        class={"zat_b38_stalker_corpse_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        rank={25}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          ...loadoutBm16(),
          ...loadoutPm(),
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b38_stalker_corpse_2"}
        class={"zat_b38_stalker_corpse_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        supplies={[
          ...loadoutAk74u(),
          ...loadoutPm(),
          ...loadoutRgd5Grenades(),
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b38_stalker_corpse_3"}
        class={"zat_b38_stalker_corpse_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_3"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_3"}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        supplies={[
          ...loadoutUsp(),
          ...loadoutF1Grenades(3),
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b100_military_1"}
        class={"zat_b100_military_1"}
        name={"zat_b100_army_1"}
        icon={"ui_inGame2_Soldier_2"}
        community={communities.army}
        soundConfig={"characters_voice\\human_01\\military\\"}
        visual={"actors\\stalker_soldier\\stalker_soldier_2"}
        rank={40}
        supplies={[
          ...loadoutAk74(),
          ...loadoutFort(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterDrugsMilitary,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b100_military_2"}
        class={"zat_b100_military_2"}
        name={"zat_b100_army_2"}
        icon={"ui_inGame2_Soldier_2"}
        community={communities.army}
        soundConfig={"characters_voice\\human_01\\military\\"}
        visual={"actors\\stalker_soldier\\stalker_soldier_2"}
        rank={40}
        supplies={[
          ...loadoutAk74u(),
          ...loadoutFort(),
          ...loadoutRgd5Grenades(),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterDrugsMilitary,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>

      <SpecificCharacter
        id={"zat_b100_military_3"}
        class={"zat_b100_military_3"}
        name={"zat_b100_army_3"}
        icon={"ui_inGame2_Soldier_2"}
        community={communities.army}
        soundConfig={"characters_voice\\human_01\\military\\"}
        visual={"actors\\stalker_soldier\\stalker_soldier_2"}
        rank={40}
        supplies={[
          ...loadoutAk74(),
          ...loadoutPm(),
          ...loadoutRgd5Grenades(2),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterDrugsMilitary,
        ]}
      >
        <CharacterProfileCriticals />
      </SpecificCharacter>
    </xml>
  );
}
