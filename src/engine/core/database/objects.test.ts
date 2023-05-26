import { describe, expect, it } from "@jest/globals";
import { game_object } from "xray16";

import { IRegistryObjectState, registerObject, resetObject, unregisterObject } from "@/engine/core/database/objects";
import { registry } from "@/engine/core/database/registry";
import { mockClientGameObject, MockIniFile } from "@/fixtures/xray";

describe("database objects utilities", () => {
  it("should correctly register, reset and unregister objects", () => {
    const object: game_object = mockClientGameObject();
    const mockIni: MockIniFile<{ a: number }> = new MockIniFile("test.ltx", { a: 1 });

    const state: IRegistryObjectState = registerObject(object);

    state.ini = mockIni.asMock();
    expect(registry.objects.get(object.id())).toEqual({ object, ini: mockIni });

    resetObject(object);
    expect(registry.objects.get(object.id())).toEqual({ object });

    unregisterObject(object);
    expect(registry.objects.get(object.id())).toBeNull();
  });
});
