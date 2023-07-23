import { animpointStates } from "@/engine/core/objects/animation/states/animpoint";
import { baseStates } from "@/engine/core/objects/animation/states/base";
import { priA15States } from "@/engine/core/objects/animation/states/priA15";
import { scenarioStates } from "@/engine/core/objects/animation/states/scenarios";
import { IStateDescriptor } from "@/engine/core/objects/state";
import { mergeTables } from "@/engine/core/utils/table";
import { TName } from "@/engine/lib/types";

/**
 * List of default state descriptors to use in scripts.
 */
export const states: LuaTable<TName, IStateDescriptor> = mergeTables(
  new LuaTable(),
  baseStates,
  animpointStates,
  scenarioStates,
  priA15States
);
