import { cse_alife_object, ini_file, LuabindClass, net_packet, object_binder, reader } from "xray16";

import { closeLoadMarker, closeSaveMarker, openSaveMarker, registry } from "@/engine/core/database";
import { openLoadMarker } from "@/engine/core/database/save_markers";
import { CampStoryManager } from "@/engine/core/schemes/camper/CampStoryManager";
import { readIniString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { Optional, TDuration, TName } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
@LuabindClass()
export class CampBinder extends object_binder {
  /**
   * todo;
   */
  public override reinit(): void {
    super.reinit();

    const camp: Optional<CampStoryManager> = registry.campsStories.get(this.object.id());

    if (camp !== null) {
      camp.object = this.object;
    }
  }

  /**
   * todo;
   */
  public override net_spawn(object: cse_alife_object): boolean {
    if (!super.net_spawn(object)) {
      return false;
    }

    const ini: ini_file = this.object.spawn_ini();

    if (ini.section_exist("camp")) {
      const filename: Optional<TName> = readIniString(ini, "camp", "cfg", false, "", null);

      registry.campsStories.set(
        this.object.id(),
        new CampStoryManager(this.object, filename === null ? ini : new ini_file(filename))
      );
    }

    return true;
  }

  /**
   * todo;
   */
  public override net_destroy(): void {
    logger.info("Net destroy camp:", this.object.id());

    registry.campsStories.delete(this.object.id());
    super.net_destroy();
  }

  /**
   * todo;
   */
  public override update(delta: TDuration): void {
    const camp: Optional<CampStoryManager> = registry.campsStories.get(this.object.id());

    if (camp !== null) {
      camp.update();
    }
  }

  /**
   * todo;
   */
  public override net_save_relevant(): boolean {
    return true;
  }

  /**
   * todo;
   */
  public override save(packet: net_packet): void {
    openSaveMarker(packet, CampBinder.__name);
    super.save(packet);
    closeSaveMarker(packet, CampBinder.__name);
  }

  /**
   * todo;
   */
  public override load(reader: reader): void {
    openLoadMarker(reader, CampBinder.__name);
    super.load(reader);
    closeLoadMarker(reader, CampBinder.__name);
  }
}
