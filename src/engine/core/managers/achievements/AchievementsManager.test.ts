import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { CTime, game } from "xray16";

import {
  disposeManager,
  getManager,
  registerActor,
  registerSimulator,
  registerStoryLink,
  registry,
} from "@/engine/core/database";
import { achievementsConfig } from "@/engine/core/managers/achievements/AchievementsConfig";
import { AchievementsManager } from "@/engine/core/managers/achievements/AchievementsManager";
import { EGameEvent, EventsManager } from "@/engine/core/managers/events";
import { ENotificationType, notificationsIcons } from "@/engine/core/managers/notifications";
import { WeatherManager } from "@/engine/core/managers/weather/WeatherManager";
import { giveInfoPortion } from "@/engine/core/utils/info_portion";
import { infoPortions } from "@/engine/lib/constants/info_portions";
import { ServerObject } from "@/engine/lib/types";
import { resetRegistry } from "@/fixtures/engine";
import { replaceFunctionMock, resetFunctionMock } from "@/fixtures/jest";
import { MockGameObject, mockServerAlifeObject } from "@/fixtures/xray";
import { MockCTime } from "@/fixtures/xray/mocks/CTime.mock";
import { EPacketDataType, mockNetPacket, mockNetProcessor, MockNetProcessor } from "@/fixtures/xray/mocks/save";

describe("AchievementManager class", () => {
  beforeEach(() => {
    resetRegistry();
    registerActor(MockGameObject.mockActor());
    registerSimulator();

    achievementsConfig.LAST_DETECTIVE_ACHIEVEMENT_SPAWN_AT = null;
    achievementsConfig.LAST_MUTANT_HUNTER_ACHIEVEMENT_SPAWN_AT = null;
  });

  it("should correctly initialize and destroy", () => {
    const achievementsManager: AchievementsManager = getManager(AchievementsManager);
    const eventsManager: EventsManager = getManager(EventsManager);

    expect(eventsManager.getSubscribersCount()).toBe(1);

    disposeManager(AchievementsManager);

    expect(eventsManager.getSubscribersCount()).toBe(0);
  });

  it("should correctly save and load by default", () => {
    const netProcessor: MockNetProcessor = new MockNetProcessor();
    const achievementsManager: AchievementsManager = getManager(AchievementsManager);

    achievementsManager.save(mockNetPacket(netProcessor));

    expect(netProcessor.writeDataOrder).toEqual([EPacketDataType.BOOLEAN, EPacketDataType.BOOLEAN]);
    expect(netProcessor.dataList).toEqual([false, false]);

    disposeManager(AchievementsManager);

    const newAchievementsManager: AchievementsManager = getManager(AchievementsManager);

    newAchievementsManager.load(mockNetProcessor(netProcessor));

    expect(netProcessor.readDataOrder).toEqual(netProcessor.writeDataOrder);
    expect(netProcessor.dataList).toHaveLength(0);
    expect(newAchievementsManager).not.toBe(achievementsManager);
  });

  it("should correctly save and load when state is updated", () => {
    const netProcessor: MockNetProcessor = new MockNetProcessor();
    const achievementsManager: AchievementsManager = getManager(AchievementsManager);

    achievementsConfig.LAST_DETECTIVE_ACHIEVEMENT_SPAWN_AT = MockCTime.mock(2023, 4, 16, 10, 57, 4, 400);
    achievementsConfig.LAST_MUTANT_HUNTER_ACHIEVEMENT_SPAWN_AT = MockCTime.mock(2012, 2, 24, 5, 33, 2, 0);

    achievementsManager.save(mockNetPacket(netProcessor));

    expect(netProcessor.writeDataOrder).toEqual([
      EPacketDataType.BOOLEAN,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U16,
      EPacketDataType.BOOLEAN,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U8,
      EPacketDataType.U16,
    ]);
    expect(netProcessor.dataList).toEqual([true, 23, 4, 16, 10, 57, 4, 400, true, 12, 2, 24, 5, 33, 2, 0]);

    disposeManager(WeatherManager);

    const newAchievementsManager: AchievementsManager = getManager(AchievementsManager);

    newAchievementsManager.load(mockNetProcessor(netProcessor));

    expect(netProcessor.readDataOrder).toEqual(netProcessor.writeDataOrder);
    expect(netProcessor.dataList).toHaveLength(0);
    expect(newAchievementsManager).toBe(achievementsManager);
  });

  it("should correctly handle update with no achievements", () => {
    const achievementsManager: AchievementsManager = getManager(AchievementsManager);

    resetFunctionMock(registry.simulator.create);
    resetFunctionMock(registry.simulator.create_ammo);

    achievementsManager.update();

    expect(achievementsConfig.LAST_MUTANT_HUNTER_ACHIEVEMENT_SPAWN_AT).toBeNull();
    expect(achievementsConfig.LAST_DETECTIVE_ACHIEVEMENT_SPAWN_AT).toBeNull();
    expect(registry.simulator.create).not.toHaveBeenCalled();
    expect(registry.simulator.create_ammo).not.toHaveBeenCalled();
  });

  it("should correctly handle update with detective", () => {
    const eventsManager: EventsManager = getManager(EventsManager);
    const achievementsManager: AchievementsManager = getManager(AchievementsManager);
    const box: ServerObject = mockServerAlifeObject();

    jest.spyOn(eventsManager, "emitEvent").mockImplementation(jest.fn());

    resetFunctionMock(registry.simulator.create);
    resetFunctionMock(registry.simulator.create_ammo);
    replaceFunctionMock(game.get_game_time, () => MockCTime.mock(2012, 6, 25, 12, 35, 30, 500));

    registerStoryLink(box.id, achievementsConfig.REWARD_BOXES.ZATON);
    giveInfoPortion(infoPortions.detective_achievement_gained);

    achievementsManager.update();

    expect(String(achievementsConfig.LAST_DETECTIVE_ACHIEVEMENT_SPAWN_AT)).toBe(String(game.get_game_time()));
    expect(registry.simulator.create).not.toHaveBeenCalled();
    expect(registry.simulator.create_ammo).not.toHaveBeenCalled();

    const newTime: CTime = MockCTime.mock(2020, 6, 25, 12, 35, 30, 500);

    replaceFunctionMock(game.get_game_time, () => newTime);

    achievementsManager.update();

    expect(eventsManager.emitEvent).toHaveBeenCalledWith(EGameEvent.NOTIFICATION, {
      type: ENotificationType.TIP,
      caption: "st_detective_news",
      senderId: notificationsIcons.got_medicine,
    });
    expect(registry.simulator.create).toHaveBeenCalledTimes(4);
    expect(registry.simulator.create_ammo).toHaveBeenCalledTimes(0);
    expect(achievementsConfig.LAST_DETECTIVE_ACHIEVEMENT_SPAWN_AT).toBe(newTime);
  });

  it("should correctly handle update with monster hunter", () => {
    const eventsManager: EventsManager = getManager(EventsManager);
    const achievementsManager: AchievementsManager = getManager(AchievementsManager);
    const box: ServerObject = mockServerAlifeObject();

    jest.spyOn(eventsManager, "emitEvent").mockImplementation(jest.fn());

    resetFunctionMock(registry.simulator.create);
    resetFunctionMock(registry.simulator.create_ammo);
    replaceFunctionMock(game.get_game_time, () => MockCTime.mock(2012, 6, 25, 12, 35, 30, 500));

    registerStoryLink(box.id, achievementsConfig.REWARD_BOXES.JUPITER);
    giveInfoPortion(infoPortions.mutant_hunter_achievement_gained);

    achievementsManager.update();

    expect(String(achievementsConfig.LAST_MUTANT_HUNTER_ACHIEVEMENT_SPAWN_AT)).toBe(String(game.get_game_time()));
    expect(registry.simulator.create).not.toHaveBeenCalled();

    const newTime: CTime = MockCTime.mock(2020, 6, 25, 12, 35, 30, 500);

    replaceFunctionMock(game.get_game_time, () => newTime);

    achievementsManager.update();

    expect(eventsManager.emitEvent).toHaveBeenCalledWith(EGameEvent.NOTIFICATION, {
      type: ENotificationType.TIP,
      caption: "st_mutant_hunter_news",
      senderId: notificationsIcons.got_ammo,
    });
    expect(registry.simulator.create).not.toHaveBeenCalled();
    expect(registry.simulator.create_ammo).toHaveBeenCalledTimes(5);
    expect(achievementsConfig.LAST_MUTANT_HUNTER_ACHIEVEMENT_SPAWN_AT).toBe(newTime);
  });
});
