import { relation_registry } from "xray16";

import { Squad } from "@/engine/core/objects";
import { getSquadCommunityRelationToActor } from "@/engine/core/utils/relation/get";
import { EGoodwill, ERelation } from "@/engine/core/utils/relation/types";
import { communities, TCommunity } from "@/engine/lib/constants/communities";
import { ACTOR_ID } from "@/engine/lib/constants/ids";
import { Optional, TStringId } from "@/engine/lib/types";

/**
 * Check whether squad is enemy to actor.
 *
 * @param squadStoryId - squad story id
 * @returns whether actor is enemy to squad
 */
export function isSquadCommunityEnemyToActor(squadStoryId: TStringId): boolean {
  return getSquadCommunityRelationToActor(squadStoryId) === ERelation.ENEMY;
}

/**
 * Check whether squad is friend to actor.
 *
 * @param squadStoryId - squad story id
 * @returns whether actor is friend to squad
 */
export function isSquadCommunityFriendToActor(squadStoryId: TStringId): boolean {
  return getSquadCommunityRelationToActor(squadStoryId) === ERelation.FRIEND;
}

/**
 * Check whether squad is neutral to actor.
 *
 * @param squadStoryId - squad story id
 * @returns whether actor is neutral to squad
 */
export function isSquadCommunityNeutralToActor(squadStoryId: TStringId): boolean {
  return getSquadCommunityRelationToActor(squadStoryId) === ERelation.NEUTRAL;
}

/**
 * Check general goodwill level between factions and assume whether they are friends.
 *
 * @param from - community relation check from
 * @param to - community relation check to
 * @returns whether faction `from` considers `to` friend
 */
export function areCommunitiesFriendly(from: Optional<TCommunity>, to: TCommunity): boolean {
  if (from !== null && from !== communities.none && to !== communities.none) {
    return relation_registry.community_relation(from, to) >= EGoodwill.FRIENDS;
  } else {
    return false;
  }
}

/**
 * Check general goodwill level between factions and assume whether they are enemies.
 *
 * @param from - community relation check from
 * @param to - community relation check to
 * @returns whether faction `from` considers `to` enemy
 */
export function areCommunitiesEnemies(from: Optional<TCommunity>, to: TCommunity): boolean {
  if (from !== null && from !== communities.none && to !== communities.none) {
    return relation_registry.community_relation(from, to) <= EGoodwill.ENEMIES;
  } else {
    return false;
  }
}

/**
 * Check if anyone from squad is enemy to actor.
 *
 * @param squad - target squad to check
 * @returns whether any member is enemy to actor
 */
export function isAnySquadMemberEnemyToActor(squad: Squad): boolean {
  for (const squadMember of squad.squad_members()) {
    if (relation_registry.get_general_goodwill_between(squadMember.id, ACTOR_ID) <= EGoodwill.ENEMIES) {
      return true;
    }
  }

  return false;
}

/**
 * Check if anyone from squad is friend to actor.
 *
 * @param squad - target squad to check
 * @returns whether any member is friend to actor
 */
export function isAnySquadMemberFriendToActor(squad: Squad): boolean {
  for (const squadMember of squad.squad_members()) {
    if (relation_registry.get_general_goodwill_between(squadMember.id, ACTOR_ID) >= EGoodwill.FRIENDS) {
      return true;
    }
  }

  return false;
}
