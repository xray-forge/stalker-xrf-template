import { action_base, LuabindClass, XR_game_object } from "xray16";

import { Optional } from "@/mod/lib/types";
import { registry } from "@/mod/scripts/core/database";
import { GlobalSoundManager } from "@/mod/scripts/core/managers/GlobalSoundManager";
import { ISchemePatrolState } from "@/mod/scripts/core/schemes/patrol";
import { StalkerMoveManager } from "@/mod/scripts/core/state_management/StalkerMoveManager";
import { get_state } from "@/mod/scripts/core/state_management/StateManager";
import { parsePathWaypoints } from "@/mod/scripts/utils/parse";

/**
 * todo;
 */
@LuabindClass()
export class ActionCommander extends action_base {
  public readonly state: ISchemePatrolState;
  public readonly moveManager: StalkerMoveManager;

  public cur_state: string = "patrol";
  public old_state: Optional<string> = null;

  /**
   * todo;
   */
  public constructor(state: ISchemePatrolState, object: XR_game_object) {
    super(null, ActionCommander.__name);
    this.state = state;
    this.moveManager = registry.objects.get(object.id()).moveManager!;
  }

  /**
   * todo;
   */
  public override initialize(): void {
    super.initialize();

    this.object.set_desired_position();
    this.object.set_desired_direction();

    this.activateScheme();
  }

  /**
   * todo;
   */
  public activateScheme(): void {
    this.state.signals = new LuaTable();

    if (this.state.path_walk_info === null) {
      this.state.path_walk_info = parsePathWaypoints(this.state.path_walk);
    }

    if (this.state.path_look_info === null) {
      this.state.path_look_info = parsePathWaypoints(this.state.path_look);
    }

    this.moveManager.reset(
      this.state.path_walk,
      this.state.path_walk_info!,
      this.state.path_look,
      this.state.path_look_info,
      this.state.team,
      this.state.suggested_state,
      { obj: this, func: this.formation_callback },
      null,
      null,
      null
    );

    registry.patrols.generic.get(this.state.patrol_key).set_command(this.object, this.cur_state, this.state.formation);
  }

  /**
   * todo;
   */
  public override execute(): void {
    super.execute();

    this.moveManager.update();

    const new_state = get_state(this.object)!;
    const old_state = this.old_state;

    if (old_state !== new_state) {
      const globalSoundManager: GlobalSoundManager = GlobalSoundManager.getInstance();

      if (this.state.silent !== true) {
        if (new_state === "sneak") {
          globalSoundManager.setSoundPlaying(this.object.id(), "patrol_sneak", null, null);
        } else if (new_state === "sneak_run") {
          globalSoundManager.setSoundPlaying(this.object.id(), "patrol_run", null, null);
        } else if (new_state === "run") {
          globalSoundManager.setSoundPlaying(this.object.id(), "patrol_run", null, null);
        } else if (new_state === "assault") {
          globalSoundManager.setSoundPlaying(this.object.id(), "patrol_run", null, null);
        } else if (new_state === "rush") {
          globalSoundManager.setSoundPlaying(this.object.id(), "patrol_run", null, null);
        } else {
          if (
            old_state === "sneak" ||
            old_state === "sneak_run" ||
            old_state === "run" ||
            old_state === "assault" ||
            old_state === "rush"
          ) {
            globalSoundManager.setSoundPlaying(this.object.id(), "patrol_walk", null, null);
          }
        }
      }

      this.old_state = new_state;
    }

    registry.patrols.generic.get(this.state.patrol_key).set_command(this.object, new_state, this.state.formation);
  }

  /**
   * todo;
   */
  public override finalize(): void {
    if (this.object.alive() === true) {
      // --printf ("ACTION_COMMANDER:FINALIZE CALLED")
      registry.patrols.generic.get(this.state.patrol_key).set_command(this.object, "guard", this.state.formation);
      this.moveManager.finalize();
    }

    super.finalize();
  }

  /**
   * todo;
   */
  public deactivate(npc: XR_game_object): void {
    registry.patrols.generic.get(this.state.patrol_key).remove_npc(npc);
  }

  /**
   * todo;
   */
  public death_callback(npc: XR_game_object): void {
    registry.patrols.generic.get(this.state.patrol_key).remove_npc(npc);
  }

  /**
   * todo;
   */
  public net_destroy(object: XR_game_object): void {
    this.deactivate(object);
  }

  /**
   * todo;
   */
  public formation_callback(mode: number, number: number, index: number): void {
    if (number === 0) {
      this.state.formation = "line";
    } else if (number === 1) {
      this.state.formation = "around";
    } else if (number === 2) {
      this.state.formation = "back";
    }
  }
}
