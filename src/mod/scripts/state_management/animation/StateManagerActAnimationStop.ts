import { action_base, XR_action_base } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { states } from "@/mod/scripts/state_management/lib/state_lib";
import { StateManager } from "@/mod/scripts/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerActAnimationStop",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

export interface IStateManagerActAnimationStop extends XR_action_base {
  st: StateManager;
}

export const StateManagerActAnimationStop: IStateManagerActAnimationStop = declare_xr_class(
  "StateManagerActAnimationStop",
  action_base,
  {
    __init(name: string, st: StateManager): void {
      action_base.__init(this, null, name);

      this.st = st;
    },
    initialize(): void {
      logger.info("Act animation stop:", this.st.animstate.states.current_state, this.st.animstate.states.target_state);

      action_base.initialize(this);

      this.st.animation.set_state(null, this.st.fast_set || states.get(this.st.target_state).fast_set);
      this.st.animation.set_control();
    },
    execute(): void {
      action_base.execute(this);
    },
    finalize(): void {
      action_base.finalize(this);
    },
  } as IStateManagerActAnimationStop
);
