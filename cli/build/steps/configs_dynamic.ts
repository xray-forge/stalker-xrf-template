import * as fsPromises from "fs/promises";
import * as path from "path";

import { default as chalk } from "chalk";

import { Optional, TFolderFiles, TFolderReplicationDescriptor } from "@/mod/lib/types";

import { GAME_DATA_CONFIGS_DIR, TARGET_GAME_DATA_CONFIGS_DIR } from "#/globals";
import { createDirForConfigs, ILtxConfigDescriptor, NodeLogger, readDirContent, renderJsonToLtx } from "#/utils";

const log: NodeLogger = new NodeLogger("BUILD_CONFIGS_DYNAMIC");
const EXPECTED_DYNAMIC_XML_EXTENSIONS: Array<string> = [".ts"];

// todo: TS to ltx files transformer build
export async function buildDynamicConfigs(): Promise<void> {
  log.info(chalk.blueBright("Build dynamic configs"));

  const ltxConfigs: Array<TFolderReplicationDescriptor> = await getLtxConfigs();

  if (ltxConfigs.length > 0) {
    log.info("Found dynamic LTX configs");

    let processedXmlConfigs: number = 0;
    let skippedXmlConfigs: number = 0;

    createDirForConfigs(ltxConfigs, log);

    await Promise.all(
      ltxConfigs.map(async ([from, to]) => {
        const ltxSource = await import(from);
        const ltxContent: Optional<ILtxConfigDescriptor> =
          ltxSource?.IS_LTX && (typeof ltxSource?.create === "function" ? ltxSource?.create() : ltxSource?.config);

        if (ltxContent) {
          log.debug("TRANSFORM:", chalk.blue(to));

          const filename: string = path.parse(to).base;

          await fsPromises.writeFile(to, renderJsonToLtx(filename, ltxContent));
          processedXmlConfigs += 1;
        } else {
          log.debug("SKIP, not valid LTX source:", chalk.blue(from));
          skippedXmlConfigs += 1;
        }
      })
    );

    log.info("TSX files processed:", processedXmlConfigs);
    log.info("TSX files skipped:", skippedXmlConfigs);
  } else {
    log.info("No dynamic LTX configs found");
  }
}

/**
 * todo;
 */
async function getLtxConfigs(): Promise<Array<TFolderReplicationDescriptor>> {
  function collectLtxConfigs(
    acc: Array<TFolderReplicationDescriptor>,
    it: TFolderFiles
  ): Array<TFolderReplicationDescriptor> {
    if (Array.isArray(it)) {
      it.forEach((nested) => collectLtxConfigs(acc, nested));
    } else if (EXPECTED_DYNAMIC_XML_EXTENSIONS.includes(path.extname(it))) {
      const to: string = it.slice(GAME_DATA_CONFIGS_DIR.length).replace(/\.[^/.]+$/, "") + ".ltx";

      acc.push([it, path.join(TARGET_GAME_DATA_CONFIGS_DIR, to)]);
    }

    return acc;
  }

  return (await readDirContent(GAME_DATA_CONFIGS_DIR)).reduce(collectLtxConfigs, []);
}
