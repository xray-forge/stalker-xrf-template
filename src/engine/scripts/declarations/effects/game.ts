import { game, get_hud, StaticDrawableWrapper } from "xray16";

import { getPortableStoreValue, setPortableStoreValue } from "@/engine/core/database";
import { ItemUpgradesManager } from "@/engine/core/managers/interface/ItemUpgradesManager";
import { extern } from "@/engine/core/utils/binding";
import { executeConsoleCommand } from "@/engine/core/utils/game/game_console";
import { createGameAutoSave } from "@/engine/core/utils/game/game_save";
import { LuaLogger } from "@/engine/core/utils/logging";
import { consoleCommands } from "@/engine/lib/constants/console_commands";
import { ACTOR_ID } from "@/engine/lib/constants/ids";
import { ClientObject, GameHud, LuaArray, Optional, TLabel, TName } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
extern("xr_effects.inc_counter", (actor: ClientObject, object: ClientObject, p: [Optional<string>, number]) => {
  if (p[0]) {
    const incValue: number = p[1] || 1;
    const newValue: number = getPortableStoreValue(ACTOR_ID, p[0], 0) + incValue;

    setPortableStoreValue(ACTOR_ID, p[0], newValue);
  }
});

/**
 * todo;
 */
extern("xr_effects.dec_counter", (actor: ClientObject, npc: ClientObject, p: [Optional<string>, number]) => {
  if (p[0]) {
    const decValue: number = p[1] || 1;
    let newValue: number = getPortableStoreValue(ACTOR_ID, p[0], 0) - decValue;

    if (newValue < 0) {
      newValue = 0;
    }

    setPortableStoreValue(ACTOR_ID, p[0], newValue);
  }
});

/**
 * todo;
 */
extern(
  "xr_effects.set_counter",
  (actor: ClientObject, npc: ClientObject, params: [Optional<string>, Optional<number>]): void => {
    if (params[0]) {
      setPortableStoreValue(ACTOR_ID, params[0], params[1] || 0);
    }
  }
);

/**
 * todo;
 */
extern("xr_effects.game_disconnect", (actor: ClientObject, npc: ClientObject): void => {
  logger.info("Game disconnect");
  executeConsoleCommand(consoleCommands.disconnect);
});

let isGameoverCreditsStarted: boolean = false;

/**
 * todo;
 */
extern("xr_effects.game_credits", (actor: ClientObject, npc: ClientObject): void => {
  logger.info("Game credits");

  isGameoverCreditsStarted = true;
  game.start_tutorial("credits_seq");
});

/**
 * todo;
 */
extern("xr_effects.game_over", (actor: ClientObject, npc: ClientObject): void => {
  logger.info("Game over");

  if (isGameoverCreditsStarted !== true) {
    return;
  }

  executeConsoleCommand(consoleCommands.main_menu, "on");
});

/**
 * todo;
 */
extern("xr_effects.after_credits", (actor: ClientObject, npc: ClientObject): void => {
  executeConsoleCommand(consoleCommands.main_menu, "on");
});

/**
 * todo;
 */
extern("xr_effects.before_credits", (actor: ClientObject, npc: ClientObject): void => {
  executeConsoleCommand(consoleCommands.main_menu, "off");
});

/**
 * todo;
 */
extern("xr_effects.on_tutor_gameover_stop", () => {
  executeConsoleCommand(consoleCommands.main_menu, "on");
});

/**
 * todo; extern
 */
extern("xr_effects.on_tutor_gameover_quickload", () => {
  executeConsoleCommand(consoleCommands.load_last_save);
});

/**
 * todo;
 */
extern("xr_effects.stop_tutorial", (): void => {
  logger.info("Stop tutorial");
  game.stop_tutorial();
});

/**
 * todo;
 */
extern("xr_effects.scenario_autosave", (actor: ClientObject, object: ClientObject, [name]: [TName]): void => {
  createGameAutoSave(name);
});

/**
 * todo;
 */
extern("xr_effects.mech_discount", (actor: ClientObject, object: ClientObject, p: [string]) => {
  if (p[0]) {
    ItemUpgradesManager.getInstance().setCurrentPriceDiscount(tonumber(p[0])!);
  }
});

/**
 * todo;
 */
extern(
  "xr_effects.upgrade_hint",
  (actor: ClientObject, object: ClientObject, parameters: Optional<LuaArray<TLabel>>): void => {
    if (parameters) {
      ItemUpgradesManager.getInstance().setCurrentHints(parameters);
    }
  }
);

/**
 * todo;
 */
extern("xr_effects.add_cs_text", (actor: ClientObject, object: ClientObject, p: [string]) => {
  if (p[0]) {
    const hud: GameHud = get_hud();
    let customText: Optional<StaticDrawableWrapper> = hud.GetCustomStatic("text_on_screen_center");

    if (customText) {
      hud.RemoveCustomStatic("text_on_screen_center");
    }

    hud.AddCustomStatic("text_on_screen_center", true);
    customText = hud.GetCustomStatic("text_on_screen_center");
    customText!.wnd().TextControl().SetText(game.translate_string(p[0]));
  }
});

/**
 * todo;
 */
extern("xr_effects.del_cs_text", (actor: ClientObject, npc: ClientObject, p: []) => {
  const hud: GameHud = get_hud();
  const csText: Optional<StaticDrawableWrapper> = hud.GetCustomStatic("text_on_screen_center");

  if (csText) {
    hud.RemoveCustomStatic("text_on_screen_center");
  }
});
