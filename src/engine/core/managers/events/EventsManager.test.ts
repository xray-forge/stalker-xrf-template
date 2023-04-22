import { beforeEach, describe, expect, it, jest } from "@jest/globals";

import { getManagerInstance, registry } from "@/engine/core/database";
import { EGameEvent, EventsManager } from "@/engine/core/managers";
import { AnyCallable, AnyObject } from "@/engine/lib/types";
import { MockLuaTable } from "@/fixtures/lua/mocks/LuaTable.mock";

describe("EventsManager class", () => {
  beforeEach(() => {
    registry.managers = new LuaTable();
  });

  it("should correctly initialize", () => {
    const manager: EventsManager = getManagerInstance(EventsManager);

    expect(MockLuaTable.getMockSize(manager.callbacks)).toBe(25);

    Object.keys(manager.callbacks).forEach((it) => {
      expect(MockLuaTable.getMockSize(manager.callbacks[it as unknown as EGameEvent])).toBe(0);
    });

    expect(manager.getSubscribersCount()).toBe(0);
  });

  it("should correctly add listeners", () => {
    const manager: EventsManager = getManagerInstance(EventsManager);
    const contextObject: AnyObject = {};

    const mockFn: AnyCallable = jest.fn(function (this: unknown, param: number) {
      expect(this).toBe(contextObject);
      expect(param).toBe(255);
    });

    manager.emitEvent(EGameEvent.ACTOR_UPDATE, 255);
    manager.registerCallback(EGameEvent.ACTOR_UPDATE, mockFn, contextObject);
    manager.emitEvent(EGameEvent.ACTOR_UPDATE, 255);
    manager.emitEvent(EGameEvent.ACTOR_UPDATE, 255);

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(MockLuaTable.getMockSize(manager.callbacks[EGameEvent.ACTOR_UPDATE])).toBe(1);
    expect(manager.getEventSubscribersCount(EGameEvent.ACTOR_UPDATE)).toBe(1);

    manager.unregisterCallback(EGameEvent.ACTOR_UPDATE, mockFn);
    manager.emitEvent(EGameEvent.ACTOR_UPDATE, 255);

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(MockLuaTable.getMockSize(manager.callbacks[EGameEvent.ACTOR_UPDATE])).toBe(0);
    expect(manager.getEventSubscribersCount(EGameEvent.ACTOR_UPDATE)).toBe(0);
  });
});
