import { move, property_evaluator, XR_property_evaluator } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { states } from "@/mod/scripts/core/state_management/lib/state_lib";
import { StateManager } from "@/mod/scripts/core/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerEvaMovementStand",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

export interface IStateManagerEvaMovementStand extends XR_property_evaluator {
  st: StateManager;
}

export const StateManagerEvaMovementStand: IStateManagerEvaMovementStand = declare_xr_class(
  "StateManagerEvaMovementStand",
  property_evaluator,
  {
    __init(name: string, st: StateManager) {
      property_evaluator.__init(this, null, name);

      this.st = st;
    },
    evaluate(): boolean {
      return states.get(this.st.target_state).movement === move.stand;
    },
  } as IStateManagerEvaMovementStand
);