import { Fragment, JSXNode, JSXXML } from "jsx-xml";

import {
  characterProfileCriticals,
  defaultCharacterDialogs,
  loadoutCharacterDrugs,
  loadoutCharacterDrugs2,
  loadoutCharacterDrugs3,
  loadoutCharacterDrugs4,
  loadoutCharacterDrugsScientific,
  loadoutCharacterFood,
  loadoutCharacterItems,
  loadoutCharacterItems2,
  loadoutCharacterItems3,
  loadoutCharacterSellWeapons,
} from "@/engine/configs/gameplay/loadouts";
import { SpecificCharacter } from "@/engine/configs/gameplay/utils";
import { communities } from "@/engine/lib/constants/communities";
import { ammo } from "@/engine/lib/constants/items/ammo";
import { weapons } from "@/engine/lib/constants/items/weapons";
import { GENERATE_STALKER_NAME } from "@/engine/lib/constants/names";

export function StalkerLoadout(): JSXNode {
  return (
    <Fragment>
      <SpecificCharacter
        id={"stalker_general_default"}
        class={"Stalker_general"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_beretta },
          { section: ammo["ammo_5.56x45_ss190"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"stalker_general_veteran_default"}
        class={"Stalker_general_veteran"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_3"}
        community={communities.stalker}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_3"}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.56x45_ss190"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_0_default_0"}
        class={"sim_default_stalker_0"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        rank={25}
        moneyMin={250}
        moneyMax={1750}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        supplies={[
          { section: weapons.wpn_bm16 },
          { section: weapons.wpn_pm },
          { section: ammo.ammo_12x70_buck },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_0_default_1"}
        class={"sim_default_stalker_0"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        rank={25}
        moneyMin={250}
        moneyMax={1750}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        supplies={[
          { section: weapons.wpn_toz34 },
          { section: weapons.wpn_pm },
          { section: ammo.ammo_12x70_buck },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_0_default_2"}
        class={"sim_default_stalker_0"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        rank={25}
        moneyMin={250}
        moneyMax={1750}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        supplies={[
          { section: weapons.wpn_toz34 },
          { section: weapons.wpn_fort },
          { section: ammo.ammo_12x70_buck },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_0_default_3"}
        class={"sim_default_stalker_0"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_1"}
        community={communities.stalker}
        rank={25}
        moneyMin={250}
        moneyMax={1750}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_1"}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_pm },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_0"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_pm },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_1"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_2"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_toz34 },
          { section: weapons.wpn_fort },
          { section: weapons.grenade_rgd5 },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_3"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_pm },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_4"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_fort },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_5"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_6"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_7"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_fort },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_8"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_1_default_9"}
        class={"sim_default_stalker_1"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={30}
        moneyMin={1000}
        moneyMax={2000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_l85 },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.56x45_ss190"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_0"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_wincheaster1300 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo.ammo_12x70_buck },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_1"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_l85 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_2"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.45x39_ap"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_3"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_lr300 },
          { section: weapons.wpn_fort },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_4"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_wincheaster1300 },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo.ammo_12x70_buck },
          { section: ammo.ammo_9x19_pbp },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_5"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_pbp },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_6"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_l85 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_7"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.45x39_ap"] },
          { section: ammo.ammo_9x19_pbp },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_8"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_wincheaster1300 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo.ammo_12x70_buck },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_2_default_9"}
        class={"sim_default_stalker_2"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={40}
        moneyMin={1500}
        moneyMax={3500}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_toz34 },
          { section: weapons.wpn_mp5 },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs2,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_0"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_val, scope: true },
          { section: weapons.wpn_sig220, silencer: true },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo.ammo_9x39_ap },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_1"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_spas12 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_2"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_3"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_nauchniy"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_nauchniy"}
        supplies={[
          { section: weapons.wpn_g36 },
          { section: weapons.wpn_spas12 },
          { section: weapons.wpn_sig220 },
          { section: weapons.grenade_f1, count: 2 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo.ammo_12x70_buck },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_4"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_spas12 },
          { section: weapons.wpn_usp },
          { section: weapons.grenade_f1, count: 2 },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_5"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2"}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_usp },
          { section: weapons.grenade_f1, count: 2 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_6"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_02\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_spas12 },
          { section: weapons.wpn_sig220 },
          { section: weapons.grenade_f1, count: 2 },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_7"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_2_mask"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_2_mask"}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_usp },
          { section: weapons.grenade_f1, count: 2 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_8"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_nauchniy"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_nauchniy"}
        supplies={[
          { section: weapons.wpn_lr300 },
          { section: weapons.wpn_sig220 },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_3_default_9"}
        class={"sim_default_stalker_3"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_3"}
        community={communities.stalker}
        rank={50}
        moneyMin={2500}
        moneyMax={5000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_3"}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_desert_eagle },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems2,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs3,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_4_default_0"}
        class={"sim_default_stalker_4"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_4"}
        community={communities.stalker}
        rank={60}
        moneyMin={5000}
        moneyMax={10000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_4"}
        supplies={[
          { section: weapons.wpn_protecta },
          { section: weapons.wpn_sig220 },
          { section: weapons.grenade_f1, count: 4 },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems3,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs4,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_4_default_1"}
        class={"sim_default_stalker_4"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_4"}
        community={communities.stalker}
        rank={60}
        moneyMin={5000}
        moneyMax={10000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_4"}
        supplies={[
          { section: weapons.wpn_fn2000 },
          { section: weapons.wpn_sig220 },
          { section: weapons.grenade_f1, count: 4 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems3,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs4,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_4_default_2"}
        class={"sim_default_stalker_4"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_4"}
        community={communities.stalker}
        rank={60}
        moneyMin={5000}
        moneyMax={10000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_4"}
        supplies={[
          { section: weapons.wpn_groza },
          { section: weapons.wpn_usp },
          { section: weapons.grenade_f1, count: 4 },
          { section: ammo.ammo_9x39_ap },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems3,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs4,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_stalker_4_default_3"}
        class={"sim_default_stalker_4"}
        name={GENERATE_STALKER_NAME}
        icon={"ui_inGame2_neutral_nauchniy"}
        community={communities.stalker}
        rank={60}
        moneyMin={5000}
        moneyMax={10000}
        soundConfig={"characters_voice\\human_03\\stalker\\"}
        visual={"actors\\stalker_neutral\\stalker_neutral_nauchniy"}
        supplies={[
          { section: weapons.wpn_vintorez },
          { section: weapons.wpn_spas12 },
          { section: weapons.wpn_sig220 },
          { section: weapons.grenade_f1, count: 4 },
          { section: ammo.ammo_9x39_ap },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItems3,
          ...loadoutCharacterFood,
          ...loadoutCharacterDrugs4,
          ...loadoutCharacterDrugsScientific,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        {characterProfileCriticals}
        {defaultCharacterDialogs}
      </SpecificCharacter>
    </Fragment>
  );
}
