import { LuabindClass, move, property_evaluator } from "xray16";

import { states } from "@/engine/core/objects/state/lib/state_lib";
import { StateManager } from "@/engine/core/objects/state/StateManager";
import { LuaLogger } from "@/engine/core/utils/logging";
import { gameConfig } from "@/engine/lib/configs/GameConfig";

const logger: LuaLogger = new LuaLogger(
  "StateManagerEvaBodyStateStanding",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerEvaBodyStateStanding extends property_evaluator {
  public readonly stateManager: StateManager;

  /**
   * todo: Description.
   */
  public constructor(stateManager: StateManager) {
    super(null, StateManagerEvaBodyStateStanding.__name);
    this.stateManager = stateManager;
  }

  /**
   * todo: Description.
   */
  public override evaluate(): boolean {
    return states.get(this.stateManager.target_state).bodystate === move.standing;
  }
}
