import { action_base, object, XR_action_base } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { StateManager } from "@/mod/scripts/state_management/StateManager";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerActWeaponNone",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

export interface IStateManagerActWeaponNone extends XR_action_base {
  st: StateManager;
}

export const StateManagerActWeaponNone = declare_xr_class("StateManagerActWeaponNone", action_base, {
  __init(name: string, st: StateManager): void {
    action_base.__init(this, null, name);

    this.st = st;
  },
  initialize(): void {
    action_base.initialize(this);
    this.object.set_item(object.idle, null);
  },
  execute(): void {
    logger.info("Act weapon none");
    action_base.execute(this);
  },
  finalize(): void {
    action_base.finalize(this);
  },
} as IStateManagerActWeaponNone);
