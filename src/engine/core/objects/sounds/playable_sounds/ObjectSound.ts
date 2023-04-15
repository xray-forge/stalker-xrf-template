import {
  get_hud,
  getFS,
  sound_object,
  time_global,
  TXR_net_processor,
  vector,
  XR_FS,
  XR_game_object,
  XR_ini_file,
  XR_net_packet,
  XR_sound_object,
} from "xray16";

import { IRegistryObjectState, registry } from "@/engine/core/database";
import { AbstractPlayableSound } from "@/engine/core/objects/sounds/playable_sounds/AbstractPlayableSound";
import { EPlayableSound, ESoundPlaylistType } from "@/engine/core/objects/sounds/types";
import { IBaseSchemeState } from "@/engine/core/schemes";
import { assert } from "@/engine/core/utils/assertion";
import { readIniString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { parseStringsList } from "@/engine/core/utils/parse";
import { roots } from "@/engine/lib/constants/roots";
import { NIL } from "@/engine/lib/constants/words";
import {
  LuaArray,
  Optional,
  StringOptional,
  TCount,
  TDuration,
  TIndex,
  TNumberId,
  TPath,
  TSection,
  TStringId,
  TTimestamp,
} from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class ObjectSound extends AbstractPlayableSound {
  public static readonly type: EPlayableSound = EPlayableSound["3D"];

  public readonly type: EPlayableSound = ObjectSound.type;
  public readonly soundPaths: LuaArray<TPath> = new LuaTable();
  public pdaSoundObject: Optional<XR_sound_object> = null;

  public shuffle: ESoundPlaylistType;
  public faction: string;
  public point: string;
  public message: string;

  public canPlaySound: boolean = true;
  public playingStartedAt: Optional<TTimestamp> = null;
  public playedSoundIndex: Optional<TIndex> = null;

  public idleTime: Optional<TDuration> = null;
  public minIdle: TDuration;
  public maxIdle: TDuration;
  public rnd: number;

  public constructor(ini: XR_ini_file, section: TSection) {
    super(ini, section);

    const interval: LuaArray<string> = parseStringsList(readIniString(ini, section, "idle", false, "", "3,5,100"));

    this.shuffle = readIniString(ini, section, "shuffle", false, "", ESoundPlaylistType.RANDOM) as ESoundPlaylistType;
    this.minIdle = tonumber(interval.get(1))!;
    this.maxIdle = tonumber(interval.get(2))!;
    this.rnd = tonumber(interval.get(3))!;
    this.faction = readIniString(ini, section, "faction", false, "", "");
    this.point = readIniString(ini, section, "point", false, "", "");
    this.message = readIniString(ini, section, "message", false, "", "");

    const fs: XR_FS = getFS();

    if (fs.exist(roots.gameSounds, this.path + ".ogg") !== null) {
      this.soundPaths.set(1, this.path);
    } else {
      let index: TIndex = 1;

      while (fs.exist(roots.gameSounds, this.path + index + ".ogg")) {
        this.soundPaths.set(index, this.path + index);
        index += 1;
      }
    }

    assert(this.soundPaths.length() > 0, "There are no sound collection with path: '%s'.", this.path);
  }

  /**
   * todo;
   */
  public play(objectId: TNumberId, faction: string, point: string, message: string): boolean {
    const object: Optional<XR_game_object> = registry.objects.get(objectId)?.object;

    if (object === null) {
      return false; // No object existing.
    } else if (!this.canPlaySound) {
      return false; // Cannot play.
    } else if (this.playingStartedAt !== null && time_global() - this.playingStartedAt < (this.idleTime as TDuration)) {
      return false; // Still playing.
    }

    this.playingStartedAt = null;
    this.playedSoundIndex = this.selectNextSound();

    // Nothing to play.
    if (this.playedSoundIndex === -1) {
      return false;
    }

    logger.info("Play object sound:", object.name(), faction, point, message, "#");

    const fs: XR_FS = getFS();
    const soundPath: Optional<TPath> = this.soundPaths.get(this.playedSoundIndex!);

    // If actor is far from NPC, play pda sounds.
    if (
      soundPath &&
      fs.exist(roots.gameSounds, soundPath + "_pda.ogg") !== null &&
      object.position().distance_to_sqr(registry.actor.position()) >= 5
    ) {
      this.pdaSoundObject = new sound_object(soundPath + "_pda");
      this.pdaSoundObject.play_at_pos(registry.actor, new vector().set(0, 0, 0), 0, sound_object.s2d);
      this.pdaSoundObject.volume = 0.8;
    }

    this.canPlaySound = false;
    this.soundObject = new sound_object(soundPath);
    this.soundObject.play_at_pos(object, object.position(), 0, sound_object.s3d);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { NotificationManager } = require("@/engine/core/managers/notifications");

    NotificationManager.getInstance().sendSoundNotification(null, faction, point, soundPath);

    return true;
  }

  /**
   * todo;
   */
  public override stop(): void {
    super.stop();

    if (this.pdaSoundObject !== null && this.pdaSoundObject.playing()) {
      this.pdaSoundObject.stop();
      this.pdaSoundObject = null;
    }
  }

  /**
   * todo;
   */
  public selectNextSound(): Optional<TIndex> {
    const soundsCount: TCount = this.soundPaths.length();

    if (this.shuffle === ESoundPlaylistType.RANDOM) {
      if (soundsCount === 1) {
        return 1;
      } else if (this.playedSoundIndex !== null) {
        const playedId: TNumberId = math.random(1, soundsCount - 1);

        if (playedId === this.playedSoundIndex) {
          return playedId + 1;
        }

        return playedId;
      } else {
        return math.random(1, soundsCount);
      }
    }

    if (this.shuffle === ESoundPlaylistType.SEQUENCE) {
      if (this.playedSoundIndex === -1) {
        return -1;
      } else if (this.playedSoundIndex === null) {
        return 1;
      } else if (this.playedSoundIndex < soundsCount) {
        return this.playedSoundIndex + 1;
      } else {
        return -1;
      }
    }

    if (this.shuffle === ESoundPlaylistType.LOOP) {
      if (this.playedSoundIndex === null) {
        return 1;
      } else if (this.playedSoundIndex < soundsCount) {
        return this.playedSoundIndex + 1;
      } else {
        return 1;
      }
    }

    return null;
  }

  /**
   * todo;
   */
  public override onSoundPlayEnded(objectId: TNumberId): void {
    logger.info(
      "Sound play ended:",
      objectId,
      this.playedSoundIndex,
      this.soundPaths.get(this.playedSoundIndex as TIndex)
    );

    this.playingStartedAt = time_global();
    this.idleTime = math.random(this.minIdle, this.maxIdle) * 1000;
    this.soundObject = null;
    this.canPlaySound = true;

    get_hud().RemoveCustomStatic("cs_subtitles_object");

    const state: IRegistryObjectState = registry.objects.get(objectId);

    if (state.active_scheme === null) {
      return;
    }

    const schemeState: IBaseSchemeState = state[state.active_scheme] as IBaseSchemeState;

    if (schemeState.signals === null) {
      return;
    } else if (this.playedSoundIndex === this.soundPaths.length() && this.shuffle !== "rnd") {
      schemeState.signals.set("theme_end", true);
      schemeState.signals.set("sound_end", true);
    } else {
      schemeState.signals.set("sound_end", true);
    }
  }

  /**
   * todo;
   */
  public override save(packet: XR_net_packet): void {
    packet.w_stringZ(tostring(this.playedSoundIndex));
  }

  /**
   * todo;
   */
  public override load(reader: TXR_net_processor): void {
    const id: StringOptional<TStringId> = reader.r_stringZ();

    this.playedSoundIndex = id === NIL ? null : tonumber(id)!;
  }
}
