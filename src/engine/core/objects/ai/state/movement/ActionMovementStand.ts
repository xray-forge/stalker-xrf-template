import { action_base, LuabindClass, move } from "xray16";

import { StalkerStateManager } from "@/engine/core/objects/ai/state/StalkerStateManager";
import { LuaLogger } from "@/engine/core/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Action to set correct movement state as stand.
 */
@LuabindClass()
export class ActionMovementStand extends action_base {
  private readonly stateManager: StalkerStateManager;

  public constructor(stateManager: StalkerStateManager) {
    super(null, ActionMovementStand.__name);
    this.stateManager = stateManager;
  }

  /**
   * Apply desired object movement state.
   */
  public override initialize(): void {
    super.initialize();
    this.object.set_movement_type(move.stand);
  }
}
