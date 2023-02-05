import { action_base, anim, move, property_evaluator, XR_action_base } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { StateManager } from "@/mod/scripts/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerActBodyStateStandingFree",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

export interface IStateManagerActBodyStateStandingFree extends XR_action_base {
  st: StateManager;
}

export const StateManagerActBodyStateStandingFree: IStateManagerActBodyStateStandingFree = declare_xr_class(
  "StateManagerActBodyStateStandingFree",
  action_base,
  {
    __init(name: string, st: StateManager): void {
      action_base.__init(this, null, name);

      this.st = st;
    },
    initialize(): void {
      action_base.initialize(this);
      this.object.set_body_state(move.standing);
      this.object.set_mental_state(anim.free);
    },
    execute(): void {
      logger.info("Act body state standing free");
      action_base.execute(this);
    },
    finalize(): void {
      action_base.finalize(this);
    },
  } as IStateManagerActBodyStateStandingFree
);
