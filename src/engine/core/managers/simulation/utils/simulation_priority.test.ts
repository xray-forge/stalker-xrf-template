import { beforeEach, describe, expect, it } from "@jest/globals";

import { registerSimulator } from "@/engine/core/database";
import {
  evaluateSimulationPriority,
  evaluateSimulationPriorityByDistance,
} from "@/engine/core/managers/simulation/utils/simulation_priority";
import { TName } from "@/engine/lib/types";
import { mockLuaTable } from "@/fixtures/lua/mocks/LuaTable.mock";
import { mockServerAlifeObject } from "@/fixtures/xray/mocks/objects/server/cse_alife_object.mock";
import { mockSquad } from "@/fixtures/xray/mocks/objects/server/Squad.mock";
import { MockVector } from "@/fixtures/xray/mocks/vector.mock";

describe("alife utils", () => {
  beforeEach(() => registerSimulator());

  it("evaluateSimulationPriorityByDistance utils should correctly evaluate priority by distance", () => {
    MockVector.DEFAULT_DISTANCE = 20;
    expect(evaluateSimulationPriorityByDistance(mockServerAlifeObject(), mockServerAlifeObject())).toBe(1.05);

    MockVector.DEFAULT_DISTANCE = 10;
    expect(evaluateSimulationPriorityByDistance(mockServerAlifeObject(), mockServerAlifeObject())).toBe(1.1);

    MockVector.DEFAULT_DISTANCE = 5;
    expect(evaluateSimulationPriorityByDistance(mockServerAlifeObject(), mockServerAlifeObject())).toBe(1.2);
  });

  it("evaluateSimulationPriority utils should correctly evaluate priority", () => {
    MockVector.DEFAULT_DISTANCE = 20;

    expect(evaluateSimulationPriority(mockSquad(), mockSquad())).toBe(13.65);

    MockVector.DEFAULT_DISTANCE = 10;

    expect(
      evaluateSimulationPriority(
        mockSquad({
          behaviour: mockLuaTable([["a", "5"]]),
          simulationProperties: $fromObject<TName, string>({ a: "6" }),
        }),
        mockSquad()
      )
    ).toBe(29.700000000000003);
  });
});