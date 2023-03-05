import { property_evaluator } from "xray16";

import { ISchemeRemarkState } from "@/mod/scripts/core/schemes/remark";
import { isActiveSection } from "@/mod/scripts/utils/checkers/is";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("EvaluatorNeedRemark");

/**
 * todo;
 * todo: Find all evaluators and create single shared 'is scheme active evaluator'
 */
@LuabindClass()
export class EvaluatorNeedRemark extends property_evaluator {
  public readonly state: ISchemeRemarkState;

  public constructor(state: ISchemeRemarkState) {
    super(null, EvaluatorNeedRemark.__name);
    this.state = state;
  }

  public override evaluate(): boolean {
    return isActiveSection(this.object, this.state.section);
  }
}
