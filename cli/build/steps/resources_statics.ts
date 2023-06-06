import * as fs from "fs";
import * as fsp from "fs/promises";
import * as path from "path";

import { blueBright, yellowBright } from "chalk";

import { IBuildCommandParameters } from "#/build/build";
import { default as config } from "#/config.json";
import { CLI_DIR, TARGET_GAME_DATA_DIR } from "#/globals/paths";
import { getDiffs, NodeLogger, normalizeParameterPath, readFolderGen } from "#/utils";

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

  const resourceFolders: Array<string> = [configuredDefaultPath, ...configuredTargetPath].filter((it) => {
    log.debug("Resources folder candidate check:", yellowBright(it));

    return fs.existsSync(it);
  });

  if (resourceFolders.length) {
    log.info("Process folders with resources:", resourceFolders.length);

    for (const folderPath of resourceFolders) {
      const sourcePaths = await validateResources(folderPath);

      for (const sourcePath of sourcePaths) {
        const relativePath = sourcePath.slice(folderPath.length);
        const targetDir = path.join(TARGET_GAME_DATA_DIR, relativePath);

        await copyStaticResources(sourcePath, targetDir);
      }
    }
  } else {
    log.info("No resources sources found");
  }
}

async function validateResources(folderPath: string): Promise<string[]> {
  const dirents = await fsp.readdir(folderPath, { withFileTypes: true });
  const allowFiles = (dirent: fs.Dirent) => {
    const name = dirent.name;

    if (dirent.isDirectory()) {
      // Do not allow copy of folders that overlap with auto-generated code.
      if (UNEXPECTED_DIRECTORIES.includes(name)) {
        throw new Error("Provided not expected directory for resources copy.");
      }

      // Do not copy hidden folders.
      if (name.startsWith(".")) {
        return null;
      }

      return path.join(folderPath, name);
    }

    if (!GENERIC_FILES.includes(name)) {
      return path.join(folderPath, name);
    }

    return null;
  };

  return dirents.map(allowFiles).filter(Boolean);
}

/**
 * Copy provided assets directory resources if directory exists.
 */
async function copyStaticResources(from: string, to: string): Promise<void> {
  log.info("Copy raw assets from:", yellowBright(from), "=>", yellowBright(to));

  const diffs = await getDiffs(from, to);
  const prefixLen = from.length + path.sep.length;
  const additions = new Set(diffs.additions.files.map(path.normalize));

  for await (const filePath of readFolderGen(from)) {
    const relPath = filePath.slice(prefixLen);
    const fromFile = path.join(from, relPath);
    const toFile = path.join(to, relPath);

    if (additions.has(relPath)) {
      await fsp.cp(fromFile, toFile);
    }
  }
}
