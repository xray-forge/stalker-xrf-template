import { beforeEach, describe, expect, it, jest } from "@jest/globals";

import { getManager } from "@/engine/core/database";
import { boxConfig } from "@/engine/core/managers/box/BoxConfig";
import { BoxManager } from "@/engine/core/managers/box/BoxManager";
import { getObjectPositioning } from "@/engine/core/utils/position";
import { spawnItemsAtPosition } from "@/engine/core/utils/spawn";
import { copyVector } from "@/engine/core/utils/vector";
import { GameObject, IniFile } from "@/engine/lib/types";
import { resetRegistry } from "@/fixtures/engine";
import { MockGameObject, MockIniFile } from "@/fixtures/xray";

jest.mock("@/engine/core/utils/spawn");

describe("BoxManager.test.ts class", () => {
  beforeEach(() => {
    resetRegistry();

    boxConfig.DROP_ITEMS_BY_SECTION = new LuaTable();
    boxConfig.DROP_RATE_BY_LEVEL = new LuaTable();
    boxConfig.DROP_COUNT_BY_LEVEL = new LuaTable();
  });

  it("should correctly initialize", () => {
    getManager(BoxManager);

    expect(boxConfig.DROP_ITEMS_BY_SECTION.length()).toBe(9);
    expect(boxConfig.DROP_RATE_BY_LEVEL.length()).toBe(4);
    expect(boxConfig.DROP_COUNT_BY_LEVEL.length()).toBe(3);
  });

  it("should correctly spawn drop box items", async () => {
    const manager: BoxManager = getManager(BoxManager);
    const object: GameObject = MockGameObject.mock();
    const spawnIni: IniFile = MockIniFile.mock("test.ltx", {
      drop_box: {
        community: "def_box",
      },
    });

    jest.spyOn(object, "spawn_ini").mockImplementation(() => spawnIni);

    const [, gvid, lvid, position] = getObjectPositioning(object);

    const destination = { ...copyVector(position), y: expect.any(Number) };

    manager.spawnDropBoxItems(object);

    expect(spawnItemsAtPosition).toHaveBeenCalledTimes(3);
    expect(spawnItemsAtPosition).toHaveBeenCalledWith(
      "ammo_9x19_pbp",
      gvid,
      lvid,
      destination,
      expect.any(Number),
      100
    );
    expect(spawnItemsAtPosition).toHaveBeenCalledWith(
      "ammo_9x18_pmm",
      gvid,
      lvid,
      destination,
      expect.any(Number),
      100
    );
    expect(spawnItemsAtPosition).toHaveBeenCalledWith(
      "ammo_9x19_pbp",
      gvid,
      lvid,
      destination,
      expect.any(Number),
      100
    );
  });
});
