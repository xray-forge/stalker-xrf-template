import { jest } from "@jest/globals";
import { TXR_class_id, XR_cse_alife_item_weapon_auto_shotgun, XR_cse_alife_item_weapon_magazined } from "xray16";

import { AbstractLuabindClass } from "@/fixtures/xray/mocks/objects/AbstractLuabindClass";

/**
 * todo;
 */
export class MockAlifeItemWeaponMagazined extends AbstractLuabindClass {}

/**
 * todo;
 */
export function mockServerAlifeItemWeaponMagazined({
  m_game_vertex_id = 1,
  clsid = jest.fn(() => -1 as TXR_class_id),
}: Partial<XR_cse_alife_item_weapon_magazined> = {}): XR_cse_alife_item_weapon_magazined {
  return { m_game_vertex_id, clsid } as unknown as XR_cse_alife_item_weapon_magazined;
}