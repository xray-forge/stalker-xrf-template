import { beforeAll, describe, expect, it, jest } from "@jest/globals";

import { registerActorServer, registerSimulator } from "@/engine/core/database";
import { EJobPathType, SmartTerrain } from "@/engine/core/objects/smart_terrain";
import {
  createObjectJobDescriptor,
  EJobType,
  getSmartTerrainJobByObjectId,
  getSmartTerrainObjectIdByJobSection,
  IObjectJobState,
  ISmartTerrainJobDescriptor,
  selectSmartTerrainJob,
} from "@/engine/core/objects/smart_terrain/job/index";
import { jobPreconditionCamper, jobPreconditionSniper } from "@/engine/core/objects/smart_terrain/job/job_precondition";
import { AnyObject, IniFile, ServerHumanObject, ServerMonsterBaseObject, TNumberId } from "@/engine/lib/types";
import { MockSmartTerrain } from "@/fixtures/engine";
import { MockAlifeHumanStalker, mockServerAlifeCreatureActor, mockServerAlifeMonsterBase } from "@/fixtures/xray";

describe("job_pick utils", () => {
  beforeAll(() => {
    registerSimulator();
    registerActorServer(mockServerAlifeCreatureActor());
  });

  it("selectSmartTerrainJob should correctly get jobs for stalkers", () => {
    const terrain: SmartTerrain = MockSmartTerrain.mock("test_smart");
    const object: ServerHumanObject = MockAlifeHumanStalker.mock();
    const job: IObjectJobState = createObjectJobDescriptor(object);

    const [firstId, firstJob] = selectSmartTerrainJob(terrain, terrain.jobs, job);

    expect(firstId).toBeNull();
    expect(firstJob).toBeNull();

    terrain.on_register();

    const [secondId, secondJob] = selectSmartTerrainJob(terrain, terrain.jobs, job);

    expect(secondId).toBe(4);
    expect(secondJob).toEqual({
      alifeTask: {
        gameVertexId: 20001,
        levelVertexId: 20002,
        taskPosition: {
          x: 10,
          y: 20,
          z: 30,
        },
      },
      gameVertexId: 20001,
      id: 4,
      isMonsterJob: false,
      levelId: 200010,
      pathType: 1,
      position: {
        x: 10,
        y: 20,
        z: 30,
      },
      preconditionFunction: jobPreconditionCamper,
      preconditionParameters: {
        wayName: "test_smart_camper_1_walk",
      },
      priority: 45,
      section: "logic@test_smart_camper_1_walk",
      type: EJobType.CAMPER,
    });

    // Assign to another object.
    (secondJob as ISmartTerrainJobDescriptor).objectId = 10;

    const [thirdId, thirdJob] = selectSmartTerrainJob(terrain, terrain.jobs, job);

    expect(thirdId).toBe(5);
    expect(thirdJob).toEqual({
      alifeTask: {
        gameVertexId: 20001,
        levelVertexId: 20002,
        taskPosition: {
          x: 10,
          y: 20,
          z: 30,
        },
      },
      gameVertexId: 20001,
      id: 5,
      isMonsterJob: false,
      levelId: 200010,
      pathType: 1,
      position: {
        x: 10,
        y: 20,
        z: 30,
      },
      preconditionFunction: jobPreconditionSniper,
      preconditionParameters: {
        wayName: "test_smart_sniper_1_walk",
      },
      section: "logic@test_smart_sniper_1_walk",

      priority: 30,
      type: EJobType.SNIPER,
    });

    // Assign to current object.
    (thirdJob as ISmartTerrainJobDescriptor).objectId = object.id;
    job.jobId = thirdJob?.id as TNumberId;

    const [fourthId, fourthJob] = selectSmartTerrainJob(terrain, terrain.jobs, job);

    expect(fourthId).toBe(thirdId);
    expect(fourthJob).toBe(thirdJob);
  });

  it("selectSmartTerrainJob should correctly get jobs for monsters", () => {
    const terrain: SmartTerrain = MockSmartTerrain.mock("test_smart");
    const object: ServerMonsterBaseObject = mockServerAlifeMonsterBase();
    const job: IObjectJobState = createObjectJobDescriptor(object);

    const [firstId, firstJob] = selectSmartTerrainJob(terrain, terrain.jobs, job);

    expect(firstId).toBeNull();
    expect(firstJob).toBeNull();

    terrain.on_register();

    const [secondId, secondJob] = selectSmartTerrainJob(terrain, terrain.jobs, job);

    expect(secondId).toBe(15);
    expect(secondJob).toEqual({
      alifeTask: {
        gameVertexId: 512,
        levelVertexId: 255,
        taskPosition: {
          x: 1,
          y: 2,
          z: 3,
        },
      },
      gameVertexId: 512,
      id: 15,
      isMonsterJob: true,
      levelId: 5120,
      pathType: 2,
      position: {
        x: 1,
        y: 2,
        z: 3,
      },
      priority: 10,
      section: "logic@test_smart_home_1",
      type: EJobType.MONSTER_HOME,
    });

    // Assign to another object.
    (secondJob as ISmartTerrainJobDescriptor).objectId = 11;

    const [thirdId, thirdJob] = selectSmartTerrainJob(terrain, terrain.jobs, job);

    expect(thirdId).toBe(16);
    expect(thirdJob).toEqual({
      alifeTask: {
        gameVertexId: 512,
        levelVertexId: 255,
        taskPosition: {
          x: 1,
          y: 2,
          z: 3,
        },
      },
      gameVertexId: 512,
      id: 16,
      isMonsterJob: true,
      levelId: 5120,
      pathType: 2,
      position: {
        x: 1,
        y: 2,
        z: 3,
      },
      priority: 10,
      section: "logic@test_smart_home_2",
      type: EJobType.MONSTER_HOME,
    });
  });

  it("getSmartTerrainJobByObjectId should correctly get job section and job descriptor from smart terrain", () => {
    const terrain: SmartTerrain = new SmartTerrain("test_smart");
    const firstStalker: ServerHumanObject = MockAlifeHumanStalker.mock();
    const secondStalker: ServerHumanObject = MockAlifeHumanStalker.mock();

    terrain.ini = terrain.spawn_ini() as IniFile;
    jest.spyOn(terrain, "name").mockImplementation(() => "test_smart");

    (terrain as AnyObject).m_game_vertex_id = 512;
    (firstStalker as AnyObject).m_game_vertex_id = 512;
    (secondStalker as AnyObject).m_game_vertex_id = 512;

    terrain.on_register();

    terrain.register_npc(firstStalker);
    terrain.register_npc(secondStalker);

    expect(getSmartTerrainJobByObjectId(terrain, firstStalker.id)).toEqual({
      alifeTask: {
        gameVertexId: 20001,
        levelVertexId: 20002,
        taskPosition: {
          x: 10,
          y: 20,
          z: 30,
        },
      },
      gameVertexId: 20001,
      pathType: EJobPathType.PATH,
      objectId: firstStalker.id,
      id: 4,
      type: EJobType.CAMPER,
      levelId: 200010,
      position: {
        x: 10,
        y: 20,
        z: 30,
      },
      priority: 45,
      section: "logic@test_smart_camper_1_walk",
      preconditionFunction: expect.any(Function),
      isMonsterJob: false,
      preconditionParameters: {
        wayName: "test_smart_camper_1_walk",
      },
    });

    expect(getSmartTerrainObjectIdByJobSection(terrain, "logic@test_smart_camper_1_walk")).toBe(firstStalker.id);
  });
});
