import { LuabindClass, move, property_evaluator } from "xray16";

import { StateManager } from "@/engine/core/objects/state/StateManager";
import { LuaLogger } from "@/engine/core/utils/logging";
import { gameConfig } from "@/engine/lib/configs/GameConfig";

const logger: LuaLogger = new LuaLogger(
  "StateManagerEvaMovementStandNow",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerEvaMovementStandNow extends property_evaluator {
  public readonly stateManager: StateManager;

  /**
   * todo: Description.
   */
  public constructor(stateManager: StateManager) {
    super(null, StateManagerEvaMovementStandNow.__name);
    this.stateManager = stateManager;
  }

  /**
   * todo: Description.
   */
  public override evaluate(): boolean {
    return this.object.target_movement_type() === move.stand;
  }
}
