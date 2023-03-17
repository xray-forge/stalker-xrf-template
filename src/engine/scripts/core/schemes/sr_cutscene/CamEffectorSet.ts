import { device, level, XR_game_object } from "xray16";

import { STRINGIFIED_FALSE } from "@/engine/lib/constants/words";
import { Optional } from "@/engine/lib/types";
import { registry } from "@/engine/scripts/core/database";
import {
  EEffectorState,
  ICamEffectorSetDescriptorItem,
  TCamEffectorSetDescriptor,
} from "@/engine/scripts/core/schemes/sr_cutscene/cam_effector_sets";
import { ISchemeCutsceneState } from "@/engine/scripts/core/schemes/sr_cutscene/ISchemeCutsceneState";
import { pickSectionFromCondList } from "@/engine/scripts/utils/ini_config/config";
import { stringifyAsJson } from "@/engine/scripts/utils/json";
import { LuaLogger } from "@/engine/scripts/utils/logging";
import { parseConditionsList, TConditionList } from "@/engine/scripts/utils/parse";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class CamEffectorSet {
  public set: TCamEffectorSetDescriptor;
  public st: ISchemeCutsceneState;
  public state: EEffectorState;

  public cur_effect: number;
  public enabled: boolean;
  public playing: boolean;
  public looped: boolean;
  public condlist!: TConditionList;

  public constructor(set: TCamEffectorSetDescriptor, storage: ISchemeCutsceneState) {
    logger.info("Init new set:", stringifyAsJson(set));

    this.set = set;
    this.state = EEffectorState.START;
    this.cur_effect = 0;
    this.playing = false;
    this.looped = false;
    this.enabled = true;
    this.st = storage;
  }

  public start_effect(effect: ICamEffectorSetDescriptorItem): void {
    logger.info("Start effect:", effect.anim);
    // --printf("playing effect [camera_effects\\"..eff.anim..".anm], time [%s]", device():time_global())
    // --callstack()

    if (!effect.global_cameffect) {
      level.add_cam_effector("camera_effects\\" + effect.anim + ".anm", 210408, false, "engine.effector_callback");
    } else {
      level.add_cam_effector2(
        "camera_effects\\" + effect.anim + ".anm",
        210408,
        false,
        "engine.effector_callback",
        this.st.fov || registry.actor.fov() * 0.75
      );
    }

    this.playing = true;
  }

  public stop_effect(): void {
    logger.info("Stop effect:", this.cur_effect, this.state);
    level.remove_cam_effector(210408);
    this.playing = false;
    this.state = EEffectorState.RELEASE;
    this.cur_effect = 0;
  }

  public update(): void {
    if (device().precache_frame > 0) {
      return;
    }

    if (this.playing) {
      const eff = this.set[this.state].get(this.cur_effect);

      if (eff && eff.looped !== false) {
        const cond = pickSectionFromCondList(registry.actor, null, this.condlist);

        if (cond === STRINGIFIED_FALSE) {
          this.looped = false;
          // --                this.stop_effect()
        }
      }
    } else {
      const eff = this.select_effect();

      if (eff) {
        this.start_effect(eff as any);
      }
    }
  }

  /**
   * todo;
   */
  public select_effect(): Optional<ICamEffectorSetDescriptorItem> {
    const state = this.state;
    const actor: XR_game_object = registry.actor;
    let cur_effect = this.cur_effect;

    if (this.looped) {
      return this.set[state].get(cur_effect);
    }

    if (state === EEffectorState.START) {
      cur_effect = cur_effect + 1;
      if (this.set.start.get(cur_effect) !== null) {
        this.cur_effect = cur_effect;
        if (type(this.set.start.get(cur_effect).enabled) === "string") {
          const conditionsList: TConditionList = parseConditionsList(this.set.start.get(cur_effect).enabled!);

          if (pickSectionFromCondList(actor, null, conditionsList) === STRINGIFIED_FALSE) {
            return this.select_effect();
          }
        }

        if (type(this.set.start.get(cur_effect).looped) === "string") {
          this.looped = true;
          this.condlist = parseConditionsList(this.set.start.get(cur_effect).looped as any);
        }

        return this.set.start.get(cur_effect);
      } else {
        this.state = EEffectorState.IDLE;
        this.cur_effect = 0;

        return this.select_effect();
      }
    } else if (state === EEffectorState.IDLE) {
      cur_effect = cur_effect + 1;
      if (this.set.idle.get(cur_effect) !== null) {
        this.cur_effect = cur_effect;
        if (type(this.set.idle.get(cur_effect).enabled) === "string") {
          const conditionsList: TConditionList = parseConditionsList(this.set.idle.get(cur_effect).enabled as any);

          if (pickSectionFromCondList(actor, null, conditionsList) === STRINGIFIED_FALSE) {
            return this.select_effect();
          }
        }

        if (type(this.set.idle.get(cur_effect).looped) === "string") {
          this.looped = true;
          this.condlist = parseConditionsList(this.set.idle.get(cur_effect).looped as any);
        }

        return this.set.idle.get(cur_effect);
      } else {
        this.state = EEffectorState.FINISH;
        this.cur_effect = 0;

        return this.select_effect();
      }
    } else if (state === EEffectorState.FINISH) {
      cur_effect = cur_effect + 1;
      if (this.set.finish.get(cur_effect) !== null) {
        this.cur_effect = cur_effect;

        if (type(this.set.finish.get(cur_effect).enabled) === "string") {
          const condlist = parseConditionsList(this.set.finish.get(cur_effect).enabled as any);

          if (pickSectionFromCondList(actor, null, condlist) === "false") {
            return this.select_effect();
          }
        }

        if (type(this.set.finish.get(cur_effect).looped) === "string") {
          this.looped = true;
          this.condlist = parseConditionsList(this.set.finish.get(cur_effect).looped as any);
        }

        return this.set.finish.get(cur_effect);
      } else {
        this.state = EEffectorState.RELEASE;
        this.cur_effect = 0;

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { SchemeCutscene } = require("@/engine/scripts/core/schemes/sr_cutscene/SchemeCutscene");

        SchemeCutscene.onCutsceneEnd();

        return null;
      }
    }

    return null;
  }
}
