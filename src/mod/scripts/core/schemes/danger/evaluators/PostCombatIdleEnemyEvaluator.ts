import {
  action_base,
  anim,
  cast_planner,
  look,
  move,
  object,
  property_evaluator,
  stalker_ids,
  time_global,
  world_property,
  XR_action_base,
  XR_action_planner,
  XR_game_object,
  XR_property_evaluator,
} from "xray16";

import { Optional } from "@/mod/lib/types";
import { registry } from "@/mod/scripts/core/database";
import { GlobalSound } from "@/mod/scripts/core/GlobalSound";
import { ActionProcessEnemy } from "@/mod/scripts/core/schemes/danger/actions/ActionProcessEnemy";
import { AnimationManager } from "@/mod/scripts/core/state_management/AnimationManager";
import { animations } from "@/mod/scripts/core/state_management/lib/state_mgr_animation_list";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("PostCombatIdleEnemyEvaluator");

export interface IPostCombatSharedState {
  timer: Optional<number>;
  animation: Optional<any>; // From script lua class.
  last_best_enemy_id: Optional<number>;
  last_best_enemy_name: Optional<string>;
}

export interface IPostCombatIdleEnemyEvaluator extends XR_property_evaluator {
  st: IPostCombatSharedState;
}

export const PostCombatIdleEnemyEvaluator: IPostCombatIdleEnemyEvaluator = declare_xr_class(
  "PostCombatIdleEnemyEvaluator",
  property_evaluator,
  {
    __init(storage: IPostCombatSharedState, action_name: string): void {
      property_evaluator.__init(this, null, action_name);

      this.st = storage;

      this.st.timer = time_global();
    },
    evaluate(): boolean {
      const best_enemy: Optional<XR_game_object> = this.object.best_enemy();

      if (
        best_enemy !== null &&
        !ActionProcessEnemy.isEnemy(
          this.object,
          best_enemy,
          registry.objects.get(this.object.id()).combat_ignore!,
          true
        )
      ) {
        return false;
      }

      if (best_enemy !== null && this.st.timer !== null) {
        this.st.last_best_enemy_id = best_enemy.id();
        this.st.last_best_enemy_name = best_enemy.name();
        this.st.timer = null;

        return true;
      }

      if (best_enemy === null && this.st.timer === null) {
        const overrides = registry.objects.get(this.object.id()).overrides;
        const min = (overrides && overrides.min_post_combat_time * 1000) || 10000;
        const max = (overrides && overrides.max_post_combat_time * 1000) || 15000;

        if (this.st.last_best_enemy_id === registry.actor.id()) {
          this.st.timer = time_global();
        } else {
          this.st.timer = time_global() + math.random(min, max);
        }
      }

      if (this.st.timer === null) {
        return best_enemy !== null;
      }

      if (time_global() < this.st.timer) {
        return true;
      }

      if (this.st.animation === null) {
        return false;
      }

      this.st.animation.set_state(null);

      return this.st.animation.states.anim_marker !== null;
    },
  } as IPostCombatIdleEnemyEvaluator
);

export interface IPostCombatIdleWait extends XR_action_base {
  st: IPostCombatSharedState;

  anim_st: { animstate: { states: { anim_marker: null } } };
  anim_started: boolean;
}

export const PostCombatIdleWait: IPostCombatIdleWait = declare_xr_class("PostCombatIdleWait", action_base, {
  __init(npc: XR_game_object, storage: IPostCombatSharedState, action_name: string): void {
    action_base.__init(this, null, action_name);
    this.st = storage;
  },
  initialize(): void {
    action_base.initialize(this);

    this.object.set_item(object.idle, this.object.best_weapon());
    this.object.set_mental_state(anim.danger);
    this.object.set_body_state(move.crouch);
    this.object.set_movement_type(move.stand);
    this.object.set_sight(look.danger, null, 0);

    this.anim_st = { animstate: { states: { anim_marker: null } } };

    this.st.animation = create_xr_class_instance(
      AnimationManager,
      this.object,
      this.anim_st,
      "state_mgr_animation_list",
      animations
    );

    this.anim_started = false;
  },
  execute(): void {
    action_base.execute(this);

    if (!this.object.in_smart_cover()) {
      if (this.anim_started === false && !weapon_locked(this.object)) {
        this.anim_started = true;
        this.st.animation.set_state("hide");
        this.st.animation.set_control();
      }
    }

    GlobalSound.set_sound_play(this.object.id(), "post_combat_wait", null, null);
  },
  finalize(): void {
    GlobalSound.set_sound_play(this.object.id(), "post_combat_relax", null, null);

    if (this.anim_started === true) {
      this.st.animation.set_state(null, true);
    }

    this.st.animation = null;
    action_base.finalize(this);
  },
} as IPostCombatIdleWait);

export function weapon_locked(npc: XR_game_object): boolean {
  const weapon_strapped = npc.weapon_strapped();
  const weapon_unstrapped = npc.weapon_unstrapped();

  if (!(weapon_unstrapped || weapon_strapped)) {
    return true;
  }

  const bestweapon: Optional<XR_game_object> = npc.best_weapon();

  if (bestweapon === null) {
    return false;
  }

  if (npc.active_item() === null) {
    return false;
  }

  // todo: From script extension classes
  const weapon_going_to_be_strapped: boolean = (npc as any).is_weapon_going_to_be_strapped(bestweapon);

  if (weapon_going_to_be_strapped && !weapon_strapped) {
    return true;
  }

  if (!weapon_going_to_be_strapped && !weapon_unstrapped) {
    return true;
  }

  return false;
}

export function add_post_combat_idle(npc: XR_game_object): void {
  logger.info("Add post-combat idle for:", npc.name());

  const manager: XR_action_planner = npc.motivation_action_manager();
  const combat_action: XR_action_base = manager.action(stalker_ids.action_combat_planner);
  const combat_action_planner: XR_action_planner = cast_planner(combat_action);

  const state = {};

  registry.objects.get(npc.id()).post_combat_wait = state;

  manager.remove_evaluator(stalker_ids.property_enemy);
  manager.add_evaluator(
    stalker_ids.property_enemy,
    create_xr_class_instance(PostCombatIdleEnemyEvaluator, state, "evaluator_combat_enemy")
  );

  combat_action_planner.remove_evaluator(stalker_ids.property_enemy);
  combat_action_planner.add_evaluator(
    stalker_ids.property_enemy,
    create_xr_class_instance(PostCombatIdleEnemyEvaluator, state, "evaluator_combat_enemy")
  );

  combat_action_planner.remove_action(stalker_ids.action_post_combat_wait);

  const new_action: IPostCombatIdleWait = create_xr_class_instance(
    PostCombatIdleWait,
    npc,
    state,
    "action_post_combat_wait"
  );

  new_action.add_precondition(new world_property(stalker_ids.property_enemy, true));
  new_action.add_precondition(new world_property(stalker_ids.property_pure_enemy, false));
  new_action.add_precondition(new world_property(stalker_ids.property_critically_wounded, false));
  new_action.add_precondition(new world_property(stalker_ids.property_danger_grenade, false));
  new_action.add_effect(new world_property(stalker_ids.property_enemy, false));
  combat_action_planner.add_action(stalker_ids.action_post_combat_wait, new_action);
}