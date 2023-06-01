import * as fs from "fs";
import * as fsPromises from "fs/promises";
import * as path from "path";

import { default as chalk } from "chalk";

import { GAME_DATA_UI_DIR, TARGET_PREVIEW_DIR } from "#/globals/paths";
import { generateHTMLPreviewFromXMLString } from "#/preview/utils/generate_preview";
import {
  NodeLogger,
  readDirContent,
  renderJsxToXmlText,
  TFolderFiles,
  TFolderReplicationDescriptor,
  TimeTracker,
} from "#/utils";

const EXPECTED_XML_EXTENSIONS: Array<string> = [".tsx", ".xml"];
const log: NodeLogger = new NodeLogger("PREVIEW");

interface IGeneratePreviewCommandParameters {
  clean?: boolean;
  verbose?: boolean;
}

/**
 * Generate HTML previews from game XML forms for browser preview.
 */
export async function generatePreview(
  filters: Array<string>,
  parameters: IGeneratePreviewCommandParameters
): Promise<void> {
  const timeTracker: TimeTracker = new TimeTracker().start();

  NodeLogger.IS_VERBOSE = parameters.verbose === true;

  log.info("Compiling preview files");

  if (parameters.clean) {
    log.info("Clean destination:", chalk.yellow(TARGET_PREVIEW_DIR));
    fs.rmSync(TARGET_PREVIEW_DIR, { recursive: true, force: true });
  }

  if (filters.length) {
    log.info("Using filters:", filters);
  }

  const xmlConfigs: Array<TFolderReplicationDescriptor> = await getUiConfigs(filters);

  if (xmlConfigs.length > 0) {
    log.info("Found XML configs");

    createFoldersForConfigs(xmlConfigs);

    await Promise.all(
      xmlConfigs.map(async ([from, to]) => {
        if (from.endsWith(".tsx")) {
          const xmlSource = await import(from);
          const jsxContent =
            from.endsWith(".tsx") &&
            typeof xmlSource?.create === "function" &&
            xmlSource?.IS_XML &&
            xmlSource?.create();

          if (jsxContent) {
            log.debug("COMPILE JSX:", chalk.blue(to));
            await fsPromises.writeFile(to, generateHTMLPreviewFromXMLString(renderJsxToXmlText(jsxContent)));
          } else {
            log.debug("SKIP, not valid source:", chalk.blue(from));
          }
        } else {
          const content: ArrayBuffer = await fsPromises.readFile(from);

          log.debug("COMPILE XML:", chalk.blue(to));

          await fsPromises.writeFile(to, generateHTMLPreviewFromXMLString(content.toString()));
        }
      })
    );

    log.info("TSX files processed:", xmlConfigs.length);
  } else {
    log.info("No TSX configs found");
  }

  timeTracker.end();
  log.info("Preview compilation took:", timeTracker.getDuration() / 1000, "SEC");
}

/**
 * Sync way for folder creation when needed.
 */
function createFoldersForConfigs(xmlConfigs: Array<TFolderReplicationDescriptor>): void {
  xmlConfigs.forEach(([, to]) => {
    const targetDir: string = path.dirname(to);

    if (!fs.existsSync(targetDir)) {
      log.debug("MKDIR:", chalk.blueBright(targetDir));
      fs.mkdirSync(targetDir, { recursive: true });
    }
  });
}

async function getUiConfigs(filters: Array<string> = []): Promise<Array<TFolderReplicationDescriptor>> {
  function collectXmlConfigs(
    acc: Array<TFolderReplicationDescriptor>,
    it: TFolderFiles
  ): Array<TFolderReplicationDescriptor> {
    if (Array.isArray(it)) {
      it.forEach((nested) => collectXmlConfigs(acc, nested));
    } else if (EXPECTED_XML_EXTENSIONS.includes(path.extname(it))) {
      const to: string = it.slice(GAME_DATA_UI_DIR.length).replace(/\.[^/.]+$/, "") + ".html";

      if (!filters.length || filters.some((filter) => it.match(filter))) {
        acc.push([it, path.join(TARGET_PREVIEW_DIR, to)]);
      }
    }

    return acc;
  }

  return (await readDirContent(GAME_DATA_UI_DIR)).reduce(collectXmlConfigs, []);
}
