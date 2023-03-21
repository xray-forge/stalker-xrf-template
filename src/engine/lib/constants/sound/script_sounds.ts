/* eslint sort-keys-fix/sort-keys-fix: "error" */

/**
 * todo;
 */
export const scriptSounds = {
  alarm: "alarm",
  bloodsucker_growl: "bloodsucker_growl",
  bloodsucker_hit: "bloodsucker_hit",
  bloodsucker_swarm: "bloodsucker_swarm",
  blowout_begin: "blowout_begin",
  blowout_hit_1: "blowout_hit_1",
  blowout_hit_2: "blowout_hit_2",
  blowout_hit_3: "blowout_hit_3",
  blowout_rumble: "blowout_rumble",
  blowout_wave_1: "blowout_wave_1",
  blowout_wave_2: "blowout_wave_2",
  blowout_wave_3: "blowout_wave_3",
  boar_swamp_runaway: "boar_swamp_runaway",
  boar_swarm: "boar_swarm",
  corpse_loot_bad: "corpse_loot_bad",
  corpse_loot_begin: "corpse_loot_begin",
  corpse_loot_good: "corpse_loot_good",
  fight_attack: "fight_attack",
  heli_damaged: "heli_damaged",
  heli_down: "heli_down",
  heli_hit: "heli_hit",
  help_heavy: "help_heavy",
  help_thanks: "help_thanks",
  meet_hello: "meet_hello",
  meet_hide_weapon: "meet_hide_weapon",
  meet_use_no_default: "meet_use_no_default",
  meet_use_no_fight: "meet_use_no_fight",
  meet_use_no_talk_leader: "meet_use_no_talk_leader",
  meet_use_no_weapon: "meet_use_no_weapon",
  metal_small_close_start: "metal_small_close_start",
  metal_small_close_stop: "metal_small_close_stop",
  metal_small_open: "metal_small_open",
  patrol_run: "patrol_run",
  patrol_sneak: "patrol_sneak",
  patrol_walk: "patrol_walk",
  pda_alarm: "pda_alarm",
  pda_news: "pda_news",
  pda_task: "pda_task",
  pda_tips: "pda_tips",
  post_combat_relax: "post_combat_relax",
  post_combat_wait: "post_combat_wait",
  post_combat_wait_long: "post_combat_wait_long",
  power_switch: "power_switch",
  radio_call: "radio_call",
  shooting_target_down: "shooting_target_down",
  shooting_target_hit: "shooting_target_hit",
  shooting_target_up: "shooting_target_up",
  state: "state",
  steam_blowout: "steam_blowout",
  surge_earthquake_sound: "surge_earthquake_sound",
  surge_earthquake_sound_looped: "surge_earthquake_sound_looped",
  trader_door_close_start: "trader_door_close_start",
  trader_door_close_stop: "trader_door_close_stop",
  trader_door_locked: "trader_door_locked",
  trader_door_open_start: "trader_door_open_start",
  trader_door_unlock: "trader_door_unlock",
  wait: "wait",
  wood_large_close_start: "wood_large_close_start",
  wood_large_close_stop: "wood_large_close_stop",
  wood_large_open: "wood_large_open",
  wood_small_close_start: "wood_small_close_start",
  wood_small_close_stop: "wood_small_close_stop",
  wood_small_open: "wood_small_open",
  wounded_medkit: "wounded_medkit",
} as const;

/**
 * todo;
 */
export type TScriptSounds = typeof scriptSounds;

/**
 * todo;
 */
export type TScriptSound = TScriptSounds[keyof TScriptSounds];
