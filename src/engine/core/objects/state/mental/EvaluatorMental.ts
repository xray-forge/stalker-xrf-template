import { LuabindClass, property_evaluator } from "xray16";

import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { states } from "@/engine/core/objects/state_lib/state_lib";
import { LuaLogger } from "@/engine/core/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
@LuabindClass()
export class EvaluatorMental extends property_evaluator {
  private readonly stateManager: StalkerStateManager;

  public constructor(stateManager: StalkerStateManager) {
    super(null, EvaluatorMental.__name);
    this.stateManager = stateManager;
  }

  /**
   * Check if mental desired mental state matches actual object mental state.
   */
  public override evaluate(): boolean {
    return (
      states.get(this.stateManager.target_state).mental === null ||
      states.get(this.stateManager.target_state).mental === this.object.target_mental_state()
    );
  }
}
