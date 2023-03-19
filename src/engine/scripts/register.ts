import type { XR_object_factory } from "xray16";

import { AnyCallable } from "@/engine/lib/types";
import { extern } from "@/engine/scripts/utils/binding";
import { LuaLogger } from "@/engine/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger($filename);

/* eslint @typescript-eslint/no-var-requires: 0 */

/**
 * Register methods for game classes, objects and types.
 * Use dynamic imports to reduce pressure when engine tries to register all related class ids multiple times.
 */
extern("register", {
  /**
   * todo;
   */
  registerGameClasses: (factory: XR_object_factory): void => {
    (require("@/engine/scripts/declarations/register/class_registrator").registerGameClasses as AnyCallable)(factory);
  },
  /**
   * todo;
   */
  getGameClassId: (gameTypeOption: string, isServer: boolean): void => {
    (require("@/engine/scripts/declarations/register/game_registrator").getGameClassId as AnyCallable)(
      gameTypeOption,
      isServer
    );
  },
  /**
   * todo;
   */
  getUiClassId: (gameType: string): void => {
    (require("@/engine/scripts/declarations/register/ui_registrator").getUiClassId as AnyCallable)(gameType);
  },
});
