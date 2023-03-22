/* eslint sort-keys-fix/sort-keys-fix: "error" */

/**
 * todo;
 */
export const communities = {
  army: "army",
  bandit: "bandit",
  dolg: "dolg",
  ecolog: "ecolog",
  freedom: "freedom",
  killer: "killer",
  monolith: "monolith",
  monster: "monster",
  monster_predatory_day: "monster_predatory_day",
  monster_predatory_night: "monster_predatory_night",
  monster_special: "monster_special",
  monster_vegetarian: "monster_vegetarian",
  monster_zombied_day: "monster_zombied_day",
  monster_zombied_night: "monster_zombied_night",
  none: "none",
  stalker: "stalker",
  zombied: "zombied",
} as const;

/**
 * todo;
 */
export type TCommunities = typeof communities;

/**
 * todo;
 */
export type TCommunity = TCommunities[keyof TCommunities];