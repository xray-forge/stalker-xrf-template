import { property_evaluator, XR_property_evaluator } from "xray16";

import { StateManager } from "@/mod/scripts/core/state_management/StateManager";

export interface IStateManagerEvaLockedExternal extends XR_property_evaluator {
  st: StateManager;
}

export const StateManagerEvaLockedExternal: IStateManagerEvaLockedExternal = declare_xr_class(
  "StateManagerEvaLockedExternal",
  property_evaluator,
  {
    __init(name: string, st: StateManager): void {
      xr_class_super(null, name);
      this.st = st;
    },
    evaluate(): boolean {
      // --printf("npc %s", self.object:name())
      // --printf("combat[%s] alife[%s]", tostring(self.st.combat), tostring(self.st.alife))
      if (this.st.combat || this.st.alife) {
        return true;
      }

      return false;
    }
  } as IStateManagerEvaLockedExternal
);
