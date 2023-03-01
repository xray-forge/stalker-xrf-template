import { move, property_evaluator } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { StateManager } from "@/mod/scripts/core/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerEvaBodyStateStandingNow",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerEvaBodyStateStandingNow extends property_evaluator {
  public readonly stateManager: StateManager;

  public constructor(stateManager: StateManager) {
    super(null, StateManagerEvaBodyStateStandingNow.__name);
    this.stateManager = stateManager;
  }

  public override evaluate(): boolean {
    return this.object.target_body_state() === move.standing;
  }
}
