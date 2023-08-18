import * as path from "path";

import { describe, expect, it, jest } from "@jest/globals";

import { IRegistryObjectState, registerObject, registry } from "@/engine/core/database";
import { SmartTerrain } from "@/engine/core/objects";
import { EJobPathType, EJobType } from "@/engine/core/utils/job";
import { createStalkerCamperJobs } from "@/engine/core/utils/job/job_create/job_create_stalker_camper";
import { ServerHumanObject } from "@/engine/lib/types";
import { mockSmartTerrain, readInGameTestLtx } from "@/fixtures/engine";
import { mockClientGameObject, mockServerAlifeHumanStalker } from "@/fixtures/xray";

describe("jobs_general should correctly generate stalker camper jobs", () => {
  it("should correctly generate default camper jobs with no camp patrols", async () => {
    const smartTerrain: SmartTerrain = mockSmartTerrain("empty_smart");
    const [jobsList, ltx] = createStalkerCamperJobs(smartTerrain, new LuaTable());

    expect(ltx).toBe("");
    expect(jobsList).toEqualLuaArrays([]);
  });

  it("should correctly generate default camper jobs with test smart", async () => {
    const jobsLtx: string = await readInGameTestLtx(
      path.resolve(__dirname, "__test__", "job_create_stalker_camper.default.ltx")
    );

    const smartTerrain: SmartTerrain = mockSmartTerrain();
    const [jobsList, ltx] = createStalkerCamperJobs(smartTerrain, new LuaTable());

    expect(ltx).toBe(jobsLtx);
    expect(jobsList).toEqualLuaArrays([
      {
        preconditionFunction: expect.any(Function),
        preconditionParameters: {
          wayName: "test_smart_camper_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_camper_1_walk",
        priority: 45,
        type: EJobType.CAMPER,
      },
    ]);
  });

  it("should correctly generate default camper jobs with restrictor", async () => {
    const jobsLtx: string = await readInGameTestLtx(
      path.resolve(__dirname, "__test__", "job_create_stalker_camper.restrictor.ltx")
    );

    const smartTerrain: SmartTerrain = mockSmartTerrain();

    smartTerrain.defendRestrictor = "test_defend_restrictor";

    const [jobsList, ltx] = createStalkerCamperJobs(smartTerrain, new LuaTable());

    expect(ltx).toBe(jobsLtx);
    expect(jobsList).toEqualLuaArrays([
      {
        preconditionFunction: expect.any(Function),
        preconditionParameters: {
          wayName: "test_smart_camper_1_walk",
        },
        isMonsterJob: false,
        pathType: EJobPathType.PATH,
        section: "logic@test_smart_camper_1_walk",
        priority: 45,
        type: EJobType.CAMPER,
      },
    ]);
  });
});
