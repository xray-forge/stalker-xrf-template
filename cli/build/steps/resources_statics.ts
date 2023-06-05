import * as fs from "fs";
import * as fsPromises from "fs/promises";
import * as path from "path";

import { blueBright, yellow, yellowBright } from "chalk";

import { IBuildCommandParameters } from "#/build/build";
import { default as config } from "#/config.json";
import { CLI_DIR, TARGET_GAME_DATA_DIR } from "#/globals/paths";
import { NodeLogger, normalizeParameterPath } from "#/utils";

const log: NodeLogger = new NodeLogger("BUILD_ASSET_STATICS");

const GENERIC_FILES: Array<string> = ["README.md", "LICENSE", ".git", ".gitignore", ".gitattributes"];
const UNEXPECTED_DIRECTORIES: Array<string> = ["core", "configs", "forms,", "lib", "scripts"];

/**
 * Build mod statics from configured destinations.
 */
export async function buildResourcesStatics(parameters: IBuildCommandParameters): Promise<void> {
  log.info(blueBright("Build resources"));

  const configuredDefaultPath: string = path.resolve(
    CLI_DIR,
    normalizeParameterPath(config.resources.mod_assets_base_folder)
  );

  const configuredTargetPath: Array<string> = parameters.assetOverrides
    ? config.resources.mod_assets_override_folders.map((it) => path.resolve(CLI_DIR, normalizeParameterPath(it)))
    : [];

  if (parameters.assetOverrides && config.resources.mod_assets_locales[config.locale]) {
    config.resources.mod_assets_locales[config.locale].forEach((it) => {
      configuredTargetPath.push(path.resolve(CLI_DIR, normalizeParameterPath(it)));
    });
  } else {
    log.warn("No locale resources detected for current locale");
  }

  const folderToProcess: Array<string> = [configuredDefaultPath, ...configuredTargetPath].filter((it) => {
    log.debug("Resources folder candidate check:", yellowBright(it));

    return fs.existsSync(it);
  });

  if (folderToProcess.length) {
    log.info("Process folders with resources:", folderToProcess.length);

    for (const it of folderToProcess) {
      await copyStaticAssetsFromFolder(it);
    }
  } else {
    log.info("No resources sources found");
  }
}

/**
 * Copy provided assets directory resources if directory exists.
 */
async function copyStaticAssetsFromFolder(resourcesFolderPath: string): Promise<void> {
  log.info("Copy raw assets from:", yellowBright(resourcesFolderPath));

  const contentFolders: Array<string> = await Promise.all(
    (
      await fsPromises.readdir(resourcesFolderPath, { withFileTypes: true })
    )
      .map((dirent) => {
        if (dirent.isDirectory()) {
          // Do not allow copy of folders that overlap with auto-generated code.
          if (UNEXPECTED_DIRECTORIES.includes(dirent.name)) {
            throw new Error("Provided not expected directory for resources copy.");
            // Do not copy hidden folders.
          } else if (dirent.name.startsWith(".")) {
            return null;
          }

          return path.join(resourcesFolderPath, dirent.name);
        }

        if (!GENERIC_FILES.includes(dirent.name)) {
          return path.join(resourcesFolderPath, dirent.name);
        }

        return null;
      })
      .filter(Boolean)
  );

  /**
   * Copy recursively content.
   */
  await Promise.all(
    contentFolders.map(async (it) => {
      const relativePath: string = it.slice(resourcesFolderPath.length);
      const targetDir: string = path.join(TARGET_GAME_DATA_DIR, relativePath);

      log.debug("CP -R:", yellow(targetDir));

      return fsPromises.cp(it, targetDir, { recursive: true });
    })
  );

  log.info("Resource folders processed:", yellowBright(resourcesFolderPath), contentFolders.length);
}
