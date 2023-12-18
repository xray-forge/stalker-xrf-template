import { AbstractSchemeManager } from "@/engine/core/ai/scheme";
import { IBaseSchemeLogic, IBaseSchemeState, IRegistryObjectState } from "@/engine/core/database";
import { IConfigSwitchCondition, TConditionList } from "@/engine/core/utils/ini/ini_types";
import { EScheme } from "@/engine/lib/types";
import { MockLuaTable } from "@/fixtures/lua";
import { mockIniFile } from "@/fixtures/xray/mocks/ini";

/**
 * Mock generic registry state for an object.
 */
export function mockRegistryState(base: Partial<IRegistryObjectState> = {}): IRegistryObjectState {
  return { ...base } as IRegistryObjectState;
}

/**
 * Mock generic scheme state.
 */
export function mockSchemeState<T extends IBaseSchemeState>(
  scheme: EScheme,
  {
    ini = mockIniFile("scheme_mock.ltx", {}),
    logic = new LuaTable(),
    signals = null,
    overrides = null,
    ...base
  }: Partial<T> = {}
): T {
  return {
    ...(base as T),
    ini,
    logic,
    overrides,
    scheme: base.scheme || scheme,
    section: base.section || scheme + "@test",
    signals,
  };
}

/**
 * Mock generic conditions.
 */
export function mockCondition(base: Partial<IConfigSwitchCondition> = {}): IConfigSwitchCondition {
  return {
    ...base,
    section: base.section || "true",
    infop_check: base.infop_check || new LuaTable(),
    infop_set: base.infop_check || new LuaTable(),
  };
}

/**
 * Mock generic switch condition.
 */
export function mockSwitchCondition({
  section = "test-section",
  infop_check = new LuaTable(),
  infop_set = new LuaTable(),
}: Partial<IConfigSwitchCondition>): IConfigSwitchCondition {
  return { infop_check, infop_set, section };
}

/**
 * Mock whole condlist.
 */
export function mockCondlist(...conditions: Array<IConfigSwitchCondition>): TConditionList {
  const list: TConditionList = new LuaTable();

  conditions.forEach((it) => table.insert(list, it));

  return list;
}

/**
 * Mock generic scheme logic.
 */
export function mockBaseSchemeLogic(base: Partial<IBaseSchemeLogic> = {}): IBaseSchemeLogic {
  return {
    ...base,
    name: base.name || "base-name",
    condlist: base.condlist || new LuaTable(),
    objectId: base.objectId || null,
    p1: base.p1 || null,
    p2: base.p2 || null,
  };
}

/**
 * Get generic subscriber to scheme actions.
 */
export function getSchemeAction<S extends IBaseSchemeState, T extends AbstractSchemeManager<S>>(state: S): T {
  return (state.actions as unknown as MockLuaTable<T, boolean>).getKeysArray()[0];
}
