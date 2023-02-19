import { game, level, XR_game_object } from "xray16";

import { getActor, storage } from "@/mod/scripts/core/db";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("controls");

/**
 * todo;
 */
export function setInactiveInputTime(delta: number): void {
  const actor: XR_game_object = getActor() as XR_game_object;

  storage.get(actor.id()).disable_input_time = game.get_game_time();
  storage.get(actor.id()).disable_input_idle = delta;

  level.disable_input();
}
