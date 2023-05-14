import { LuabindClass, property_evaluator } from "xray16";

import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { LuaLogger } from "@/engine/core/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Evaluator to check whether animation current state is idle.
 */
@LuabindClass()
export class EvaluatorAnimationStateIdleNow extends property_evaluator {
  private readonly stateManager: StalkerStateManager;

  public constructor(stateManager: StalkerStateManager) {
    super(null, EvaluatorAnimationStateIdleNow.__name);
    this.stateManager = stateManager;
  }

  /**
   * Check whether animation current state is idle.
   */
  public override evaluate(): boolean {
    return this.stateManager.animstate.states.currentState === null;
  }
}
