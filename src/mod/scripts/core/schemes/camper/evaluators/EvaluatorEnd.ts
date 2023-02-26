import { property_evaluator } from "xray16";

import { IStoredObject } from "@/mod/scripts/core/database";
import { isActiveSection } from "@/mod/scripts/utils/checkers/is";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("EvaluatorEnd");

/**
 * todo;
 */
@LuabindClass()
export class EvaluatorEnd extends property_evaluator {
  public readonly state: IStoredObject;

  public constructor(storage: IStoredObject) {
    super(null, EvaluatorEnd.__name);
    this.state = storage;
  }

  public evaluate(): boolean {
    return !isActiveSection(this.object, this.state.section);
  }
}
