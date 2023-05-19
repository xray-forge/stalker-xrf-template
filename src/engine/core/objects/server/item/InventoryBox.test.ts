import { describe, expect, it, jest } from "@jest/globals";

import { getObjectIdByStoryId, getServerObjectByStoryId, getStoryIdByObjectId, registry } from "@/engine/core/database";
import { InventoryBox } from "@/engine/core/objects/server/item/InventoryBox";
import { mockIniFile } from "@/fixtures/xray/mocks/ini";

describe("InventoryBox server class", () => {
  it("should correctly create generic objects without story links", () => {
    const inventoryBox: InventoryBox = new InventoryBox("test-section");

    expect(inventoryBox.section_name()).toBe("test-section");
    expect(inventoryBox.keep_saved_data_anyway()).toBe(false);
    expect(inventoryBox.can_switch_online()).toBe(true);

    inventoryBox.on_register();

    expect(registry.storyLink.idBySid.length()).toBe(0);
    expect(registry.storyLink.sidById.length()).toBe(0);

    inventoryBox.on_unregister();

    expect(registry.storyLink.idBySid.length()).toBe(0);
    expect(registry.storyLink.sidById.length()).toBe(0);
  });

  it("should not switch online if is in secret", () => {
    const inventoryBox: InventoryBox = new InventoryBox("test-section");

    expect(inventoryBox.section_name()).toBe("test-section");
    expect(inventoryBox.keep_saved_data_anyway()).toBe(false);
    expect(inventoryBox.can_switch_online()).toBe(true);
    expect(inventoryBox.isSecretItem).toBe(false);

    inventoryBox.isSecretItem = true;

    expect(inventoryBox.can_switch_online()).toBe(false);
  });

  it("should correctly create generic objects with story links", () => {
    const inventoryBox: InventoryBox = new InventoryBox("test-section");

    jest.spyOn(inventoryBox, "spawn_ini").mockReturnValue(
      mockIniFile("spawn.ini", {
        story_object: {
          story_id: "test-story-id",
        },
      })
    );

    inventoryBox.on_register();

    expect(registry.storyLink.idBySid.length()).toBe(1);
    expect(registry.storyLink.sidById.length()).toBe(1);

    expect(getServerObjectByStoryId("test-story-id")).toBe(inventoryBox);
    expect(getObjectIdByStoryId("test-story-id")).toBe(inventoryBox.id);
    expect(getStoryIdByObjectId(inventoryBox.id)).toBe("test-story-id");

    inventoryBox.on_unregister();

    expect(registry.storyLink.idBySid.length()).toBe(0);
    expect(registry.storyLink.sidById.length()).toBe(0);
  });
});