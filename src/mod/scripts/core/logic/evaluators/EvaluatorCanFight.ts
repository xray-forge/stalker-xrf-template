import { property_evaluator, XR_property_evaluator } from "xray16";

import { AnyCallablesModule } from "@/mod/lib/types";
import { IStoredObject } from "@/mod/scripts/core/db";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const log: LuaLogger = new LuaLogger("EvaluatorCanFight");

export interface IEvaluatorCanFight extends XR_property_evaluator {
  state: IStoredObject;
}

export const EvaluatorCanFight: IEvaluatorCanFight = declare_xr_class("EvaluatorCanFight", property_evaluator, {
  __init(name: string, state: IStoredObject): void {
    property_evaluator.__init(this, null, name);
    this.state = state;
  },
  evaluate(): boolean {
    if (this.object.critically_wounded() === true) {
      return true;
    }

    return get_global<AnyCallablesModule>("xr_logic").pstor_retrieve(this.object, "wounded_fight") !== "false";
  }
} as IEvaluatorCanFight);
