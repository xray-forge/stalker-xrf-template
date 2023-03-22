import { XR_game_object, XR_net_packet, XR_reader, XR_sound_object } from "xray16";

import { registry, SCRIPT_SOUND_LTX } from "@/engine/core/database";
import { AbstractCoreManager } from "@/engine/core/managers/AbstractCoreManager";
import { AbstractPlayableSound } from "@/engine/core/sounds/playable_sounds/AbstractPlayableSound";
import { ActorSound } from "@/engine/core/sounds/playable_sounds/ActorSound";
import { EPlayableSound } from "@/engine/core/sounds/playable_sounds/EPlayableSound";
import { LoopedSound } from "@/engine/core/sounds/playable_sounds/LoopedSound";
import { NpcSound } from "@/engine/core/sounds/playable_sounds/NpcSound";
import { ObjectSound } from "@/engine/core/sounds/playable_sounds/ObjectSound";
import { abort } from "@/engine/core/utils/assertion";
import { setLoadMarker, setSaveMarker } from "@/engine/core/utils/game_save";
import { readIniString } from "@/engine/core/utils/ini/getters";
import { LuaLogger } from "@/engine/core/utils/logging";
import { getCharacterCommunity } from "@/engine/core/utils/object";
import { resetTable } from "@/engine/core/utils/table";
import { Optional, TCount, TName, TNumberId, TRate, TStringId } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class GlobalSoundManager extends AbstractCoreManager {
  /**
   * todo: check.
   */
  public static loadSoundThemes(): void {
    logger.info("Load sound themes");

    if (!SCRIPT_SOUND_LTX.section_exist("list")) {
      abort("There is no section [list] in script_sound.ltx");
    }

    const linesCount: TCount = SCRIPT_SOUND_LTX.line_count("list");

    resetTable(registry.sounds.themes);

    for (const it of $range(0, linesCount - 1)) {
      const [result, section, value] = SCRIPT_SOUND_LTX.r_line("list", it, "", "");

      const type: EPlayableSound = readIniString<EPlayableSound>(
        SCRIPT_SOUND_LTX,
        section,
        "type",
        true,
        ""
      ) as EPlayableSound;

      switch (type) {
        case ObjectSound.type:
          registry.sounds.themes.set(section, new ObjectSound(SCRIPT_SOUND_LTX, section));
          break;

        case NpcSound.type:
          registry.sounds.themes.set(section, new NpcSound(SCRIPT_SOUND_LTX, section));
          break;

        case ActorSound.type:
          registry.sounds.themes.set(section, new ActorSound(SCRIPT_SOUND_LTX, section));
          break;

        case LoopedSound.type:
          registry.sounds.themes.set(section, new LoopedSound(SCRIPT_SOUND_LTX, section));
          break;

        default:
          abort("Unexpected sound type provided for loading: %s", type);
      }
    }
  }

  /**
   * todo: check.
   */
  public static init_npc_sound(npc: XR_game_object): void {
    for (const [key, sound] of registry.sounds.themes) {
      if (sound.type === NpcSound.type) {
        if ((sound as NpcSound).avail_communities.has(getCharacterCommunity(npc))) {
          (sound as NpcSound).init_npc(npc);
        }
      }
    }
  }

  /**
   * todo: Description.
   */
  public setSoundPlaying(
    objectId: TNumberId,
    sound: Optional<TStringId>,
    faction: Optional<string>,
    point: Optional<TNumberId>
  ): Optional<XR_sound_object> {
    logger.info("Start sound play:", objectId, sound, faction, point);

    if (sound === null) {
      return null;
    }

    const playableSound: Optional<AbstractPlayableSound> = registry.sounds.themes.get(sound);

    if (playableSound === null) {
      abort("set_sound_play. Wrong sound theme [%s], npc[%s].", tostring(sound), objectId);
    } else if (playableSound.type === LoopedSound.type) {
      abort("You trying to play sound [%s] which type is looped:", sound);
    }

    const soundItem: Optional<AbstractPlayableSound> = registry.sounds.generic.get(objectId);

    if (soundItem === null || playableSound.play_always) {
      if (soundItem !== null) {
        registry.sounds.generic.get(objectId).reset(objectId);
      }

      if (playableSound.play(objectId, faction, point)) {
        logger.info("Play sound, store in table:", objectId);
        registry.sounds.generic.set(objectId, playableSound);
      }
    } else {
      return registry.sounds.generic.get(objectId).snd_obj;
    }

    return registry.sounds.generic.get(objectId)?.snd_obj;
  }

  /**
   * todo: Description.
   */
  public stopSoundsByObjectId(objectId: TNumberId): void {
    logger.info("Stop sound play:", objectId);

    const playableSound: Optional<AbstractPlayableSound> = registry.sounds.generic.get(objectId);

    if (playableSound !== null) {
      playableSound.stop(objectId);
    }

    const loopedSounds: Optional<LuaTable<string, AbstractPlayableSound>> = registry.sounds.looped.get(objectId);

    if (loopedSounds !== null) {
      for (const [k, it] of loopedSounds) {
        if (it && it.is_playing(objectId)) {
          it.stop(objectId);
        }
      }
    }
  }

  /**
   * todo: Description.
   */
  public updateForObjectId(objectId: TNumberId): void {
    const playableSound: Optional<AbstractPlayableSound> = registry.sounds.generic.get(objectId);

    if (playableSound !== null) {
      if (!playableSound.is_playing(objectId)) {
        playableSound.callback(objectId);
        registry.sounds.generic.delete(objectId);
      }
    }
  }

  /**
   * todo: Description.
   */
  public playLoopedSound(objectId: TNumberId, sound: TName): void {
    const soundTheme: Optional<AbstractPlayableSound> = registry.sounds.themes.get(sound);

    if (soundTheme === null) {
      abort("play_sound_looped. Wrong sound theme [%s], npc[%s]", tostring(sound), objectId);
    } else if (soundTheme.type !== "looped") {
      abort("You trying to play sound [%s] which type is not looped", sound);
    }

    const loopedItem = registry.sounds.looped.get(objectId);

    if (loopedItem !== null && loopedItem.get(sound) !== null && loopedItem.get(sound).is_playing(objectId)) {
      return;
    }

    if (soundTheme.play(objectId)) {
      let newItem = loopedItem;

      if (newItem === null) {
        newItem = new LuaTable();
        registry.sounds.looped.set(objectId, newItem);
      }

      newItem.set(sound, soundTheme);
    }
  }

  /**
   * todo: Description.
   */
  public stopLoopedSound(objectId: TNumberId, sound: Optional<TName>): void {
    const looped_item = registry.sounds.looped.get(objectId);
    const looped_sound_item = looped_item.get(sound as string);

    if (sound !== null) {
      if (type(looped_sound_item) !== "string") {
        if (looped_sound_item && looped_sound_item.is_playing(objectId)) {
          looped_sound_item.stop();
          looped_item.delete(sound);
        }
      }
    } else {
      if (looped_item !== null) {
        for (const [k, v] of pairs(looped_item)) {
          if (v && type(v) !== "string" && v.is_playing(objectId)) {
            v.stop();
          }
        }

        registry.sounds.looped.delete(objectId);
      }
    }
  }

  /**
   * todo: Description.
   */
  public setLoopedSoundVolume(objectId: TNumberId, sound: TName, volume: TRate): void {
    const loopedSound = registry.sounds.looped.get(objectId);

    if (loopedSound !== null) {
      const soundItem = loopedSound.get(sound);

      if (soundItem && soundItem.is_playing(objectId)) {
        soundItem.set_volume(volume);
      }
    }
  }

  /**
   * todo: Description.
   */
  public stopAllSounds(): void {
    for (const [k, v] of registry.sounds.generic) {
      if (type(v) !== "string") {
        v.stop();
      }
    }

    for (const [k, v] of registry.sounds.looped) {
      for (const [kk, vv] of registry.sounds.looped.get(k)) {
        if (vv && vv.is_playing()) {
          vv.stop();
        }
      }
    }
  }

  /**
   * todo: Description.
   */
  public saveActor(packet: XR_net_packet): void {
    setSaveMarker(packet, false, GlobalSoundManager.name + "Actor");

    for (const [k, v] of registry.sounds.themes) {
      v.save(packet);
    }

    let n: number = 0;

    for (const [k, v] of registry.sounds.generic) {
      n = n + 1;
    }

    packet.w_u16(n);

    for (const [k, v] of registry.sounds.generic) {
      packet.w_u16(k as number);
      /* --[[
      if(type(v.section) !== "string") then
      thread:w_stringZ(v)
    } else {
    ]] */
      packet.w_stringZ(v.section);
      // --        }
    }

    n = 0;
    for (const [k, v] of registry.sounds.looped) {
      n = n + 1;
    }

    packet.w_u16(n);

    for (const [k, v] of registry.sounds.looped) {
      packet.w_u16(k);
      n = 0;
      for (const [kk, vv] of registry.sounds.looped.get(k)) {
        n = n + 1;
      }

      packet.w_u16(n);
      for (const [kk, vv] of registry.sounds.looped.get(k)) {
        packet.w_stringZ(kk);
        /* --[[
      if(type(vv.section) !== "string") {
        thread.w_stringZ(vv)
      } else {
        thread.w_stringZ(vv.section)
      }
    ]] */
      }
    }

    setSaveMarker(packet, true, GlobalSoundManager.name + "Actor");
  }

  /**
   * todo: Description.
   */
  public override save(packet: XR_net_packet): void {
    setSaveMarker(packet, false, GlobalSoundManager.name);

    for (const [k, v] of registry.sounds.themes) {
      v.save(packet);
    }

    let n = 0;

    for (const [k, v] of registry.sounds.generic) {
      n = n + 1;
    }

    packet.w_u16(n);

    for (const [k, v] of registry.sounds.generic) {
      packet.w_u16(k as number);
      /* --[[
      if(type(v.section)!=="string") {
        thread:w_stringZ(v)
      } else {
      ]] */
      packet.w_stringZ(v.section);
      //  --        end
    }

    n = 0;

    for (const [k, v] of registry.sounds.looped) {
      n = n + 1;
    }

    packet.w_u16(n);

    for (const [k, v] of registry.sounds.looped) {
      packet.w_u16(k);
      n = 0;

      for (const [kk, vv] of registry.sounds.looped.get(k)) {
        n = n + 1;
      }

      packet.w_u16(n);

      for (const [kk, vv] of registry.sounds.looped.get(k)) {
        packet.w_stringZ(kk);
        /* --[[
        if(type(vv.section)!=="string") {
          packet:w_stringZ(vv)
        } else {
          packet:w_stringZ(vv.section)
        }
      ]]*/
      }
    }

    setSaveMarker(packet, true, GlobalSoundManager.name);
  }

  /**
   * todo: Description.
   */
  public loadActor(reader: XR_reader): void {
    setLoadMarker(reader, false, GlobalSoundManager.name + "Actor");

    for (const [k, v] of registry.sounds.themes) {
      v.load(reader);
    }

    registry.sounds.generic = new LuaTable();

    let n: number = reader.r_u16();

    for (const i of $range(1, n)) {
      const id = reader.r_u16();
      const theme = reader.r_stringZ();

      // --        sound_table[id] = thread:r_stringZ()
      registry.sounds.generic.set(id, registry.sounds.themes.get(theme));
    }

    registry.sounds.looped = new LuaTable();
    n = reader.r_u16();

    for (const i of $range(1, n)) {
      const id = reader.r_u16();

      registry.sounds.looped.set(id, new LuaTable());
      n = reader.r_u16();
      for (const j of $range(1, n)) {
        const sound = reader.r_stringZ();

        // --            looped_sound[id][sound] = thread:r_stringZ()
        registry.sounds.looped.get(id).set(sound, registry.sounds.themes.get(sound));
      }
    }

    setLoadMarker(reader, true, GlobalSoundManager.name + "Actor");
  }

  /**
   * todo: Description.
   */
  public saveForObjectId(packet: XR_net_packet, objectId: TNumberId): void {
    setSaveMarker(packet, false, GlobalSoundManager.name + "Object");

    for (const [k, v] of registry.sounds.themes) {
      v.save_npc(packet, objectId);
    }

    setSaveMarker(packet, true, GlobalSoundManager.name + "Object");
  }

  /**
   * todo: Description.
   */
  public loadForObjectId(reader: XR_reader, objectId: TNumberId): void {
    setLoadMarker(reader, false, GlobalSoundManager.name + "Object");

    for (const [name, theme] of registry.sounds.themes) {
      theme.load_npc(reader, objectId);
    }

    setLoadMarker(reader, true, GlobalSoundManager.name + "Object");
  }
}
