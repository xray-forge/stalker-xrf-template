import { action_base, move, property_evaluator, XR_action_base } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { look_position_type } from "@/mod/scripts/state_management/direction/StateManagerDirection";
import { StateManager } from "@/mod/scripts/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerActMovementWalkSearch",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

export interface IStateManagerActMovementWalkSearch extends XR_action_base {
  st: StateManager;
}

export const StateManagerActMovementWalkSearch: IStateManagerActMovementWalkSearch = declare_xr_class(
  "StateManagerActMovementWalkSearch",
  action_base,
  {
    __init(name: string, st: StateManager) {
      action_base.__init(this, null, name);

      this.st = st;
    },
    initialize(): void {
      action_base.initialize(this);
      // --printf("MOVEMENT TYPE IS --- %s setting MOVEMENT TYPE --- WALK", tostring(this.object:movement_type()))
      this.object.set_movement_type(move.walk);
      // --    printf("ENABLING MOVEMENT !!!!!")
      // --'this.object:movement_enabled(true)
      // --printf("MOVEMENT TYPE IS --- %s setting MOVEMENT TYPE --- WALK", tostring(this.object:movement_type()))
      // printf("SET_SIGHT!!!act_state_mgr_movement_walk_search:initialize()")
      this.object.set_sight(look_position_type(this.object, this.st), null, 0);
    },
    execute(): void {
      logger.info("Act movement walk search");
      action_base.execute(this);
    },
    finalize(): void {
      action_base.finalize(this);
    }
  } as IStateManagerActMovementWalkSearch
);
