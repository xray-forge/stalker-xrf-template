import { game_object, XR_game_object } from "xray16";

import { getServerObjectByStoryId, registry } from "@/engine/core/database";
import { Squad } from "@/engine/core/objects";
import { abort } from "@/engine/core/utils/assertion";
import { extern } from "@/engine/core/utils/binding";
import { LuaLogger } from "@/engine/core/utils/logging";
import {
  increaseNumberRelationBetweenCommunityAndId,
  setObjectSympathy,
  setSquadGoodwill,
  setSquadGoodwillToNpc,
} from "@/engine/core/utils/relation";
import { TCommunity } from "@/engine/lib/constants/communities";
import { relations, TRelation } from "@/engine/lib/constants/relations";
import { Optional, TCount, TStringId } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
extern("xr_effects.actor_friend", (actor: XR_game_object, object: XR_game_object): void => {
  object.force_set_goodwill(1000, actor);
});

/**
 * todo;
 */
extern("xr_effects.actor_neutral", (actor: XR_game_object, object: XR_game_object): void => {
  object.force_set_goodwill(0, actor);
});

/**
 * todo;
 */
extern("xr_effects.actor_enemy", (actor: XR_game_object, object: XR_game_object): void => {
  object.force_set_goodwill(-1000, actor);
});

/**
 * todo;
 */
extern(
  "xr_effects.set_squad_neutral_to_actor",
  (actor: XR_game_object, object: XR_game_object, p: [TStringId]): void => {
    const squad: Optional<Squad> = getServerObjectByStoryId(p[0]);

    if (squad === null) {
      return;
    } else {
      squad.updateSquadRelationToActor(relations.neutral);
    }
  }
);

/**
 * todo;
 */
extern(
  "xr_effects.set_squad_friend_to_actor",
  (actor: XR_game_object, object: XR_game_object, p: [TStringId]): void => {
    const squad: Optional<Squad> = getServerObjectByStoryId(p[0]);

    if (squad === null) {
      return;
    } else {
      squad.updateSquadRelationToActor(relations.friend);
    }
  }
);

/**
 * todo;
 */
extern("xr_effects.set_squad_enemy_to_actor", (actor: XR_game_object, object: XR_game_object, p: [TStringId]): void => {
  const squad: Optional<Squad> = getServerObjectByStoryId(p[0]);

  if (squad === null) {
    return;
  } else {
    squad.updateSquadRelationToActor(relations.enemy);
  }
});

/**
 * todo;
 */
extern("xr_effects.set_npc_sympathy", (actor: XR_game_object, object: XR_game_object, p: [number]): void => {
  if (p[0] !== null) {
    setObjectSympathy(object, p[0]);
  }
});

/**
 * todo;
 */
extern(
  "xr_effects.set_squad_goodwill",
  (actor: XR_game_object, object: XR_game_object, p: [string, TRelation]): void => {
    if (p[0] !== null && p[1] !== null) {
      setSquadGoodwill(p[0], p[1]);
    }
  }
);

/**
 * todo;
 */
extern(
  "xr_effects.set_squad_goodwill_to_npc",
  (actor: XR_game_object, object: XR_game_object, p: [string, TRelation]): void => {
    if (p[0] !== null && p[1] !== null) {
      setSquadGoodwillToNpc(object, p[0], p[1]);
    }
  }
);

/**
 * todo;
 */
extern(
  "xr_effects.inc_faction_goodwill_to_actor",
  (actor: XR_game_object, object: XR_game_object, p: [Optional<TCommunity>, Optional<number>]): void => {
    const community = p[0];
    const delta = p[1];

    if (delta && community) {
      increaseNumberRelationBetweenCommunityAndId(community, actor.id(), tonumber(delta)!);
    } else {
      abort("Wrong parameters in function 'inc_faction_goodwill_to_actor'");
    }
  }
);

/**
 * todo;
 */
extern(
  "xr_effects.dec_faction_goodwill_to_actor",
  (actor: XR_game_object, object: XR_game_object, params: [Optional<TCommunity>, Optional<TCount>]): void => {
    const community: Optional<TCommunity> = params[0];
    const delta: Optional<TCount> = params[1];

    if (delta && community) {
      increaseNumberRelationBetweenCommunityAndId(community, actor.id(), -tonumber(delta)!);
    } else {
      abort("Wrong parameters in function 'dec_faction_goodwill_to_actor'");
    }
  }
);

/**
 * todo;
 */
extern("xr_effects.set_squads_enemies", (actor: XR_game_object, npc: XR_game_object, p: [string, string]) => {
  if (p[0] === null || p[1] === null) {
    abort("Wrong parameters in function set_squad_enemies");

    return;
  }

  const squad_1: Optional<Squad> = getServerObjectByStoryId(p[0]);
  const squad_2: Optional<Squad> = getServerObjectByStoryId(p[1]);

  if (squad_1 === null) {
    abort("There is no squad with id[%s]", tostring(p[0]));
  } else if (squad_2 === null) {
    abort("There is no squad with id[%s]", tostring(p[1]));
  }

  for (const k of squad_1.squad_members()) {
    const npc_obj_1 = registry.objects.get(k.id)?.object as Optional<XR_game_object>;

    if (npc_obj_1 !== null) {
      for (const kk of squad_2.squad_members()) {
        const npc_obj_2 = registry.objects.get(kk.id).object as Optional<XR_game_object>;

        if (npc_obj_2 !== null) {
          npc_obj_1.set_relation(game_object.enemy, npc_obj_2);
          npc_obj_2.set_relation(game_object.enemy, npc_obj_1);
        }
      }
    }
  }
});