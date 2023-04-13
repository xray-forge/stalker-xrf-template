import { beforeEach, describe, expect, it } from "@jest/globals";
import { XR_game_object } from "xray16";

import { registry } from "@/engine/core/database/registry";
import { registerZone, unregisterZone } from "@/engine/core/database/zones";
import { mockClientGameObject } from "@/fixtures/xray";

describe("'zones' module of the database", () => {
  beforeEach(() => {
    registry.zones = new LuaTable();
    registry.objects = new LuaTable();
  });

  it("should correctly register zones", () => {
    expect(registry.zones.length()).toBe(0);
    expect(registry.objects.length()).toBe(0);

    const firstZone: XR_game_object = mockClientGameObject({ idOverride: 10, sectionOverride: "test_zone" });
    const secondZone: XR_game_object = mockClientGameObject({ idOverride: 20, sectionOverride: "test_zone" });

    expect(firstZone.id()).toBe(10);
    expect(firstZone.name()).toBe("test_zone_10");

    expect(secondZone.id()).toBe(20);
    expect(secondZone.name()).toBe("test_zone_20");

    registerZone(firstZone);
    registerZone(secondZone);

    expect(registry.zones.length()).toBe(2);
    expect(registry.objects.length()).toBe(2);

    expect(registry.zones.has(firstZone.name())).toBeTruthy();
    expect(registry.zones.has(secondZone.name())).toBeTruthy();
    expect(registry.objects.has(firstZone.id())).toBeTruthy();
    expect(registry.objects.has(secondZone.id())).toBeTruthy();

    unregisterZone(secondZone);

    expect(registry.zones.length()).toBe(1);
    expect(registry.objects.length()).toBe(1);

    expect(registry.zones.has(firstZone.name())).toBeTruthy();
    expect(registry.zones.has(secondZone.name())).toBeFalsy();
    expect(registry.objects.has(firstZone.id())).toBeTruthy();
    expect(registry.objects.has(secondZone.id())).toBeFalsy();

    unregisterZone(firstZone);

    expect(registry.zones.length()).toBe(0);
    expect(registry.objects.length()).toBe(0);
  });
});