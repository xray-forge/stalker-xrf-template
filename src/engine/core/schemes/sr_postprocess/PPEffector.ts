import { effector, effector_params, LuabindClass, XR_effector_params } from "xray16";

import { LuaLogger } from "@/engine/core/utils/logging";
import { TNumberId } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
@LuabindClass()
export class PPEffector extends effector {
  public readonly params: XR_effector_params = new effector_params();

  /**
   * todo: Description.
   */
  public constructor(idNumber: TNumberId) {
    super(idNumber, 10000000);
  }

  /**
   * todo: Description.
   */
  public override process(effector_params: XR_effector_params): boolean {
    effector_params.assign(this.params);
    super.process(effector_params);

    return true;
  }
}
