import {
  bit_or,
  CSavedGameWrapper,
  FS,
  game,
  get_console,
  getFS,
  IsImportantSave,
  TXR_net_processor,
  user_name,
  XR_CSavedGameWrapper,
  XR_FS,
  XR_FS_file_list_ex,
  XR_net_packet,
} from "xray16";

import { gameConfig } from "@/mod/lib/configs/GameConfig";
import { Optional, TName } from "@/mod/lib/types";
import { registry } from "@/mod/scripts/core/database";
import { abort } from "@/mod/scripts/utils/debug";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("game_saves");

/**
 * todo
 */
export function fileExists(folderAlias: string, filename: string): boolean {
  return getFS().exist(folderAlias, filename) !== null;
}

/**
 * todo
 */
export function isGameSaveFileExist(filename: string): boolean {
  const fs: XR_FS = getFS();
  const flist: XR_FS_file_list_ex = fs.file_list_open_ex(
    "$game_saves$",
    bit_or(FS.FS_ListFiles, FS.FS_RootOnly),
    filename
  );

  return flist.Size() > 0;
}

/**
 * todo
 */
export function deleteGameSave(filename: string): void {
  const save_file: string = filename + gameConfig.GAME_SAVE_EXTENSION;
  const dds_file: string = filename + ".dds";

  const fs: XR_FS = getFS();

  fs.file_delete("$game_saves$", save_file);

  if (isGameSaveFileExist(dds_file)) {
    fs.file_delete("$game_saves$", dds_file);
  }
}

/**
 * todo
 */
function AddTimeDigit(str: string, dig: number): string {
  if (dig > 9) {
    return str + dig;
  } else {
    return str + "0" + dig;
  }
}

/**
 * todo
 */
export function gatFileDataForGameSave(filename: string) {
  const fs: XR_FS = getFS();
  const flist: XR_FS_file_list_ex = fs.file_list_open_ex(
    "$game_saves$",
    bit_or(FS.FS_ListFiles, FS.FS_RootOnly),
    filename + gameConfig.GAME_SAVE_EXTENSION
  );
  const filesCount: number = flist.Size();

  if (filesCount > 0) {
    const sg: XR_CSavedGameWrapper = new CSavedGameWrapper(filename);
    const [y, m, d, h, min] = sg.game_time().get(0, 0, 0, 0, 0, 0, 0);

    let date_time = "";

    date_time = AddTimeDigit(date_time, h);
    date_time = date_time + ":";
    date_time = AddTimeDigit(date_time, min);
    date_time = date_time + " ";
    date_time = AddTimeDigit(date_time, m);
    date_time = date_time + "/";
    date_time = AddTimeDigit(date_time, d);
    date_time = date_time + "/";
    date_time = date_time + y;

    // --string.format("[%d/%d/%d %d]",m,d,h,min,y)
    const health = string.format(
      "\\n%s %d%s",
      game.translate_string("st_ui_health_sensor"),
      sg.actor_health() * 100,
      "%"
    );

    return (
      game.translate_string("st_level") +
      ": " +
      game.translate_string(sg.level_name()) +
      "\\n" +
      game.translate_string("ui_inv_time") +
      ": " +
      date_time +
      health
    );
  } else {
    return "no file data";
  }
}

/**
 * todo
 */
export function setSaveMarker(packet: XR_net_packet, check: boolean, prefix: TName): void {
  const result: TName = "_" + prefix;

  if (check) {
    if (registry.saveMarkers.get(result) === null) {
      abort("Trying to check without marker: " + result);
    }

    const dif = packet.w_tell() - registry.saveMarkers.get(result);

    // log.info("Set save marker result:", result, dif, mode);

    if (dif >= 8000) {
      logger.info("Saving more than 8000:", prefix, dif);
      // printf("WARNING! may be this is problem save point")
    }

    if (dif >= 10240) {
      logger.info("Saving more than 10240:", prefix, dif);
      // --        abort("You are saving too much")
    }

    packet.w_u16(dif);

    return;
  } else {
    // log.info("Set save marker result:", result, p.w_tell(), mode);
    registry.saveMarkers.set(result, packet.w_tell());

    if (packet.w_tell() > 16_000) {
      abort("You are saving too much in %s", prefix);
    }
  }
}

/**
 * todo
 */
export function setLoadMarker(reader: TXR_net_processor, check: boolean, prefix: TName): void {
  const result: TName = "_" + prefix;

  if (check) {
    if (registry.saveMarkers.get(result) === null) {
      abort("Trying to check without marker: " + result);
    }

    const c_dif: number = reader.r_tell() - registry.saveMarkers.get(result);
    const dif: number = reader.r_u16();

    if (dif !== c_dif) {
      abort("INCORRECT LOAD [%s].[%s][%s]", result, dif, c_dif);
    } else {
      // log.info("Set save marker result:", result, dif, mode);
    }
  } else {
    // log.info("Set save marker result:", result, p.r_tell(), mode);
    registry.saveMarkers.set(result, reader.r_tell());
  }
}

/**
 * Save game on some scenario moments automatically.
 * @param saveName - name of the file / record to save, will be translated.
 */
export function createScenarioAutoSave(saveName: Optional<string>): void {
  if (saveName === null) {
    abort("You are trying to use scenario_autosave without save name.");
  }

  if (IsImportantSave()) {
    logger.info("Performing auto-save, detected as important:", saveName);
    get_console().execute("save " + user_name() + " - " + game.translate_string(saveName));
  } else {
    logger.info("Not important save, skip.", saveName);
  }
}
