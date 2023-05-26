import { game_object, ini_file, level } from "xray16";

import { registry } from "@/engine/core/database";
import { AbstractScheme } from "@/engine/core/schemes/base/AbstractScheme";
import { ISchemeLightState } from "@/engine/core/schemes/sr_light/ISchemeLightState";
import { LightManager } from "@/engine/core/schemes/sr_light/LightManager";
import { isUndergroundLevel } from "@/engine/core/utils/check/is";
import { getConfigSwitchConditions } from "@/engine/core/utils/ini/config";
import { readIniBoolean } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { resetTable } from "@/engine/core/utils/table";
import { misc } from "@/engine/lib/constants/items/misc";
import { EScheme, ESchemeType, Optional, TSection } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 * Class managing torches used by stalkers during night hours / in underground levels.
 */
export class SchemeLight extends AbstractScheme {
  public static override readonly SCHEME_SECTION: EScheme = EScheme.SR_LIGHT;
  public static override readonly SCHEME_TYPE: ESchemeType = ESchemeType.RESTRICTOR;

  /**
   * todo: Description.
   */
  public static override add(
    object: game_object,
    ini: ini_file,
    scheme: EScheme,
    section: TSection,
    state: ISchemeLightState
  ): void {
    SchemeLight.subscribe(object, state, new LightManager(object, state));
  }

  /**
   * todo: Description.
   */
  public static override activate(object: game_object, ini: ini_file, scheme: EScheme, section: TSection): void {
    const state: ISchemeLightState = AbstractScheme.assign(object, ini, scheme, section);

    state.logic = getConfigSwitchConditions(ini, section);
    state.light = readIniBoolean(ini, section, "light_on", false, false);
  }

  /**
   * todo: Description.
   */
  public static override reset(): void {
    logger.info("Reset light zones");
    resetTable(registry.lightZones);
  }

  /**
   * todo: Description.
   */
  public static checkObjectLight(object: game_object): void {
    if (object === null) {
      return;
    }

    const torch: Optional<game_object> = object.object(misc.device_torch);
    const isCurrentlyIndoor: boolean = isUndergroundLevel(level.name());

    if (torch === null) {
      return;
    }

    let light = false;
    let forced = false;

    /*
      if (benchmark.light) {
        light = true;
        forced = true;
      }
     */

    if (!object.alive()) {
      light = false;
      forced = true;
    }

    if (!forced) {
      for (const [k, v] of registry.lightZones) {
        [light, forced] = v.check_stalker(object);

        if (forced === true) {
          break;
        }
      }
    }

    if (!forced) {
      const htime = level.get_time_hours();

      if (htime <= 4 || htime >= 22) {
        light = true;
      }

      if (light === false) {
        if (isCurrentlyIndoor) {
          light = true;
        }
      }
    }

    if (!forced && light === true) {
      const scheme = registry.objects.get(object.id()).active_scheme!;

      if (scheme === "camper" || scheme === "sleeper") {
        light = false;
        forced = true;
      }
    }

    if (!forced && light) {
      if (object.best_enemy() !== null && !isCurrentlyIndoor) {
        light = false;
      }
    }

    if (light !== null) {
      torch.enable_attachable_item(light);
    }
  }
}
