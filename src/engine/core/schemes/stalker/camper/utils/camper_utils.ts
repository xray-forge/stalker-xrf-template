import { patrol } from "xray16";

import { ICampPoint, ISchemeCamperState } from "@/engine/core/schemes/stalker/camper/camper_types";
import { isObjectAtWaypoint } from "@/engine/core/utils/patrol";
import { GameObject, Optional, Patrol } from "@/engine/lib/types";

/**
 * todo;
 *
 * @param object
 * @param state
 */
export function isOnCampPatrolPlace(object: GameObject, state: ISchemeCamperState): boolean {
  if (state.noRetreat) {
    return false;
  }

  const walkPatrol: Optional<Patrol> = new patrol(state.pathWalk) as Optional<Patrol>;

  if (walkPatrol) {
    for (const index of $range(0, walkPatrol.count() - 1)) {
      if (isObjectAtWaypoint(object, walkPatrol, index)) {
        for (const flag of $range(0, 31)) {
          if (walkPatrol.flag(index, flag)) {
            state.wpFlag = flag;

            return true;
          }
        }

        state.wpFlag = null;

        return false;
      }
    }

    state.wpFlag = null;
  }

  return false;
}

/**
 * todo: Description.
 */
export function getNextCampPatrolPoint(flag: number, state: ISchemeCamperState): ICampPoint {
  let isNext: boolean = false;

  if (state.lastLookPoint === null) {
    table.sort(state.scanTable!.get(flag), (a, b) => {
      return a.key < b.key;
    });
  }

  for (const [, campPoint] of state.scanTable!.get(flag)) {
    if (state.lastLookPoint === null) {
      return campPoint;
    }

    if (isNext === true) {
      return campPoint;
    }

    if (state.lastLookPoint.key === campPoint.key) {
      isNext = true;
    }
  }

  if (isNext === true) {
    if (state.lastLookPoint!.key === 0) {
      table.sort(state.scanTable!.get(flag), (a, b) => {
        return a.key < b.key;
      });
    } else {
      table.sort(state.scanTable!.get(flag), (a, b) => {
        return a.key > b.key;
      });
    }
  }

  return state.lastLookPoint!;
}
