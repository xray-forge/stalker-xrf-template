import { SYSTEM_INI } from "@/engine/core/database";
import { AbstractManager } from "@/engine/core/managers/abstract";
import { actorConfig } from "@/engine/core/managers/actor/ActorConfig";
import { executeConsoleCommand } from "@/engine/core/utils/console";
import { readIniString } from "@/engine/core/utils/ini";
import { LuaLogger } from "@/engine/core/utils/logging";
import { consoleCommands } from "@/engine/lib/constants/console_commands";
import { ACTOR, NIL } from "@/engine/lib/constants/words";
import { EActorMenuMode, EActorMenuType, GameObject, IniFile } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

// todo: .CUIActorMenu_OnItemDropped handler
export class ActorInventoryMenuManager extends AbstractManager {
  public override initialize(): void {
    const ini: IniFile = SYSTEM_INI;

    executeConsoleCommand(consoleCommands.slot_0, readIniString(ini, ACTOR, "quick_item_1", false, null, ""));
    executeConsoleCommand(consoleCommands.slot_1, readIniString(ini, ACTOR, "quick_item_2", false, null, ""));
    executeConsoleCommand(consoleCommands.slot_2, readIniString(ini, ACTOR, "quick_item_3", false, null, ""));
    executeConsoleCommand(consoleCommands.slot_3, readIniString(ini, ACTOR, "quick_item_4", false, null, ""));
  }

  /**
   * todo: Description.
   */
  public setActiveMode(nextMode: EActorMenuMode): void {
    if (nextMode === EActorMenuMode.UNDEFINED || nextMode === EActorMenuMode.TALK_DIALOG_HIDE) {
      this.closeActorMenu();
    } else {
      this.openActorMenu(nextMode);
    }
  }

  /**
   * todo: Description.
   */
  public closeActorMenu(): void {
    switch (actorConfig.ACTOR_MENU_MODE) {
      case EActorMenuMode.INVENTORY:
      case EActorMenuMode.TRADE:
      case EActorMenuMode.UPGRADE:
      case EActorMenuMode.DEAD_BODY_SEARCH:
        this.onWindowClosed(actorConfig.ACTOR_MENU_MODE);
        break;

      case EActorMenuMode.TALK_DIALOG_HIDE:
        this.onWindowClosed(EActorMenuMode.TALK_DIALOG);
        break;
    }

    actorConfig.ACTOR_MENU_MODE = EActorMenuMode.UNDEFINED;
  }

  /**
   * todo: Description.
   */
  public openActorMenu(mode: EActorMenuMode): void {
    switch (mode) {
      case EActorMenuMode.INVENTORY:
      case EActorMenuMode.TRADE:
      case EActorMenuMode.UPGRADE:
      case EActorMenuMode.DEAD_BODY_SEARCH:
        actorConfig.ACTOR_MENU_MODE = mode;

        return this.onWindowOpen(mode);

      case EActorMenuMode.TALK_DIALOG_SHOW:
        actorConfig.ACTOR_MENU_MODE = EActorMenuMode.TALK_DIALOG;

        return this.onWindowOpen(mode);
    }
  }

  /**
   * todo: Description.
   */
  public isActiveMode(mode: EActorMenuMode): boolean {
    return actorConfig.ACTOR_MENU_MODE === mode;
  }

  /**
   * todo: Description.
   */
  public onItemDropped(from: GameObject, to: GameObject, oldList: EActorMenuType, newList: EActorMenuType): void {
    logger.info("Actor menu inventory item dropped: %s %s %s %s", from?.name(), to?.name(), oldList, newList);
  }

  /**
   * todo: Description.
   */
  public onWindowOpen(mode: EActorMenuMode): void {
    logger.info("Actor menu open: %s", EActorMenuMode[mode]);
  }

  /**
   * todo: Description.
   */
  public onWindowClosed(mode: EActorMenuMode): void {
    logger.info("Actor menu close: %s", EActorMenuMode[mode]);
  }
}
