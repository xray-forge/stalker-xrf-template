import { action_base, LuabindClass, move } from "xray16";

import { look_position_type } from "@/engine/core/objects/state/direction/StateManagerDirection";
import { StateManager } from "@/engine/core/objects/state/StateManager";
import { LuaLogger } from "@/engine/core/utils/logging";
import { gameConfig } from "@/engine/lib/configs/GameConfig";

const logger: LuaLogger = new LuaLogger(
  "StateManagerActMovementWalkSearch",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerActMovementWalkSearch extends action_base {
  public readonly stateManager: StateManager;

  /**
   * todo: Description.
   */
  public constructor(stateManager: StateManager) {
    super(null, StateManagerActMovementWalkSearch.__name);
    this.stateManager = stateManager;
  }

  /**
   * todo: Description.
   */
  public override initialize(): void {
    super.initialize();
    this.object.set_movement_type(move.walk);
    this.object.set_sight(look_position_type(this.object, this.stateManager), null, 0);
  }

  /**
   * todo: Description.
   */
  public override execute(): void {
    super.execute();
  }

  /**
   * todo: Description.
   */
  public override finalize(): void {
    super.finalize();
  }
}
