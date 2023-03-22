import {
  game,
  get_hud,
  getFS,
  snd_type,
  sound_object,
  stalker_ids,
  time_global,
  TXR_net_processor,
  vector,
  XR_FS,
  XR_game_object,
  XR_ini_file,
  XR_net_packet,
  XR_reader,
  XR_sound_object,
} from "xray16";

import { IRegistryObjectState, registry } from "@/engine/core/database";
import { AbstractPlayableSound } from "@/engine/core/objects/sounds/playable_sounds/AbstractPlayableSound";
import { EPlayableSound, ESoundPlaylistType } from "@/engine/core/objects/sounds/types";
import { abort } from "@/engine/core/utils/assertion";
import { readIniBoolean, readIniNumber, readIniString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { getCharacterCommunity } from "@/engine/core/utils/object";
import { parseStringsList } from "@/engine/core/utils/parse";
import { communities, TCommunity } from "@/engine/lib/constants/communities";
import { roots } from "@/engine/lib/constants/roots";
import { NIL } from "@/engine/lib/constants/words";
import {
  LuaArray,
  Optional,
  TCount,
  TDuration,
  TIndex,
  TLabel,
  TName,
  TNumberId,
  TPath,
  TTimestamp,
} from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);
const nstl = 64;

export interface INpcSoundDescriptor {
  id: TNumberId;
  max: TCount;
}

/**
 * todo;
 */
export class NpcSound extends AbstractPlayableSound {
  public static baseIndex: TIndex = stalker_ids.sound_script + 10_000;
  public static readonly type: EPlayableSound = EPlayableSound.NPC;

  /**
   * todo;
   */
  public static getNextId(): TIndex {
    NpcSound.baseIndex += 1;

    return NpcSound.baseIndex;
  }

  public override readonly type: EPlayableSound = NpcSound.type;

  public readonly prefix: boolean;
  public readonly isCombatSound: boolean;
  public readonly isGroupSound: boolean;

  public readonly canPlaySound: LuaTable<TNumberId, boolean> = new LuaTable();
  public readonly objects: LuaTable<TNumberId, INpcSoundDescriptor> = new LuaTable();
  public readonly availableCommunities: LuaTable<TCommunity, boolean> = new LuaTable();
  public readonly soundPaths: LuaTable<TNumberId, LuaArray<TPath>> = new LuaTable();

  public readonly shuffle: ESoundPlaylistType;
  public readonly faction: string;
  public readonly point: string;
  public readonly message: string;

  public canPlayGroupSound: boolean = true;
  public pdaSoundObject: Optional<XR_sound_object> = null;
  public playedSoundIndex: Optional<TIndex> = null;
  public playingStartedAt: Optional<TTimestamp> = null;
  public idleTime: Optional<TDuration> = null;

  public readonly minIdle: TDuration;
  public readonly maxIdle: TDuration;
  public readonly delay: TDuration;
  public readonly random: number;

  public constructor(soundIni: XR_ini_file, section: string) {
    super(soundIni, section);

    this.prefix = readIniBoolean(soundIni, section, "npc_prefix", false, false);
    this.shuffle = readIniString(
      soundIni,
      section,
      "shuffle",
      false,
      "",
      ESoundPlaylistType.RANDOM
    ) as ESoundPlaylistType;
    this.isGroupSound = readIniBoolean(soundIni, section, "group_snd", false, false);
    this.shouldPlayAlways = readIniBoolean(soundIni, section, "play_always", false, false);
    this.isCombatSound = readIniBoolean(soundIni, section, "is_combat_sound", false, false);
    this.delay = readIniNumber(soundIni, section, "delay_sound", false, 0);

    const interval: LuaTable<number, string> = parseStringsList(
      readIniString(soundIni, section, "idle", false, "", "3,5,100")
    );

    this.minIdle = tonumber(interval.get(1))!;
    this.maxIdle = tonumber(interval.get(2))!;
    this.random = tonumber(interval.get(3))!;

    this.faction = readIniString(soundIni, section, "faction", false, "", "");
    this.point = readIniString(soundIni, section, "point", false, "", "");
    this.message = readIniString(soundIni, section, "message", false, "", "");

    const availableCommunities: LuaArray<TCommunity> = parseStringsList<TCommunity>(
      readIniString(
        soundIni,
        section,
        "avail_communities",
        false,
        "",
        string.format(
          "%s, %s, %s, %s, %s, %s, %s, %s, %s",
          communities.stalker,
          communities.ecolog,
          communities.bandit,
          communities.dolg,
          communities.freedom,
          communities.army,
          communities.zombied,
          communities.monolith,
          communities.killer
        )
      )
    );

    for (const [, community] of availableCommunities) {
      this.availableCommunities.set(community, true);
    }
  }

  /**
   * todo;
   */
  public override reset(objectId: TNumberId): void {
    const object: Optional<XR_game_object> = registry.objects.get(objectId)?.object;

    this.playingStartedAt = null;
    this.playedSoundIndex = null;
    this.canPlayGroupSound = true;
    this.canPlaySound.set(objectId, true);

    if (object !== null) {
      object.set_sound_mask(-1);
      object.set_sound_mask(0);
    }

    if (this.pdaSoundObject !== null) {
      this.pdaSoundObject.stop();
      this.pdaSoundObject = null;
    }
  }

  /**
   * todo;
   */
  public override isPlaying(objectId: TNumberId): boolean {
    const obj: Optional<XR_game_object> = registry.objects.get(objectId) && registry.objects.get(objectId).object!;

    if (obj === null) {
      return false;
    }

    return obj.active_sound_count() !== 0 || this.pdaSoundObject?.playing() === true;
  }

  /**
   * todo;
   */
  public initializeObject(object: XR_game_object): void {
    const objectId: TNumberId = object.id();
    const objectDescriptor = {
      id: NpcSound.getNextId(),
      max: 0,
    };

    this.objects.set(objectId, objectDescriptor);
    this.soundPaths.set(objectId, new LuaTable());

    let character_prefix: string = "";

    if (this.prefix === false) {
      character_prefix = object.sound_prefix();
      object.sound_prefix("characters_voice\\");
    }

    if (this.isCombatSound) {
      objectDescriptor.max =
        object.add_combat_sound(this.path, nstl, snd_type.talk, 2, 1, objectDescriptor.id, "bip01_head") - 1;
    } else {
      objectDescriptor.max = object.add_sound(this.path, nstl, snd_type.talk, 2, 1, objectDescriptor.id) - 1;
    }

    const fs: XR_FS = getFS();

    if (fs.exist(roots.gameSounds, object.sound_prefix() + this.path + ".ogg") !== null) {
      this.soundPaths.get(objectId).set(1, object.sound_prefix() + this.path);
    } else {
      let index: TIndex = 1;

      while (fs.exist(roots.gameSounds, object.sound_prefix() + this.path + index + ".ogg")) {
        this.soundPaths.get(objectId).set(index, object.sound_prefix() + this.path + index);
        index = index + 1;
      }
    }

    if (this.objects.get(objectId).max < 0) {
      abort("Couldnt find sounds %s with prefix %s", tostring(this.path), object.sound_prefix());
    }

    if (this.prefix === false) {
      object.sound_prefix(character_prefix);
    }

    if (this.isGroupSound) {
      this.canPlayGroupSound = true;
    } else {
      if (this.canPlaySound.get(objectId) !== false) {
        this.canPlaySound.set(objectId, true);
      }
    }
  }

  /**
   * todo: Description.
   */
  public play(objectId: TNumberId, faction: string, point: Optional<string>, message: TLabel): boolean {
    const object: Optional<XR_game_object> = registry.objects.get(objectId)?.object;

    if (object === null) {
      return false;
    }

    if (this.isGroupSound) {
      if (!this.canPlayGroupSound) {
        return false;
      }
    } else {
      if (!this.canPlaySound.get(objectId)) {
        return false;
      }
    }

    // Wait for previous sound finish
    if (this.playingStartedAt !== null && time_global() - this.playingStartedAt < this.idleTime!) {
      return false;
    }

    logger.info("Play npc sound:", object.name(), faction, point, message, "#");

    this.playingStartedAt = null;

    const objectDescriptor: Optional<INpcSoundDescriptor> = this.objects.get(objectId);

    if (objectDescriptor === null) {
      return false;
    }

    this.playedSoundIndex = this.selectNextSound(objectId);

    if (this.playedSoundIndex === -1) {
      return false;
    }

    object.play_sound(objectDescriptor.id, this.delay + 0.06, this.delay + 0.05, 1, 0, this.playedSoundIndex);

    const nextIndex: TIndex = this.playedSoundIndex + 1;
    const soundPath: TPath = this.soundPaths.get(objectId).get(nextIndex);
    const fs: XR_FS = getFS();

    if (
      soundPath &&
      fs.exist(roots.gameSounds, soundPath + "_pda.ogg") !== null &&
      object.position().distance_to_sqr(registry.actor.position()) >= 100
    ) {
      if (this.pdaSoundObject !== null && this.pdaSoundObject.playing()) {
        this.pdaSoundObject.stop();
      }

      this.pdaSoundObject = new sound_object(soundPath + "_pda");
      this.pdaSoundObject.play_at_pos(registry.actor, new vector().set(0, 0, 0), this.delay, sound_object.s2d);
      this.pdaSoundObject.volume = 0.8;
    }

    const [soundCaption] = string.gsub(soundPath, "\\", "_");

    if (this.isGroupSound) {
      this.canPlayGroupSound = false;
    } else {
      this.canPlaySound.set(objectId, false);
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { NotificationManager } = require("@/engine/core/managers/notifications");

    if (game.translate_string(soundCaption) !== soundCaption) {
      if (!faction) {
        faction = getCharacterCommunity(object);
      }

      // Attempt to auto-translate npc goal.
      if (!point) {
        point = object.profile_name() + "_name";
        if (game.translate_string(point) === point) {
          point = null;
        }
      }

      NotificationManager.getInstance().sendSoundNotification(
        object,
        faction,
        point,
        soundPath,
        soundCaption,
        this.delay
      );
    } else {
      NotificationManager.getInstance().sendSoundNotification(object, faction, point, soundPath, null, this.delay);
    }

    return true;
  }

  /**
   * todo;
   */
  public selectNextSound(objectId: TNumberId): TNumberId {
    const objectDescriptor: Optional<INpcSoundDescriptor> = this.objects.get(objectId);

    // Play random
    if (this.shuffle === ESoundPlaylistType.RANDOM) {
      if (objectDescriptor.max === 0) {
        return 0;
      } else if (this.playedSoundIndex !== null) {
        const nextPlayIndex: TIndex = math.random(0, objectDescriptor.max - 1);

        if (nextPlayIndex === this.playedSoundIndex) {
          return nextPlayIndex + 1;
        }

        return nextPlayIndex;
      }

      return math.random(0, objectDescriptor.max);
    }

    // Play in sequence.
    if (this.shuffle === ESoundPlaylistType.SEQUENCE) {
      if (this.playedSoundIndex === -1) {
        return -1;
      } else if (this.playedSoundIndex === null) {
        return 0;
      } else if (this.playedSoundIndex < objectDescriptor.max) {
        return this.playedSoundIndex + 1;
      } else {
        return -1;
      }
    }

    // Play in loop.
    if (this.shuffle === ESoundPlaylistType.LOOP) {
      if (this.playedSoundIndex === null) {
        return 0;
      } else if (this.playedSoundIndex < objectDescriptor.max) {
        return this.playedSoundIndex + 1;
      } else {
        return 0;
      }
    }

    abort("Unexpected shuffle type provided: '%s'.", this.shuffle);
  }

  /**
   * todo;
   */
  public override stop(objectId: TNumberId): void {
    const object: Optional<XR_game_object> = registry.objects.get(objectId)?.object;

    if (object !== null && object.alive()) {
      object.set_sound_mask(-1);
      object.set_sound_mask(0);
    }

    if (this.pdaSoundObject !== null && this.pdaSoundObject.playing()) {
      this.pdaSoundObject.stop();
      this.pdaSoundObject = null;
    }
  }

  /**
   * todo: Description.
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

    get_hud().RemoveCustomStatic("cs_subtitles_npc");

    if (this.isGroupSound) {
      this.canPlayGroupSound = true;
    } else {
      this.canPlaySound.set(objectId, true);
    }

    const state: IRegistryObjectState = registry.objects.get(objectId);

    if (state.active_scheme === null) {
      return;
    }

    const signals: Optional<LuaTable<TName, boolean>> = state[state.active_scheme]!.signals;

    if (signals === null || this.objects.get(objectId) === null) {
      return;
    }

    // Fire scheme signals.
    if (this.playedSoundIndex === this.objects.get(objectId).max && this.shuffle !== "rnd") {
      signals.set("theme_end", true);
      signals.set("sound_end", true);
    } else {
      signals.set("sound_end", true);
    }
  }

  /**
   * todo;
   */
  public override save(net_packet: XR_net_packet): void {
    net_packet.w_stringZ(tostring(this.playedSoundIndex));

    if (this.isGroupSound) {
      net_packet.w_bool(this.canPlayGroupSound);
    }
  }

  /**
   * todo;
   */
  public override load(reader: TXR_net_processor): void {
    const id: string = reader.r_stringZ();

    this.playedSoundIndex = id === NIL ? null : tonumber(id)!;

    if (this.isGroupSound) {
      this.canPlayGroupSound = reader.r_bool();
    }
  }

  /**
   * todo;
   */
  public override saveObject(packet: XR_net_packet, object: XR_game_object): void {
    if (!this.isGroupSound) {
      packet.w_bool(this.canPlaySound.get(object.id()) === true);
    }
  }

  /**
   * todo;
   */
  public override loadObject(reader: XR_reader, object: XR_game_object): void {
    if (!this.isGroupSound) {
      this.canPlaySound.set(object.id(), reader.r_bool());
    }
  }
}