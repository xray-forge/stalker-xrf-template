import * as fs from "fs/promises";
import * as path from "path";

import { default as chalk } from "chalk";

import { default as config } from "#/config.json";
import {
  CLI_CONFIG,
  CLI_DIR,
  GAME_BIN_JSON_PATH,
  GAME_BIN_PATH,
  GAME_EXE_PATH,
  GAME_GAMEDATA_PATH,
  GAME_LOGS_PATH,
  GAME_PATH,
  TARGET_GAME_DATA_DIR,
  TARGET_GAME_LINK_DIR,
  TARGET_LOGS_LINK_DIR,
} from "#/globals/paths";
import { exists, NodeLogger } from "#/utils";

const log: NodeLogger = new NodeLogger("VERIFY");

/**
 * Verify project setup and configuration.
 */
export async function verify(): Promise<void> {
  log.info("Verifying project state");

  try {
    await verifyConfig();
    await verifyGamePath();
    await verifyGameLink();
    await verifyGameEngine();
    await verifyGamedataLink();
    await verifyLogsLink();
    await verifyAssets();
  } catch (error) {
    log.error("Verification failed:", chalk.red(error.message));
  }
}

/**
 * Verify if project config exists.
 */
async function verifyConfig(): Promise<void> {
  if (await exists(CLI_CONFIG)) {
    log.info("Project cli/config.json:", chalk.greenBright("OK"));
  } else {
    log.warn(chalk.yellow("Config not found in cli/config.json:"), chalk.yellow(CLI_CONFIG));
  }
}

/**
 * Verify if project game path exists and is correct.
 */
async function verifyGamePath(): Promise<void> {
  if (await exists(GAME_PATH)) {
    log.info("Game folder:", chalk.greenBright("OK"));
  } else {
    log.warn(chalk.yellow("Game folder is not linked, set path in cli/config.json:"), chalk.yellow(GAME_PATH));
  }

  if (await exists(GAME_EXE_PATH)) {
    log.info("Game folder:", chalk.greenBright("OK"));
  } else {
    log.warn(chalk.yellow("Game folder is not linked, set path in cli/config.json:"), chalk.yellow(GAME_PATH));
  }
}

/**
 * Check if game is linked in gamedata.
 */
async function verifyGameLink(): Promise<void> {
  if (await exists(TARGET_GAME_LINK_DIR)) {
    log.info("Game link:", chalk.greenBright("OK"));
  } else {
    log.warn("Game link:", chalk.yellow("FAIL"));
  }
}

/**
 * Check if game assets are linked and extended
 */
async function verifyAssets(): Promise<void> {
  const baseResourcesPath: string = config.resources.mod_assets_base_folder;

  if (await exists(path.resolve(CLI_DIR, config.resources.mod_assets_base_folder))) {
    log.info("Base game resources:", chalk.yellowBright(baseResourcesPath), chalk.greenBright("OK"));
  } else {
    log.warn("Base game resources:", chalk.yellowBright(baseResourcesPath), chalk.yellow("FAIL"), "(issues possible)");
  }

  for (const entry of config.resources.mod_assets_override_folders) {
    if (await exists(path.resolve(CLI_DIR, entry))) {
      log.info("Override resources:", chalk.yellowBright(entry), chalk.greenBright("OK"));
    } else {
      log.warn("Override resources:", chalk.yellowBright(entry), chalk.yellow("FAIL"), "(packaging issues possible)");
    }
  }

  for (const entry of config.resources.mod_assets_locales[config.locale]) {
    if (await exists(path.resolve(CLI_DIR, entry))) {
      log.info("Locale resources:", chalk.yellowBright(entry), chalk.greenBright("OK"));
    } else {
      log.warn("Locale resources:", chalk.yellowBright(entry), chalk.yellow("FAIL"), "(packaging issues possible)");
    }
  }
}

/**
 * Check if any custom engine is used.
 */
async function verifyGameEngine(): Promise<void> {
  const isGameDirPresent: boolean = await exists(GAME_PATH);
  const isBinDirPresent: boolean = await exists(GAME_BIN_PATH);
  const isBinCorrectlyProvided: boolean = await exists(GAME_BIN_JSON_PATH);

  if (isGameDirPresent && isBinDirPresent && isBinCorrectlyProvided) {
    log.info("Game engine link:", chalk.greenBright("OK"));
  } else {
    if (!isBinDirPresent) {
      log.warn(
        chalk.yellow("Game bin folder does not exist, it was corrupted or incorrect path set in cli/config.json:"),
        chalk.yellow(GAME_BIN_PATH)
      );
    } else {
      log.warn(chalk.yellow("Open x-ray engine expected, using original in:"), chalk.yellow(GAME_BIN_PATH));
    }
  }
}

/**
 * Check if gamedata folders are linked.
 */
async function verifyGamedataLink(): Promise<void> {
  try {
    const linkPath: string = await fs.readlink(GAME_GAMEDATA_PATH);

    if (path.resolve(linkPath) === TARGET_GAME_DATA_DIR) {
      log.info("Gamedata link:", chalk.greenBright("OK"));
    } else {
      log.warn("Gamedata link points to unexpected place:", chalk.yellow(linkPath));
    }
  } catch (error) {
    log.info("Gamedata link:", chalk.yellow("FAIL"));
  }
}

/**
 * Check if logs folders are linked.
 */
async function verifyLogsLink(): Promise<void> {
  try {
    const linkPath: string = await fs.readlink(TARGET_LOGS_LINK_DIR);

    if (path.resolve(linkPath) === GAME_LOGS_PATH) {
      log.info("Logs link:", chalk.greenBright("OK"));
    } else {
      log.warn("Logs link points to unexpected place:", chalk.yellow(linkPath));
    }
  } catch (error) {
    log.info("Logs link:", chalk.yellow("FAIL"));
  }
}
