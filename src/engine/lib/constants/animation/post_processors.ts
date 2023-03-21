/* eslint sort-keys-fix/sort-keys-fix: "error" */

/**
 * todo;
 */
export const postProcessors = {
  acidic: "acidic.ppe",
  acidic_mine: "acidic_mine.ppe",
  alcohol: "alcohol.ppe",
  black: "black.ppe",
  blink: "blink.ppe",
  brighten: "brighten.ppe",
  contrast: "contrast.ppe",
  controller_hit: "controller_hit.ppe",
  deimos: "deimos.ppe",
  deimos1: "deimos1.ppe",
  electra: "electra.ppe",
  electra_mine: "electra_mine.ppe",
  fade_in: "fade_in.ppe",
  fade_in_out: "fade_in_out.ppe",
  fade_to_black_9_sec: "fade_to_black_9_sec.ppe",
  fire_hit: "fire_hit.ppe",
  flame: "flame.ppe",
  fuzz: "fuzz.ppe",
  gravi: "gravi.ppe",
  gravi_mine: "gravi_mine.ppe",
  mosquito_bald: "mosquito_bald.ppe",
  nightvision_1: "nightvision_1.ppe",
  nightvision_2: "nightvision_2.ppe",
  nightvision_3: "nightvision_3.ppe",
  nil: "nil.ppe",
  pas_b400_acidic: "pas_b400_acidic.ppe",
  poltergeist_scan: "poltergeist_scan.ppe",
  psi: "psi.ppe",
  psy_antenna: "psy_antenna.ppe",
  psychic: "psychic.ppe",
  radiation: "radiation.ppe",
  sleep_fade: "sleep_fade.ppe",
  snd_shock: "snd_shock.ppe",
  steam_mine: "steam_mine.ppe",
  surge_fade: "surge_fade.ppe",
  surge_shock: "surge_shock.ppe",
  surge_shock_old: "surge_shock_old.ppe",
  teleport: "teleport.ppe",
  thermal: "thermal.ppe",
} as const;

/**
 * todo;
 */
export type TPostProcessors = typeof postProcessors;

/**
 * todo;
 */
export type TPostProcessor = TPostProcessors[keyof TPostProcessors];
