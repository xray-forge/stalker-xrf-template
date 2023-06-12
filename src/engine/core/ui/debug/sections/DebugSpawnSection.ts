import { CUI3tButton, CUIComboBox, CUIListBox, CUIWindow, LuabindClass, ui_events, vector2 } from "xray16";

import { DebugManager } from "@/engine/core/managers/debug/DebugManager";
import { Squad } from "@/engine/core/objects";
import { AbstractDebugSection } from "@/engine/core/ui/debug/sections/AbstractDebugSection";
import { DebugItemListEntry } from "@/engine/core/ui/debug/sections/DebugItemListEntry";
import { isGameStarted } from "@/engine/core/utils/alife";
import { LuaLogger } from "@/engine/core/utils/logging";
import { getSimulationGroupSections, getStalkerSections } from "@/engine/core/utils/sections";
import { getInventoryNameForItemSection, spawnCreatureNearActor, spawnSquadInSmart } from "@/engine/core/utils/spawn";
import { resolveXmlFile } from "@/engine/core/utils/ui";
import { TInventoryItem } from "@/engine/lib/constants/items";
import { LuaArray, Optional, ServerObject, TPath, TSection, Vector2D } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);
const base: TPath = "menu\\debug\\DebugSpawnSection.component";

enum ESpawnCategory {
  STALKER = "stalkers_list",
  SIMULATION_GROUP = "simulation_group_list",
}

/**
 * todo;
 */
@LuabindClass()
export class DebugSpawnSection extends AbstractDebugSection {
  public categoriesList!: CUIComboBox;
  public itemsList!: CUIListBox<DebugItemListEntry>;
  public itemListMainSize!: Vector2D;
  public itemListNameSize!: Vector2D;
  public itemListDdSize!: Vector2D;
  public itemSpawnButton!: CUI3tButton;

  public initializeControls(): void {
    resolveXmlFile(base, this.xml);

    this.categoriesList = this.xml.InitComboBox("creatures_categories_list", this);

    this.xml.InitFrame("items_list_frame", this);
    this.itemsList = this.xml.InitListBox("items_list", this);
    this.itemsList.ShowSelectedItem(true);

    const window: CUIWindow = new CUIWindow();

    this.xml.InitWindow("spawn_item:main", 0, window);
    this.itemListMainSize = new vector2().set(window.GetWidth(), window.GetHeight());
    this.xml.InitWindow("spawn_item:fn", 0, window);
    this.itemListNameSize = new vector2().set(window.GetWidth(), window.GetHeight());
    this.xml.InitWindow("spawn_item:fd", 0, window);
    this.itemListDdSize = new vector2().set(window.GetWidth(), window.GetHeight());

    this.itemSpawnButton = this.xml.Init3tButton("spawn_creature_button", this);

    this.owner.Register(this.itemsList, "items_list");
    this.owner.Register(this.categoriesList, "creatures_categories_list");
    this.owner.Register(this.itemSpawnButton, "spawn_creature_button");
  }

  public initializeCallBacks(): void {
    this.owner.AddCallback(
      "creatures_categories_list",
      ui_events.LIST_ITEM_SELECT,
      () => this.onCategoryChange(),
      this
    );
    this.owner.AddCallback("spawn_creature_button", ui_events.BUTTON_CLICKED, () => this.onCreatureSpawn(), this);
  }

  public initializeState(): void {
    Object.values(ESpawnCategory)
      .sort((a, b) => ((a as unknown as number) > (b as unknown as number) ? 1 : -1))
      .forEach((it, index) => this.categoriesList.AddItem(it, index));

    this.categoriesList.SetCurrentID(0);

    this.fillItemsList(this.categoriesList.GetText() as ESpawnCategory);
  }

  public fillItemsList(category: ESpawnCategory): void {
    this.itemsList.RemoveAll();

    switch (category) {
      case ESpawnCategory.SIMULATION_GROUP:
        this.addItemsToList(getSimulationGroupSections());
        break;

      case ESpawnCategory.STALKER:
        this.addItemsToList(getStalkerSections());
        break;
    }
  }

  /**
   * Add item to spawn list UI element.
   */
  public addItemsToList(sections: Array<TSection> | LuaArray<TSection>): void {
    (sections as Array<TSection>)
      .sort((a, b) => ((a as unknown as number) > (b as unknown as number) ? 1 : -1))
      .forEach((it) => this.addItemToList(it));
  }

  /**
   * Add item to spawn list UI element.
   */
  public addItemToList(section: TSection): void {
    const spawnItem: DebugItemListEntry = new DebugItemListEntry(
      this.itemListMainSize.y,
      this.itemListDdSize.x,
      section
    );

    spawnItem.SetWndSize(this.itemListMainSize);
    spawnItem.innerNameText.SetWndPos(new vector2().set(0, 0));
    spawnItem.innerNameText.SetWndSize(this.itemListNameSize);
    spawnItem.innerNameText.SetText(getInventoryNameForItemSection(section));
    spawnItem.innerSectionText.SetWndPos(new vector2().set(this.itemListNameSize.x + 4, 0));
    spawnItem.innerSectionText.SetWndSize(this.itemListDdSize);

    this.itemsList.AddExistingItem(spawnItem);
  }

  /**
   * Change category of item lists.
   */
  public onCategoryChange(): void {
    this.fillItemsList(this.categoriesList.GetText() as ESpawnCategory);
  }

  /**
   * Spawn item for actor.
   */
  public onCreatureSpawn(): void {
    if (!isGameStarted()) {
      return logger.info("Cannot spawn, game is not started");
    }

    const category: ESpawnCategory = this.categoriesList.GetText() as ESpawnCategory;
    const itemSelected: Optional<DebugItemListEntry> = this.itemsList.GetSelectedItem();
    const section: Optional<TInventoryItem> = itemSelected?.innerSectionText.GetText() as Optional<TInventoryItem>;

    if (section) {
      logger.info("Spawn:", section);

      // For regular stalkers just create an object. In case of squad spawn for nearest smart terrain.
      if (category === ESpawnCategory.STALKER) {
        const object: ServerObject = spawnCreatureNearActor(section, 10);

        logger.info("Spawned:", object.name());
      } else {
        const nearestSmart: Optional<ServerObject> = DebugManager.getInstance().getNearestServerObject(
          (it: ServerObject): boolean => it.section_name() === "smart_terrain",
          true
        );

        if (nearestSmart) {
          const object: Squad = spawnSquadInSmart(section, nearestSmart.name());

          logger.info("Spawned:", object.name());
        } else {
          logger.info("Skip squad spawn, nearest smart not accessible");
        }
      }
    } else {
      logger.info("No selected target for spawn");
    }
  }
}
