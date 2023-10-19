import { beforeAll, describe, expect, it, jest } from "@jest/globals";
import { clsid } from "xray16";

import { updateObjectDialog } from "@/engine/core/utils/dialog";
import { isObjectWounded } from "@/engine/core/utils/planner";
import { ACTOR_ID } from "@/engine/lib/constants/ids";
import { AnyArgs, AnyObject, GameObject, TName } from "@/engine/lib/types";
import { callBinding, checkNestedBinding, mockRegisteredActor } from "@/fixtures/engine";
import { replaceFunctionMock } from "@/fixtures/jest";
import { mockGameObject } from "@/fixtures/xray";

jest.mock("@/engine/core/utils/planner", () => ({ isObjectWounded: jest.fn(() => false) }));

jest.mock("@/engine/core/utils/item", () => ({
  actorHasMedKit: jest.fn(() => false),
  getAnyObjectPistol: jest.fn(() => null),
}));

jest.mock("@/engine/core/utils/dialog", () => ({
  breakObjectDialog: jest.fn(),
  updateObjectDialog: jest.fn(),
  getNpcSpeaker: (first: GameObject, second: GameObject) => (first.id() === ACTOR_ID ? second : first),
}));

describe("dialogs_generic external callbacks", () => {
  const checkDialogsBinding = (name: TName) => checkNestedBinding("dialogs", name);
  const callDialogsBinding = (name: TName, args: AnyArgs = []) => callBinding(name, args, (_G as AnyObject)["dialogs"]);

  beforeAll(() => {
    require("@/engine/scripts/declarations/dialogs/dialogs/dialogs_object");
  });

  it("should correctly inject dialog functors", () => {
    checkDialogsBinding("update_npc_dialog");
    checkDialogsBinding("is_wounded");
    checkDialogsBinding("is_not_wounded");
    checkDialogsBinding("allow_wounded_dialog");
    checkDialogsBinding("is_friend");
    checkDialogsBinding("is_not_friend");
    checkDialogsBinding("become_friend");
    checkDialogsBinding("npc_stalker");
    checkDialogsBinding("npc_bandit");
    checkDialogsBinding("npc_freedom");
    checkDialogsBinding("npc_dolg");
    checkDialogsBinding("npc_army");
  });

  it("update_npc_dialog should correctly update", () => {
    const { actorGameObject } = mockRegisteredActor();
    const object: GameObject = mockGameObject();

    callDialogsBinding("update_npc_dialog", [actorGameObject, object]);
    expect(updateObjectDialog).toHaveBeenCalledWith(object);
  });

  it("is_wounded should correctly check wounded state", () => {
    const { actorGameObject } = mockRegisteredActor();
    const object: GameObject = mockGameObject();

    replaceFunctionMock(isObjectWounded, (it) => it === ACTOR_ID);

    expect(callDialogsBinding("is_wounded", [actorGameObject, object])).toBe(false);
    expect(isObjectWounded).toHaveBeenCalledWith(object.id());

    replaceFunctionMock(isObjectWounded, (it) => it === object.id());

    expect(callDialogsBinding("is_wounded", [actorGameObject, object])).toBe(true);
    expect(isObjectWounded).toHaveBeenCalledWith(object.id());
  });

  it("is_not_wounded should correctly check wounded state", () => {
    const { actorGameObject } = mockRegisteredActor();
    const object: GameObject = mockGameObject();

    replaceFunctionMock(isObjectWounded, (it) => it === ACTOR_ID);

    expect(callDialogsBinding("is_not_wounded", [actorGameObject, object])).toBe(true);
    expect(isObjectWounded).toHaveBeenCalledWith(object.id());

    replaceFunctionMock(isObjectWounded, (it) => it === object.id());

    expect(callDialogsBinding("is_not_wounded", [actorGameObject, object])).toBe(false);
    expect(isObjectWounded).toHaveBeenCalledWith(object.id());
  });

  it.todo("transfer_medkit should correctly transfer medkits");

  it.todo("actor_have_bandage should correctly check if actor has bandage");

  it.todo("transfer_bandage should correctly transfer actor has bandage");

  it.todo("kill_yourself should correctly force actor kill");

  it.todo("allow_wounded_dialog should correctly allow dialog");

  it.todo("is_friend should correctly check friend relations");

  it.todo("is_not_friend should correctly check not friend relations");

  it.todo("become_friend should correctly change relations");

  it("npc_stalker should correctly check army faction", () => {
    const { actorGameObject } = mockRegisteredActor();

    expect(
      callDialogsBinding("npc_stalker", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "monolith" as T,
        }),
      ])
    ).toBe(false);

    expect(
      callDialogsBinding("npc_stalker", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "stalker" as T,
        }),
      ])
    ).toBe(true);
  });

  it("npc_bandit should correctly check army faction", () => {
    const { actorGameObject } = mockRegisteredActor();

    expect(
      callDialogsBinding("npc_bandit", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "stalker" as T,
        }),
      ])
    ).toBe(false);

    expect(
      callDialogsBinding("npc_bandit", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "bandit" as T,
        }),
      ])
    ).toBe(true);
  });

  it("npc_freedom should correctly check army faction", () => {
    const { actorGameObject } = mockRegisteredActor();

    expect(
      callDialogsBinding("npc_freedom", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "stalker" as T,
        }),
      ])
    ).toBe(false);

    expect(
      callDialogsBinding("npc_freedom", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "freedom" as T,
        }),
      ])
    ).toBe(true);
  });

  it("npc_dolg should correctly check army faction", () => {
    const { actorGameObject } = mockRegisteredActor();

    expect(
      callDialogsBinding("npc_dolg", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "stalker" as T,
        }),
      ])
    ).toBe(false);

    expect(
      callDialogsBinding("npc_dolg", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "dolg" as T,
        }),
      ])
    ).toBe(true);
  });

  it("npc_army should correctly check army faction", () => {
    const { actorGameObject } = mockRegisteredActor();

    expect(
      callDialogsBinding("npc_army", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "stalker" as T,
        }),
      ])
    ).toBe(false);

    expect(
      callDialogsBinding("npc_army", [
        actorGameObject,
        mockGameObject({
          clsid: () => clsid.script_stalker,
          character_community: <T>() => "army" as T,
        }),
      ])
    ).toBe(true);
  });
});
