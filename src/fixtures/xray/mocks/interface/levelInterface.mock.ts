import { jest } from "@jest/globals";

import { ACTOR_ID } from "@/engine/lib/constants/ids";
import { GameObject, TName, TNumberId } from "@/engine/lib/types";
import { MockLuaTable } from "@/fixtures/lua/mocks/LuaTable.mock";
import { patrols } from "@/fixtures/xray/mocks/objects/path";
import { MockVector } from "@/fixtures/xray/mocks/vector.mock";

export const CLIENT_SIDE_REGISTRY: MockLuaTable<TNumberId, GameObject> = MockLuaTable.create();

/**
 * Mock game `level` interface.
 */
export const mockLevelInterface = {
  add_cam_effector: jest.fn(),
  add_cam_effector2: jest.fn(),
  add_pp_effector: jest.fn(),
  change_game_time: jest.fn(),
  disable_input: jest.fn(),
  get_game_difficulty: jest.fn(() => 3),
  get_snd_volume: jest.fn(() => 1),
  get_time_hours: jest.fn(() => 12),
  hide_indicators_safe: jest.fn(),
  iterate_online_objects: jest.fn((cb: (object: GameObject) => void) => {
    return [...CLIENT_SIDE_REGISTRY.entries()].forEach(([k, v]) => {
      if (v.id() !== ACTOR_ID) {
        cb(v);
      }
    });
  }),
  map_add_object_spot: jest.fn(),
  map_has_object_spot: jest.fn(() => 0),
  name: jest.fn(() => "zaton"),
  object_by_id: jest.fn((id: TNumberId) => {
    const verifiedId: TNumberId = Number.parseInt(String(id));

    if (Number.isNaN(verifiedId)) {
      throw new Error("Received NaN for object_by_id getter.");
    }

    return CLIENT_SIDE_REGISTRY.get(verifiedId);
  }),
  patrol_path_exists: jest.fn((name: TName) => name in patrols),
  remove_cam_effector: jest.fn(),
  set_snd_volume: jest.fn((volume: number) => {}),
  show_indicators: jest.fn(),
  show_weapon: jest.fn(),
  vertex_position: jest.fn(() => MockVector.create(15, 14, 16)),
  set_weather: jest.fn(),
  stop_weather_fx: jest.fn(),
  map_remove_object_spot: jest.fn(),
  map_add_object_spot_ser: jest.fn(),
  vertex_id: jest.fn(() => -1),
  enable_input: jest.fn(),
};
