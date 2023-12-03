import { describe, expect, it } from "@jest/globals";

import { getInventoryNameForItemSectionSafely } from "@/engine/core/utils/caption";

describe("getInventoryNameForItemSectionSafely util", () => {
  it("should correctly search for translation", () => {
    expect(getInventoryNameForItemSectionSafely("wpn_not_existing")).toBe("translated_wpn_not_existing");
    expect(getInventoryNameForItemSectionSafely("wpn_ak74")).toBe("translated_AK-74");
  });
});
