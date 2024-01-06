import { beforeEach, describe, expect, it } from "@jest/globals";

import { registerSmartTerrainCampfire } from "@/engine/core/database";
import { SmartTerrain } from "@/engine/core/objects/smart_terrain";
import {
  turnOffSmartTerrainCampfires,
  turnOnSmartTerrainCampfires,
} from "@/engine/core/utils/smart_terrain/smart_terrain_campfires";
import { ZoneCampfire } from "@/engine/lib/types";
import { MockSmartTerrain, resetRegistry } from "@/fixtures/engine";
import { MockCZoneCampfire, MockGameObject } from "@/fixtures/xray";

describe("turnOnSmartTerrainCampfires/turnOffSmartTerrainCampfires utils", () => {
  beforeEach(() => {
    resetRegistry();
  });

  it("should correctly tun on and turn off linked campfires", () => {
    const smartTerrain: SmartTerrain = MockSmartTerrain.mock();
    const first: ZoneCampfire = MockCZoneCampfire.mock(true);
    const second: ZoneCampfire = MockCZoneCampfire.mock(false);
    const third: ZoneCampfire = MockCZoneCampfire.mock(true);
    const fourth: ZoneCampfire = MockCZoneCampfire.mock(false);

    expect(smartTerrain.areCampfiresOn).toBe(false);
    expect(first.is_on()).toBe(true);
    expect(second.is_on()).toBe(false);
    expect(third.is_on()).toBe(true);
    expect(fourth.is_on()).toBe(false);

    turnOnSmartTerrainCampfires(smartTerrain);

    expect(smartTerrain.areCampfiresOn).toBe(true);
    expect(first.is_on()).toBe(true);
    expect(second.is_on()).toBe(false);
    expect(third.is_on()).toBe(true);
    expect(fourth.is_on()).toBe(false);

    registerSmartTerrainCampfire(smartTerrain, MockGameObject.mock({ get_campfire: () => first }));
    registerSmartTerrainCampfire(smartTerrain, MockGameObject.mock({ get_campfire: () => second }));

    expect(first.is_on()).toBe(false);
    expect(second.is_on()).toBe(false);

    turnOnSmartTerrainCampfires(smartTerrain);

    expect(smartTerrain.areCampfiresOn).toBe(true);
    expect(first.is_on()).toBe(true);
    expect(second.is_on()).toBe(true);
    expect(third.is_on()).toBe(true);
    expect(fourth.is_on()).toBe(false);

    turnOffSmartTerrainCampfires(smartTerrain);

    expect(smartTerrain.areCampfiresOn).toBe(false);
    expect(first.is_on()).toBe(false);
    expect(second.is_on()).toBe(false);
    expect(third.is_on()).toBe(true);
    expect(fourth.is_on()).toBe(false);
  });
});
