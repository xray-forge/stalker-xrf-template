import { level, patrol, XR_game_object } from "xray16";

import { post_processors } from "@/engine/lib/constants/animation/post_processors";
import { AnyCallablesModule, Optional } from "@/engine/lib/types";
import { registry } from "@/engine/scripts/core/database";
import { AbstractSchemeManager } from "@/engine/scripts/core/schemes/base/AbstractSchemeManager";
import { trySwitchToAnotherSection } from "@/engine/scripts/core/schemes/base/trySwitchToAnotherSection";
import { EEffectorState, effector_sets } from "@/engine/scripts/core/schemes/sr_cutscene/cam_effector_sets";
import { CamEffectorSet } from "@/engine/scripts/core/schemes/sr_cutscene/CamEffectorSet";
import { ISchemeCutsceneState } from "@/engine/scripts/core/schemes/sr_cutscene/ISchemeCutsceneState";
import { LuaLogger } from "@/engine/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class CutsceneManager extends AbstractSchemeManager<ISchemeCutsceneState> {
  public static object_cutscene: Optional<XR_game_object> = null;
  public static storage_scene: Optional<ISchemeCutsceneState> = null;

  public ui_disabled: boolean = false;
  public postprocess: boolean = false;
  public motion_id: number = 1;
  public motion: Optional<CamEffectorSet> = null;
  public sceneState!: string;

  /**
   * todo;
   */
  public constructor(object: XR_game_object, state: ISchemeCutsceneState) {
    super(object, state);

    logger.info("Init new cutscene:", object.name());
  }

  /**
   * todo;
   */
  public override resetScheme(): void {
    this.sceneState = "";
    this.state.signals = new LuaTable();
    this.motion = null;

    this.zone_enter();
  }

  /**
   * todo;
   */
  public override update(delta: number): void {
    const sceneState = this.sceneState;
    // --    if(state~="run") then
    // --        this:zone_enter()
    // --    end

    if (this.motion) {
      this.motion.update();
      if (this.state.signals!.get("cam_effector_stop") !== null) {
        this.motion.stop_effect();
        this.cutscene_callback();
        this.state.signals!.delete("cam_effector_stop");
      }
    }

    if (trySwitchToAnotherSection(this.object, this.state, registry.actor)) {
      return;
    }
  }

  /**
   * todo;
   */
  public zone_enter(): void {
    logger.info("Zone enter:", this.object.name());

    const actor: Optional<XR_game_object> = registry.actor;

    this.sceneState = "run";

    get_global<AnyCallablesModule>("xr_effects").teleport_actor(actor, this.object, [
      this.state.point,
      this.state.look,
    ]);

    if (this.state.pp_effector !== post_processors.nil) {
      level.add_pp_effector(this.state.pp_effector, 234, false);
    }

    get_global<AnyCallablesModule>("xr_effects").disable_ui(actor, null);
    this.ui_disabled = true;

    const time_hours: number = level.get_time_hours();

    if (this.state.outdoor && actor !== null && (time_hours < 6 || time_hours > 21)) {
      this.postprocess = true;
      level.add_complex_effector("brighten", 1999);
      // --level.add_pp_effector("brighten.ppe", 1999, true)
    }

    this.motion_id = 1;
    this.select_next_motion();

    CutsceneManager.object_cutscene = this.object;
    CutsceneManager.storage_scene = this.state;
  }

  public select_next_motion(): void {
    const motion = this.state.cam_effector!.get(this.motion_id);

    if (effector_sets[motion] === null) {
      this.motion = new CamEffectorSet(
        {
          start: new LuaTable(),
          idle: [{ anim: motion, looped: false, global_cameffect: this.state.global_cameffect }] as any,
          finish: new LuaTable(),
          release: new LuaTable(),
        },
        this.state
      );
    } else {
      this.motion = new CamEffectorSet(effector_sets[motion], this.state);
    }

    const effect = this.motion.select_effect()!;

    this.motion!.start_effect(effect);

    this.motion_id = this.motion_id + 1;
  }

  public cutscene_callback(): void {
    logger.info("Cutscene callback:", this.object.name());

    const actor: XR_game_object = registry.actor;

    if (this.motion!.state === EEffectorState.RELEASE) {
      this.motion = null;
      if (this.motion_id <= this.state.cam_effector!.length()) {
        this.select_next_motion();
      } else {
        if (this.postprocess) {
          this.postprocess = false;
          level.remove_complex_effector(1999);
        }

        if (this.ui_disabled) {
          if (!actor.is_talking() && this.state.enable_ui_on_end) {
            get_global<AnyCallablesModule>("xr_effects").enable_ui(XR_game_object, null);
          } else if (this.state.enable_ui_on_end) {
            level.enable_input();
          }

          actor.set_actor_direction(
            -new patrol(this.state.look).point(0).sub(new patrol(this.state.point).point(0)).getH()
          );
          this.ui_disabled = false;
          this.state.signals!.set("cameff_end", true);
        }
      }
    } else {
      this.motion!.playing = false;

      const eff = this.motion!.select_effect();

      if (eff) {
        this.motion!.start_effect(eff);
      }
    }
  }
}
