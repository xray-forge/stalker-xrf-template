import * as path from "path";

import { describe, expect, it, jest } from "@jest/globals";

import { registerZone } from "@/engine/core/database";
import { SmartTerrain, SmartTerrainControl } from "@/engine/core/objects";
import { createStalkerSleepJobs } from "@/engine/core/utils/job/job_create_stalker_sleep";
import { createStalkerSurgeJobs } from "@/engine/core/utils/job/job_create_stalker_surge";
import { range } from "@/engine/core/utils/number";
import { readInGameTestLtx } from "@/fixtures/engine";
import { mockClientGameObject } from "@/fixtures/xray";

describe("jobs_general should correctly generate stalkers sleep jobs", () => {
  it("should correctly generate sleep jobs for stalkers when no patrols exist", async () => {
    const smartTerrain: SmartTerrain = new SmartTerrain("test_smart");

    smartTerrain.ini = smartTerrain.spawn_ini();

    jest.spyOn(smartTerrain, "name").mockImplementation(() => "test_sleep_paths_smart");

    const [jobsList, ltx, count] = createStalkerSleepJobs(smartTerrain);

    expect(count).toBe(1);
    expect(ltx).toBe("");
    expect(jobsList).toEqualLuaTables({
      jobs: {},
      priority: 10,
    });
  });

  it("should correctly generate sleep jobs for stalkers when patrols exist", async () => {
    const surgeJobsLtx: string = await readInGameTestLtx(
      path.resolve(__dirname, "__test__", "job_create_stalker_surge.ltx")
    );

    const smartTerrain: SmartTerrain = new SmartTerrain("test_smart");

    smartTerrain.ini = smartTerrain.spawn_ini();
    smartTerrain.defendRestrictor = null;

    jest.spyOn(smartTerrain, "name").mockImplementation(() => "test_smart");

    const [jobsList, ltx, count] = createStalkerSurgeJobs(smartTerrain);

    expect(count).toBe(4);
    expect(ltx).toBe(surgeJobsLtx);
    expect(jobsList).toEqualLuaTables({
      jobs: $fromArray(
        range(3, 1).map((it) => ({
          _precondition_function: expect.any(Function),
          _precondition_params: {},
          job_id: {
            job_type: "path_job",
            section: `logic@test_smart_surge_${it}_walk`,
          },
          priority: 50,
        }))
      ),
      priority: 50,
    });
  });

  it("should correctly generate sleep jobs for stalkers when patrols exist with restrictors", async () => {
    const surgeJobsLtx: string = await readInGameTestLtx(
      path.resolve(__dirname, "__test__", "job_create_stalker_surge.restrictors.ltx")
    );

    const smartTerrain: SmartTerrain = new SmartTerrain("test_smart");

    smartTerrain.ini = smartTerrain.spawn_ini();

    jest.spyOn(smartTerrain, "name").mockImplementation(() => "test_smart");

    smartTerrain.defendRestrictor = "def_restrictor_test";
    smartTerrain.smartTerrainActorControl = { ignoreZone: "test_ignore_zone" } as SmartTerrainControl;

    const [jobsList, ltx, count] = createStalkerSurgeJobs(smartTerrain);

    expect(count).toBe(4);
    expect(ltx).toBe(surgeJobsLtx);
    expect(jobsList).toEqualLuaTables({
      jobs: $fromArray(
        range(3, 1).map((it) => ({
          _precondition_function: expect.any(Function),
          _precondition_params: {},
          job_id: {
            job_type: "path_job",
            section: `logic@test_smart_surge_${it}_walk`,
          },
          priority: 50,
        }))
      ),
      priority: 50,
    });
  });

  it("should correctly generate sleep jobs for stalkers when patrols exist, when in restrictor", async () => {
    const surgeJobsLtx: string = await readInGameTestLtx(
      path.resolve(__dirname, "__test__", "job_create_stalker_surge.ignore.ltx")
    );

    const smartTerrain: SmartTerrain = new SmartTerrain("test_smart");

    registerZone(mockClientGameObject({ name: () => "some_restrictor", inside: () => true }));

    smartTerrain.ini = smartTerrain.spawn_ini();

    jest.spyOn(smartTerrain, "name").mockImplementation(() => "test_smart");

    smartTerrain.defendRestrictor = "def_restrictor_test";
    smartTerrain.smartTerrainActorControl = { ignoreZone: "some_restrictor" } as SmartTerrainControl;

    const [jobsList, ltx, count] = createStalkerSurgeJobs(smartTerrain);

    expect(count).toBe(4);
    expect(ltx).toBe(surgeJobsLtx);
    expect(jobsList).toEqualLuaTables({
      jobs: $fromArray(
        range(3, 1).map((it) => ({
          _precondition_function: expect.any(Function),
          _precondition_params: {},
          job_id: {
            job_type: "path_job",
            section: `logic@test_smart_surge_${it}_walk`,
          },
          priority: 50,
        }))
      ),
      priority: 50,
    });
  });
});
