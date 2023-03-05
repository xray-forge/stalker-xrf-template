import { LuabindClass, property_evaluator } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { EScheme, Optional } from "@/mod/lib/types";
import { IStoredObject, registry } from "@/mod/scripts/core/database";
import { ISchemeSmartCoverState } from "@/mod/scripts/core/schemes/smartcover";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger(
  "StateManagerEvaSmartCoverNeed",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerEvaSmartCoverNeed extends property_evaluator {
  public readonly stateManager: IStoredObject;

  /**
   * todo;
   */
  public constructor(stateManager: IStoredObject) {
    super(null, StateManagerEvaSmartCoverNeed.__name);
    this.stateManager = stateManager;
  }

  /**
   * todo;
   */
  public override evaluate(): boolean {
    if (this.stateManager.target_state !== EScheme.SMARTCOVER) {
      return false;
    }

    const smartCoverState: Optional<ISchemeSmartCoverState> = registry.objects.get(this.object.id())[
      EScheme.SMARTCOVER
    ];

    return smartCoverState !== null && smartCoverState.cover_name !== null;
  }
}
