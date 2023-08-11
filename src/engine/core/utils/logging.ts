import { log, print_stack, time_global } from "xray16";

import { toJSON } from "@/engine/core/utils/transform/json";
import { gameConfig } from "@/engine/lib/configs/GameConfig";
import { FALSE, NIL, TRUE } from "@/engine/lib/constants/words";
import { AnyArgs, AnyObject, TLabel } from "@/engine/lib/types";

/**
 * Lua logger class.
 * Stores prefix, enabled-disabled flags and uses shared statics to print data.
 *
 * Note: if building in optimized mode, game logging is stripped from lua scripts and does not make it to the code.
 */
export class LuaLogger {
  public readonly prefix: TLabel;
  public isEnabled: boolean;

  public constructor(prefix: TLabel, isEnabled: boolean = true) {
    this.isEnabled = isEnabled;
    this.prefix = string.format("[%s]", prefix);

    if (gameConfig.DEBUG.IS_RESOLVE_LOG_ENABLED) {
      this.info("Declared logger: '" + prefix + "'");
    }
  }

  /**
   * Print warn info level message.
   */
  public warn(...args: AnyArgs): void {
    if (gameConfig.DEBUG.IS_LOG_ENABLED && this.isEnabled) {
      this.logAs("[warn]", this.prefix, $fromArray(args));
    }
  }

  /**
   * Print generic info level message.
   */
  public info(...args: AnyArgs): void {
    if (gameConfig.DEBUG.IS_LOG_ENABLED && this.isEnabled) {
      this.logAs("[info]", this.prefix, $fromArray(args));
    }
  }

  /**
   * Print generic info level message.
   */
  public format(base: string, ...args: AnyArgs): void {
    if (gameConfig.DEBUG.IS_LOG_ENABLED && this.isEnabled) {
      this.logAs("[info]", this.prefix, $fromArray([string.format(base, ...args)]));
    }
  }

  /**
   * Print generic error level message.
   */
  public error(...args: AnyArgs): void {
    if (gameConfig.DEBUG.IS_LOG_ENABLED && this.isEnabled) {
      this.logAs("[error]", this.prefix, $fromArray(args));
    }
  }

  /**
   * Print stringified as JSON table into logs file.
   */
  public table(table: AnyObject): void;
  public table(table: LuaTable): void {
    if (gameConfig.DEBUG.IS_LOG_ENABLED && this.isEnabled) {
      this.logAs("[table]", this.prefix, $fromArray([toJSON(table)]));
    }
  }

  /**
   * Push empty line in logs for readability.
   */
  public pushEmptyLine(): void {
    return this.info(" ");
  }

  /**
   * Push line separator in logs for readability.
   */
  public pushSeparator(): void {
    return this.info("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
  }

  /**
   * Print current lua call stack in game logs.
   */
  public printStack(): void {
    return print_stack();
  }

  /**
   * Get full string prefix for current logger instance.
   */
  public getFullPrefix(): TLabel {
    return string.format("[%s]%s", time_global(), this.prefix);
  }

  /**
   * Print generic message with provided level of logging and configured prefix.
   */
  public logAs(level: string, prefix: string, args: LuaTable<number>): void {
    // Map some values to successfully print in composed string.
    for (const idx of $range(1, args.length())) {
      const it = args.get(idx);
      const itType = type(it);

      if (itType === NIL) {
        args.set(idx, "<nil>");
      } else if (itType === "string") {
        args.set(idx, it === "" ? "<empty_str>" : it);
      } else if (itType === "number") {
        args.set(idx, it);
      } else if (itType === "boolean") {
        args.set(idx, string.format("<boolean: %s>", it === true ? TRUE : FALSE));
      } else {
        args.set(idx, string.format("<%s: %s>", itType, tostring(it)));
      }
    }

    return log(string.format("[%s]%s%s %s", time_global(), prefix, level, table.concat(args, " ")));
  }
}
