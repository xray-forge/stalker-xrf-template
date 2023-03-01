import { action_base } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { states } from "@/mod/scripts/core/state_management/lib/state_lib";
import { StateManager } from "@/mod/scripts/core/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerActAnimationStart",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerActAnimationStart extends action_base {
  public readonly stateManager: StateManager;

  public constructor(stateManager: StateManager) {
    super(null, StateManagerActAnimationStart.__name);
    this.stateManager = stateManager;
  }

  public override initialize(): void {
    super.initialize();

    this.stateManager.animation.set_state(states.get(this.stateManager.target_state).animation, null);
    this.stateManager.animation.set_control();
  }

  public override execute(): void {
    super.execute();
  }

  public override finalize(): void {
    super.finalize();
  }
}
