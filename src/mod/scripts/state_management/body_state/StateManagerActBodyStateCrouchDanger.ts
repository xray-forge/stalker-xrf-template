import { action_base, anim, move, XR_action_base } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { StateManager } from "@/mod/scripts/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerActBodyStateCrouchDanger",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

export interface IStateManagerActBodyStateCrouchDanger extends XR_action_base {
  st: StateManager;
}

export const StateManagerActBodyStateCrouchDanger: IStateManagerActBodyStateCrouchDanger = declare_xr_class(
  "StateManagerActBodyStateCrouchDanger",
  action_base,
  {
    __init(name: string, st: StateManager): void {
      action_base.__init(this, null, name);

      this.st = st;
    },
    initialize(): void {
      action_base.initialize(this);

      this.object.set_mental_state(anim.danger);
      this.object.set_body_state(move.crouch);
    },
    execute(): void {
      logger.info("Act body state crouch danger");
      action_base.execute(this);
    },
    finalize(): void {
      action_base.finalize(this);
    }
  } as IStateManagerActBodyStateCrouchDanger
);
