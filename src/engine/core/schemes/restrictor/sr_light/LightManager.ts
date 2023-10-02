import { registry } from "@/engine/core/database";
import { AbstractSchemeManager } from "@/engine/core/objects/ai/scheme";
import { ISchemeLightState } from "@/engine/core/schemes/restrictor/sr_light/sr_light_types";
import { LuaLogger } from "@/engine/core/utils/logging";
import { trySwitchToAnotherSection } from "@/engine/core/utils/scheme/scheme_switch";
import { ClientObject } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class LightManager extends AbstractSchemeManager<ISchemeLightState> {
  public active: boolean = false;

  public override activate(): void {
    // logger.info("Reset scheme for:", this.object.name());
    registry.lightZones.set(this.object.id(), this);
  }

  public update(): void {
    if (trySwitchToAnotherSection(this.object, this.state)) {
      this.active = false;

      registry.lightZones.delete(this.object.id());

      return;
    }

    this.active = true;
  }

  /**
   * todo: Description.
   */
  public checkStalker(object: ClientObject): LuaMultiReturn<[boolean, boolean]> {
    if (!this.active) {
      return $multi(false, false);
    }

    if (this.object.inside(object.position())) {
      return $multi(this.state.light, true);
    }

    return $multi(false, false);
  }
}
