import { profile_timer, XR_profile_timer } from "xray16";

import { AbstractCoreManager } from "@/engine/core/managers/AbstractCoreManager";
import { abort } from "@/engine/core/utils/assertion";
import { executeConsoleCommand } from "@/engine/core/utils/console";
import { LuaLogger } from "@/engine/core/utils/logging";
import { gameConfig } from "@/engine/lib/configs/GameConfig";
import { console_commands } from "@/engine/lib/constants/console_commands";
import { AnyCallable, Optional, TCount } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

export interface IProfileSnapshotDescriptor {
  count: number;
  currentTimer: XR_profile_timer;
  childTimer: XR_profile_timer;
}

/**
 * todo;
 */
export class ProfilingManager extends AbstractCoreManager {
  public countersMap: LuaTable<AnyCallable, IProfileSnapshotDescriptor> = new LuaTable();
  public namesMap: LuaTable<AnyCallable, debug.FunctionInfo> = new LuaTable();
  public callsCountMap: LuaTable<AnyCallable, { info: debug.FunctionInfo; count: number }> = new LuaTable();

  public profilingTimer = new profile_timer();
  public isProfilingStarted: boolean = false;

  /**
   * todo: fix xray profiling
   * c - call statements profiling, currently will not work with x-ray for some reasons.
   * r - return statements profiling to count function returns.
   */
  public mode: string = "r";

  /**
   * Initialize profiling manager automatically based on set preferences.
   * Print warnings about state of 'debug', 'jit' and profiling.
   */
  public override initialize(): void {
    if (!gameConfig.DEBUG.IS_PROFILING_ENABLED) {
      return;
    }

    logger.info("Initialize profiling manager in mode:", this.mode);

    if (jit !== null) {
      logger.warn("Take care, jit is enabled so profiling stats may be incorrect");
      logger.warn("For correct profiling run game with '-nojit' flag");
    }

    // Ensure all conditions for profiling start are met
    if (debug !== null) {
      logger.info("Profiling enabled, JIT disabled, going to setup hook");
      this.setupHook();
    } else {
      logger.info("Debug is not enabled, skip profiling");
    }
  }

  /**
   * Destroy manager - clear data and bound hooks.
   */
  public override destroy(): void {
    this.clear();
  }

  /**
   * todo: Description.
   */
  public collectLuaGarbage(): void {
    collectgarbage("collect");
  }

  /**
   * todo: Description.
   */
  public getLuaMemoryUsed(): TCount {
    return collectgarbage("count");
  }
  /**
   * todo: Description.
   */
  public getFunctionName(info: debug.FunctionInfo): string {
    return string.format("[%s]:%s (%s:%s)", info.short_src, info.linedefined, info.what, info.name);
  }

  /**
   * Reset stats and clear hook if it is enabled.
   */
  public clear(): void {
    if (this.isProfilingStarted === true) {
      this.clearHook();
    }

    this.callsCountMap = new LuaTable();
    this.countersMap = new LuaTable();
    this.namesMap = new LuaTable();
    this.profilingTimer = new profile_timer();
  }

  /**
   * Print calls measurement stats.
   */
  public logCallsCountStats(limit: TCount = 64): void {
    if (!this.isProfilingStarted) {
      return logger.warn("Profiler hook wasn't setup, no stats found");
    }

    this.clearHook();

    const sortedStats: LuaTable<string, number> = new LuaTable();

    for (const [func, funcDetails] of this.callsCountMap) {
      const name = this.getFunctionName(funcDetails.info);
      const count: Optional<number> = sortedStats.get(name);

      sortedStats.set(name, count === null ? funcDetails.count : count + funcDetails.count);
    }

    let totalCallsCount: number = 0;
    const outStats: LuaTable<number, { name: string; count: number }> = new LuaTable();

    for (const [name, count] of sortedStats) {
      table.insert(outStats, { name: name === "[[C]]:-1" ? "#uncrecognized C/C++ stuff" : name, count: count });
      totalCallsCount = totalCallsCount + count;
    }

    table.sort(outStats, (left, right) => left.count > right.count);

    /**
     * Print summary of profiled calls count data:
     */

    logger.pushEmptyLine();
    logger.info("==================================================================================================");
    logger.info("Total calls stat, limit:", limit, "JIT:", jit !== null);
    logger.info("==================================================================================================");

    let printedCount: TCount = 0;

    // Print top stats from list (controlled by limit)
    for (const [idx, stat] of outStats) {
      if (printedCount <= limit) {
        logger.info(
          string.format("[%2d] %6d (%5.2f%%) : %s", idx, stat.count, (stat.count * 100) / totalCallsCount, stat.name)
        );
        printedCount++;
      } else {
        break;
      }
    }

    logger.info("==================================================================================================");
    logger.info("Total function calls count:", totalCallsCount);
    logger.info("Total function calls / sec:", totalCallsCount / (this.profilingTimer.time() / 1000 / 1000));
    logger.info("Total unique LUA functions called:", outStats.length());
    logger.info("Profiling time:", this.profilingTimer.time() / 1000);
    logger.info("RAM used:", this.getLuaMemoryUsed() / 1024, "MB");
    logger.info("==================================================================================================");
    logger.pushEmptyLine();

    executeConsoleCommand(console_commands.flush);

    this.setupHook(this.mode, true);
  }

  /**
   * todo: Description.
   */
  public setupHook(mode: string = this.mode, skipLogs?: boolean): void {
    this.mode = mode;

    if (this.isProfilingStarted === true) {
      logger.info("Skip setup, already started");

      return;
    } else if (!debug) {
      logger.warn("Tried to setup hook, but debug is not enabled");
      abort("Tried to setup hook when debug is not enabled, got 'null' at debug place.");
    }

    this.profilingTimer.start();

    debug.sethook();
    debug.sethook((context, lineNumber) => this.hook(context, lineNumber), this.mode);

    this.isProfilingStarted = true;

    if (!skipLogs) {
      logger.info("Profiler is activated");
    }
  }

  /**
   * todo: Description.
   */
  public clearHook(): void {
    if (this.isProfilingStarted === false) {
      logger.info("Profiler hook wasn't setup!");

      return;
    }

    debug.sethook();

    this.profilingTimer.stop();
    this.isProfilingStarted = false;
  }

  /**
   * todo: Description.
   */
  protected hook(context: string, line_number?: number): void {
    const caller = debug.getinfo(3, "f")!;
    const functionInfo: debug.FunctionInfo = debug.getinfo(2)!;
    const functionRef: AnyCallable = functionInfo.func! as AnyCallable;
    const callerRef: Optional<AnyCallable> = caller === null ? null : (caller.func! as AnyCallable);

    switch (context) {
      case "return": {
        const countersRecord = this.countersMap.get(functionRef);

        if (countersRecord !== null) {
          countersRecord.currentTimer.stop();
          countersRecord.childTimer.stop();

          if (callerRef !== null) {
            const object = this.countersMap.get(callerRef);

            if (object !== null) {
              object.currentTimer.start();
            }
          }
        }

        // Count number of returns from function.
        const record = this.callsCountMap.get(functionRef) || { count: 0, info: functionInfo };

        record.count += 1;
        this.callsCountMap.set(functionRef, record);

        return;
      }

      case "tail return": {
        if (callerRef !== null) {
          const object = this.countersMap.get(callerRef);

          if (object !== null) {
            object.currentTimer.start();
          }
        }

        // Count number of returns from function.
        const record = this.callsCountMap.get(functionRef) || { count: 0, info: functionInfo };

        record.count += 1;
        this.callsCountMap.set(functionRef, record);

        return;
      }

      case "call": {
        if (callerRef !== null) {
          const object = this.countersMap.get(callerRef);

          if (object !== null) {
            object.currentTimer.stop();
          }
        }

        if (this.countersMap.get(functionRef) === null) {
          this.countersMap.set(functionRef, {
            count: 1,
            currentTimer: new profile_timer(),
            childTimer: new profile_timer(),
          });

          const object = this.countersMap.get(functionRef);

          object.childTimer.start();
          object.currentTimer.start();
          this.namesMap.set(functionRef, debug.getinfo(2, "Sn") as debug.FunctionInfo);
        } else {
          const object = this.countersMap.get(functionRef);

          object.count = object.count + 1;
          object.childTimer.start();
          object.currentTimer.start();
        }

        return;
      }
    }
  }
}