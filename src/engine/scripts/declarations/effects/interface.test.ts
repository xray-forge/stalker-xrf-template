import { describe, expect, it } from "@jest/globals";

import { AnyObject } from "@/engine/lib/types";

describe("'interface' effects declaration", () => {
  const checkBinding = (name: string, container: AnyObject = global) => {
    expect(container["xr_effects"][name]).toBeDefined();
  };

  it("should correctly inject external methods for game", () => {
    require("@/engine/scripts/declarations/effects/interface");

    checkBinding("disable_ui");
    checkBinding("disable_ui_only");
    checkBinding("enable_ui");
    checkBinding("run_cam_effector");
    checkBinding("stop_cam_effector");
    checkBinding("disable_actor_nightvision");
    checkBinding("enable_actor_nightvision");
    checkBinding("disable_actor_torch");
    checkBinding("enable_actor_torch");
    checkBinding("run_cam_effector_global");
    checkBinding("cam_effector_callback");
    checkBinding("run_postprocess");
    checkBinding("stop_postprocess");
    checkBinding("run_tutorial");
  });
});