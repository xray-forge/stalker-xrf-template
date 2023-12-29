import { beforeEach, describe, expect, it } from "@jest/globals";

import { getManager, registerSimulator } from "@/engine/core/database";
import { EventsManager } from "@/engine/core/managers/events";
import { travelConfig } from "@/engine/core/managers/travel/TravelConfig";
import { TravelManager } from "@/engine/core/managers/travel/TravelManager";
import { parseConditionsList } from "@/engine/core/utils/ini";
import { TRUE } from "@/engine/lib/constants/words";
import { GameObject, ServerCreatureObject, ServerGroupObject, ServerSmartZoneObject } from "@/engine/lib/types";
import { resetRegistry } from "@/fixtures/engine";
import {
  MockGameObject,
  MockPhraseDialog,
  mockServerAlifeHumanStalker,
  mockServerAlifeOnlineOfflineGroup,
  mockServerAlifeSmartZone,
} from "@/fixtures/xray";

describe("TravelManager class", () => {
  beforeEach(() => {
    resetRegistry();
    registerSimulator();
  });

  it("should correctly initialize callbacks", () => {
    const eventsManager: EventsManager = getManager(EventsManager);
    const manager: TravelManager = getManager(TravelManager);

    manager.initialize();
    expect(eventsManager.getSubscribersCount()).toBe(1);

    manager.destroy();
    expect(eventsManager.getSubscribersCount()).toBe(0);
  });

  it("should correctly have correct configuration", () => {
    expect(travelConfig.TRAVEL_DISTANCE_MIN_THRESHOLD).toBe(50);
    expect(travelConfig.TRAVEL_TELEPORT_DELAY).toBe(3000);
    expect(travelConfig.TRAVEL_RESOLVE_DELAY).toBe(6000);

    expect(travelConfig.TRAVEL_LOCATIONS).toEqualLuaTables({
      zat_a1: "st_stalker_zat_a1",
      zat_sim_1: "st_stalker_zat_sim_1",
      zat_sim_2: "st_stalker_zat_sim_2",
    });
    expect(travelConfig.TRAVEL_DESCRIPTORS_BY_NAME).toEqualLuaTables({
      zat_b100: {
        condlist: parseConditionsList(TRUE),
        level: "zaton",
        name: "st_zat_b100_name",
        phraseId: "1002",
      },
      zat_b55: {
        condlist: parseConditionsList(TRUE),
        level: "zaton",
        name: "st_zat_b55_name",
        phraseId: "1001",
      },
      zat_stalker_base_smart: {
        condlist: parseConditionsList(TRUE),
        name: "st_zat_a2_name",
        level: "zaton",
        phraseId: "1000",
      },
    });
    expect(travelConfig.TRAVEL_DESCRIPTORS_BY_PHRASE).toEqualLuaTables({
      "1000": "zat_stalker_base_smart",
      "1001": "zat_b55",
      "1002": "zat_b100",
    });
  });

  it("should correctly initialize and destroy", () => {
    const manager: TravelManager = getManager(TravelManager);

    manager.initialize();

    expect(manager.isTraveling).toBe(false);
    expect(manager.isTravelTeleported).toBe(false);
    expect(manager.travelingStartedAt).toBe(0);
  });

  it("should correctly initialize travel dialog phrases", () => {
    const manager: TravelManager = getManager(TravelManager);
    const dialog: MockPhraseDialog = MockPhraseDialog.create();

    manager.initialize();
    manager.initializeTravellerDialog(MockPhraseDialog.mock(dialog));

    expect(dialog.list).toEqual({
      "if you see this - this is bad": {
        id: "if you see this - this is bad",
        goodwillLevel: -10000,
        prevPhraseId: "1002",
        script: {
          text: "travel_callbacks.get_travel_cost",
        },
        text: "1002_1",
      },
      dm_traveler_what_are_you_doing: {
        id: "dm_traveler_what_are_you_doing",
        goodwillLevel: -10000,
        prevPhraseId: "",
        script: {},
        text: "0",
      },
      dm_traveler_can_i_go_with_you: {
        id: "dm_traveler_can_i_go_with_you",
        goodwillLevel: -10000,
        prevPhraseId: "1",
        script: {
          precondition: "travel_callbacks.can_actor_move_with_squad",
        },
        text: "11",
      },
      dm_traveler_actor_agree: {
        id: "dm_traveler_actor_agree",
        goodwillLevel: -10000,
        prevPhraseId: "1002_1",
        script: {
          precondition: "travel_callbacks.is_enough_money_to_travel",
        },
        text: "1002_11",
      },
      dm_traveler_actor_dont_go_with_squad: {
        id: "dm_traveler_actor_dont_go_with_squad",
        goodwillLevel: -10000,
        prevPhraseId: "111",
        script: {},
        text: "1112",
      },
      dm_traveler_actor_go_with_squad: {
        id: "dm_traveler_actor_go_with_squad",
        goodwillLevel: -10000,
        prevPhraseId: "111",
        script: {
          precondition: "travel_callbacks.on_travel_together_with_squad",
        },
        text: "1111",
      },
      dm_traveler_actor_has_no_money: {
        id: "dm_traveler_actor_has_no_money",
        goodwillLevel: -10000,
        prevPhraseId: "1002_1",
        script: {
          precondition: "travel_callbacks.is_not_enough_money_to_travel",
        },
        text: "1002_13",
      },
      dm_traveler_actor_refuse: {
        id: "dm_traveler_actor_refuse",
        goodwillLevel: -10000,
        prevPhraseId: "121",
        script: {},
        text: "1211",
      },
      dm_traveler_bye: {
        id: "dm_traveler_bye",
        goodwillLevel: -10000,
        prevPhraseId: "1",
        script: {},
        text: "13",
      },
      dm_traveler_stalker_actor_companion_no: {
        id: "dm_traveler_stalker_actor_companion_no",
        goodwillLevel: -10000,
        prevPhraseId: "11",
        script: {
          precondition: "travel_callbacks.cannot_squad_take_actor",
        },
        text: "112",
      },
      dm_traveler_stalker_actor_companion_yes: {
        id: "dm_traveler_stalker_actor_companion_yes",
        goodwillLevel: -10000,
        prevPhraseId: "11",
        script: {
          precondition: "travel_callbacks.can_squad_take_actor",
        },
        text: "111",
      },
      dm_traveler_stalker_i_cant_travel: {
        id: "dm_traveler_stalker_i_cant_travel",
        goodwillLevel: -10000,
        prevPhraseId: "12",
        script: {
          precondition: "travel_callbacks.cannot_squad_travel",
        },
        text: "122",
      },
      dm_traveler_stalker_where_do_you_want: {
        id: "dm_traveler_stalker_where_do_you_want",
        goodwillLevel: -10000,
        prevPhraseId: "12",
        script: {
          precondition: "travel_callbacks.can_squad_travel",
        },
        text: "121",
      },
      dm_traveler_take_me_to: {
        id: "dm_traveler_take_me_to",
        goodwillLevel: -10000,
        prevPhraseId: "1",
        script: {},
        text: "12",
      },
      "translated_st_zat_a2_name.": {
        id: "translated_st_zat_a2_name.",
        goodwillLevel: -10000,
        prevPhraseId: "121",
        script: {
          precondition: "travel_callbacks.can_negotiate_travel_to_smart",
        },
        text: "1000",
      },
      "translated_st_zat_b100_name.": {
        id: "translated_st_zat_b100_name.",
        goodwillLevel: -10000,
        prevPhraseId: "121",
        script: {
          precondition: "travel_callbacks.can_negotiate_travel_to_smart",
        },
        text: "1002",
      },
      "translated_st_zat_b55_name.": {
        id: "translated_st_zat_b55_name.",
        goodwillLevel: -10000,
        prevPhraseId: "121",
        script: {
          precondition: "travel_callbacks.can_negotiate_travel_to_smart",
        },
        text: "1001",
      },
    });
  });

  it("should correctly check if can use travel dialogs", () => {
    const manager: TravelManager = getManager(TravelManager);
    const squad: ServerGroupObject = mockServerAlifeOnlineOfflineGroup();
    const smartZone: ServerSmartZoneObject = mockServerAlifeSmartZone({ name: <T>() => "jup_b41" as T });
    const serverObject: ServerCreatureObject = mockServerAlifeHumanStalker({ group_id: squad.id });
    const object: GameObject = MockGameObject.mock({ idOverride: serverObject.id });
    const actor: GameObject = MockGameObject.mockActor();

    squad.commander_id = () => object.id();
    object.character_community = <T>() => "stalker" as T;
    expect(manager.canStartTravelingDialogs(actor, object)).toBe(true);

    squad.commander_id = () => -1;
    expect(manager.canStartTravelingDialogs(actor, object)).toBe(false);

    squad.commander_id = () => object.id();
    object.character_community = <T>() => "bandit" as T;
    expect(manager.canStartTravelingDialogs(actor, object)).toBe(false);

    object.character_community = <T>() => "army" as T;
    expect(manager.canStartTravelingDialogs(actor, object)).toBe(false);

    object.character_community = <T>() => "freedom" as T;
    expect(manager.canStartTravelingDialogs(actor, object)).toBe(true);

    serverObject.m_smart_terrain_id = smartZone.id;
    expect(manager.canStartTravelingDialogs(actor, object)).toBe(false);

    smartZone.name = <T>() => "random_smart" as T;
    expect(manager.canStartTravelingDialogs(actor, object)).toBe(true);
  });

  it.todo("should correctly check if can use with squad");

  it.todo("should correctly generate current action description for squads");

  it.todo("should correctly check if smart reachable");

  it.todo("should correctly check if squad can travel");

  it.todo("should correctly check if can negotiate traveling");

  it("should correctly calculate travel price", () => {
    const manager: TravelManager = getManager(TravelManager);

    expect(manager.getTravelPriceByDistance(10)).toBe(50);
    expect(manager.getTravelPriceByDistance(100)).toBe(100);
    expect(manager.getTravelPriceByDistance(500)).toBe(500);
    expect(manager.getTravelPriceByDistance(750)).toBe(750);
    expect(manager.getTravelPriceByDistance(1500)).toBe(1500);
  });

  it.todo("should correctly calculate travel price for phrases");

  it.todo("should correctly calculate generate travel cost strings");

  it.todo("should correctly check if actor has enough money for traveling");

  it.todo("should correctly handle traveling with squad somewhere");

  it.todo("should correctly handle traveling with squad to specific destination");

  it.todo("should correctly handle updates");
});
