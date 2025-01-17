import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { game_graph, sound_object } from "xray16";

import { registerSimulator, registerZone, registry } from "@/engine/core/database";
import {
  areObjectsOnSameLevel,
  getDistanceBetween,
  getDistanceBetweenSqr,
  getObjectPositioning,
  getObjectTerrain,
  getServerDistanceBetween,
  isActorInNoWeaponZone,
  isDistanceBetweenObjectsGreaterOrEqual,
  isDistanceBetweenObjectsLessOrEqual,
  isObjectInActorFrustum,
  isObjectInSilenceZone,
  isObjectInSmartTerrain,
  isObjectInZone,
  isObjectOnLevel,
  sendToNearestAccessibleVertex,
  teleportActorWithEffects,
} from "@/engine/core/utils/position";
import { MAX_U32 } from "@/engine/lib/constants/memory";
import { ZERO_VECTOR } from "@/engine/lib/constants/vectors";
import {
  ESoundObjectType,
  GameObject,
  ServerHumanObject,
  ServerObject,
  ServerSmartZoneObject,
  Vector,
} from "@/engine/lib/types";
import { mockRegisteredActor } from "@/fixtures/engine";
import {
  MockAlifeHumanStalker,
  MockAlifeObject,
  MockAlifeSmartZone,
  MockGameObject,
  MockSoundObject,
} from "@/fixtures/xray";
import { MockVector } from "@/fixtures/xray/mocks/vector.mock";

describe("isObjectInSmartTerrain util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should check object inside smart terrain", () => {
    const terrain: ServerSmartZoneObject = MockAlifeSmartZone.mock({ name: "test-smart" });
    const { actorGameObject, actorServerObject } = mockRegisteredActor();

    actorServerObject.m_smart_terrain_id = terrain.id;

    expect(isObjectInSmartTerrain(actorGameObject, "test-smart")).toBe(true);
    expect(isObjectInSmartTerrain(actorGameObject, "test-smart-another")).toBe(false);
    expect(isObjectInSmartTerrain(actorGameObject, "another")).toBe(false);
  });
});

describe("isObjectInZone util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should check object inside", () => {
    const object: GameObject = MockGameObject.mock();
    const zone: GameObject = MockGameObject.mock();

    expect(isObjectInZone(object, zone)).toBe(false);
    expect(zone.inside).toHaveBeenCalledWith(object.position());
    expect(isObjectInZone(null, null)).toBe(false);
    expect(isObjectInZone(object, null)).toBe(false);
    expect(isObjectInZone(null, zone)).toBe(false);
  });
});

describe("isObjectInSilenceZone util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should check if object is in silence zone", () => {
    const object: GameObject = MockGameObject.mock();
    const zone: GameObject = MockGameObject.mock();

    jest.spyOn(zone, "inside").mockImplementation(() => true);

    expect(isObjectInSilenceZone(object)).toBe(false);

    registerZone(zone);
    registry.silenceZones.set(zone.id(), zone.name());

    expect(isObjectInSilenceZone(object)).toBe(true);

    jest.spyOn(zone, "inside").mockImplementation(() => false);

    expect(isObjectInSilenceZone(object)).toBe(false);
  });
});

describe("isObjectOnLevel util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should check object on level", () => {
    const first: ServerObject = MockAlifeObject.mock({ gameVertexId: 350 });
    const second: ServerObject = MockAlifeObject.mock({ gameVertexId: 152 });

    expect(isObjectOnLevel(null, "zaton")).toBe(false);
    expect(isObjectOnLevel(first, "pripyat")).toBe(true);

    expect(game_graph().vertex(first.m_game_vertex_id).level_id()).toBe(3);
    expect(registry.simulator.level_name).toHaveBeenCalledWith(3);

    expect(isObjectOnLevel(second, "zaton")).toBe(true);
    expect(isObjectOnLevel(second, "pripyat")).toBe(false);

    expect(game_graph().vertex(second.m_game_vertex_id).level_id()).toBe(1);
    expect(registry.simulator.level_name).toHaveBeenCalledWith(1);
  });
});

describe("areObjectsOnSameLevel util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should check objects on level", () => {
    expect(areObjectsOnSameLevel(MockAlifeObject.mock(), MockAlifeObject.mock())).toBe(true);
    expect(areObjectsOnSameLevel(MockAlifeObject.mock(), MockAlifeObject.mock({ gameVertexId: 330 }))).toBe(false);
    expect(
      areObjectsOnSameLevel(MockAlifeObject.mock({ gameVertexId: 200 }), MockAlifeObject.mock({ gameVertexId: 200 }))
    ).toBe(true);
  });
});

describe("isDistanceBetweenObjectsGreaterOrEqual util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should correctly check", () => {
    const first: GameObject = MockGameObject.mock();
    const second: GameObject = MockGameObject.mock();

    jest.spyOn(first.position(), "distance_to").mockImplementation(() => 150);
    expect(isDistanceBetweenObjectsGreaterOrEqual(first, second, 100)).toBe(true);

    jest.spyOn(first.position(), "distance_to").mockImplementation(() => 25);
    expect(isDistanceBetweenObjectsGreaterOrEqual(first, second, 55)).toBe(false);

    jest.spyOn(first.position(), "distance_to").mockImplementation(() => 1000);
    expect(isDistanceBetweenObjectsGreaterOrEqual(first, second, 1000)).toBe(true);
  });
});

describe("isDistanceBetweenObjectsLessOrEqual util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should correctly check", () => {
    const first: GameObject = MockGameObject.mock();
    const second: GameObject = MockGameObject.mock();

    jest.spyOn(first.position(), "distance_to").mockImplementation(() => 150);
    expect(isDistanceBetweenObjectsLessOrEqual(first, second, 100)).toBe(false);

    jest.spyOn(first.position(), "distance_to").mockImplementation(() => 25);
    expect(isDistanceBetweenObjectsLessOrEqual(first, second, 55)).toBe(true);

    jest.spyOn(first.position(), "distance_to").mockImplementation(() => 1000);
    expect(isDistanceBetweenObjectsLessOrEqual(first, second, 1000)).toBe(true);
  });
});

describe("getDistanceBetween util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("getServerDistanceBetween should correctly get distance for offline objects", () => {
    const first: ServerObject = MockAlifeObject.mock({ gameVertexId: 500 });

    jest.spyOn(game_graph().vertex(500).game_point(), "distance_to").mockImplementation(() => 600);
    expect(getServerDistanceBetween(first, MockAlifeObject.mock())).toBe(600);

    const second: ServerObject = MockAlifeObject.mock({ gameVertexId: 501 });

    jest.spyOn(game_graph().vertex(501).game_point(), "distance_to").mockImplementation(() => 255);
    expect(getServerDistanceBetween(second, MockAlifeObject.mock())).toBe(255);
  });

  it("should correctly get distance for game objects", () => {
    const first: GameObject = MockGameObject.mock();
    const second: GameObject = MockGameObject.mock();

    expect(getDistanceBetween(first, second)).toBe(20);

    jest.spyOn(first.position(), "distance_to").mockImplementation(() => 600);
    expect(getDistanceBetween(first, second)).toBe(600);
  });
});

describe("getDistanceBetweenSqr util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("getDistanceBetweenSqr should correctly get distance for offline objects", () => {
    const first: GameObject = MockGameObject.mock();
    const second: GameObject = MockGameObject.mock();

    expect(getDistanceBetweenSqr(first, second)).toBe(400);

    jest.spyOn(first.position(), "distance_to_sqr").mockImplementation(() => 1600);
    expect(getDistanceBetweenSqr(first, second)).toBe(1600);
  });
});

describe("sendToNearestAccessibleVertex util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should correctly send object to nearest accesible vertex", () => {
    const first: GameObject = MockGameObject.mock();

    expect(sendToNearestAccessibleVertex(first, 150)).toBe(150);
    expect(first.accessible).toHaveBeenCalled();
    expect(first.set_dest_level_vertex_id).toHaveBeenCalledWith(150);

    const second: GameObject = MockGameObject.mock();

    jest.spyOn(second, "accessible").mockImplementation(() => false);
    jest.spyOn(second, "accessible_nearest").mockImplementation(() => $multi(14325, ZERO_VECTOR));

    expect(sendToNearestAccessibleVertex(second, 150)).toBe(14325);
    expect(second.accessible).toHaveBeenCalled();
    expect(second.accessible_nearest).toHaveBeenCalledWith({ x: 15, y: 14, z: 16 }, { x: 0, y: 0, z: 0 });
    expect(second.set_dest_level_vertex_id).toHaveBeenCalledWith(14325);

    const third: GameObject = MockGameObject.mock();

    jest.spyOn(third, "level_vertex_id").mockImplementation(() => 1442);

    expect(sendToNearestAccessibleVertex(third, MAX_U32)).toBe(1442);
    expect(sendToNearestAccessibleVertex(third, MAX_U32 + 10)).toBe(1442);
    expect(sendToNearestAccessibleVertex(third, MAX_U32 * 2)).toBe(1442);
  });
});

describe("teleportActorWithEffects util", () => {
  beforeEach(() => {
    registerSimulator();
    MockSoundObject.resetRegistry();
  });

  it("should correctly teleport actor", () => {
    const actor: GameObject = MockGameObject.mockActor();
    const destination: Vector = MockVector.mock(15, 14, 16);
    const direction: Vector = MockVector.mock(3, 5, 4);

    teleportActorWithEffects(actor, destination, direction);

    expect(actor.set_actor_position).toHaveBeenCalledWith(destination);
    expect(actor.set_actor_direction).toHaveBeenCalledWith(-direction.getH());

    expect(MockSoundObject.SOUND_OBJECT_REGISTRY).toHaveLength(1);
    expect(MockSoundObject.SOUND_OBJECT_REGISTRY[0].path).toBe("affects\\tinnitus3a");
    expect(MockSoundObject.SOUND_OBJECT_REGISTRY[0].play_no_feedback).toHaveBeenCalledWith(
      actor,
      ESoundObjectType.S2D,
      0,
      ZERO_VECTOR,
      1.0
    );
  });
});

describe("isObjectInActorFrustum util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should correctly check whether object is in actor frustum", () => {
    const object: GameObject = MockGameObject.mock();

    jest.spyOn(object, "position").mockImplementation(() => MockVector.mock(0.6, 0, 0.6));
    expect(isObjectInActorFrustum(object)).toBe(true);

    jest.spyOn(object, "position").mockImplementation(() => MockVector.mock(0.5, 0, 0.9));
    expect(isObjectInActorFrustum(object)).toBe(true);

    jest.spyOn(object, "position").mockImplementation(() => MockVector.mock(0.5, 1, 0.9));
    expect(isObjectInActorFrustum(object)).toBe(false);

    jest.spyOn(object, "position").mockImplementation(() => MockVector.mock(0.4, 0, 0.9));
    expect(isObjectInActorFrustum(object)).toBe(false);

    jest.spyOn(object, "position").mockImplementation(() => MockVector.mock(-0.6, 0, -0.6));
    expect(isObjectInActorFrustum(object)).toBe(false);

    jest.spyOn(object, "position").mockImplementation(() => MockVector.mock(0, 0, 0));
    expect(isObjectInActorFrustum(object)).toBe(false);
  });
});

describe("getObjectSmartTerrain util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should correctly get smart terrain of an object", () => {
    expect(getObjectTerrain(MockGameObject.mock())).toBeNull();
    expect(getObjectTerrain(MockAlifeHumanStalker.mock())).toBeNull();

    const terrain: ServerSmartZoneObject = MockAlifeSmartZone.mock();
    const serverObject: ServerHumanObject = MockAlifeHumanStalker.mock();
    const gameObject: GameObject = MockGameObject.mock({ id: serverObject.id });

    serverObject.m_smart_terrain_id = terrain.id;

    expect(getObjectTerrain(gameObject)).toBe(terrain);
    expect(getObjectTerrain(serverObject)).toBe(terrain);

    serverObject.m_smart_terrain_id = 99_999;

    expect(getObjectTerrain(gameObject)).toBeNull();
    expect(getObjectTerrain(serverObject)).toBeNull();
  });
});

describe("getObjectPositioning util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should correctly get positioning", () => {
    const gameObject: GameObject = MockGameObject.mock();

    expect(getObjectPositioning(gameObject)).toEqual([
      gameObject.id(),
      512,
      255,
      {
        x: 0.25,
        y: 0.25,
        z: 0.25,
      },
    ]);

    const serverObject: ServerHumanObject = MockAlifeHumanStalker.mock();

    expect(getObjectPositioning(serverObject)).toEqual([
      serverObject.id,
      512,
      255,
      {
        x: 0,
        y: 0,
        z: 0,
      },
    ]);
  });
});

describe("isActorInNoWeaponZone util", () => {
  beforeEach(() => {
    registerSimulator();
  });

  it("should correctly check if actor is in no weapon zone", () => {
    const zone: GameObject = MockGameObject.mock();

    expect(isActorInNoWeaponZone()).toBe(false);

    registry.noWeaponZones.set(zone.id(), true);
    expect(isActorInNoWeaponZone()).toBe(true);

    registry.noWeaponZones.set(zone.id(), false);
    expect(isActorInNoWeaponZone()).toBe(false);
  });
});
