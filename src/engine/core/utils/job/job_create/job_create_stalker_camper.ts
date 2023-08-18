import { level, patrol } from "xray16";

import { SmartTerrain } from "@/engine/core/objects";
import { EStalkerState } from "@/engine/core/objects/animation";
import { IWaypointData, parseWaypointData } from "@/engine/core/utils/ini";
import { isAccessibleJob } from "@/engine/core/utils/job/job_check";
import { jobPreconditionCamper } from "@/engine/core/utils/job/job_precondition";
import { EJobPathType, EJobType, ISmartTerrainJobDescriptor } from "@/engine/core/utils/job/job_types";
import { logicsConfig } from "@/engine/lib/configs/LogicsConfig";
import { AnyObject, LuaArray, Patrol, ServerHumanObject, TCount, TDistance, TIndex, TName } from "@/engine/lib/types";

/**
 * todo;
 */
export function createStalkerCamperJobs(
  smartTerrain: SmartTerrain,
  jobsList: LuaArray<ISmartTerrainJobDescriptor>
): LuaMultiReturn<[LuaArray<ISmartTerrainJobDescriptor>, string]> {
  const smartTerrainName: TName = smartTerrain.name();

  let ltx: string = "";
  let index: TIndex = 1;

  while (level.patrol_path_exists(`${smartTerrainName}_camper_${index}_walk`)) {
    const wayName: TName = `${smartTerrainName}_camper_${index}_walk`;
    const ptr: Patrol = new patrol(wayName);
    const wpProp: IWaypointData = parseWaypointData(wayName, ptr.flags(0), ptr.name(0));
    let state: TName = EStalkerState.HIDE;
    let radius: TDistance = 0;

    if (wpProp.state !== null) {
      if (wpProp.state === "stand") {
        state = EStalkerState.THREAT;
      }
    }

    if (wpProp.radius !== null) {
      radius = wpProp.radius as TDistance;
    }

    table.insert(jobsList, {
      type: EJobType.CAMPER,
      isMonsterJob: false,
      priority: logicsConfig.JOBS.STALKER_CAMPER.PRIORITY,
      section: `logic@${wayName}`,
      pathType: EJobPathType.PATH,
      preconditionParameters: { wayName: wayName },
      preconditionFunction: jobPreconditionCamper,
    });

    let jobLtx: string =
      "[logic@" +
      wayName +
      "]\n" +
      "active = camper@" +
      wayName +
      "\n" +
      "[camper@" +
      wayName +
      "]\n" +
      "meet = meet@generic_lager\n" +
      "radius = " +
      tostring(radius) +
      "\n" +
      "path_walk = camper_" +
      index +
      "_walk\n" +
      "def_state_moving = rush\n" +
      "def_state_campering = " +
      state +
      "\n" +
      "def_state_campering_fire = " +
      state +
      "_fire\n";

    if (level.patrol_path_exists(`${smartTerrainName}_camper_${index}_look`)) {
      jobLtx += `path_look = camper_${index}_look\n`;
    }

    if (smartTerrain.defendRestrictor !== null) {
      jobLtx += `out_restr = ${smartTerrain.defendRestrictor}\n`;
    }

    ltx += jobLtx;
    index += 1;
  }

  return $multi(jobsList, ltx);
}
