import { assert } from "@/engine/core/utils/assertion";
import { LuaLogger } from "@/engine/core/utils/logging";
import { Optional, TCount } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Check if provided container is empty collection.
 * Very lua-specific checks, do not apply TS logic here.
 *
 * @param target - object to check emptiness
 * @returns whether target table is empty
 */
export function isEmpty(target: Optional<LuaTable<any>>): boolean {
  if (target === null) {
    return true;
  }

  if (type(target) === "function") {
    for (const [k] of target) {
      return false;
    }

    return true;
  }

  assert(type(target) === "table", "Received not table type for emptiness check.");

  if (1 in target) {
    return false;
  }

  for (const [k] of target) {
    return false;
  }

  return true;
}

/**
 * Get size of table content.
 *
 * @param target - table to check size
 * @returns actual size of the table
 */
export function getTableSize(target: LuaTable<any, any>): number {
  let count: TCount = 0;

  for (const [key, value] of target) {
    count += 1;
  }

  return count;
}

/**
 * Copy table values from one table to another.
 * Tables are copied recursively.
 *
 * @param target - table to copy in
 * @param source - table to copy from
 * @returns target table with copied content
 */
export function copyTable<T extends Record<any, any>, D extends Record<any, any>>(target: T, source: D): T;
export function copyTable(
  target: LuaTable<string | number>,
  source: LuaTable<string | number>
): LuaTable<string | number> {
  for (const [k, v] of source) {
    if (type(v) === "table") {
      target.set(k, new LuaTable());
      copyTable(target.get(k), v);
    } else {
      target.set(k, v);
    }
  }

  return target;
}

/**
 * Reset table values in map-styled table.
 *
 * @param target - table to reset and empty
 */
export function resetTable(target: LuaTable<any>): void {
  for (const [k] of target) {
    target.delete(k);
  }
}
