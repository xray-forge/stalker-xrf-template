import { Fragment, JSXNode, JSXXML } from "jsx-xml";

import {
  CharacterProfileCriticals,
  DefaultCharacterDialogs,
  loadoutCharacterDrugs,
  loadoutCharacterDrugs2,
  loadoutCharacterFood,
  loadoutCharacterItems,
  loadoutCharacterItemsWithoutDetector,
  loadoutCharacterSellWeapons,
  loadoutDesertEagle,
  loadoutF1Grenades,
  loadoutProtecta,
} from "@/engine/configs/gameplay/loadouts";
import { SpecificCharacter } from "@/engine/configs/gameplay/utils";
import { communities } from "@/engine/lib/constants/communities";
import { ammo } from "@/engine/lib/constants/items/ammo";
import { weapons } from "@/engine/lib/constants/items/weapons";
import { GENERATE_BANDIT_NAME } from "@/engine/lib/constants/names";

export function BanditLoadout(): JSXNode {
  return (
    <Fragment>
      <SpecificCharacter
        id={"stalker_bandit_default"}
        class={"Stalker_bandit"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_1"}
        soundConfig={"characters_voice\\human_01\\stalker\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_1"}
        rank={0}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.56x45_ss190"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItems,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_0_default_0"}
        class={"sim_default_bandit_0"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_1"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_1"}
        rank={20}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_bm16 },
          { section: weapons.wpn_pm },
          { section: ammo["ammo_12x70_buck"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_0_default_1"}
        class={"sim_default_bandit_0"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_1"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_1"}
        rank={20}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_bm16 },
          { section: weapons.wpn_fort },
          { section: ammo["ammo_12x70_buck"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_0_default_2"}
        class={"sim_default_bandit_0"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_1"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_1"}
        rank={20}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_pm },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_1_default_0"}
        class={"sim_default_bandit_1"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_1"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_1"}
        rank={30}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_1_default_1"}
        class={"sim_default_bandit_1"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_3"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3"}
        rank={30}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_1_default_2"}
        class={"sim_default_bandit_1"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_3_mask"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3_mask"}
        rank={30}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_pm },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_1_default_3"}
        class={"sim_default_bandit_1"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_3_mask"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3_mask"}
        rank={30}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_pm },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_1_default_4"}
        class={"sim_default_bandit_1"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_4"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_4"}
        rank={30}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_1_default_5"}
        class={"sim_default_bandit_1"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_1"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_1"}
        rank={30}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_fort },
          { section: weapons.grenade_rgd5 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x18_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_2_default_0"}
        class={"sim_default_bandit_2"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_3"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3"}
        rank={35}
        moneyMin={250}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_wincheaster1300 },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_12x76_zhekan"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_2_default_1"}
        class={"sim_default_bandit_2"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_2"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={35}
        moneyMin={500}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_fmj },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_2_default_2"}
        class={"sim_default_bandit_2"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_2"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={35}
        moneyMin={500}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_mp5 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo.ammo_9x19_pbp },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_2_default_3"}
        class={"sim_default_bandit_2"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_3_mask"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3_mask"}
        rank={35}
        moneyMin={500}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_hpsa },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_pbp },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_2_default_4"}
        class={"sim_default_bandit_2"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_2"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={35}
        moneyMin={500}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_mp5 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo.ammo_9x19_pbp },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_2_default_5"}
        class={"sim_default_bandit_2"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_4"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_4"}
        rank={35}
        moneyMin={500}
        moneyMax={1750}
        supplies={[
          { section: weapons.wpn_ak74u },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_rgd5, count: 2 },
          { section: ammo["ammo_5.45x39_fmj"] },
          { section: ammo.ammo_9x19_pbp },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_3_default_0"}
        class={"sim_default_bandit_3"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_3"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3"}
        rank={45}
        moneyMin={3000}
        moneyMax={4000}
        supplies={[
          { section: weapons.wpn_spas12 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo.ammo_12x76_zhekan },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_3_default_1"}
        class={"sim_default_bandit_3"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_3_mask"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3_mask"}
        rank={45}
        moneyMin={3000}
        moneyMax={4000}
        supplies={[
          { section: weapons.wpn_spas12 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo.ammo_12x70_buck },
          { section: ammo["ammo_9x19_pbp"] },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_3_default_2"}
        class={"sim_default_bandit_3"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_4"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_4"}
        rank={45}
        moneyMin={3000}
        moneyMax={4000}
        supplies={[
          { section: weapons.wpn_spas12 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo.ammo_12x70_buck },
          { section: ammo["ammo_9x19_pbp"] },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_3_default_3"}
        class={"sim_default_bandit_3"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_2"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={45}
        moneyMin={3000}
        moneyMax={4000}
        supplies={[
          { section: weapons.wpn_ak74 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo["ammo_5.45x39_ap"] },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_3_default_4"}
        class={"sim_default_bandit_3"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_2"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={45}
        moneyMin={3000}
        moneyMax={4000}
        supplies={[
          { section: weapons.wpn_lr300 },
          { section: weapons.wpn_beretta },
          { section: weapons.grenade_f1, count: 3 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_9x19_pbp"] },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_4_default_0"}
        class={"sim_default_bandit_4"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_4"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_4"}
        rank={55}
        moneyMin={3000}
        moneyMax={4000}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_desert_eagle },
          { section: weapons.grenade_f1, count: 4 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_4_default_1"}
        class={"sim_default_bandit_4"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_3"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3"}
        rank={55}
        moneyMin={3000}
        moneyMax={8000}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_colt1911 },
          { section: weapons.grenade_f1, count: 4 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_hydro"] },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_4_default_2"}
        class={"sim_default_bandit_4"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_2"}
        soundConfig={"characters_voice\\human_01\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_2"}
        rank={55}
        moneyMin={3000}
        moneyMax={8000}
        supplies={[
          { section: weapons.wpn_sig550 },
          { section: weapons.wpn_desert_eagle },
          { section: weapons.grenade_f1, count: 4 },
          { section: ammo["ammo_5.56x45_ap"] },
          { section: ammo["ammo_11.43x23_fmj"] },
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_4_default_3"}
        class={"sim_default_bandit_4"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_2"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_4"}
        rank={55}
        moneyMin={3000}
        moneyMax={8000}
        supplies={[
          ...loadoutProtecta(true),
          ...loadoutDesertEagle(true),
          ...loadoutF1Grenades(4),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>

      <SpecificCharacter
        id={"sim_default_bandit_4_default_4"}
        class={"sim_default_bandit_4"}
        name={GENERATE_BANDIT_NAME}
        community={communities.bandit}
        icon={"ui_inGame2_bandit_3_mask"}
        soundConfig={"characters_voice\\human_02\\bandit\\"}
        visual={"actors\\stalker_bandit\\stalker_bandit_3_mask"}
        rank={55}
        moneyMin={3000}
        moneyMax={8000}
        supplies={[
          ...loadoutProtecta(true),
          ...loadoutDesertEagle(true),
          ...loadoutF1Grenades(4),
          ...loadoutCharacterItemsWithoutDetector,
          ...loadoutCharacterDrugs2,
          ...loadoutCharacterFood,
          ...loadoutCharacterSellWeapons,
        ]}
      >
        <CharacterProfileCriticals />
        <DefaultCharacterDialogs />
      </SpecificCharacter>
    </Fragment>
  );
}
