import { LuabindClass, property_evaluator } from "xray16";

import { registry } from "@/engine/core/database";
import { StalkerStateManager } from "@/engine/core/objects/state/StalkerStateManager";
import { ISchemeSmartCoverState } from "@/engine/core/schemes/smartcover";
import { LuaLogger } from "@/engine/core/utils/logging";
import { gameConfig } from "@/engine/lib/configs/GameConfig";
import { EScheme, Optional } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger(
  "StateManagerEvaSmartCoverNeed",
  gameConfig.DEBUG.IS_STATE_MANAGEMENT_DEBUG_ENABLED
);

/**
 * todo;
 */
@LuabindClass()
export class StateManagerEvaSmartCoverNeed extends property_evaluator {
  public readonly stateManager: StalkerStateManager;

  /**
   * todo: Description.
   */
  public constructor(stateManager: StalkerStateManager) {
    super(null, StateManagerEvaSmartCoverNeed.__name);
    this.stateManager = stateManager;
  }

  /**
   * todo: Description.
   */
  public override evaluate(): boolean {
    if (this.stateManager.target_state !== EScheme.SMARTCOVER) {
      return false;
    }

    const smartCoverState: Optional<ISchemeSmartCoverState> = registry.objects.get(this.object.id())[
      EScheme.SMARTCOVER
    ] as ISchemeSmartCoverState;

    return smartCoverState !== null && smartCoverState.cover_name !== null;
  }
}
