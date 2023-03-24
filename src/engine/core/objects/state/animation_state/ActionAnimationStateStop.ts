import { action_base, LuabindClass } from "xray16";

import { states } from "@/engine/core/objects/state/lib/state_lib";
import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { LuaLogger } from "@/engine/core/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
@LuabindClass()
export class ActionAnimationStateStop extends action_base {
  private readonly stateManager: StalkerStateManager;

  public constructor(stateManager: StalkerStateManager) {
    super(null, ActionAnimationStateStop.__name);
    this.stateManager = stateManager;
  }

  /**
   * todo: Description.
   */
  public override initialize(): void {
    super.initialize();

    this.stateManager.animstate.setState(
      null,
      this.stateManager.isForced || states.get(this.stateManager.target_state).isForced
    );
    this.stateManager.animstate.setControl();
  }
}
