import { callback, hit, time_global, vector, XR_game_object, XR_hit } from "xray16";

import { GlobalSoundManager } from "@/engine/core/managers/GlobalSoundManager";
import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { IAnimationDescriptor } from "@/engine/core/objects/state_lib/state_mgr_animation_list";
import { IAnimationStateDescriptor } from "@/engine/core/objects/state_lib/state_mgr_animstate_list";
import { abort } from "@/engine/core/utils/assertion";
import { LuaLogger } from "@/engine/core/utils/logging";
import { vectorRotateY } from "@/engine/core/utils/vector";
import { gameConfig } from "@/engine/lib/configs/GameConfig";
import { AnyCallable, Optional, TIndex } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename, gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED);

/**
 * Animation lifecycle marker state.
 */
enum EAnimationMarker {
  IN = 1,
  OUT = 2,
  IDLE = 3,
}

/**
 * todo;
 */
export class StalkerAnimationManager {
  public mgr: StalkerStateManager;
  public npc: XR_game_object;
  public name: string;
  public animations: LuaTable<string, IAnimationDescriptor> | LuaTable<string, IAnimationStateDescriptor>;
  public sid: number;
  public states: {
    last_id: Optional<number>;
    current_state: Optional<string>;
    target_state: Optional<string>;
    anim_marker: Optional<EAnimationMarker>;
    next_rnd: Optional<number>;
    seq_id: number;
  };

  public constructor(
    npc: XR_game_object,
    stateManager: StalkerStateManager,
    name: string,
    collection: LuaTable<string, IAnimationDescriptor> | LuaTable<string, IAnimationStateDescriptor>
  ) {
    this.mgr = stateManager;
    this.npc = npc;
    this.name = name;

    this.animations = collection;
    this.sid = math.random(1000);

    this.states = {
      last_id: null,
      current_state: null,
      target_state: null,
      anim_marker: null,
      next_rnd: null,
      seq_id: 1,
    };

    assert(collection, "Provided null object for animation instance.");

    logger.info("Initialized new entry:", npc.name(), name, this.sid);
  }

  /**
   * todo;
   */
  public setControl(): void {
    logger.info("Set control:", this);

    this.npc.set_callback(callback.script_animation, this.animationCallback, this);

    if (this.name === "state_mgr_animation_list") {
      this.mgr.animstate.states.anim_marker = null;
    }

    if (this.states.anim_marker === null) {
      this.updateAnimation();
    }
  }

  /**
   * todo;
   */
  public updateAnimation(): void {
    const [animation, state] = this.selectAnimation();

    if (animation !== null) {
      this.addAnimation(animation, state);
    }
  }

  /**
   * todo;
   */
  public setState(newState: Optional<string>, isForced: Optional<boolean> = false): void {
    logger.info("Setting state:", newState, this);

    /**
     * Force animation over existing ones.
     */
    if (isForced === true) {
      this.npc.clear_animations();

      const state =
        this.states.anim_marker === EAnimationMarker.IN
          ? this.animations.get(this.states.target_state!)
          : this.animations.get(this.states.current_state!);

      if (state !== null && state.out !== null) {
        const wpn_slot = this.getActiveWeaponSlot();
        const anim_for_slot = this.getAnimationForSlot(wpn_slot, state.out as any);

        if (anim_for_slot !== null) {
          for (const [k, next_anim] of anim_for_slot) {
            if (type(next_anim) === "table") {
              this.processSpecialAction(next_anim as any);
            }
          }
        }
      }

      this.states.anim_marker = null;

      this.states.current_state = newState;
      this.states.target_state = newState;
      this.states.seq_id = 1;

      this.states.next_rnd = time_global();

      return;
    }

    this.states.target_state = newState;
    this.states.next_rnd = time_global();

    logger.info("Set state:", newState, this);
  }

  /**
   * todo;
   */
  public selectAnimation(): LuaMultiReturn<[Optional<string>, any]> {
    logger.info("Select animation:", this);

    const states = this.states;

    // New animation detected:
    if (states.target_state !== states.current_state) {
      if (states.target_state === null) {
        logger.info("Reset animation:", this);

        const state = this.animations.get(states.current_state!);

        if (state.out === null) {
          states.anim_marker = EAnimationMarker.OUT;
          this.animationCallback(true);

          return $multi(null, null);
        }

        states.anim_marker = EAnimationMarker.OUT;

        const wpn_slot = this.getActiveWeaponSlot();
        const anim_for_slot = this.getAnimationForSlot(wpn_slot, state.out as any);

        if (anim_for_slot === null) {
          states.anim_marker = EAnimationMarker.OUT;
          this.animationCallback(true);

          return $multi(null, null);
        }

        const next_anim = anim_for_slot.get(states.seq_id);

        if (type(next_anim) === "table") {
          logger.info("Preprocess special action:", states.current_state, states.seq_id, this);
          this.processSpecialAction(next_anim as any);
          this.animationCallback();

          return $multi(null, null);
        }

        return $multi(next_anim as any as string, state);
      }

      if (states.current_state === null) {
        logger.info("New animation:", this);

        const state = this.animations.get(states.target_state!);

        if (state.into === null) {
          states.anim_marker = EAnimationMarker.IN;
          this.animationCallback(true);

          return $multi(null, null);
        }

        states.anim_marker = EAnimationMarker.IN;

        const wpn_slot = this.getActiveWeaponSlot();
        const anim_for_slot = this.getAnimationForSlot(wpn_slot, state.into as any);

        if (anim_for_slot === null) {
          states.anim_marker = EAnimationMarker.IN;
          this.animationCallback(true);

          return $multi(null, null);
        }

        const nextAnimation = anim_for_slot.get(states.seq_id);

        if (type(nextAnimation) === "table") {
          this.processSpecialAction(nextAnimation as any);
          this.animationCallback();

          return $multi(null, null);
        }

        return $multi(nextAnimation as any as string, state);
      }
    }

    // Same non-null animation:
    if (states.target_state === states.current_state && states.current_state !== null) {
      logger.info("Update animation:", this);

      const activeWeaponSlot: TIndex = this.getActiveWeaponSlot();
      const state: IAnimationDescriptor | IAnimationStateDescriptor = this.animations.get(states.current_state);
      let animation;

      if (state.rnd !== null) {
        animation = this.selectRandom(state as any, activeWeaponSlot, time_global() >= states.next_rnd!);
      }

      if (animation === null && state.idle !== null) {
        animation = this.getAnimationForSlot(activeWeaponSlot, state.idle as any);
      }

      if (animation !== null) {
        states.anim_marker = EAnimationMarker.IDLE;
      }

      return $multi(animation, state) as any;
    }

    return $multi(null, null);
  }

  /**
   * todo;
   */
  public getActiveWeaponSlot(): TIndex {
    const weapon: Optional<XR_game_object> = this.npc.active_item();

    if (weapon === null || this.npc.weapon_strapped()) {
      return 0;
    }

    return weapon.animation_slot();
  }

  /**
   * todo;
   */
  public getAnimationForSlot(
    slot: TIndex,
    animationsList: LuaTable<TIndex, LuaTable<number, string | LuaTable>>
  ): LuaTable<number, string | LuaTable> {
    logger.info("Animation for slot:", slot, this);
    if (animationsList.get(slot) === null) {
      slot = 0;
    }

    return animationsList.get(slot);
  }

  /**
   * todo;
   */
  public selectRandom(
    animationStateDescriptor: IAnimationStateDescriptor,
    weaponSlot: TIndex,
    mustPlay: boolean
  ): Optional<string | LuaTable> {
    if (!mustPlay && math.random(100) > this.animations.get(this.states.current_state!).prop.rnd) {
      return null;
    }

    logger.info("Select RND animation:", weaponSlot, mustPlay);

    const animation = this.getAnimationForSlot(weaponSlot, animationStateDescriptor.rnd as any);

    if (animation === null) {
      return null;
    }

    const states = this.states;
    let index: TIndex;

    if (animation.length() > 1) {
      if (states.last_id === null) {
        index = math.random(animation.length());
      } else {
        index = math.random(animation.length() - 1);

        if (index >= states.last_id) {
          index = index + 1;
        }
      }

      this.states.last_id = index;
    } else {
      index = 1;
    }

    return animation.get(index) as any as string;
  }

  /**
   * todo;
   */
  public addAnimation(animation: string, state: IAnimationDescriptor): void {
    const object: XR_game_object = this.npc;
    const animationProperties = state.prop;

    if (!(object.weapon_unstrapped() || object.weapon_strapped())) {
      abort("[%s] Illegal call of add animation. Weapon is strapping now.", object.name());
    }

    if (animationProperties === null || animationProperties.moving !== true) {
      logger.info("No props animation addition:", this.npc.name(), animation);
      object.add_animation(animation, true, false);

      return;
    }

    if (this.mgr.animation_position === null || this.mgr.pos_direction_applied === true) {
      logger.info("No position animation addition:", this.npc.name(), animation);
      object.add_animation(animation, true, true);
    } else {
      if (this.mgr.animation_direction === null) {
        abort("[%s] Animation direction is missing.", object.name());
      }

      const rotationY = -math.deg(math.atan2(this.mgr.animation_direction.x, this.mgr.animation_direction.z));

      logger.info("Positional animation addition:", this.npc.name(), animation);
      object.add_animation(animation, true, this.mgr.animation_position, new vector().set(0, rotationY, 0), false);

      this.mgr.pos_direction_applied = true;
    }
  }

  /**
   * todo;
   */
  public animationCallback(skipMultiAnimationCheck?: boolean): void {
    if (this.states.anim_marker === null || this.npc.animation_count() !== 0) {
      return;
    }

    const states = this.states;

    if (states.anim_marker === EAnimationMarker.IN) {
      logger.info("Animation callback:", this);

      states.anim_marker = null;

      if (skipMultiAnimationCheck !== true) {
        let into_table: LuaTable<number, string | LuaTable> = new LuaTable();
        const targetAnimations = this.animations.get(states.target_state!);

        if (targetAnimations !== null && targetAnimations.into !== null) {
          into_table = this.getAnimationForSlot(this.getActiveWeaponSlot(), targetAnimations.into as any) as any;
        }

        if (into_table !== null && into_table.length() > states.seq_id) {
          states.seq_id = states.seq_id + 1;
          this.updateAnimation();

          return;
        }
      }

      states.seq_id = 1;
      states.current_state = states.target_state;
      this.updateAnimation();

      return;
    }

    if (states.anim_marker === EAnimationMarker.IDLE) {
      logger.info("Animation callback:", this);

      states.anim_marker = null;

      const properties = this.animations.get(states.current_state!).prop;

      if (properties.maxidle === 0) {
        states.next_rnd = time_global() + properties.sumidle * 1000;
      } else {
        states.next_rnd = time_global() + (properties.sumidle + math.random(properties.maxidle)) * 1000;
      }

      this.updateAnimation();

      return;
    }

    if (states.anim_marker === EAnimationMarker.OUT) {
      logger.info("Animation callback:", this.npc.name(), "OUT");

      states.anim_marker = null;

      if (skipMultiAnimationCheck !== true) {
        let outAnimationList: LuaTable<number, string | LuaTable> = new LuaTable();

        if (this.animations.get(states.current_state!).out) {
          outAnimationList = this.getAnimationForSlot(
            this.getActiveWeaponSlot(),
            this.animations.get(states.current_state!).out as any
          ) as any;
        }

        if (outAnimationList !== null && outAnimationList.length() > states.seq_id) {
          states.seq_id = states.seq_id + 1;
          this.updateAnimation();

          return;
        }
      }

      states.seq_id = 1;
      states.current_state = null;

      if (this.name === "state_mgr_animation_list") {
        if (this.mgr.animstate !== null && this.mgr.animstate.setControl !== null) {
          this.mgr.animstate.setControl();
          // --this.mgr.animstate:update_anim()
        }
      }
    }
  }

  /**
   * todo;
   */
  public processSpecialAction(actionTable: LuaTable): void {
    // Attach.
    if (actionTable.get("a") !== null) {
      const objectInventoryItem: Optional<XR_game_object> = this.npc.object(actionTable.get("a"));

      if (objectInventoryItem !== null) {
        objectInventoryItem.enable_attachable_item(true);
      }
    }

    // Detach.
    if (actionTable.get("d") !== null) {
      const objectInventoryItem: Optional<XR_game_object> = this.npc.object(actionTable.get("d"));

      if (objectInventoryItem !== null) {
        objectInventoryItem.enable_attachable_item(false);
      }
    }

    // Play sound.
    if (actionTable.get("s") !== null) {
      GlobalSoundManager.getInstance().playSound(this.npc.id(), actionTable.get("s"), null, null);
    }

    // Hit object.
    if (actionTable.get("sh") !== null) {
      const hitObject: XR_hit = new hit();

      hitObject.power = actionTable.get("sh");
      hitObject.direction = vectorRotateY(this.npc.direction(), 90);
      hitObject.draftsman = this.npc;
      hitObject.impulse = 200;
      hitObject.type = hit.wound;

      this.npc.hit(hitObject);
    }

    // Custom callback.
    const animationCallback: Optional<AnyCallable> = actionTable.get("f");

    if (animationCallback !== null) {
      animationCallback(this.npc);
    }
  }

  /**
   * Implement casting of manager to string for easier debugging.
   */
  public toString(): string {
    const states: string =
      `#current_state: ${this.states.current_state} #target_state: ${this.states.target_state} ` +
      `#anim_marker: ${this.states.anim_marker} #seq_id: ${this.states.seq_id} #last_id: ${this.states.last_id}`;

    return `AnimationManager #name: ${this.name} #npc: ${this.npc.name()} #sid: ${this.sid} ${states}`;
  }
}
