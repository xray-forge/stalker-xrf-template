import { Command } from "commander";

import { linkFolders } from "#/link/link";
import { relinkFolders } from "#/link/relink";
import { unlinkFolders } from "#/link/unlink";

/**
 * Setup link commands.
 */
export function setupLinkCommands(command: Command): void {
  command.command("link").description("link project folders").action(linkFolders);
  command.command("unlink").description("unlink project folders").action(unlinkFolders);
  command.command("relink").description("re-link project folders").action(relinkFolders);
}
