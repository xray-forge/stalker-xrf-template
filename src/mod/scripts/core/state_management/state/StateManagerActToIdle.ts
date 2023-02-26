import { action_base, game_object } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { StateManager } from "@/mod/scripts/core/state_management/StateManager";
import { sendToNearestAccessibleVertex } from "@/mod/scripts/utils/alife";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("StateManagerActToIdle", gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerActToIdle extends action_base {
  public readonly stateManager: StateManager;

  public constructor(stateManager: StateManager, name?: string) {
    super(null, name || StateManagerActToIdle.__name);
    this.stateManager = stateManager;
  }

  public initialize(): void {
    super.initialize();
    // --'    this.object:movement_enabled(true)

    this.object.inactualize_patrol_path();

    if (this.object.best_enemy() !== null) {
      this.stateManager.set_state("idle", null, null, null, { fast_set: true });

      return;
    }

    if (this.object.best_danger() !== null) {
      this.stateManager.set_state("idle", null, null, null, { fast_set: true });

      return;
    }

    this.stateManager.set_state("idle", null, null, null, null);

    sendToNearestAccessibleVertex(this.object, this.object.level_vertex_id());

    this.object.set_path_type(game_object.level_path);
  }

  public finalize(): void {
    this.stateManager.current_object = -1;
    super.finalize();
  }

  public execute(): void {
    sendToNearestAccessibleVertex(this.object, this.object.level_vertex_id());
    this.object.set_path_type(game_object.level_path);

    if (this.object.best_enemy()) {
      this.stateManager.set_state("idle", null, null, null, { fast_set: true });
      super.execute();

      return;
    }

    if (this.object.best_danger()) {
      this.stateManager.set_state("idle", null, null, null, { fast_set: true });
      super.execute();

      return;
    }

    this.stateManager.set_state("idle", null, null, null, null);
    super.execute();
  }
}
