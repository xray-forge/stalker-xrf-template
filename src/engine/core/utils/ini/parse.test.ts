import { describe, expect, it } from "@jest/globals";

import {
  getSchemeFromSection,
  parseAllSectionToTable,
  parseConditionsList,
  parseFunctionParams,
  parseInfoPortions,
  parseNumbersList,
  parseParameters,
  parseSpawnDetails,
  parseStringOptional,
  parseStringsList,
  parseWaypointData,
  parseWaypointsData,
  parseWaypointsDataFromList,
} from "@/engine/core/utils/ini/parse";
import { IConfigCondition } from "@/engine/core/utils/ini/types";
import { NIL } from "@/engine/lib/constants/words";
import { Flags32, IniFile, LuaArray } from "@/engine/lib/types";
import { luaTableToArray, luaTableToObject } from "@/fixtures/lua/mocks/utils";
import { mockIniFile } from "@/fixtures/xray";
import { MockFlags32 } from "@/fixtures/xray/mocks/objects/Flags32.mock";

describe("'ini_data' parsing utils", () => {
  it("Should correctly parse names array", () => {
    expect(luaTableToArray(parseStringsList("a, b, c"))).toEqual(["a", "b", "c"]);
    expect(luaTableToArray(parseStringsList("a b c"))).toEqual(["a", "b", "c"]);
    expect(luaTableToArray(parseStringsList("name_1, example_b, name_complex_here"))).toEqual([
      "name_1",
      "example_b",
      "name_complex_here",
    ]);
    expect(luaTableToArray(parseStringsList("-1, 2, -3"))).toEqual(["-1", "2", "-3"]);
    expect(luaTableToArray(parseStringsList("-1 2 -3"))).toEqual(["-1", "2", "-3"]);
    expect(luaTableToArray(parseStringsList("-1.5 2.255"))).toEqual(["-1.5", "2.255"]);
    expect(luaTableToArray(parseStringsList("a_b, c_d"))).toEqual(["a_b", "c_d"]);
  });

  it("Should correctly parse numbers array", () => {
    expect(luaTableToArray(parseNumbersList("1, 2, 3, 4"))).toEqual([1, 2, 3, 4]);
    expect(luaTableToArray(parseNumbersList("1.5, 2.33, 3.0"))).toEqual([1.5, 2.33, 3.0]);
    expect(luaTableToArray(parseNumbersList("1.5 2.33 3.0"))).toEqual([1.5, 2.33, 3.0]);
    expect(luaTableToArray(parseNumbersList("1.5 2.33, 3.0"))).toEqual([1.5, 2.33, 3.0]);
    expect(luaTableToArray(parseNumbersList("15, 0, -43, 9999"))).toEqual([15, 0, -43, 9999]);
    expect(luaTableToArray(parseNumbersList("15 0 -43 9999"))).toEqual([15, 0, -43, 9999]);
  });

  it("Should correctly parse spawn details", () => {
    expect(luaTableToArray(parseSpawnDetails(""))).toEqual([]);
    expect(luaTableToArray(parseSpawnDetails("1,1"))).toEqual([
      {
        count: 1,
        probability: 1,
      },
    ]);
    expect(luaTableToArray(parseSpawnDetails("2, 0.2"))).toEqual([
      {
        count: 2,
        probability: 0.2,
      },
    ]);
    expect(luaTableToArray(parseSpawnDetails("5,0.5,4,0.3"))).toEqual([
      {
        count: 5,
        probability: 0.5,
      },
      {
        count: 4,
        probability: 0.3,
      },
    ]);
  });

  it("Should correctly parse call parameters", () => {
    expect(luaTableToArray(parseParameters(NIL))).toEqual([NIL]);
    expect(luaTableToArray(parseParameters("abcd"))).toEqual(["abcd"]);
    expect(luaTableToArray(parseParameters("a|b|c|d"))).toEqual(["a", "b", "c", "d"]);
    expect(luaTableToArray(parseParameters("a|{+ex_info =some_cb(true:d:1) !is_rainy} abc"))).toEqual([
      "a",
      "{+ex_info =some_cb(true:d:1) !is_rainy} abc",
    ]);
  });

  it("Should correctly parse condition lists", () => {
    expect(luaTableToArray(parseConditionsList("{+zat_b104_task_end}4,0"))).toStrictEqual([
      { infop_check: { 1: { name: "zat_b104_task_end", required: true } }, infop_set: {}, section: "4" },
      { infop_check: {}, section: "0", infop_set: {} },
    ]);

    expect(luaTableToArray(parseConditionsList("zat_b28_heli_3_crash_name"))).toStrictEqual([
      { infop_check: {}, section: "zat_b28_heli_3_crash_name", infop_set: {} },
    ]);

    expect(
      luaTableToArray(
        parseConditionsList(
          "{+jup_b218_pripyat_group_gathering}0,{+zat_b28_heli_3_searched}4," +
            "{+zat_b100_heli_2_searched}4,{+zat_b101_heli_5_searched}4,0"
        )
      )
    ).toStrictEqual([
      {
        infop_check: { 1: { name: "jup_b218_pripyat_group_gathering", required: true } },
        section: "0",
        infop_set: {},
      },
      { infop_check: { 1: { name: "zat_b28_heli_3_searched", required: true } }, section: "4", infop_set: {} },
      { infop_check: { 1: { name: "zat_b100_heli_2_searched", required: true } }, section: "4", infop_set: {} },
      { infop_check: { 1: { name: "zat_b101_heli_5_searched", required: true } }, section: "4", infop_set: {} },
      { infop_check: {}, section: "0", infop_set: {} },
    ]);

    expect(
      luaTableToArray(
        parseConditionsList(
          "{+zat_b57_bloodsucker_lair_clear}0,{+zat_b38_disappearance_stalkers_meet_cop_later_give}1," +
            "{+zat_b38_failed}3,0"
        )
      )
    ).toStrictEqual([
      { infop_check: { 1: { name: "zat_b57_bloodsucker_lair_clear", required: true } }, section: "0", infop_set: {} },
      {
        infop_check: { 1: { name: "zat_b38_disappearance_stalkers_meet_cop_later_give", required: true } },
        section: "1",
        infop_set: {},
      },
      { infop_check: { 1: { name: "zat_b38_failed", required: true } }, section: "3", infop_set: {} },
      { infop_check: {}, section: "0", infop_set: {} },
    ]);

    expect(
      luaTableToArray(parseConditionsList("sr_idle@end%=create_squad(zat_b56_polter_squad:zat_b56)%"))
    ).toStrictEqual([
      {
        infop_check: {},
        section: "sr_idle@end",
        infop_set: {
          1: { func: "create_squad", expected: true, params: { 1: "zat_b56_polter_squad", 2: "zat_b56" } },
        },
      },
    ]);

    expect(
      luaTableToArray(
        parseConditionsList(
          "{-zat_b42_mayron_spawn}sr_idle%=spawn_corpse(zat_b42_mayron:zat_b42_mayron_walk)+zat_b42_mayron_spawn%"
        )
      )
    ).toStrictEqual([
      {
        infop_check: { "1": { name: "zat_b42_mayron_spawn", required: false } },
        section: "sr_idle",
        infop_set: {
          "1": { func: "spawn_corpse", expected: true, params: { "1": "zat_b42_mayron", "2": "zat_b42_mayron_walk" } },
          "2": { name: "zat_b42_mayron_spawn", required: true },
        },
      },
    ]);
  });

  it("'parseInfoPortions' should correctly parse info", () => {
    const first: LuaArray<IConfigCondition> = parseInfoPortions(
      new LuaTable(),
      "=spawn_corpse(zat_b42_mayron:zat_b42_mayron_walk)+zat_b42_mayron_spawn"
    );

    expect(luaTableToObject(first)).toEqual({
      "1": {
        expected: true,
        func: "spawn_corpse",
        params: {
          "1": "zat_b42_mayron",
          "2": "zat_b42_mayron_walk",
        },
      },
      "2": {
        name: "zat_b42_mayron_spawn",
        required: true,
      },
    });

    const second: LuaArray<IConfigCondition> = parseInfoPortions(
      new LuaTable(),
      "+save_zat_b42_arrived_to_controler_lair =scenario_autosave(st_save_zat_b42_arrived_to_controler_lair)" +
        " ~50 !another"
    );

    expect(luaTableToObject(second)).toEqual({
      "1": {
        name: "save_zat_b42_arrived_to_controler_lair",
        required: true,
      },
      "2": {
        expected: true,
        func: "scenario_autosave",
        params: {
          "1": "st_save_zat_b42_arrived_to_controler_lair",
        },
      },
      "3": {
        prob: 50,
      },
      "4": {
        expected: false,
        func: "another",
        params: null,
      },
    });

    const third: LuaArray<IConfigCondition> = new LuaTable();

    expect(parseInfoPortions(third, null)).toBe(third);
    expect(luaTableToObject(parseInfoPortions(third, null))).toEqual({});
  });

  it("'parseFunctionParams' should correctly parse list of parameters for condlists", () => {
    expect(luaTableToArray(parseFunctionParams("zat_b42_mayron:zat_b42_mayron_walk"))).toEqual([
      "zat_b42_mayron",
      "zat_b42_mayron_walk",
    ]);
    expect(luaTableToArray(parseFunctionParams("1:zat_b42_mayron_walk:2"))).toEqual([1, "zat_b42_mayron_walk", 2]);
    expect(luaTableToArray(parseFunctionParams("1:-2:3.5:-5.5:-2.3a:c"))).toEqual([1, -2, 3.5, -5.5, "-2.3a", "c"]);
  });

  it("'parseWaypointData' should correctly parse generic paths to waypoint data", () => {
    const flags: Flags32 = MockFlags32.mock();

    expect(luaTableToObject(parseWaypointData("zat_b53_particle_play_point_5", flags, "wp00"))).toEqual({ flags });
    expect(luaTableToObject(parseWaypointData("zat_b53_particle_play_point_5", flags, "wp02|a=patrol"))).toEqual({
      flags,
      a: {
        "1": {
          infop_check: {},
          infop_set: {},
          section: "patrol",
        },
      },
    });
    expect(luaTableToObject(parseWaypointData("zat_b53_particle_play_point_5", flags, "wp00|p=30|t=10000"))).toEqual({
      flags,
      p: "30",
      t: "10000",
    });
    expect(luaTableToObject(parseWaypointData("zat_b53_particle_play_point_5", flags, "wp09|p=70|t=10000"))).toEqual({
      flags,
      p: "70",
      t: "10000",
    });
    expect(
      luaTableToObject(parseWaypointData("zat_b53_particle_play_point_5", flags, "wp10|t=10000|a=search"))
    ).toEqual({
      flags,
      a: {
        "1": {
          infop_check: {},
          infop_set: {},
          section: "search",
        },
      },
      t: "10000",
    });
  });

  it("'parseWaypointData' should correctly parse generic paths to waypoint data", () => {
    const flags: Flags32 = MockFlags32.mock();

    expect(luaTableToObject(parseWaypointsData("zat_b40_smart_terrain_zat_b40_merc_01_walk"))).toEqual({
      "0": {
        a: {
          "1": {
            infop_check: {},
            infop_set: {},
            section: "patrol",
          },
        },
        flags,
      },
      "1": {
        a: {
          "1": {
            infop_check: {},
            infop_set: {},
            section: "patrol",
          },
        },
        flags,
      },
      "2": {
        a: {
          "1": {
            infop_check: {},
            infop_set: {},
            section: "patrol",
          },
        },
        flags,
      },
    });

    expect(luaTableToObject(parseWaypointsData("zat_b40_smart_terrain_zat_b40_merc_02_look"))).toEqual({
      "0": {
        flags: {},
        p: "30",
        t: "10000",
      },
      "1": {
        flags: {},
        p: "70",
        t: "10000",
      },
      "2": {
        flags: {},
        p: "30",
        t: "10000",
      },
      "3": {
        flags: {},
        p: "50",
        t: "10000",
      },
      "4": {
        a: {
          "1": {
            infop_check: {},
            infop_set: {},
            section: "search",
          },
        },
        flags: {},
        t: "10000",
      },
    });
  });

  it("'parseWaypointsDataFromList' should correctly parse generic paths to waypoint data", () => {
    const flags: Flags32 = MockFlags32.mock();

    expect(
      luaTableToObject(
        parseWaypointsDataFromList(
          "zat_b40_smart_terrain_zat_b40_merc_01_walk",
          3,
          [0, "wp55|a=patrol"],
          [1, "wp66|a=patrol"],
          [2, "wp77|a=patrol"]
        )
      )
    ).toEqual({
      "0": {
        a: {
          "1": {
            infop_check: {},
            infop_set: {},
            section: "patrol",
          },
        },
        flags,
      },
      "1": {
        a: {
          "1": {
            infop_check: {},
            infop_set: {},
            section: "patrol",
          },
        },
        flags,
      },
      "2": {
        a: {
          "1": {
            infop_check: {},
            infop_set: {},
            section: "patrol",
          },
        },
        flags,
      },
    });
  });

  it("'parseAllSectionToTable' should correctly parse ini section to matching lua table", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: "a1",
        b: "b2",
        "": "",
        " ": "",
        c: "c",
        d: "10",
      },
      section2: {
        a: "a1",
        " ": "",
        d: "10",
      },
    });

    expect(luaTableToObject(parseAllSectionToTable(ini, "section1"))).toEqual({
      a: "a1",
      b: "b2",
      c: "c",
      d: 10,
    });
    expect(luaTableToObject(parseAllSectionToTable(ini, "section2"))).toEqual({
      a: "a1",
      d: 10,
    });
    expect(luaTableToObject(parseAllSectionToTable(ini, "section3"))).toBeNull();
    expect(luaTableToObject(parseAllSectionToTable(ini, "section4"))).toBeNull();
  });

  it("'parseStringOptional' should correctly handle values", () => {
    expect(parseStringOptional(NIL)).toBeNull();
    expect(parseStringOptional("nil")).toBeNull();
    expect(parseStringOptional("null")).toBe("null");
    expect(parseStringOptional("test")).toBe("test");
    expect(parseStringOptional("12345")).toBe("12345");
  });

  it("'getSchemeFromSection' should correctly return scheme", () => {
    expect(getSchemeFromSection("test")).toBe("test");
    expect(getSchemeFromSection("test@example")).toBe("test");
    expect(getSchemeFromSection("combat@first")).toBe("combat");
    expect(getSchemeFromSection("")).toBeNull();
    expect(getSchemeFromSection("@")).toBeNull();
    expect(getSchemeFromSection("@abc")).toBeNull();
  });
});