import { patrol } from "xray16";

import { registry } from "@/engine/core/database";
import type { SmartTerrain } from "@/engine/core/objects";
import { IObjectJobDescriptor } from "@/engine/core/utils/job/job_types";
import { AnyCallable, ClientObject, LuaArray, Optional, Patrol, ServerObject, TCount, TName } from "@/engine/lib/types";

/**
 * todo;
 */
export function isAccessibleJob(serverObject: ServerObject, wayName: TName): boolean {
  return registry.objects.get(serverObject.id)?.object !== null;
}

/**
 * todo;
 * todo: gulag general update
 */
export function isJobAvailableToObject(
  objectInfo: IObjectJobDescriptor,
  jobInfo: any,
  smartTerrain: SmartTerrain
): boolean {
  if (smartTerrain.jobDeadTimeById.get(jobInfo.job_id) !== null) {
    return false;
  }

  if ("preconditionIsMonster" in jobInfo && jobInfo.preconditionIsMonster !== objectInfo.isMonster) {
    return false;
  }

  if (jobInfo.preconditionFunction) {
    if (
      !(jobInfo.preconditionFunction as AnyCallable)(
        objectInfo.serverObject,
        smartTerrain,
        jobInfo.preconditionParameters,
        objectInfo
      )
    ) {
      return false;
    }
  }

  return true;
}

/**
 * todo;
 */
export function areOnlyMonstersOnJobs(objectInfos: LuaArray<IObjectJobDescriptor>): boolean {
  for (const [, objectInfo] of objectInfos) {
    if (!objectInfo.isMonster) {
      return false;
    }
  }

  return true;
}

/**
 * todo;
 * todo;
 */
export function isJobPatrolInRestrictor(
  smartTerrain: SmartTerrain,
  restrictorName: TName,
  wayName: TName
): Optional<boolean> {
  if (restrictorName === null) {
    return null;
  }

  const restrictor: Optional<ClientObject> = registry.zones.get(restrictorName);

  if (restrictor === null) {
    return null;
  }

  const patrolObject: Patrol = new patrol(wayName);
  const count: TCount = patrolObject.count();

  for (const point of $range(0, count - 1)) {
    if (!restrictor.inside(patrolObject.point(point))) {
      return false;
    }
  }

  return true;
}
