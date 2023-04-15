import { jest } from "@jest/globals";
import { TXR_class_id, XR_CGameTask, XR_game_object } from "xray16";

import { mockIniFile } from "@/fixtures/xray/mocks/ini";
import { MockVector } from "@/fixtures/xray/mocks/vector.mock";

let ID_COUNTER: number = 1000;

/**
 * todo;
 */
export function mockClientGameObject({
  character_icon = jest.fn(() => "test_character_icon") as <T>() => T,
  clsid = jest.fn(() => -1 as TXR_class_id),
  disable_info_portion = jest.fn(() => false),
  game_vertex_id = jest.fn(() => 512),
  give_game_news = jest.fn(() => {}),
  give_info_portion = jest.fn(() => false),
  give_money = jest.fn(),
  give_talk_message2 = jest.fn(),
  give_task = jest.fn((task: XR_CGameTask, time: number, shouldCheck: boolean, duration: number) => {}),
  has_info = jest.fn(() => false),
  id,
  idOverride = ID_COUNTER++,
  inventory = [],
  is_talking = jest.fn(() => false),
  level_vertex_id = jest.fn(() => 255),
  name,
  object,
  position = jest.fn(() => MockVector.mock(0.25, 0.25, 0.25)),
  section,
  sectionOverride = "section",
  spawn_ini = jest.fn(() => mockIniFile("spawn.ini")),
  transfer_item,
  transfer_money = jest.fn(),
  ...rest
}: Partial<
  XR_game_object & {
    idOverride?: number;
    sectionOverride?: string;
    inventory: Array<[string | number, XR_game_object]>;
  }
> = {}): XR_game_object {
  const inventoryMap: Map<string | number, XR_game_object> = new Map(inventory);

  return {
    ...rest,
    character_icon,
    clsid,
    disable_info_portion,
    game_vertex_id,
    give_game_news,
    give_info_portion,
    give_money,
    give_talk_message2,
    give_task,
    has_info,
    id: id || jest.fn(() => idOverride),
    inventory: inventoryMap,
    is_talking,
    level_vertex_id,
    name: name || jest.fn(() => `${sectionOverride}_${idOverride}`),
    object:
      object ||
      jest.fn((key: string | number) => {
        if (typeof key === "string") {
          return (
            [...inventoryMap.entries()].find(([, it]) => {
              return it.section() === key;
            }) || null
          );
        }

        return inventoryMap.get(key) || null;
      }),
    iterate_inventory: jest.fn((cb: (owner: XR_game_object, item: XR_game_object) => void, owner: XR_game_object) => {
      for (const [, item] of inventoryMap) {
        cb(owner, item);
      }
    }),
    position,
    section: section || jest.fn(() => sectionOverride),
    spawn_ini,
    transfer_money,
    transfer_item:
      transfer_item ||
      jest.fn((item: XR_game_object, to: XR_game_object) => {
        for (const [key, it] of inventoryMap) {
          if (it === item) {
            inventoryMap.delete(key);
          }
        }
      }),
  } as unknown as XR_game_object;
}
