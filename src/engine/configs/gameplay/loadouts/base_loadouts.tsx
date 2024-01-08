import { ISpawnItemDescriptor } from "@/engine/configs/gameplay/utils";
import { artefacts } from "@/engine/lib/constants/items/artefacts";
import { detectors } from "@/engine/lib/constants/items/detectors";
import { drugs } from "@/engine/lib/constants/items/drugs";
import { food } from "@/engine/lib/constants/items/food";
import { misc } from "@/engine/lib/constants/items/misc";
import { weapons } from "@/engine/lib/constants/items/weapons";

/**
 * Any artefact drops with small chance.
 */
export function loadoutArtefacts(): Array<ISpawnItemDescriptor> {
  return [
    { section: artefacts.af_cristall, probability: 0.003 },
    { section: artefacts.af_fireball, probability: 0.003 },
    { section: artefacts.af_dummy_glassbeads, probability: 0.003 },
    { section: artefacts.af_eye, probability: 0.001 },
    { section: artefacts.af_fire, probability: 0.001 },
    { section: artefacts.af_medusa, probability: 0.003 },
    { section: artefacts.af_cristall_flower, probability: 0.003 },
    { section: artefacts.af_night_star, probability: 0.003 },
    { section: artefacts.af_vyvert, probability: 0.003 },
    { section: artefacts.af_gravi, probability: 0.001 },
    { section: artefacts.af_gold_fish, probability: 0.001 },
    { section: artefacts.af_blood, probability: 0.003 },
    { section: artefacts.af_mincer_meat, probability: 0.003 },
    { section: artefacts.af_soul, probability: 0.003 },
    { section: artefacts.af_fuzz_kolobok, probability: 0.003 },
    { section: artefacts.af_baloon, probability: 0.001 },
    { section: artefacts.af_glass, probability: 0.001 },
    { section: artefacts.af_electra_sparkler, probability: 0.003 },
    { section: artefacts.af_electra_flash, probability: 0.003 },
    { section: artefacts.af_electra_moonlight, probability: 0.003 },
    { section: artefacts.af_dummy_battery, probability: 0.003 },
    { section: artefacts.af_dummy_dummy, probability: 0.001 },
    { section: artefacts.af_ice, probability: 0.001 },
  ];
}

export function loadoutCharacterDrugs(): Array<ISpawnItemDescriptor> {
  return [
    { section: drugs.medkit, probability: 0.2 },
    { section: drugs.bandage, probability: 0.4 },
  ];
}

export function loadoutCharacterDrugs2(): Array<ISpawnItemDescriptor> {
  return [
    { section: drugs.medkit, probability: 0.2 },
    { section: drugs.bandage, probability: 0.4 },
    { section: drugs.antirad, probability: 0.1 },
    { section: drugs.drug_booster, probability: 0.06 },
    { section: drugs.drug_coagulant, probability: 0.06 },
  ];
}

export function loadoutCharacterDrugs3(): Array<ISpawnItemDescriptor> {
  return [
    { section: drugs.medkit, probability: 0.3 },
    { section: drugs.bandage, probability: 0.5 },
    { section: drugs.antirad, probability: 0.2 },
    { section: drugs.drug_booster, probability: 0.08 },
    { section: drugs.drug_coagulant, probability: 0.08 },
    { section: drugs.drug_antidot, probability: 0.06 },
    { section: drugs.drug_radioprotector, probability: 0.06 },
  ];
}

export function loadoutCharacterDrugs4(): Array<ISpawnItemDescriptor> {
  return [
    { section: drugs.medkit, probability: 0.4 },
    { section: drugs.bandage, probability: 0.6 },
    { section: drugs.antirad, probability: 0.3 },
    { section: drugs.drug_booster, probability: 0.1 },
    { section: drugs.drug_coagulant, probability: 0.1 },
    { section: drugs.drug_antidot, probability: 0.08 },
    { section: drugs.drug_radioprotector, probability: 0.08 },
    { section: drugs.drug_psy_blockade, probability: 0.04 },
    { section: drugs.drug_anabiotic, probability: 0.005 },
  ];
}

export function loadoutCharacterDrugsMilitary(): Array<ISpawnItemDescriptor> {
  return [{ section: drugs.medkit_army, probability: 0.2 }];
}

export function loadoutCharacterDrugsScientific(): Array<ISpawnItemDescriptor> {
  return [{ section: drugs.medkit_scientic, probability: 0.2 }];
}

export function loadoutCharacterFood(): Array<ISpawnItemDescriptor> {
  return [
    { section: food.bread, probability: 0.5 },
    { section: food.kolbasa, probability: 0.5 },
    { section: food.vodka, probability: 0.5 },
  ];
}

export function loadoutCharacterFoodArmy(): Array<ISpawnItemDescriptor> {
  return [
    { section: food.bread, probability: 0.5 },
    { section: food.kolbasa, probability: 0.5 },
    { section: food.conserva, probability: 0.5 },
  ];
}

export function loadoutCharacterItems(): Array<ISpawnItemDescriptor> {
  return [
    { section: misc.guitar_a },
    { section: misc.harmonica_a },
    { section: misc.device_torch },
    { section: weapons.wpn_binoc },
    { section: detectors.detector_simple, probability: 0.35 },
  ];
}

export function loadoutCharacterItems2(): Array<ISpawnItemDescriptor> {
  return [
    { section: misc.guitar_a },
    { section: misc.harmonica_a },
    { section: misc.device_torch },
    { section: weapons.wpn_binoc },
    { section: detectors.detector_advanced, probability: 0.3 },
  ];
}

export function loadoutCharacterItemsWithoutTorch2(): Array<ISpawnItemDescriptor> {
  return [
    { section: misc.guitar_a },
    { section: misc.harmonica_a },
    { section: weapons.wpn_binoc },
    { section: detectors.detector_advanced, probability: 0.35 },
  ];
}

export function loadoutCharacterItems3(): Array<ISpawnItemDescriptor> {
  return [
    { section: misc.guitar_a },
    { section: misc.harmonica_a },
    { section: misc.device_torch },
    { section: weapons.wpn_binoc },
    { section: detectors.detector_elite, probability: 0.25 },
  ];
}

export function loadoutCharacterItemsWithoutTorch3(): Array<ISpawnItemDescriptor> {
  return [
    { section: misc.guitar_a },
    { section: misc.harmonica_a },
    { section: weapons.wpn_binoc },
    { section: detectors.detector_elite, probability: 0.25 },
  ];
}

export const loadoutCharacterItemsMonolith = (): Array<ISpawnItemDescriptor> => [
  { section: misc.device_torch },
  { section: weapons.wpn_binoc },
];

export function loadoutCharacterItemsWithoutDetector(): Array<ISpawnItemDescriptor> {
  return [
    { section: misc.guitar_a },
    { section: misc.harmonica_a },
    { section: misc.device_torch },
    { section: weapons.wpn_binoc },
  ];
}

export function loadoutCharacterItemsWithoutTorchAndDetector(): Array<ISpawnItemDescriptor> {
  return [{ section: misc.guitar_a }, { section: misc.harmonica_a }, { section: weapons.wpn_binoc }];
}

export function loadoutCharacterItemsWithoutTorch(): Array<ISpawnItemDescriptor> {
  return [
    { section: misc.guitar_a },
    { section: misc.harmonica_a },
    { section: detectors.detector_simple, probability: 0.35 },
    { section: weapons.wpn_binoc },
  ];
}

export function loadoutCharacterSellWeapons(): Array<ISpawnItemDescriptor> {
  return [
    { section: weapons.wpn_pm, probability: 0.02 },
    { section: weapons.wpn_pb, probability: 0.02 },
    { section: weapons.wpn_fort, probability: 0.02 },
    { section: weapons.wpn_ak74, probability: 0.02 },
    { section: weapons.wpn_ak74u, probability: 0.02 },
    { section: weapons.wpn_bm16, probability: 0.02 },
    { section: weapons.wpn_toz34, probability: 0.02 },
    { section: weapons.wpn_wincheaster1300, probability: 0.02 },
    { section: weapons.wpn_l85, probability: 0.02 },
    { section: weapons.wpn_mp5, probability: 0.02 },
  ];
}
