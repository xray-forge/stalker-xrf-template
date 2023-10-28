import { LuabindClass, property_evaluator } from "xray16";

import { ISchemePatrolState } from "@/engine/core/schemes/stalker/patrol";
import { patrolConfig } from "@/engine/core/schemes/stalker/patrol/PatrolConfig";
import { LuaLogger } from "@/engine/core/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
@LuabindClass()
export class EvaluatorPatrolCommander extends property_evaluator {
  public readonly state: ISchemePatrolState;

  public constructor(state: ISchemePatrolState) {
    super(null, EvaluatorPatrolCommander.__name);
    this.state = state;
  }

  public override evaluate(): boolean {
    return patrolConfig.PATROLS.get(this.state.patrolKey).isCommander(this.object.id());
  }
}
