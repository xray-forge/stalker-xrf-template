import {
  ini_file,
  LuabindClass,
  object_binder,
  XR_cse_alife_object,
  XR_game_object,
  XR_ini_file,
  XR_net_packet,
  XR_reader,
} from "xray16";

import { Optional } from "@/mod/lib/types";
import { registry } from "@/mod/scripts/core/database";
import { CampStoryManager } from "@/mod/scripts/core/schemes/camper/CampStoryManager";
import { getConfigString } from "@/mod/scripts/utils/configs";
import { setLoadMarker, setSaveMarker } from "@/mod/scripts/utils/game_saves";
import { LuaLogger } from "@/mod/scripts/utils/logging";

const logger: LuaLogger = new LuaLogger("CampBinder");

/**
 * todo;
 */
@LuabindClass()
export class CampBinder extends object_binder {
  public constructor(object: XR_game_object) {
    super(object);
  }

  public override reload(section: string): void {
    super.reload(section);
  }

  public override reinit(): void {
    super.reinit();

    const camp = registry.camps.stories.get(this.object.id());

    // todo: Probably not needed.
    if (camp !== null) {
      camp.object = this.object;
    }
  }

  public override net_spawn(object: XR_cse_alife_object): boolean {
    if (!super.net_spawn(object)) {
      return false;
    }

    logger.info("Net spawn camp:", this.object.name());

    const ini: XR_ini_file = this.object.spawn_ini();

    if (ini.section_exist(CampStoryManager.SCHEME_SECTION)) {
      const filename: Optional<string> = getConfigString(
        ini,
        CampStoryManager.SCHEME_SECTION,
        "cfg",
        null,
        false,
        "",
        null
      );

      registry.camps.stories.set(
        this.object.id(),
        new CampStoryManager(this.object, filename === null ? ini : new ini_file(filename))
      );
    }

    return true;
  }

  public override net_destroy(): void {
    logger.info("Net destroy camp:", this.object.id());

    registry.camps.stories.delete(this.object.id());
    super.net_destroy();
  }

  public override update(delta: number): void {
    const camp = registry.camps.stories.get(this.object.id());

    if (camp !== null) {
      camp.update();
    }
  }

  public override net_save_relevant(): boolean {
    return true;
  }

  public override save(packet: XR_net_packet): void {
    setSaveMarker(packet, false, CampBinder.__name);
    super.save(packet);
    setSaveMarker(packet, true, CampBinder.__name);
  }

  public override load(reader: XR_reader): void {
    setLoadMarker(reader, false, CampBinder.__name);
    super.load(reader);
    setLoadMarker(reader, true, CampBinder.__name);
  }
}
