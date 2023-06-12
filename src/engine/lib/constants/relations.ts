/**
 * Relation type.
 */
export enum ERelation {
  ENEMY = "enemy",
  NEUTRAL = "neutral",
  FRIEND = "friend",
}

/**
 * todo;
 */
export enum EGoodwill {
  BEST_FRIENDS = 5000,
  FRIENDS = 1000,
  NEUTRALS = 0,
  ENEMIES = -1000,
  WORST_ENEMIES = -5000,
}

/**
 * todo;
 * todo: Probably duplicates ERelation.
 */
export const goodwill = {
  enemy: -1000,
  friend: 1000,
  neutral: 0,
} as const;
