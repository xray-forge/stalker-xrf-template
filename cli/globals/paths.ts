import * as path from "path";

import { default as config } from "#/config.json";

export const XR_ENGINE_BACKUP_DIR: string = "bin_xrf_backup";

export const ROOT_DIR: string = path.resolve(__dirname, "../..");
export const CLI_DIR: string = path.resolve(ROOT_DIR, "cli");
export const BIN_DIR: string = path.resolve(CLI_DIR, "bin");

export const OPEN_XRAY_ENGINES_DIR: string = path.resolve(BIN_DIR, "engines");
export const BUILD_LUA_TSCONFIG: string = path.resolve(CLI_DIR, "build/tsconfig.scripts.json");
export const CLI_CONFIG: string = path.resolve(CLI_DIR, "config.json");

export const GAME_DATA_LTX_CONFIGS_DIR: string = path.resolve(CLI_DIR, config.build.configs);
export const GAME_DATA_SCRIPTS_DIR: string = path.resolve(CLI_DIR, config.build.scripts);
export const GAME_DATA_TRANSLATIONS_DIR: string = path.resolve(CLI_DIR, config.build.translations);
export const GAME_DATA_UI_DIR: string = path.resolve(CLI_DIR, config.build.ui);

export const TARGET_DIR: string = path.resolve(CLI_DIR, config.build.target);
export const TARGET_GAME_DATA_DIR: string = path.resolve(TARGET_DIR, "gamedata");
export const TARGET_GAME_DATA_METADATA_FILE: string = path.resolve(TARGET_GAME_DATA_DIR, "metadata.json");
export const TARGET_GAME_DATA_CONFIGS_DIR: string = path.resolve(TARGET_GAME_DATA_DIR, "configs");
export const TARGET_GAME_DATA_UI_DIR: string = path.resolve(TARGET_GAME_DATA_CONFIGS_DIR, "ui");
export const TARGET_GAME_DATA_TRANSLATIONS_DIR: string = path.resolve(TARGET_GAME_DATA_CONFIGS_DIR, "text");

export const TARGET_LOGS_LINK_DIR: string = path.resolve(TARGET_DIR, "logs_link");
export const TARGET_GAME_LINK_DIR: string = path.resolve(TARGET_DIR, "game_link");
export const TARGET_PARSED_DIR: string = path.resolve(TARGET_DIR, "parsed");
export const TARGET_DATABASE_DIR: string = path.resolve(TARGET_DIR, "db");
export const TARGET_LOGS_DIR: string = path.resolve(TARGET_DIR, "logs");
export const TARGET_GAME_PACKAGE_DIR: string = path.resolve(TARGET_DIR, "game_package");
export const TARGET_MOD_PACKAGE_DIR: string = path.resolve(TARGET_DIR, "mod_package");

export const TARGET_PREVIEW_DIR: string = path.resolve(TARGET_DIR, "preview");

export const XR_COMPRESS_PATH: string = path.resolve(CLI_DIR, config.compression.xr_compress_path);
