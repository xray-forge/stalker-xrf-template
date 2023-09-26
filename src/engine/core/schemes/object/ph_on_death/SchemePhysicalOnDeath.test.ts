import { describe, expect, it } from "@jest/globals";

import { registerObject } from "@/engine/core/database";
import { ISchemePhysicalOnDeathState } from "@/engine/core/schemes/object/ph_on_death/ISchemePhysicalOnDeathState";
import { PhysicalDeathManager } from "@/engine/core/schemes/object/ph_on_death/PhysicalDeathManager";
import { SchemePhysicalOnDeath } from "@/engine/core/schemes/object/ph_on_death/SchemePhysicalOnDeath";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini";
import { loadSchemeImplementation } from "@/engine/core/utils/scheme";
import { ClientObject, EScheme, IniFile } from "@/engine/lib/types";
import { assertSchemeSubscribedToManager } from "@/fixtures/engine";
import { mockClientGameObject, mockIniFile } from "@/fixtures/xray";

describe("SchemePhysicalOnDeath", () => {
  it("should correctly initialize with defaults", () => {
    const object: ClientObject = mockClientGameObject();
    const ini: IniFile = mockIniFile("test.ltx", {
      "ph_on_death@test": {},
    });

    registerObject(object);
    loadSchemeImplementation(SchemePhysicalOnDeath);

    const state: ISchemePhysicalOnDeathState = SchemePhysicalOnDeath.activate(
      object,
      ini,
      EScheme.PH_ON_DEATH,
      "ph_on_death@test"
    );

    expect(state.logic).toEqualLuaTables({});
    expect(state.action).toBeInstanceOf(PhysicalDeathManager);

    assertSchemeSubscribedToManager(state, PhysicalDeathManager);
  });

  it("should correctly initialize with custom data", () => {
    const object: ClientObject = mockClientGameObject();
    const ini: IniFile = mockIniFile("test.ltx", {
      "ph_on_death@test": {
        on_info: "{+test} first, second",
      },
    });

    registerObject(object);
    loadSchemeImplementation(SchemePhysicalOnDeath);

    const state: ISchemePhysicalOnDeathState = SchemePhysicalOnDeath.activate(
      object,
      ini,
      EScheme.PH_ON_DEATH,
      "ph_on_death@test"
    );

    expect(state.logic).toEqualLuaTables(getConfigSwitchConditions(ini, "ph_on_death@test"));
    expect(state.action).toBeInstanceOf(PhysicalDeathManager);

    assertSchemeSubscribedToManager(state, PhysicalDeathManager);
  });
});
