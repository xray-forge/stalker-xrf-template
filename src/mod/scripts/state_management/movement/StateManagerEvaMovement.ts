import { property_evaluator, XR_property_evaluator } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { states } from "@/mod/scripts/state_management/lib/state_lib";
import { StateManager } from "@/mod/scripts/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("StateManagerEvaMovement", gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED);

export interface IStateManagerEvaMovement extends XR_property_evaluator {
  st: StateManager;
}

export const StateManagerEvaMovement: IStateManagerEvaMovement = declare_xr_class(
  "StateManagerEvaMovement",
  property_evaluator,
  {
    __init(name: string, st: StateManager) {
      property_evaluator.__init(this, null, name);

      this.st = st;
    },
    evaluate(): boolean {
      return (
        states.get(this.st.target_state).movement === null ||
        states.get(this.st.target_state).movement === this.object.target_movement_type()
      );
      // --           (state_lib.states[this.st.target_state].movement === this.object:movement_type())
    },
  } as IStateManagerEvaMovement
);
