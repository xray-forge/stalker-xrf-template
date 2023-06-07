import * as fs from "fs";
import * as path from "path";

import { blueBright, yellowBright } from "chalk";
import { encode } from "iconv-lite";
import { JSXXML } from "jsx-xml";

import { default as config } from "#/config.json";
import { GAME_DATA_TRANSLATIONS_DIR, TARGET_GAME_DATA_TRANSLATIONS_DIR } from "#/globals/paths";
import {
  EAssetExtension,
  EEncoding,
  NodeLogger,
  quoted,
  readDirContent,
  renderJsxToXmlText,
  TFolderFiles,
  TFolderReplicationDescriptor,
} from "#/utils";

const log: NodeLogger = new NodeLogger("BUILD_TRANSLATIONS_DYNAMIC");

const EXPECTED_CONFIG_EXTENSIONS: Array<EAssetExtension> = [EAssetExtension.JSON];
const LOCALES_TO_PROCESS: Array<string> = config.available_locales;
const TARGET_ENCODING: EEncoding = EEncoding.WINDOWS_1251;

/**
 * Build different languages translations based on JSON files.
 */
export async function buildDynamicTranslations(): Promise<void> {
  log.info(blueBright("Build translations"));
  log.info("Target encoding:", yellowBright(TARGET_ENCODING));

  if (LOCALES_TO_PROCESS.length === 0) {
    return log.warn("No languages to translate found in config.json file, skip");
  }

  function collectTranslations(
    acc: Array<TFolderReplicationDescriptor>,
    it: TFolderFiles
  ): Array<TFolderReplicationDescriptor> {
    if (Array.isArray(it)) {
      it.forEach((nested) => collectTranslations(acc, nested));
    } else if (EXPECTED_CONFIG_EXTENSIONS.includes(path.extname(it) as EAssetExtension)) {
      const relativePath: string = it.slice(GAME_DATA_TRANSLATIONS_DIR.length);

      acc.push([it, path.join(TARGET_GAME_DATA_TRANSLATIONS_DIR, relativePath)]);
    }

    return acc;
  }

  const translationFiles: Array<TFolderReplicationDescriptor> = (
    await readDirContent(GAME_DATA_TRANSLATIONS_DIR)
  ).reduce(collectTranslations, []);

  if (translationFiles.length > 0) {
    log.info("Found json files:", translationFiles.length);

    /**
     * Sync way for folder creation when needed.
     */
    LOCALES_TO_PROCESS.forEach((locale: string) => {
      const targetDir: string = path.resolve(TARGET_GAME_DATA_TRANSLATIONS_DIR, locale);

      if (!fs.existsSync(targetDir)) {
        log.debug("MKDIR:", yellowBright(targetDir));
        fs.mkdirSync(targetDir, { recursive: true });
      }
    });

    await Promise.all(
      translationFiles.map((it) => {
        createJsonTranslationFiles(it);
      })
    );

    log.info("Files processed:", translationFiles.length);
    log.info("Languages processed:", LOCALES_TO_PROCESS.length);
  } else {
    log.info("No translations found");
  }
}

/**
 * Create XML translation files based on JSON for provided languages list.
 */
function createJsonTranslationFiles(descriptor: TFolderReplicationDescriptor): void {
  const [source] = descriptor;

  const comment: string = `<!-- Generated by xrf util at: ${new Date().toString()} --> \n\n`;
  const heading: string = `<?xml version=${quoted("1.0")} encoding="${TARGET_ENCODING}" ?>\n\n`;
  const filename: string = path.parse(source).name;

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const data = require(source);

  log.debug("Processing:", source);

  LOCALES_TO_PROCESS.forEach((locale) => {
    const targetFile: string = path.resolve(TARGET_GAME_DATA_TRANSLATIONS_DIR, locale, filename + EAssetExtension.XML);
    const targetData = JSXXML(
      "string_table",
      {},

      Object.entries(data).map(([key, value]) => {
        if (value[locale]) {
          const text: string = Array.isArray(value[locale]) ? value[locale].join("\\n") : value[locale];

          return JSXXML("string", { id: key }, JSXXML("text", {}, text));
        } else {
          return null;
        }
      })
    );

    log.debug("Creating resulting translation:", targetFile);

    fs.writeFileSync(targetFile, encode(renderJsxToXmlText(targetData, heading + comment), TARGET_ENCODING));
  });
}
