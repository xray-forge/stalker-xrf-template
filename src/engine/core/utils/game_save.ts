import {
  bit_or,
  CSavedGameWrapper,
  FS,
  game,
  getFS,
  IsImportantSave,
  user_name,
  XR_CSavedGameWrapper,
  XR_FS,
  XR_FS_file_list_ex,
} from "xray16";

import { assert } from "@/engine/core/utils/assertion";
import { executeConsoleCommand } from "@/engine/core/utils/console";
import { LuaLogger } from "@/engine/core/utils/logging";
import { gameConfig } from "@/engine/lib/configs/GameConfig";
import { captions } from "@/engine/lib/constants/captions";
import { consoleCommands } from "@/engine/lib/constants/console_commands";
import { roots } from "@/engine/lib/constants/roots";
import { Optional, TCount, TLabel, TName } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo
 */
export function isGameSaveFileExist(filename: TName): boolean {
  const filesList: XR_FS_file_list_ex = getFS().file_list_open_ex(
    roots.gameSaves,
    bit_or(FS.FS_ListFiles, FS.FS_RootOnly),
    filename
  );

  return filesList.Size() > 0;
}

/**
 * todo
 */
export function deleteGameSave(filename: TName): void {
  const saveFileName: TName = filename + gameConfig.GAME_SAVE_EXTENSION;
  const ddsFile: TName = filename + gameConfig.GAME_SAVE_PREVIEW_EXTENSION;

  const fs: XR_FS = getFS();

  fs.file_delete(roots.gameSaves, saveFileName);

  if (isGameSaveFileExist(ddsFile)) {
    fs.file_delete(roots.gameSaves, ddsFile);
  }
}

/**
 * todo
 */
function addTimeDigit(data: string, digit: number): string {
  return digit > 9 ? data + digit : data + "0" + digit;
}

/**
 * todo
 */
export function gatFileDataForGameSave(filename: TName): TLabel {
  const fs: XR_FS = getFS();
  const flist: XR_FS_file_list_ex = fs.file_list_open_ex(
    roots.gameSaves,
    bit_or(FS.FS_ListFiles, FS.FS_RootOnly),
    filename + gameConfig.GAME_SAVE_EXTENSION
  );
  const filesCount: TCount = flist.Size();

  if (filesCount > 0) {
    const savedGame: XR_CSavedGameWrapper = new CSavedGameWrapper(filename);
    const [y, m, d, h, min] = savedGame.game_time().get(0, 0, 0, 0, 0, 0, 0);

    let dateTime: TLabel = "";

    dateTime = addTimeDigit(dateTime, h);
    dateTime = dateTime + ":";
    dateTime = addTimeDigit(dateTime, min);
    dateTime = dateTime + " ";
    dateTime = addTimeDigit(dateTime, m);
    dateTime = dateTime + "/";
    dateTime = addTimeDigit(dateTime, d);
    dateTime = dateTime + "/";
    dateTime = dateTime + y;

    // --string.format("[%d/%d/%d %d]",m,d,h,min,y)
    const health = string.format(
      "\\n%s %d%s",
      game.translate_string(captions.st_ui_health_sensor),
      savedGame.actor_health() * 100,
      "%"
    );

    return (
      game.translate_string(captions.st_level) +
      ": " +
      game.translate_string(savedGame.level_name()) +
      "\\n" +
      game.translate_string(captions.ui_inv_time) +
      ": " +
      dateTime +
      health
    );
  } else {
    return "no file data";
  }
}

/**
 * Save game on some scenario moments automatically.
 *
 * @param saveName - name of the file / record to save
 * @param translate - whether name should be translated
 */
export function createAutoSave(saveName: Optional<TName>, translate: boolean = true): void {
  if (IsImportantSave()) {
    createSave(saveName, translate);
  } else {
    logger.info("Skip save, auto-saving is not turned on:", saveName);
  }
}

/**
 * Save game with provided parameters.
 *
 * @param saveName - name of the file / record to save
 * @param translate - whether name should be translated
 */
export function createSave(saveName: Optional<TName>, translate: boolean = true): void {
  assert(saveName, "You are trying to use scenario save without name.");

  const saveParameter: string = user_name() + " - " + (translate ? game.translate_string(saveName) : saveName);

  logger.info("Performing save:", saveParameter);
  executeConsoleCommand(consoleCommands.save, saveParameter);
}
