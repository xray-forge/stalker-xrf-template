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
import {
  AnyCallable,
  ClientObject,
  EClientObjectRelation,
  EScheme,
  Optional,
  ServerHumanObject,
  TNumberId,
} from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
extern("xr_conditions.is_factions_enemies", (actor: ClientObject, npc: ClientObject, p: [TCommunity]): boolean => {
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
  (actor: ClientObject, npc: ClientObject, [community]: [TCommunity]): boolean => {
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
extern("xr_conditions.is_factions_friends", (actor: ClientObject, npc: ClientObject, p: [TCommunity]): boolean => {
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
  (actor: ClientObject, npc: ClientObject, p: [TCommunity]): boolean => {
    return p[0] === null ? false : isActorEnemyWithFaction(p[0]);
  }
);

/**
 * todo;
 */
extern(
  "xr_conditions.is_faction_friend_to_actor",
  (actor: ClientObject, npc: ClientObject, p: [TCommunity]): boolean => {
    return p[0] === null ? false : isActorFriendWithFaction(p[0]);
  }
);

/**
 * todo;
 */
extern(
  "xr_conditions.is_faction_neutral_to_actor",
  (actor: ClientObject, npc: ClientObject, p: [TCommunity]): boolean => {
    return p[0] === null ? false : isActorNeutralWithFaction(p[0]);
  }
);

/**
 * todo;
 */
extern(
  "xr_conditions.is_squad_friend_to_actor",
  (actor: ClientObject, npc: ClientObject, params: [string]): boolean => {
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
  (actor: ClientObject, npc: ClientObject, params: Array<string>): boolean => {
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
extern("xr_conditions.is_squad_neutral_to_actor", (actor: ClientObject, npc: ClientObject, p: [string]): boolean => {
  return !(
    getExtern<AnyCallable>("is_squad_enemy_to_actor", getExtern("xr_conditions"))(actor, npc, p) ||
    getExtern<AnyCallable>("is_squad_friend_to_actor", getExtern("xr_conditions"))(actor, npc, p)
  );
});

/**
 * todo;
 */
extern("xr_conditions.fighting_actor", (actor: ClientObject, npc: ClientObject): boolean => {
  const enemyId: TNumberId = registry.objects.get(npc.id()).enemy_id!;
  const enemy: Optional<ClientObject> = registry.objects.get(enemyId)?.object as Optional<ClientObject>;

  return enemy !== null && enemy.id() === actor.id();
});

/**
 * todo;
 */
extern("xr_conditions.actor_enemy", (actor: ClientObject, npc: ClientObject): boolean => {
  const state: Optional<ISchemeDeathState> = registry.objects.get(npc.id())[EScheme.DEATH] as ISchemeDeathState;

  return npc.relation(actor) === EClientObjectRelation.ENEMY || state?.killer === actor.id();
});

/**
 * todo;
 */
extern("xr_conditions.actor_friend", (actor: ClientObject, npc: ClientObject): boolean => {
  return npc.relation(actor) === EClientObjectRelation.FRIEND;
});

/**
 * todo;
 */
extern("xr_conditions.actor_neutral", (actor: ClientObject, npc: ClientObject): boolean => {
  return npc.relation(actor) === EClientObjectRelation.NEUTRAL;
});

/**
 * todo;
 */
extern(
  "xr_conditions.npc_community",
  (actor: ClientObject, npc: ClientObject | ServerHumanObject, params: [TCommunity]): boolean => {
    if (params[0] === null) {
      abort("Wrong number of params in npc_community");
    }

    let object: Optional<ClientObject> = null;

    if (type(npc.id) !== "function") {
      object = registry.objects.get((npc as ServerHumanObject).id)?.object as ClientObject;

      if (object === null) {
        return (npc as ServerHumanObject).community() === params[0];
      }
    } else {
      object = npc as ClientObject;
    }

    return getCharacterCommunity(object) === params[0];
  }
);
