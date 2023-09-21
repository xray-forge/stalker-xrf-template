import { afterEach, beforeEach, describe, expect, it, jest } from "@jest/globals";

import { disposeManager, registerActor, registerSimulator, registry } from "@/engine/core/database";
import { EGameEvent, EventsManager } from "@/engine/core/managers/events";
import {
  ENotificationDirection,
  ENotificationType,
  IItemRelocatedNotification,
  IMoneyRelocatedNotification,
} from "@/engine/core/managers/notifications";
import {
  actorHasAtLeastOneItem,
  actorHasItem,
  actorHasItems,
  actorHasMedKit,
  getActorAvailableMedKit,
  getNpcSpeaker,
  giveItemsToActor,
  giveMoneyToActor,
  isObjectName,
  objectHasItem,
  takeItemFromActor,
  transferItemsFromActor,
  transferItemsToActor,
  transferMoneyFromActor,
} from "@/engine/core/utils/object/object_task_reward";
import { ammo } from "@/engine/lib/constants/items/ammo";
import { medkits } from "@/engine/lib/constants/items/drugs";
import { weapons } from "@/engine/lib/constants/items/weapons";
import { AnyObject, ClientObject, TSection } from "@/engine/lib/types";
import { MockLuaTable } from "@/fixtures/lua/mocks/LuaTable.mock";
import {
  mockActorClientGameObject,
  MockAlifeSimulator,
  mockClientGameObject,
  mockServerAlifeObject,
} from "@/fixtures/xray";

describe("task_reward utils", () => {
  const createObjectWithItems = () =>
    mockClientGameObject({
      inventory: [
        [1, mockClientGameObject({ sectionOverride: medkits.medkit } as Partial<ClientObject>)],
        [2, mockClientGameObject({ sectionOverride: medkits.medkit } as Partial<ClientObject>)],
        [3, mockClientGameObject({ sectionOverride: medkits.medkit_army } as Partial<ClientObject>)],
        [4, mockClientGameObject({ sectionOverride: medkits.medkit_army } as Partial<ClientObject>)],
        [5, mockClientGameObject({ sectionOverride: medkits.medkit_army } as Partial<ClientObject>)],
        [40, mockClientGameObject({ sectionOverride: weapons.wpn_svd } as Partial<ClientObject>)],
        [41, mockClientGameObject({ sectionOverride: weapons.wpn_svd } as Partial<ClientObject>)],
        [50, mockClientGameObject({ sectionOverride: ammo.ammo_9x18_pmm } as Partial<ClientObject>)],
        [51, mockClientGameObject({ sectionOverride: ammo.ammo_9x18_pmm } as Partial<ClientObject>)],
        [52, mockClientGameObject({ sectionOverride: ammo.ammo_9x18_pmm } as Partial<ClientObject>)],
        [53, mockClientGameObject({ sectionOverride: ammo.ammo_9x18_pmm } as Partial<ClientObject>)],
        [54, mockClientGameObject({ sectionOverride: ammo.ammo_9x18_pmm } as Partial<ClientObject>)],
        [55, mockClientGameObject({ sectionOverride: ammo.ammo_9x18_pmm } as Partial<ClientObject>)],
      ],
    });

  const getItemsCount = (object: ClientObject, section: TSection) => {
    return [...((object as AnyObject).inventory as Map<number, ClientObject>).entries()].filter(([, it]) => {
      return it.section() === section;
    }).length;
  };

  beforeEach(() => {
    registerActor(mockActorClientGameObject());
    registerSimulator();
  });

  afterEach(() => {
    disposeManager(EventsManager);
  });

  it("giveMoneyToActor should correctly transfer money", () => {
    const eventsManager: EventsManager = EventsManager.getInstance();

    const mock = jest.fn((notification: IMoneyRelocatedNotification) => {
      expect(notification.type).toBe(ENotificationType.MONEY);
      expect(notification.amount).toBe(250);
      expect(notification.direction).toBe(ENotificationDirection.IN);
    });

    eventsManager.registerCallback(EGameEvent.NOTIFICATION, mock, null);

    giveMoneyToActor(250);

    expect(registry.actor.give_money).toHaveBeenCalledWith(250);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("takeMoneyFromActor should correctly transfer money", () => {
    const eventsManager: EventsManager = EventsManager.getInstance();

    const mock = jest.fn((notification: IMoneyRelocatedNotification) => {
      expect(notification.type).toBe(ENotificationType.MONEY);
      expect(notification.amount).toBe(500);
      expect(notification.direction).toBe(ENotificationDirection.OUT);
    });

    eventsManager.registerCallback(EGameEvent.NOTIFICATION, mock, null);

    const destinationObject: ClientObject = mockClientGameObject();

    transferMoneyFromActor(destinationObject, 500);

    expect(registry.actor.transfer_money).toHaveBeenCalledWith(500, destinationObject);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("transferItemsFromActor should take items from actor", () => {
    const eventsManager: EventsManager = EventsManager.getInstance();
    const mock = jest.fn((notification: IItemRelocatedNotification) => {
      expect(notification.type).toBe(ENotificationType.ITEM);
      expect(notification.amount).toBe(2);
      expect(notification.direction).toBe(ENotificationDirection.OUT);
    });

    eventsManager.registerCallback(EGameEvent.NOTIFICATION, mock, null);

    registerActor(createObjectWithItems());

    expect(getItemsCount(registry.actor, weapons.wpn_svd)).toBe(2);
    expect(getItemsCount(registry.actor, medkits.medkit)).toBe(2);
    expect(getItemsCount(registry.actor, medkits.medkit_army)).toBe(3);
    expect(getItemsCount(registry.actor, ammo.ammo_9x18_pmm)).toBe(6);

    transferItemsFromActor(mockClientGameObject(), weapons.wpn_svd, 2);

    expect(getItemsCount(registry.actor, weapons.wpn_svd)).toBe(0);
    expect(getItemsCount(registry.actor, medkits.medkit)).toBe(2);
    expect(getItemsCount(registry.actor, medkits.medkit_army)).toBe(3);
    expect(getItemsCount(registry.actor, ammo.ammo_9x18_pmm)).toBe(6);

    expect(registry.actor.transfer_item).toHaveBeenCalledTimes(2);

    expect(() => transferItemsFromActor(mockClientGameObject(), weapons.wpn_svd, 2)).toThrow();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("transferItemsFromActor should take ammo from object", () => {
    const eventsManager: EventsManager = EventsManager.getInstance();
    const mock = jest.fn((notification: IItemRelocatedNotification) => {
      expect(notification.type).toBe(ENotificationType.ITEM);
      expect(notification.amount).toBe(90);
      expect(notification.direction).toBe(ENotificationDirection.OUT);
    });

    eventsManager.registerCallback(EGameEvent.NOTIFICATION, mock, null);

    registerActor(createObjectWithItems());

    expect(getItemsCount(registry.actor, ammo.ammo_9x18_pmm)).toBe(6);
    transferItemsFromActor(mockClientGameObject(), ammo.ammo_9x18_pmm, 3);
    expect(getItemsCount(registry.actor, ammo.ammo_9x18_pmm)).toBe(3);
    expect(registry.actor.transfer_item).toHaveBeenCalledTimes(3);

    transferItemsFromActor(mockClientGameObject(), ammo.ammo_9x18_pmm, 3);
    expect(getItemsCount(registry.actor, ammo.ammo_9x18_pmm)).toBe(0);
    expect(mock).toHaveBeenCalledTimes(2);
  });

  it("transferItemsFromActor should take ALL from object", () => {
    const eventsManager: EventsManager = EventsManager.getInstance();
    const mock = jest.fn((notification: IItemRelocatedNotification) => {
      expect(notification.type).toBe(ENotificationType.ITEM);
      expect(notification.amount).toBe(180);
      expect(notification.direction).toBe(ENotificationDirection.OUT);
    });

    eventsManager.registerCallback(EGameEvent.NOTIFICATION, mock, null);

    registerActor(createObjectWithItems());

    expect(getItemsCount(registry.actor, ammo.ammo_9x18_pmm)).toBe(6);

    transferItemsFromActor(mockClientGameObject(), ammo.ammo_9x18_pmm, "all");

    expect(getItemsCount(registry.actor, ammo.ammo_9x18_pmm)).toBe(0);
    expect(registry.actor.transfer_item).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("transferItemsFromActor should fail on bad attempts", () => {
    registerActor(createObjectWithItems());

    const to: ClientObject = mockClientGameObject();

    expect(() => transferItemsFromActor(to, ammo["ammo_5.45x39_ap"], -1)).toThrow();
    expect(() => transferItemsFromActor(to, ammo["ammo_5.45x39_ap"], 0)).toThrow();
    expect(() => transferItemsFromActor(to, ammo["ammo_5.45x39_ap"], 1)).toThrow();
    expect(() => transferItemsFromActor(to, ammo["ammo_5.45x39_ap"], 10)).toThrow();
    expect(() => transferItemsFromActor(to, weapons.wpn_svd, 10)).toThrow();
  });

  it("transferItemsToActor should take items from object", () => {
    const eventsManager: EventsManager = EventsManager.getInstance();
    const from: ClientObject = createObjectWithItems();
    const mock = jest.fn((notification: IItemRelocatedNotification) => {
      expect(notification.type).toBe(ENotificationType.ITEM);
      expect(notification.amount).toBe(180);
      expect(notification.direction).toBe(ENotificationDirection.IN);
    });

    eventsManager.registerCallback(EGameEvent.NOTIFICATION, mock, null);

    expect(getItemsCount(from, ammo.ammo_9x18_pmm)).toBe(6);
    transferItemsToActor(from, ammo.ammo_9x18_pmm, 6);
    expect(getItemsCount(from, ammo.ammo_9x18_pmm)).toBe(0);
    expect(from.transfer_item).toHaveBeenCalledTimes(6);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("giveItemsToActor should correctly create items and then notify", () => {
    const eventsManager: EventsManager = EventsManager.getInstance();
    const mock = jest.fn((notification: IItemRelocatedNotification) => {
      expect(notification.type).toBe(ENotificationType.ITEM);
      expect(notification.amount).toBe(300);
      expect(notification.direction).toBe(ENotificationDirection.IN);
    });

    eventsManager.registerCallback(EGameEvent.NOTIFICATION, mock, null);

    giveItemsToActor("ammo_5.45x39_ap", 300);

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("takeItemFromActor should correctly delete items and then notify", () => {
    const eventsManager: EventsManager = EventsManager.getInstance();
    const itemToTake: ClientObject = mockClientGameObject();
    const mock = jest.fn((notification: IItemRelocatedNotification) => {
      expect(notification.type).toBe(ENotificationType.ITEM);
      expect(notification.itemSection).toBe("test_section");
      expect(notification.direction).toBe(ENotificationDirection.OUT);
    });

    eventsManager.registerCallback(EGameEvent.NOTIFICATION, mock, null);

    expect(() => takeItemFromActor("test_section_none")).toThrow();

    MockAlifeSimulator.addToRegistry(mockServerAlifeObject({ id: itemToTake.id() }));

    expect(registry.simulator.object(itemToTake.id())).not.toBeNull();

    registerActor(mockClientGameObject({ object: () => itemToTake }));
    takeItemFromActor("test_section");

    expect(registry.simulator.object(itemToTake.id())).toBeNull();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("getNpcSpeaker should correctly pick speaker", () => {
    const first: ClientObject = mockClientGameObject();
    const second: ClientObject = mockClientGameObject();

    expect(getNpcSpeaker(registry.actor, first)).toBe(first);
    expect(getNpcSpeaker(registry.actor, second)).toBe(second);

    expect(getNpcSpeaker(first, registry.actor)).toBe(first);
    expect(getNpcSpeaker(second, registry.actor)).toBe(second);
  });

  it("isObjectName should correctly check name", () => {
    const object: ClientObject = mockClientGameObject({ name: () => "test_complex_name" } as Partial<ClientObject>);

    expect(object.name()).toBe("test_complex_name");
    expect(isObjectName(object, "another")).toBeFalsy();
    expect(isObjectName(object, "test_complex_name")).toBeTruthy();
    expect(isObjectName(object, "complex_name")).toBeTruthy();
    expect(isObjectName(object, "test_complex")).toBeTruthy();
    expect(isObjectName(object, "test")).toBeTruthy();
    expect(isObjectName(object, "complex")).toBeTruthy();
    expect(isObjectName(object, "name")).toBeTruthy();
  });

  it("objectHasItem should correctly check if object has item", () => {
    const object: ClientObject = createObjectWithItems();

    expect(objectHasItem(object, weapons.wpn_svd)).toBeTruthy();
    expect(objectHasItem(object, medkits.medkit)).toBeTruthy();
    expect(objectHasItem(object, medkits.medkit_army)).toBeTruthy();
    expect(objectHasItem(object, medkits.medkit_scientic)).toBeFalsy();
    expect(objectHasItem(object, weapons.wpn_val)).toBeFalsy();
    expect(objectHasItem(object, weapons.wpn_ak74)).toBeFalsy();

    expect(objectHasItem(object, 1)).toBeTruthy();
    expect(objectHasItem(object, 2)).toBeTruthy();
    expect(objectHasItem(object, 40)).toBeTruthy();
    expect(objectHasItem(object, 50)).toBeTruthy();
    expect(objectHasItem(object, 60)).toBeFalsy();
    expect(objectHasItem(object, 70)).toBeFalsy();
    expect(objectHasItem(object, 100)).toBeFalsy();
  });

  it("actorHasAtLeastOneItem should correctly check if object has item", () => {
    registerActor(createObjectWithItems());

    expect(
      actorHasAtLeastOneItem(MockLuaTable.mockFromArray([medkits.medkit, medkits.medkit_army, medkits.medkit_scientic]))
    ).toBeTruthy();
    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([ammo.ammo_gauss, medkits.medkit]))).toBeTruthy();
    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([ammo.ammo_gauss, medkits.medkit_scientic]))).toBeFalsy();

    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([1, 2, 50, 100]))).toBeTruthy();
    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([100, 101, 102, 50]))).toBeTruthy();
    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([100, 101, 102]))).toBeFalsy();

    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([ammo.ammo_gauss, 500]))).toBeFalsy();
    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([weapons.wpn_val, 400]))).toBeFalsy();
    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([ammo.ammo_gauss, 50]))).toBeTruthy();
    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([weapons.wpn_val, 40]))).toBeTruthy();
    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([ammo.ammo_9x18_pmm, 500]))).toBeTruthy();
    expect(actorHasAtLeastOneItem(MockLuaTable.mockFromArray([weapons.wpn_svd, 400]))).toBeTruthy();
  });

  it("actorHasItems should correctly check if object has items", () => {
    registerActor(createObjectWithItems());

    expect(
      actorHasItems(MockLuaTable.mockFromArray([medkits.medkit, medkits.medkit_army, medkits.medkit_scientic]))
    ).toBeFalsy();
    expect(actorHasItems(MockLuaTable.mockFromArray([ammo.ammo_gauss, medkits.medkit]))).toBeFalsy();
    expect(actorHasItems(MockLuaTable.mockFromArray([ammo.ammo_gauss, medkits.medkit_scientic]))).toBeFalsy();

    expect(actorHasItems(MockLuaTable.mockFromArray([medkits.medkit, medkits.medkit_army]))).toBeTruthy();
    expect(actorHasItems(MockLuaTable.mockFromArray([ammo.ammo_9x18_pmm, medkits.medkit]))).toBeTruthy();
    expect(actorHasItems(MockLuaTable.mockFromArray([medkits.medkit_army, weapons.wpn_svd]))).toBeTruthy();

    expect(actorHasItems(MockLuaTable.mockFromArray([1, 2, 40, 50]))).toBeTruthy();
    expect(actorHasItems(MockLuaTable.mockFromArray([1, 2, 3, 4]))).toBeTruthy();
    expect(actorHasItems(MockLuaTable.mockFromArray([40, 41, 50, 51]))).toBeTruthy();
    expect(actorHasItems(MockLuaTable.mockFromArray([100, 101, 102, 50]))).toBeFalsy();
    expect(actorHasItems(MockLuaTable.mockFromArray([100, 101, 102]))).toBeFalsy();

    expect(actorHasItems(MockLuaTable.mockFromArray([ammo.ammo_gauss, 500]))).toBeFalsy();
    expect(actorHasItems(MockLuaTable.mockFromArray([weapons.wpn_val, 40]))).toBeFalsy();
    expect(actorHasItems(MockLuaTable.mockFromArray([ammo.ammo_9x18_pmm, 50]))).toBeTruthy();
    expect(actorHasItems(MockLuaTable.mockFromArray([weapons.wpn_svd, 40]))).toBeTruthy();
  });

  it("actorHasItem should correctly check if object has item", () => {
    registerActor(createObjectWithItems());

    expect(actorHasItem(weapons.wpn_svd)).toBeTruthy();
    expect(actorHasItem(weapons.wpn_desert_eagle)).toBeFalsy();
    expect(actorHasItem(weapons.wpn_ak74)).toBeFalsy();
    expect(actorHasItem(medkits.medkit)).toBeTruthy();
    expect(actorHasItem(medkits.medkit_army)).toBeTruthy();
    expect(actorHasItem(ammo.ammo_9x18_pmm)).toBeTruthy();
    expect(actorHasItem(ammo.ammo_gauss)).toBeFalsy();

    expect(actorHasItem(1234)).toBeFalsy();
    expect(actorHasItem(123)).toBeFalsy();
    expect(actorHasItem(12)).toBeFalsy();
    expect(actorHasItem(1)).toBeTruthy();
    expect(actorHasItem(2)).toBeTruthy();
    expect(actorHasItem(3)).toBeTruthy();
    expect(actorHasItem(40)).toBeTruthy();
    expect(actorHasItem(41)).toBeTruthy();
    expect(actorHasItem(50)).toBeTruthy();
    expect(actorHasItem(51)).toBeTruthy();
    expect(actorHasItem(60)).toBeFalsy();
    expect(actorHasItem(61)).toBeFalsy();
  });

  it("actorHasMedKit should correctly check if object has any medkit", () => {
    registerActor(createObjectWithItems());

    expect(actorHasMedKit(MockLuaTable.mockFromArray(Object.values(medkits)))).toBeTruthy();
    expect(actorHasMedKit(MockLuaTable.mockFromArray(Object.values(medkits)), mockClientGameObject())).toBeFalsy();

    expect(actorHasMedKit(MockLuaTable.mockFromArray([medkits.medkit]))).toBeTruthy();
    expect(actorHasMedKit(MockLuaTable.mockFromArray([medkits.medkit_army]))).toBeTruthy();
    expect(actorHasMedKit(MockLuaTable.mockFromArray([medkits.medkit_scientic]))).toBeFalsy();

    expect(actorHasMedKit(MockLuaTable.mockFromArray([medkits.medkit]), mockClientGameObject())).toBeFalsy();
  });

  it("getActorAvailableMedKit should correctly check medkit", () => {
    registerActor(createObjectWithItems());

    expect(getActorAvailableMedKit(MockLuaTable.mockFromArray(Object.values(medkits)))).toBe(medkits.medkit);
    expect(
      getActorAvailableMedKit(MockLuaTable.mockFromArray(Object.values(medkits)), mockClientGameObject())
    ).toBeNull();

    expect(getActorAvailableMedKit(MockLuaTable.mockFromArray([medkits.medkit]))).toBe(medkits.medkit);
    expect(getActorAvailableMedKit(MockLuaTable.mockFromArray([medkits.medkit_army]))).toBe(medkits.medkit_army);
    expect(getActorAvailableMedKit(MockLuaTable.mockFromArray([medkits.medkit_scientic]))).toBeNull();

    expect(getActorAvailableMedKit(MockLuaTable.mockFromArray([medkits.medkit]), mockClientGameObject())).toBeNull();
  });
});
