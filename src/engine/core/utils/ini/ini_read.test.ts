import { describe, expect, it } from "@jest/globals";

import { IBaseSchemeLogic } from "@/engine/core/database";
import {
  readIniBoolean,
  readIniConditionList,
  readIniFieldsAsList,
  readIniFieldsAsSet,
  readIniNumber,
  readIniNumberAndConditionList,
  readIniSectionAsSet,
  readIniSectionAsStringMap,
  readIniSectionsAsList,
  readIniSectionsAsSet,
  readIniString,
  readIniStringAndCondList,
  readIniStringList,
  readIniStringWB,
  readIniTwoNumbers,
} from "@/engine/core/utils/ini/ini_read";
import { IniFile, Optional } from "@/engine/lib/types";
import { mockIniFile } from "@/fixtures/xray/mocks/ini";

describe("read utils for ini file", () => {
  it("readIniString utils should correctly get data from ini files", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: "a1",
        b: "b2",
      },
    });

    expect(readIniString(ini, "section1", "a", true)).toBe("a1");
    expect(readIniString(ini, "section1", "b", true)).toBe("b2");

    expect(readIniString(ini, "section1", "c", false)).toBeNull();
    expect(readIniString(ini, "section1", "c", false, null, "def")).toBe("def");
    expect(() => readIniString(ini, "section1", "c", true)).toThrow();

    expect(() => readIniString(ini, "section2", "a", true)).toThrow();
    expect(() => readIniString(ini, "section2", "a", false)).not.toThrow();
  });

  it("readIniStringWB utils should correctly get data from ini files", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: "a1",
        b: "b2",
        q1: `"${1} 2 another"`,
        q2: `"${1} 2 another`,
      },
    });

    expect(readIniStringWB(ini, "section1", "a", true)).toBe("a1");
    expect(readIniStringWB(ini, "section1", "b", true)).toBe("b2");
    expect(readIniStringWB(ini, "section1", "q1", true)).toBe("1 2 another");
    expect(readIniStringWB(ini, "section1", "q2", true)).toBe(`"${1} 2 another`);

    expect(readIniStringWB(ini, "section1", "c", false)).toBeNull();
    expect(readIniStringWB(ini, "section1", "c", false, null, "def")).toBe("def");
    expect(() => readIniStringWB(ini, "section1", "c", true)).toThrow();

    expect(() => readIniStringWB(ini, "section2", "a", true)).toThrow();
    expect(() => readIniStringWB(ini, "section2", "a", false)).not.toThrow();
  });

  it("readIniStringList utils should correctly get data from ini files", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: "a1",
        b: "b2, b3, b4",
        c: "",
      },
    });

    expect(readIniStringList(ini, "section1", "a", true, "")).toEqualLuaArrays(["a1"]);
    expect(readIniStringList(ini, "section1", "b", true, "")).toEqualLuaArrays(["b2", "b3", "b4"]);
    expect(readIniStringList(ini, "section1", "c", true, "")).toEqualLuaArrays([]);
    expect(readIniStringList(ini, "section1", "d", false)).toEqualLuaArrays([]);
    expect(readIniStringList(ini, "section1", "d", false, "")).toEqualLuaArrays([]);
    expect(readIniStringList(ini, "section1", "e", false, "e1, e2")).toEqualLuaArrays(["e1", "e2"]);

    expect(() => readIniStringList(ini, "section2", "a", true, null as unknown as string)).toThrow();
    expect(() => readIniStringList(ini, "section2", "3", true, null as unknown as string)).toThrow();
    expect(() => readIniStringList(ini, "section2", "3", true, "")).toThrow();
    expect(() => readIniStringList(ini, "section2", "3", false, null as unknown as string)).not.toThrow();
  });

  it("readIniNumber utils should correctly get data from ini files", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: 1,
        b: 2,
      },
    });

    expect(readIniNumber(ini, "section1", "a", true)).toBe(1);
    expect(readIniNumber(ini, "section1", "b", true)).toBe(2);

    expect(readIniNumber(ini, "section1", "c", false)).toBeNull();
    expect(readIniNumber(ini, "section1", "c", false, 3)).toBe(3);
  });

  it("readIniBoolean utils should correctly get data from ini files", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: true,
        b: false,
      },
    });

    expect(readIniBoolean(ini, "section1", "a", true)).toBe(true);
    expect(readIniBoolean(ini, "section1", "b", true)).toBe(false);
    expect(readIniBoolean(ini, "section1", "c", false)).toBe(false);
    expect(readIniBoolean(ini, "section1", "c", false, true)).toBe(true);

    expect(() => readIniBoolean(ini, "section2", "a", true)).toThrow();
    expect(() => readIniBoolean(ini, "section2", "a", false)).not.toThrow();
  });

  it("readIniTwoNumbers util should get two numbers correctly", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: "-4.3, 2",
        b: "10 -5",
        c: "10",
        d: "",
      },
    });

    expect(readIniTwoNumbers(ini, "section1", "a", 1, 1)).toEqual([-4.3, 2]);
    expect(readIniTwoNumbers(ini, "section1", "b", 1, 1)).toEqual([10, -5]);
    expect(readIniTwoNumbers(ini, "section1", "c", 1, 1)).toEqual([10, 1]);
    expect(readIniTwoNumbers(ini, "section1", "d", 1, 1)).toEqual([1, 1]);
    expect(readIniTwoNumbers(ini, "section1", "e", 1, 1)).toEqual([1, 1]);
  });

  it("readIniConditionList should correctly parse data", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a:
          "ph_idle@sound %=anim_obj_forward(pas_b400_door_way) =heal_squad(pas_b400_stalkers_squad)" +
          " +pas_b400_way_button_pressed -pas_b400_about_gates%",
        b: "{-lx8_scentific_door_open} ph_door@open %+lx8_scentific_door_open%, ph_door@open",
      },
    });

    const firstScheme: Optional<IBaseSchemeLogic> = readIniConditionList(ini, "section1", "a");

    expect(firstScheme).toEqualLuaTables({
      name: "a",
      condlist: {
        "1": {
          section: "ph_idle@sound ",
          infop_check: {},
          infop_set: {
            "1": { func: "anim_obj_forward", expected: true, params: { "1": "pas_b400_door_way" } },
            "2": { func: "heal_squad", expected: true, params: { "1": "pas_b400_stalkers_squad" } },
            "3": { name: "pas_b400_way_button_pressed", required: true },
            "4": { name: "pas_b400_about_gates", required: false },
          },
        },
      },
      objectId: null,
      p1: null,
      p2: null,
    });

    const secondScheme: Optional<IBaseSchemeLogic> = readIniConditionList(ini, "section1", "b");

    expect(secondScheme).toEqualLuaTables({
      name: "b",
      condlist: {
        "1": {
          section: "ph_door@open ",
          infop_check: { "1": { name: "lx8_scentific_door_open", required: false } },
          infop_set: { "1": { name: "lx8_scentific_door_open", required: true } },
        },
        "2": { section: "ph_door@open", infop_check: {}, infop_set: {} },
      },
      objectId: null,
      p1: null,
      p2: null,
    });
  });

  it("readIniNumberAndConditionList should correctly parse data", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: "5 | {-jup_b19_actor_damaged_zombied} %+jup_b19_actor_damaged_zombied%",
        b: "150 | {-jup_b4_actor_go_away} %+jup_b4_actor_go_away%",
        c:
          "0 | sr_idle@end {!squad_exist(zat_b38_bloodsuckers_sleepers)} %+zat_b57_gas_running_stop" +
          " +zat_b57_den_of_the_bloodsucker_tell_stalkers_about_destroy_lair_give%",
      },
    });

    expect(readIniNumberAndConditionList(ini, "section1", "a")).toEqualLuaTables({
      name: "a",
      condlist: {
        "1": {
          infop_check: {
            "1": {
              name: "jup_b19_actor_damaged_zombied",
              required: false,
            },
          },
          infop_set: {
            "1": {
              name: "jup_b19_actor_damaged_zombied",
              required: true,
            },
          },
          section: "",
        },
      },
      objectId: null,
      p1: 5,
      p2: null,
    });

    expect(readIniNumberAndConditionList(ini, "section1", "b")).toEqualLuaTables({
      name: "b",
      condlist: {
        "1": {
          infop_check: {
            "1": {
              name: "jup_b4_actor_go_away",
              required: false,
            },
          },
          infop_set: {
            "1": {
              name: "jup_b4_actor_go_away",
              required: true,
            },
          },
          section: "",
        },
      },
      objectId: null,
      p1: 150,
      p2: null,
    });

    expect(readIniNumberAndConditionList(ini, "section1", "c")).toEqualLuaTables({
      name: "c",
      condlist: {
        "1": {
          infop_check: {
            "1": {
              expected: false,
              func: "squad_exist",
              params: {
                "1": "zat_b38_bloodsuckers_sleepers",
              },
            },
          },
          infop_set: {
            "1": {
              name: "zat_b57_gas_running_stop",
              required: true,
            },

            "2": {
              name: "zat_b57_den_of_the_bloodsucker_tell_stalkers_about_destroy_lair_give",
              required: true,
            },
          },
          section: "sr_idle@end  ",
        },
      },
      objectId: null,
      p1: 0,
      p2: null,
    });
  });

  it("readIniStringAndCondList should correctly parse data", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: "lx8_sr_lab | sr_idle@two %+lx8_lab_tushkano_spawn =create_squad(lx8_tushkano_lab_squad:lx8_smart_terrain)%",
        b: "path_end | camper@military_2_heli_2_fight",
      },
    });

    expect(readIniStringAndCondList(ini, "section1", "a")).toEqualLuaTables({
      name: "a",
      condlist: {
        "1": {
          infop_check: {},
          infop_set: {
            "1": {
              name: "lx8_lab_tushkano_spawn",
              required: true,
            },
            "2": {
              expected: true,
              func: "create_squad",
              params: {
                "1": "lx8_tushkano_lab_squad",
                "2": "lx8_smart_terrain",
              },
            },
          },
          section: "sr_idle@two ",
        },
      },
      objectId: null,
      p1: "lx8_sr_lab ",
      p2: null,
    });

    expect(readIniStringAndCondList(ini, "section1", "b")).toEqualLuaTables({
      name: "b",
      condlist: {
        "1": {
          infop_check: {},
          infop_set: {},
          section: "camper@military_2_heli_2_fight",
        },
      },
      objectId: null,
      p1: "path_end ",
      p2: null,
    });
  });

  it("readIniConditionList should correctly parse data", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: {
        a: "sr_idle@two %+lx8_lab_tushkano_spawn =create_squad(lx8_tushkano_lab_squad:lx8_smart_terrain)%",
        b: "camper@military_2_heli_2_fight",
      },
    });

    expect(readIniConditionList(ini, "section1", "a")).toEqualLuaTables({
      name: "a",
      condlist: {
        "1": {
          infop_check: {},
          infop_set: {
            "1": {
              name: "lx8_lab_tushkano_spawn",
              required: true,
            },
            "2": {
              expected: true,
              func: "create_squad",
              params: {
                "1": "lx8_tushkano_lab_squad",
                "2": "lx8_smart_terrain",
              },
            },
          },
          section: "sr_idle@two ",
        },
      },
      objectId: null,
      p1: null,
      p2: null,
    });

    expect(readIniConditionList(ini, "section1", "b")).toEqualLuaTables({
      name: "b",
      condlist: {
        "1": {
          infop_check: {},
          infop_set: {},
          section: "camper@military_2_heli_2_fight",
        },
      },
      objectId: null,
      p1: null,
      p2: null,
    });
  });

  it("readIniSectionAsSet should correctly transform section to set", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: ["a", "b", "c"],
      section2: ["d", "e"],
      section3: {
        x: 1,
        y: false,
      },
    });

    expect(readIniSectionAsSet(ini, "section1")).toEqualLuaTables({
      a: true,
      b: true,
      c: true,
    });
    expect(readIniSectionAsSet(ini, "section2")).toEqualLuaTables({
      d: true,
      e: true,
    });
    expect(readIniSectionAsSet(ini, "section3")).toEqualLuaTables({
      x: true,
      y: true,
    });
  });

  it("readIniSectionsAsSet should correctly transform section to set", () => {
    expect(readIniSectionsAsSet(mockIniFile("test.ltx", {}))).toEqualLuaTables({});
    expect(
      readIniSectionsAsSet(
        mockIniFile("example.ltx", {
          section1: ["a", "b", "c"],
          section2: ["d", "e"],
          section3: {
            x: 1,
            y: false,
          },
        })
      )
    ).toEqualLuaTables({
      section1: true,
      section2: true,
      section3: true,
    });
  });

  it("readIniSectionsAsList should correctly transform section to list", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: ["a", "b", "c"],
      section2: ["d", "e"],
      section3: {
        x: 1,
        y: false,
      },
    });

    expect(readIniSectionsAsList(mockIniFile("test.ltx", {}))).toEqualLuaTables({});
    expect(readIniSectionsAsList(ini)).toEqualLuaTables({
      1: "section1",
      2: "section2",
      3: "section3",
    });
  });

  it("readIniFieldsAsList should correctly transform section fields to list", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: ["a", "b", "c"],
      section2: {
        x: 1,
        y: false,
      },
    });

    expect(readIniFieldsAsList(mockIniFile("test.ltx", {}), "section1")).toEqualLuaTables({});
    expect(readIniFieldsAsList(ini, "section1")).toEqualLuaTables({
      1: "a",
      2: "b",
      3: "c",
    });
    expect(readIniFieldsAsList(ini, "section2")).toEqualLuaTables({
      1: "x",
      2: "y",
    });
  });

  it("readIniFieldsAsSet should correctly transform section fields to list", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: ["a", "b", "c"],
      section2: {
        x: 1,
        y: false,
      },
    });

    expect(readIniFieldsAsSet(mockIniFile("test.ltx", {}), "section1")).toEqualLuaTables({});
    expect(readIniFieldsAsSet(ini, "section1")).toEqualLuaTables({
      a: true,
      b: true,
      c: true,
    });
    expect(readIniFieldsAsSet(ini, "section2")).toEqualLuaTables({
      x: true,
      y: true,
    });
  });

  it("readIniSectionAsStringMap should correctly transform section to string based map", () => {
    const ini: IniFile = mockIniFile("example.ltx", {
      section1: ["a", "b", "c"],
      section2: { a: "b", c: "d", e: "f" },
      section3: {
        x: 1,
        y: false,
      },
    });

    expect(readIniSectionAsStringMap(ini, "section1")).toEqualLuaTables({
      a: null,
      b: null,
      c: null,
    });
    expect(readIniSectionAsStringMap(ini, "section2")).toEqualLuaTables({
      a: "b",
      c: "d",
      e: "f",
    });
    expect(readIniSectionAsStringMap(ini, "section3")).toEqualLuaTables({
      x: 1,
      y: false,
    });
  });
});
