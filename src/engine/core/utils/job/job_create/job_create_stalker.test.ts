import * as path from "path";

import { describe, expect, it, jest } from "@jest/globals";

import { registerSmartCover } from "@/engine/core/database";
import { SmartCover, SmartTerrain } from "@/engine/core/objects";
import { EJobPathType, EJobType } from "@/engine/core/utils/job";
import { createStalkerJobs } from "@/engine/core/utils/job/job_create/job_create_stalker";
import {
  jobPreconditionAnimpoint,
  jobPreconditionCamper,
  jobPreconditionCollector,
  jobPreconditionGuard,
  jobPreconditionGuardFollower,
  jobPreconditionPatrol,
  jobPreconditionSleep,
  jobPreconditionSniper,
  jobPreconditionSurge,
  jobPreconditionWalker,
} from "@/engine/core/utils/job/job_precondition";
import { range } from "@/engine/core/utils/number";
import { mockSmartCover, mockSmartTerrain, readInGameTestLtx } from "@/fixtures/engine";

describe("jobs_general should correctly generate stalker jobs", () => {
  it("should correctly generate default stalker jobs", async () => {
    const defaultJobsLtx: string = await readInGameTestLtx(
      path.resolve(__dirname, "__test__", "job_create_stalker.default.ltx")
    );

    const smartTerrain: SmartTerrain = mockSmartTerrain();
    const smartCover: SmartCover = mockSmartCover("test_smart_animpoint_1");

    registerSmartCover(smartCover);

    const [jobsList, ltx] = createStalkerJobs(smartTerrain, new LuaTable());

    expect(ltx).toBe(defaultJobsLtx);
    expect(jobsList).toEqualLuaArrays([
      ...range(3, 1).map((it) => ({
        type: EJobType.SURGE,
        preconditionFunction: jobPreconditionSurge,
        preconditionParameters: {},
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: `logic@test_smart_surge_${it}_walk`,
        priority: 50,
      })),
      {
        type: EJobType.CAMPER,
        preconditionFunction: jobPreconditionCamper,
        preconditionParameters: {
          wayName: "test_smart_camper_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_camper_1_walk",
        priority: 45,
      },
      {
        type: EJobType.SNIPER,
        preconditionFunction: jobPreconditionSniper,
        preconditionParameters: {
          wayName: "test_smart_sniper_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_sniper_1_walk",
        priority: 30,
      },
      {
        type: EJobType.COLLECTOR,
        preconditionFunction: jobPreconditionCollector,
        preconditionParameters: {},
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_collector_1_walk",
        priority: 25,
      },
      {
        type: EJobType.GUARD,
        preconditionFunction: jobPreconditionGuard,
        preconditionParameters: {
          wayName: "test_smart_guard_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_guard_1_walk",
        priority: 25,
      },
      {
        type: EJobType.GUARD_FOLLOWER,
        preconditionFunction: jobPreconditionGuardFollower,
        preconditionParameters: {
          nextDesiredJob: "logic@test_smart_guard_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@follower_test_smart_guard_1_walk",
        priority: 24,
      },
      {
        type: EJobType.PATROL,
        preconditionFunction: jobPreconditionPatrol,
        preconditionParameters: {
          wayName: "test_smart_patrol_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_patrol_1_walk",
        priority: 20,
      },
      {
        type: EJobType.PATROL,
        preconditionFunction: jobPreconditionPatrol,
        preconditionParameters: {
          wayName: "test_smart_patrol_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_patrol_1_walk",
        priority: 20,
      },
      {
        type: EJobType.PATROL,
        preconditionFunction: jobPreconditionPatrol,
        preconditionParameters: {
          wayName: "test_smart_patrol_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_patrol_1_walk",
        priority: 20,
      },
      {
        type: EJobType.WALKER,
        preconditionFunction: jobPreconditionWalker,
        preconditionParameters: {
          wayName: "test_smart_walker_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_walker_1_walk",
        priority: 15,
      },
      {
        type: EJobType.ANIMPOINT,
        preconditionFunction: jobPreconditionAnimpoint,
        preconditionParameters: {},
        isMonsterJob: false,
        pathType: EJobPathType.SMART_COVER,
        section: "logic@test_smart_animpoint_1",
        priority: 15,
      },
      ...range(2, 1).map((it) => ({
        type: EJobType.SLEEP,
        preconditionFunction: jobPreconditionSleep,
        preconditionParameters: {
          wayName: `test_smart_sleep_${it}`,
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: `logic@test_smart_sleep_${it}`,
        priority: 10,
      })),
      ...range(20, 1).map((it) => ({
        type: EJobType.POINT,
        isMonsterJob: false,
        pathType: EJobPathType.POINT,
        section: "logic@test_smart_point_" + it,
        priority: 3,
      })),
    ]);
  });

  it("should correctly generate default stalker jobs for empty smart", async () => {
    const defaultEmptyJobsLtx: string = await readInGameTestLtx(
      path.resolve(__dirname, "__test__", "job_create_stalker.empty.ltx")
    );

    const smartTerrain: SmartTerrain = mockSmartTerrain("test_smart_empty");
    const [jobsList, ltx] = createStalkerJobs(smartTerrain, new LuaTable());

    expect(ltx).toBe(defaultEmptyJobsLtx);
    expect(jobsList).toEqualLuaArrays(
      range(20, 1).map((it) => ({
        isMonsterJob: false,
        pathType: EJobPathType.POINT,
        section: "logic@test_smart_empty_point_" + it,
        type: EJobType.POINT,
        priority: 3,
      }))
    );
  });
});
