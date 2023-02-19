import { property_evaluator, XR_property_evaluator } from "xray16";

import { IStoredObject } from "@/mod/scripts/core/db";
import { isActiveSection } from "@/mod/scripts/utils/checkers/is";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("EvaluatorNeedSmartCover");

export interface IEvaluatorNeedSmartCover extends XR_property_evaluator {
  state: IStoredObject;
}

export const EvaluatorNeedSmartCover: IEvaluatorNeedSmartCover = declare_xr_class(
  "EvaluatorNeedSmartCover",
  property_evaluator,
  {
    __init(state, name): void {
      property_evaluator.__init(this, null, name);
      this.state = state;
    },
    evaluate(): boolean {
      return isActiveSection(this.object, this.state.section);
    },
  } as IEvaluatorNeedSmartCover
);
