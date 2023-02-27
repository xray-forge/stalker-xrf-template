import { game, XR_CTime, XR_EngineBinding } from "xray16";

import { Optional } from "@/mod/lib/types";
import { SimSquad } from "@/mod/scripts/core/alife/SimSquad";

const STAY_POINT_IDLE_MIN = 180 * 60;
const STAY_POINT_IDLE_MAX = 300 * 60;

export interface ISimSquadStayOnTargetAction extends XR_EngineBinding {
  name: string;
  start_time: Optional<XR_CTime>;
  idle_time: number;
  major?: boolean;
  dest_smrt: null;

  finalize(): void;
  save(): void;
  load(): void;
  update(isUnderSimulation: boolean): boolean;
  make(isUnderSimulation: boolean): void;
}

export const SimSquadStayOnTargetAction: ISimSquadStayOnTargetAction = declare_xr_class(
  "SimSquadStayOnTargetAction",
  null,
  {
    __init(squad: SimSquad): void {
      this.name = "stay_point";
      this.start_time = null;
      this.idle_time = math.random(STAY_POINT_IDLE_MIN, STAY_POINT_IDLE_MAX);
    },
    save(): void {},
    load(): void {},
    finalize(): void {},
    update(isUnderSimulation: boolean): boolean {
      if (!isUnderSimulation) {
        return true;
      } else {
        return game.get_game_time().diffSec(this.start_time!) > this.idle_time;
      }
    },
    make(isUnderSimulation: boolean) {
      this.start_time = game.get_game_time();
    },
  } as ISimSquadStayOnTargetAction
);
