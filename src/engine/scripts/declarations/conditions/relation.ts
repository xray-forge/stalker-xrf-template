import { game_object, XR_cse_alife_human_abstract, XR_game_object } from "xray16";

import { registry } from "@/engine/core/database";
import { ISchemeDeathState } from "@/engine/core/schemes/death";
import { abort } from "@/engine/core/utils/assertion";
import { extern, getExtern } from "@/engine/core/utils/binding";
import {
  isActorEnemyWithFaction,
  isActorFriendWithFaction,
  isActorNeutralWithFaction,
} from "@/engine/core/utils/check/check";
import { LuaLogger } from "@/engine/core/utils/logging";
import { getCharacterCommunity } from "@/engine/core/utils/object";
import {
  isFactionsEnemies,
  isFactionsFriends,
  isSquadRelationBetweenActorAndRelation,
} from "@/engine/core/utils/relation";
import { TCommunity } from "@/engine/lib/constants/communities";
import { relations } from "@/engine/lib/constants/relations";
import { AnyCallable, EScheme, Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
extern("xr_conditions.is_factions_enemies", (actor: XR_game_object, npc: XR_game_object, p: [TCommunity]): boolean => {
  if (p[0] !== null) {
    return isFactionsEnemies(getCharacterCommunity(actor), p[0]);
  } else {
    return false;
  }
});

/**
 * todo;
 */
extern(
  "xr_conditions.is_factions_neutrals",
  (actor: XR_game_object, npc: XR_game_object, [community]: [TCommunity]): boolean => {
    if (community === null) {
      return true;
    }

    return !(
      isFactionsEnemies(getCharacterCommunity(actor), community) ||
      isFactionsFriends(getCharacterCommunity(actor), community)
    );
  }
);

/**
 * todo;
 */
extern("xr_conditions.is_factions_friends", (actor: XR_game_object, npc: XR_game_object, p: [TCommunity]): boolean => {
  if (p[0] !== null) {
    return isFactionsFriends(getCharacterCommunity(actor), p[0]);
  } else {
    return false;
  }
});

/**
 * todo;
 */
extern(
  "xr_conditions.is_faction_enemy_to_actor",
  (actor: XR_game_object, npc: XR_game_object, p: [TCommunity]): boolean => {
    return p[0] === null ? false : isActorEnemyWithFaction(p[0]);
  }
);

/**
 * todo;
 */
extern(
  "xr_conditions.is_faction_friend_to_actor",
  (actor: XR_game_object, npc: XR_game_object, p: [TCommunity]): boolean => {
    return p[0] === null ? false : isActorFriendWithFaction(p[0]);
  }
);

/**
 * todo;
 */
extern(
  "xr_conditions.is_faction_neutral_to_actor",
  (actor: XR_game_object, npc: XR_game_object, p: [TCommunity]): boolean => {
    return p[0] === null ? false : isActorNeutralWithFaction(p[0]);
  }
);

/**
 * todo;
 */
extern(
  "xr_conditions.is_squad_friend_to_actor",
  (actor: XR_game_object, npc: XR_game_object, params: [string]): boolean => {
    if (params[0] !== null) {
      return isSquadRelationBetweenActorAndRelation(params[0], relations.friend);
    } else {
      return false;
    }
  }
);

/**
 * todo;
 */
extern(
  "xr_conditions.is_squad_enemy_to_actor",
  (actor: XR_game_object, npc: XR_game_object, params: Array<string>): boolean => {
    if (!params) {
      abort("Not enough arguments in 'is_squad_enemy_to_actor' function!");
    }

    for (const v of params) {
      if (isSquadRelationBetweenActorAndRelation(v, relations.enemy)) {
        return true;
      }
    }

    return false;
  }
);

/**
 * todo;
 */
extern(
  "xr_conditions.is_squad_neutral_to_actor",
  (actor: XR_game_object, npc: XR_game_object, p: [string]): boolean => {
    return !(
      getExtern<AnyCallable>("is_squad_enemy_to_actor", getExtern("xr_conditions"))(actor, npc, p) ||
      getExtern<AnyCallable>("is_squad_friend_to_actor", getExtern("xr_conditions"))(actor, npc, p)
    );
  }
);

/**
 * todo;
 */
extern("xr_conditions.fighting_actor", (actor: XR_game_object, npc: XR_game_object): boolean => {
  const enemy_id: number = registry.objects.get(npc.id()).enemy_id!;
  const enemy: Optional<XR_game_object> = registry.objects.get(enemy_id)?.object as Optional<XR_game_object>;

  return enemy !== null && enemy.id() === actor.id();
});

/**
 * todo;
 */
extern("xr_conditions.actor_enemy", (actor: XR_game_object, npc: XR_game_object): boolean => {
  const state: Optional<ISchemeDeathState> = registry.objects.get(npc.id())[EScheme.DEATH] as ISchemeDeathState;

  return npc.relation(actor) === game_object.enemy || state?.killer === actor.id();
});

/**
 * todo;
 */
extern("xr_conditions.actor_friend", (actor: XR_game_object, npc: XR_game_object): boolean => {
  return npc.relation(actor) === game_object.friend;
});

/**
 * todo;
 */
extern("xr_conditions.actor_neutral", (actor: XR_game_object, npc: XR_game_object): boolean => {
  return npc.relation(actor) === game_object.neutral;
});

/**
 * todo;
 */
extern(
  "xr_conditions.npc_community",
  (actor: XR_game_object, npc: XR_game_object | XR_cse_alife_human_abstract, params: [TCommunity]): boolean => {
    if (params[0] === null) {
      abort("Wrong number of params in npc_community");
    }

    let npc_obj: Optional<XR_game_object> = null;

    if (type(npc.id) !== "function") {
      npc_obj = registry.objects.get((npc as XR_cse_alife_human_abstract).id)?.object as XR_game_object;

      if (npc_obj === null) {
        return (npc as XR_cse_alife_human_abstract).community() === params[0];
      }
    } else {
      npc_obj = npc as XR_game_object;
    }

    return getCharacterCommunity(npc_obj) === params[0];
  }
);
