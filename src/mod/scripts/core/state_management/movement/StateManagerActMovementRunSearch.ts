import { action_base, move } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { look_position_type } from "@/mod/scripts/core/state_management/direction/StateManagerDirection";
import { StateManager } from "@/mod/scripts/core/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerActMovementRunSearch",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerActMovementRunSearch extends action_base {
  public readonly stateManager: StateManager;

  public constructor(stateManager: StateManager) {
    super(null, StateManagerActMovementRunSearch.__name);
    this.stateManager = stateManager;
  }

  public override initialize(): void {
    super.initialize();
    this.object.set_movement_type(move.run);
    this.object.set_sight(look_position_type(this.object, this.stateManager), null, 0);
  }

  public override execute(): void {
    super.execute();
  }

  public override finalize(): void {
    super.finalize();
  }
}
