import { describe, expect, it, jest } from "@jest/globals";
import { stalker_ids } from "xray16";

import { registerActor, registerStoryLink, registry } from "@/engine/core/database";
import { Squad } from "@/engine/core/objects";
import { LoopedSound } from "@/engine/core/objects/sounds/playable_sounds";
import { EActionId } from "@/engine/core/schemes";
import {
  isActorSeenByObject,
  isImmuneToSurgeObject,
  isObjectInCombat,
  isObjectInjured,
  isObjectOnline,
  isObjectSeenByActor,
  isPlayingSound,
  isStalkerAlive,
  isSurgeEnabledOnLevel,
  isUndergroundLevel,
} from "@/engine/core/utils/object/object_check";
import { classIds } from "@/engine/lib/constants/class_ids";
import { ClientObject, ServerHumanObject, TClassId } from "@/engine/lib/types";
import {
  CLIENT_SIDE_REGISTRY,
  MockActionPlanner,
  mockClientGameObject,
  mockIniFile,
  mockServerAlifeHumanStalker,
  mockServerAlifeMonsterBase,
  mockServerAlifeObject,
} from "@/fixtures/xray";

describe("'object_check' utils", () => {
  it("'isObjectInCombat' should correctly check object combat state", () => {
    const object: ClientObject = mockClientGameObject();
    const planner: MockActionPlanner = object.motivation_action_manager() as unknown as MockActionPlanner;

    expect(isObjectInCombat(object)).toBe(false);

    planner.isInitialized = true;
    expect(isObjectInCombat(object)).toBe(false);

    planner.currentActionId = EActionId.MEET_WAITING_ACTIVITY;
    expect(isObjectInCombat(object)).toBe(false);

    planner.currentActionId = stalker_ids.action_combat_planner;
    expect(isObjectInCombat(object)).toBe(true);

    planner.currentActionId = stalker_ids.action_post_combat_wait;
    expect(isObjectInCombat(object)).toBe(true);

    planner.currentActionId = stalker_ids.action_critically_wounded;
    expect(isObjectInCombat(object)).toBe(false);
  });

  it("'isStalkerAlive' should correctly check stalker alive state", () => {
    const aliveStalkerServerObject: ServerHumanObject = mockServerAlifeHumanStalker({
      alive: () => true,
      clsid: () => classIds.script_stalker as TClassId,
    });
    const aliveStalkerClientObject: ClientObject = mockClientGameObject({
      idOverride: aliveStalkerServerObject.id,
      alive: () => true,
      clsid: () => classIds.script_stalker as TClassId,
    });

    registerStoryLink(aliveStalkerServerObject.id, "alive-stalker-sid");

    expect(isStalkerAlive(aliveStalkerServerObject)).toBe(true);
    expect(isStalkerAlive(aliveStalkerClientObject)).toBe(true);
    expect(isStalkerAlive("alive-stalker-sid")).toBe(true);
    expect(isStalkerAlive("not-existing-stalker-sid")).toBe(false);
    expect(isStalkerAlive(mockClientGameObject())).toBe(false);
    expect(
      isStalkerAlive(
        mockServerAlifeHumanStalker({
          alive: () => false,
          clsid: () => classIds.script_stalker as TClassId,
        })
      )
    ).toBe(false);
    expect(
      isStalkerAlive(
        mockServerAlifeHumanStalker({
          alive: () => false,
          clsid: () => classIds.boar_s as TClassId,
        })
      )
    ).toBe(false);
    expect(
      isStalkerAlive(
        mockServerAlifeMonsterBase({
          alive: () => true,
          clsid: () => classIds.boar_s as TClassId,
        })
      )
    ).toBe(false);
  });

  it("'isObjectInjured' should correctly check objects", () => {
    expect(isObjectInjured(mockClientGameObject())).toBe(false);
    expect(isObjectInjured(mockClientGameObject({ radiation: -1, health: 100, bleeding: -1 }))).toBe(false);
    expect(isObjectInjured(mockClientGameObject({ radiation: 0.01 }))).toBe(true);
    expect(isObjectInjured(mockClientGameObject({ radiation: 0.5 }))).toBe(true);
    expect(isObjectInjured(mockClientGameObject({ bleeding: 0.01 }))).toBe(true);
    expect(isObjectInjured(mockClientGameObject({ bleeding: 0.5 }))).toBe(true);
    expect(isObjectInjured(mockClientGameObject({ health: 0.999 }))).toBe(true);
    expect(isObjectInjured(mockClientGameObject({ health: 0.5 }))).toBe(true);
  });

  it("'isObjectSeenByActor' should correctly check objects visibility", () => {
    expect(() => isObjectSeenByActor(mockClientGameObject())).toThrow();

    const actor: ClientObject = mockClientGameObject();

    registerActor(actor);

    jest.spyOn(actor, "alive").mockImplementation(() => true);
    jest.spyOn(actor, "see").mockImplementation(() => true);
    expect(isObjectSeenByActor(mockClientGameObject())).toBe(true);

    jest.spyOn(actor, "alive").mockImplementation(() => false);
    jest.spyOn(actor, "see").mockImplementation(() => true);
    expect(isObjectSeenByActor(mockClientGameObject())).toBe(false);

    jest.spyOn(actor, "alive").mockImplementation(() => true);
    jest.spyOn(actor, "see").mockImplementation(() => false);
    expect(isObjectSeenByActor(mockClientGameObject())).toBe(false);

    jest.spyOn(actor, "alive").mockImplementation(() => false);
    jest.spyOn(actor, "see").mockImplementation(() => false);
    expect(isObjectSeenByActor(mockClientGameObject())).toBe(false);
  });

  it("'isActorSeenByObject' should correctly check actor visibility", () => {
    const object: ClientObject = mockClientGameObject();

    registerActor(mockClientGameObject());

    jest.spyOn(object, "alive").mockImplementation(() => true);
    jest.spyOn(object, "see").mockImplementation(() => true);
    expect(isActorSeenByObject(object)).toBe(true);

    jest.spyOn(object, "alive").mockImplementation(() => false);
    jest.spyOn(object, "see").mockImplementation(() => true);
    expect(isActorSeenByObject(object)).toBe(false);

    jest.spyOn(object, "alive").mockImplementation(() => true);
    jest.spyOn(object, "see").mockImplementation(() => false);
    expect(isActorSeenByObject(object)).toBe(false);

    jest.spyOn(object, "alive").mockImplementation(() => false);
    jest.spyOn(object, "see").mockImplementation(() => false);
    expect(isActorSeenByObject(object)).toBe(false);
  });

  it("'isObjectOnline' should correctly check object online", () => {
    const first: ClientObject = mockClientGameObject();
    const second: ClientObject = mockClientGameObject();

    expect(isObjectOnline(first.id())).toBe(true);
    expect(isObjectOnline(second.id())).toBe(true);
    expect(isObjectOnline(1_000_001)).toBe(false);
    expect(isObjectOnline(1_000_002)).toBe(false);

    CLIENT_SIDE_REGISTRY.reset();

    expect(isObjectOnline(first.id())).toBe(false);
    expect(isObjectOnline(second.id())).toBe(false);
  });

  it("'isImmuneToSurgeObject' should correctly check that objects are immune to surge", () => {
    expect(isImmuneToSurgeObject({ faction: "monster_predatory_day" } as unknown as Squad)).toBe(true);
    expect(isImmuneToSurgeObject({ faction: "monster_vegetarian" } as unknown as Squad)).toBe(true);
    expect(isImmuneToSurgeObject({ faction: "monster_special" } as unknown as Squad)).toBe(true);
    expect(isImmuneToSurgeObject({ faction: "monster" } as unknown as Squad)).toBe(true);
    expect(isImmuneToSurgeObject({ faction: "zombied" } as unknown as Squad)).toBe(true);
    expect(isImmuneToSurgeObject({ faction: "monster_zombied_day" } as unknown as Squad)).toBe(true);
    expect(isImmuneToSurgeObject({ faction: "stalker" } as unknown as Squad)).toBe(false);
    expect(isImmuneToSurgeObject({ faction: "bandit" } as unknown as Squad)).toBe(false);
    expect(isImmuneToSurgeObject({ faction: "monolith" } as unknown as Squad)).toBe(false);
    expect(isImmuneToSurgeObject({ faction: "army" } as unknown as Squad)).toBe(false);
  });

  it("'isSurgeEnabledOnLevel' should correctly check if surge is enabled for level", () => {
    expect(isSurgeEnabledOnLevel("zaton")).toBe(false);
    expect(isSurgeEnabledOnLevel("jupiter")).toBe(false);
    expect(isSurgeEnabledOnLevel("labx8")).toBe(true);
    expect(isSurgeEnabledOnLevel("jupiter_underground")).toBe(true);
  });

  it("'isUndergroundLevel' should correctly check if level is undeground", () => {
    expect(isUndergroundLevel("zaton")).toBe(false);
    expect(isUndergroundLevel("jupiter")).toBe(false);
    expect(isUndergroundLevel("labx8")).toBe(true);
    expect(isUndergroundLevel("jupiter_underground")).toBe(true);
  });

  it("'isPlayingSound' should correctly check sound play state", () => {
    const object: ClientObject = mockClientGameObject();

    expect(isPlayingSound(object)).toBe(false);

    registry.sounds.generic.set(
      object.id(),
      new LoopedSound(
        mockIniFile("test.ltx", {
          test: {
            path: "test_sound.ogg",
          },
        }),
        "test"
      )
    );
    expect(isPlayingSound(object)).toBe(true);
  });
});