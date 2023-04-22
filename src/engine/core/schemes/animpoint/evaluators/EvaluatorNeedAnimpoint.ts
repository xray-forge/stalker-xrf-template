import { LuabindClass, property_evaluator } from "xray16";

import { ISchemeAnimpointState } from "@/engine/core/schemes/animpoint/ISchemeAnimpointState";
import { isActiveSection } from "@/engine/core/utils/check/is";
import { LuaLogger } from "@/engine/core/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Evaluator to check whether object is performing animation.
 */
@LuabindClass()
export class EvaluatorNeedAnimpoint extends property_evaluator {
  public readonly state: ISchemeAnimpointState;

  public constructor(state: ISchemeAnimpointState) {
    super(null, EvaluatorNeedAnimpoint.__name);
    this.state = state;
  }

  /**
   * @returns whether object is performing animation now
   */
  public override evaluate(): boolean {
    return isActiveSection(this.object, this.state.section);
  }
}
