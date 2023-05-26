import { describe, expect, it, jest } from "@jest/globals";

import { getObjectIdByStoryId, getServerObjectByStoryId, getStoryIdByObjectId, registry } from "@/engine/core/database";
import { ItemTorch } from "@/engine/core/objects/server/item/ItemTorch";
import { mockIniFile } from "@/fixtures/xray/mocks/ini";

describe("ItemTorch server class", () => {
  it("should correctly create generic objects without story links", () => {
    const itemTorch: ItemTorch = new ItemTorch("test-section");

    expect(itemTorch.section_name()).toBe("test-section");
    expect(itemTorch.keep_saved_data_anyway()).toBe(false);
    expect(itemTorch.can_switch_online()).toBe(true);

    itemTorch.on_register();

    expect(registry.storyLink.idBySid.length()).toBe(0);
    expect(registry.storyLink.sidById.length()).toBe(0);

    itemTorch.on_unregister();

    expect(registry.storyLink.idBySid.length()).toBe(0);
    expect(registry.storyLink.sidById.length()).toBe(0);
  });

  it("should not switch online if is in secret", () => {
    const itemTorch: ItemTorch = new ItemTorch("test-section");

    expect(itemTorch.section_name()).toBe("test-section");
    expect(itemTorch.keep_saved_data_anyway()).toBe(false);
    expect(itemTorch.can_switch_online()).toBe(true);
    expect(itemTorch.isSecretItem).toBe(false);

    itemTorch.isSecretItem = true;

    expect(itemTorch.can_switch_online()).toBe(false);
  });

  it("should correctly create generic objects with story links", () => {
    const itemTorch: ItemTorch = new ItemTorch("test-section");

    jest.spyOn(itemTorch, "spawn_ini").mockReturnValue(
      mockIniFile("spawn.ini", {
        story_object: {
          story_id: "test-story-id",
        },
      })
    );

    itemTorch.on_register();

    expect(registry.storyLink.idBySid.length()).toBe(1);
    expect(registry.storyLink.sidById.length()).toBe(1);

    expect(getServerObjectByStoryId("test-story-id")).toBe(itemTorch);
    expect(getObjectIdByStoryId("test-story-id")).toBe(itemTorch.id);
    expect(getStoryIdByObjectId(itemTorch.id)).toBe("test-story-id");

    itemTorch.on_unregister();

    expect(registry.storyLink.idBySid.length()).toBe(0);
    expect(registry.storyLink.sidById.length()).toBe(0);
  });
});