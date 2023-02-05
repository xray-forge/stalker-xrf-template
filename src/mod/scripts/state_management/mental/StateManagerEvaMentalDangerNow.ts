import { anim, property_evaluator, XR_property_evaluator } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { StateManager } from "@/mod/scripts/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerEvaMentalDangerNow",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

export interface IStateManagerEvaMentalDangerNow extends XR_property_evaluator {
  st: StateManager;
}

export const StateManagerEvaMentalDangerNow: IStateManagerEvaMentalDangerNow = declare_xr_class(
  "StateManagerEvaMentalDangerNow",
  property_evaluator,
  {
    __init(name: string, st: StateManager) {
      property_evaluator.__init(this, null, name);

      this.st = st;
    },
    evaluate(): boolean {
      return this.object.target_mental_state() === anim.danger;
    },
  } as IStateManagerEvaMentalDangerNow
);
