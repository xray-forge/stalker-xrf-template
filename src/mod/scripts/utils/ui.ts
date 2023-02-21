import { device, get_hud, getFS, level, XR_CUIGameCustom, XR_game_object } from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { registry } from "@/mod/scripts/core/database";
import { abort } from "@/mod/scripts/utils/debug";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("rendering");

export function isWideScreen(): boolean {
  return device().width / device().height > 1024 / 768 + 0.01;
}

/**
 * Util to get XML file for current screen resolution.
 * Default util in XRay is problematic and needs update.
 *
 * todo: Respect dot-separated files in XRAY.
 * todo: Respect folders in XRAY.
 */
export function resolveXmlFormPath(path: string, hasWideScreenSupport: boolean = false): string {
  const base: string = path.endsWith(".xml") ? path.slice(0, path.length - 4) : path;
  const wideBase: string = base + ".16" + ".xml";
  const canBeWide: boolean = hasWideScreenSupport && isWideScreen();

  /**
   * Warn about bad path in dev mode.
   */
  if (gameConfig.DEBUG.IS_ENABLED) {
    const [hasNonWindowsChars] = string.find(path, "/");

    if (hasNonWindowsChars !== null) {
      abort("Non-windows path for XML supplied:", path);
    }
  }

  const resolved: string = canBeWide && getFS().exist("$game_config$", "ui\\" + wideBase) ? wideBase : base + ".xml";

  logger.info("Resolved XML to:", resolved);

  return resolved;
}

export function setUiVisibility(isVisible: boolean): void {
  const hud: XR_CUIGameCustom = get_hud();
  const actor: XR_game_object = registry.actor;

  if (isVisible) {
    logger.info("[setUiVisibility] Showing UI");

    level.show_indicators();

    // --      db.actor:restore_weapon()

    actor.disable_hit_marks(false);
    hud.show_messages();
  } else {
    logger.info("[setUiVisibility] Hiding UI");

    if (actor.is_talking()) {
      actor.stop_talk();
    }

    level.hide_indicators_safe();

    hud.HideActorMenu();
    hud.HidePdaMenu();
    hud.hide_messages();

    // --      db.actor:hide_weapon()

    actor.disable_hit_marks(true);
  }

  logger.info("[setUiVisibility] Completed");
}
