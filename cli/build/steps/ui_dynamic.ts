import * as fsPromises from "fs/promises";
import * as path from "path";

import { default as chalk } from "chalk";

import { GAME_DATA_UI_DIR, TARGET_GAME_DATA_UI_DIR } from "#/globals/paths";
import { createDirForConfigs, NodeLogger, readDirContent } from "#/utils";
import { renderJsxToXmlText } from "#/utils/xml";

import { TFolderFiles, TFolderReplicationDescriptor } from "@/engine/lib/types/general";

const log: NodeLogger = new NodeLogger("BUILD_UI_DYNAMIC");
const EXPECTED_DYNAMIC_XML_EXTENSIONS: Array<string> = [".tsx", ".ts"];

/**
 * Build XML game forms from JSX forms.
 */
export async function buildDynamicUi(): Promise<void> {
  log.info(chalk.blueBright("Build dynamic UI schemas"));

  const xmlConfigs: Array<TFolderReplicationDescriptor> = await getUiConfigs();

  if (xmlConfigs.length > 0) {
    log.info("Found dynamic XML configs");

    let processedXmlConfigs: number = 0;
    let skippedXmlConfigs: number = 0;

    createDirForConfigs(xmlConfigs, log);

    await Promise.all(
      xmlConfigs.map(async ([from, to]) => {
        const xmlSource = await import(from);
        const xmlContent = typeof xmlSource?.create === "function" && xmlSource?.IS_XML && xmlSource?.create();

        if (xmlContent) {
          log.debug("TRANSFORM:", chalk.blue(to));
          await fsPromises.writeFile(to, renderJsxToXmlText(xmlContent));
          processedXmlConfigs += 1;
        } else {
          log.debug("SKIP, not valid XML source:", chalk.blue(from));
          skippedXmlConfigs += 1;
        }
      })
    );

    log.info("TSX files processed:", processedXmlConfigs);
    log.info("TSX files skipped:", skippedXmlConfigs);
  } else {
    log.info("No dynamic UI typescript configs found");
  }
}

/**
 * Get list of UI config files in engine source files.
 */
async function getUiConfigs(): Promise<Array<TFolderReplicationDescriptor>> {
  function collectXmlConfigs(
    acc: Array<TFolderReplicationDescriptor>,
    it: TFolderFiles
  ): Array<TFolderReplicationDescriptor> {
    if (Array.isArray(it)) {
      it.forEach((nested) => collectXmlConfigs(acc, nested));
    } else if (EXPECTED_DYNAMIC_XML_EXTENSIONS.includes(path.extname(it))) {
      const to: string = it.slice(GAME_DATA_UI_DIR.length).replace(/\.[^/.]+$/, "") + ".xml";

      acc.push([it, path.join(TARGET_GAME_DATA_UI_DIR, to)]);
    }

    return acc;
  }

  return (await readDirContent(GAME_DATA_UI_DIR)).reduce(collectXmlConfigs, []);
}
