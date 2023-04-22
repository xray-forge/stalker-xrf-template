import { game, XR_CTime } from "xray16";

import { ISquadAction, Squad } from "@/engine/core/objects";
import { logicsConfig } from "@/engine/lib/configs/LogicsConfig";
import { Optional, TDuration, TName } from "@/engine/lib/types";

/**
 * Implement alife action to stay on target.
 */
export class SquadStayOnTargetAction implements ISquadAction {
  public static readonly ACTION_NAME: TName = "stay_on_target";

  public readonly name: TName = SquadStayOnTargetAction.ACTION_NAME;
  public readonly squad: Squad;

  public constructor(squad: Squad) {
    this.squad = squad;
  }

  public actionStartTime: Optional<XR_CTime> = null;
  public actionIdleTime: TDuration = math.random(
    logicsConfig.SQUAD.STAY_POINT_IDLE_MIN,
    logicsConfig.SQUAD.STAY_POINT_IDLE_MAX
  );

  /**
   * Stay on target, initialize action.
   */
  public initialize(isUnderSimulation: boolean): void {
    this.actionStartTime = game.get_game_time();
  }

  /**
   * Generic cleanup method.
   */
  public finalize(): void {}

  /**
   * Generic update tick.
   * Check whether idle time passed for offline mode.
   * Do not stay on target for online mode.
   */
  public update(isUnderSimulation: boolean): boolean {
    return isUnderSimulation ? game.get_game_time().diffSec(this.actionStartTime!) > this.actionIdleTime : true;
  }

  /**
   * @returns remaining duration to stay on target
   */
  public getStayIdleDuration(): TDuration {
    return this.actionStartTime ? this.actionIdleTime - game.get_game_time().diffSec(this.actionStartTime) : 0;
  }
}
