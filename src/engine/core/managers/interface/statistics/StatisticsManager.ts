import { alife, clsid } from "xray16";

import { getPortableStoreValue, registry, setPortableStoreValue } from "@/engine/core/database";
import { AbstractCoreManager } from "@/engine/core/managers/base/AbstractCoreManager";
import type { TaskObject } from "@/engine/core/managers/interaction/tasks";
import type { IActorStatistics } from "@/engine/core/managers/interface/statistics/statistics_types";
import type { ITreasureDescriptor } from "@/engine/core/managers/world/TreasureManager";
import { assert } from "@/engine/core/utils/assertion";
import { LuaLogger } from "@/engine/core/utils/logging";
import { getTableSize } from "@/engine/core/utils/table";
import { TInventoryItem } from "@/engine/lib/constants/items";
import { TArtefact } from "@/engine/lib/constants/items/artefacts";
import { TWeapon, weapons } from "@/engine/lib/constants/items/weapons";
import { TMonster } from "@/engine/lib/constants/monsters";
import { NIL } from "@/engine/lib/constants/words";
import {
  ClientObject,
  NetPacket,
  NetProcessor,
  Optional,
  PartialRecord,
  ServerCreatureObject,
  ServerObject,
  StringOptional,
  TClassId,
  TCount,
  TName,
  TNumberId,
  TRate,
} from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Manager to measure game statistics of actions done by actor.
 */
export class StatisticsManager extends AbstractCoreManager {
  public static readonly USED_ANABIOTICS_COUNT_KEY: TName = "anabiotics_used";

  public actorStatistics: IActorStatistics = {
    surgesCount: 0,
    completedQuestsCount: 0,
    killedMonstersCount: 0,
    killedStalkersCount: 0,
    collectedTreasuresCount: 0,
    collectedArtefactsCount: 0,
    bestKilledMonster: null,
    bestKilledMonsterRank: 0,
    favoriteWeapon: null,
    collectedArtefacts: new LuaTable(),
  };

  public weaponsStatistics: LuaTable<TName, TCount> = $fromObject<TName, TCount>({
    abakan: 0,
    ak74: 0,
    ak74u: 0,
    beretta: 0,
    bm16: 0,
    colt1911: 0,
    desert: 0,
    f1: 0,
    fn2000: 0,
    fort: 0,
    g36: 0,
    gauss: 0,
    groza: 0,
    hpsa: 0,
    knife: 0,
    l85: 0,
    lr300: 0,
    mp5: 0,
    pb: 0,
    pkm: 0,
    pm: 0,
    protecta: 0,
    rg: 0,
    rgd5: 0,
    rpg7: 0,
    sig220: 0,
    sig550: 0,
    spas12: 0,
    svd: 0,
    svu: 0,
    toz34: 0,
    usp45: 0,
    val: 0,
    vintorez: 0,
    walther: 0,
    wincheaster1300: 0,
  });

  public takenArtefacts: LuaTable<TNumberId, TNumberId> = new LuaTable();

  public monsterClassesMap: PartialRecord<TClassId, TName> = {
    [clsid.bloodsucker_s]: "bloodsucker",
    [clsid.boar_s]: "boar",
    [clsid.burer_s]: "burer",
    [clsid.chimera_s]: "chimera",
    [clsid.controller_s]: "controller",
    [clsid.dog_s]: "dog",
    [clsid.flesh_s]: "flesh",
    [clsid.gigant_s]: "gigant",
    [clsid.poltergeist_s]: "poltergeist",
    [clsid.psy_dog_s]: "psy_dog",
    [clsid.pseudodog_s]: "pseudodog",
    [clsid.snork_s]: "snork",
    [clsid.tushkano_s]: "tushkano",
  };

  /**
   * Get count of used anabiotics from pstore.
   *
   * @returns count of used anabiotics
   */
  public getUsedAnabioticsCount(): TCount {
    return getPortableStoreValue(registry.actor, StatisticsManager.USED_ANABIOTICS_COUNT_KEY, 0);
  }

  /**
   * Handle usage of anabiotic during emission.
   */
  public onAnabioticUsed(): void {
    logger.info("Increment used anabiotics count");

    setPortableStoreValue(
      registry.actor,
      StatisticsManager.USED_ANABIOTICS_COUNT_KEY,
      getPortableStoreValue(registry.actor, StatisticsManager.USED_ANABIOTICS_COUNT_KEY, 0) + 1
    );
  }

  /**
   * Handle task completion by an actor.
   *
   * @param task - completed task object
   */
  public onTaskCompleted(task: TaskObject): void {
    logger.info("Increment completed quests count");
    this.actorStatistics.completedQuestsCount += 1;
  }

  /**
   * Handle artefact pick up event.
   *
   * @param artefact - target client object picked up
   */
  public onArtefactCollected(artefact: ClientObject): void {
    logger.info("Increment collected artefacts count");

    const artefactId: TNumberId = artefact.id();

    if (!this.takenArtefacts.has(artefactId)) {
      this.actorStatistics.collectedArtefactsCount += 1;
      this.takenArtefacts.set(artefactId, artefactId);

      // todo: Probably section vs section name should be checked and simplified.
      const serverObject: Optional<ServerObject> = alife().object(artefactId);

      if (serverObject && serverObject.section_name()) {
        this.actorStatistics.collectedArtefacts.set(serverObject.section_name(), true);
      }
    }
  }

  /**
   * Increment count of survived surges.
   * Surge passed.
   */
  public onSurgePassed(): void {
    logger.info("Increment surges count");
    this.actorStatistics.surgesCount += 1;
  }

  /**
   * Handle actor found treasure.
   *
   * @param treasure - found treasure secret
   */
  public onTreasureFound(treasure: ITreasureDescriptor): void {
    logger.info("Increment collected secrets count");
    this.actorStatistics.collectedTreasuresCount += 1;
  }

  /**
   * Handle stalker kill event and update stats.
   *
   * @param object - object killed by an actor
   */
  public onStalkerKilledByActor(object: ClientObject): void {
    this.actorStatistics.killedStalkersCount += 1;
  }

  /**
   * Handle object hit by an actor and collect statistics.
   *
   * @param amount - amount of damage done
   * @param object - client object
   */
  public onObjectHitByActor(amount: TCount, object: ClientObject): void {
    const activeActorItem: Optional<ClientObject> = registry.actor.active_item();

    if (activeActorItem) {
      const serverObject: Optional<ServerObject> = alife().object(activeActorItem.id());

      if (serverObject) {
        const sectionName: TName = serverObject.section_name();

        for (const weapon of string.gfind(sectionName, "%w+")) {
          const damage: Optional<TCount> = this.weaponsStatistics.get(weapon);

          if (damage !== null) {
            this.weaponsStatistics.set(weapon, damage + amount);
          }
        }
      }
    }

    let total: TCount = 0;

    // todo: Why so complex? Probably just use normal namings
    for (const [weapon, value] of this.weaponsStatistics) {
      if (value > total) {
        total = value;
        if (weapon === ("rgd5" as TInventoryItem) || weapon === ("f1" as TInventoryItem)) {
          this.actorStatistics.favoriteWeapon = ("grenade_" + weapon) as TWeapon;
        } else {
          this.actorStatistics.favoriteWeapon = ("wpn_" + weapon) as TWeapon;
        }

        if (weapon === ("desert" as TInventoryItem)) {
          this.actorStatistics.favoriteWeapon = weapons.wpn_desert_eagle;
        } else if (weapon === ("rg" as TInventoryItem)) {
          this.actorStatistics.favoriteWeapon = weapons["wpn_rg-6"];
        }
      }
    }
  }

  /**
   * Handle monster kill event and update stats.
   *
   * @param object - object killed by an actor
   */
  public onMonsterKilledByActor(object: ClientObject): void {
    let community: Optional<TName> = this.monsterClassesMap[object.clsid()] as Optional<TName>;

    assert(
      community,
      "Statistics error: cannot find monster class for [%s] clsid [%s].",
      object.name(),
      tostring(object.clsid())
    );

    const serverObject: Optional<ServerCreatureObject> = alife().object(object.id());

    // Increment count.
    this.actorStatistics.killedMonstersCount += 1;

    if (serverObject) {
      const rank: TRate = serverObject.rank();

      if (community === "flesh") {
        if (rank === 3) {
          community = community + "_strong";
        } else {
          community = community + "_weak";
        }
      } else if (community === "poltergeist") {
        if (rank === 12) {
          community = community + "_flame";
        } else {
          community = community + "_tele";
        }
      } else if (community === "boar") {
        if (rank === 6) {
          community = community + "_strong";
        } else {
          community = community + "_weak";
        }
      } else if (community === "pseudodog" || community === "psy_dog") {
        if (rank === 13) {
          community = community + "_strong";
        } else {
          community = community + "_weak";
        }
      } else if (community === "bloodsucker") {
        if (rank === 16) {
          community = community + "_strong";
        } else if (rank === 15) {
          community = community + "_normal";
        } else {
          community = community + "_weak";
        }
      }

      if (rank > this.actorStatistics.bestKilledMonsterRank) {
        logger.info("Updated best monster killed:", community, rank);

        this.actorStatistics.bestKilledMonsterRank = rank;
        this.actorStatistics.bestKilledMonster = community as TMonster;
      }
    }
  }

  public override load(reader: NetProcessor): void {
    this.actorStatistics = {} as IActorStatistics;
    this.actorStatistics.surgesCount = reader.r_u16();
    this.actorStatistics.completedQuestsCount = reader.r_u16();
    this.actorStatistics.killedMonstersCount = reader.r_u32();
    this.actorStatistics.killedStalkersCount = reader.r_u32();
    this.actorStatistics.collectedTreasuresCount = reader.r_u16();
    this.actorStatistics.collectedArtefactsCount = reader.r_u16();
    this.actorStatistics.bestKilledMonsterRank = reader.r_u32();

    const bestMonster: StringOptional<TMonster> = reader.r_stringZ();

    this.actorStatistics.bestKilledMonster = bestMonster === NIL ? null : bestMonster;

    const favoriteWeapon: StringOptional<TWeapon> = reader.r_stringZ();

    this.actorStatistics.favoriteWeapon = favoriteWeapon === NIL ? null : favoriteWeapon;

    this.weaponsStatistics = new LuaTable();

    const weaponsCount: number = reader.r_u8();

    for (const it of $range(1, weaponsCount)) {
      const k: TWeapon = reader.r_stringZ();
      const v: TCount = reader.r_float();

      this.weaponsStatistics.set(k, v);
    }

    this.actorStatistics.collectedArtefacts = new LuaTable();

    const artefactsCount = reader.r_u8();

    for (const it of $range(1, artefactsCount)) {
      const k: TArtefact = reader.r_stringZ();
      const v: boolean = reader.r_bool();

      this.actorStatistics.collectedArtefacts.set(k, v);
    }

    this.takenArtefacts = new LuaTable();

    const takenArtefactsCount: TCount = reader.r_u8();

    for (const it of $range(1, takenArtefactsCount)) {
      const k: TNumberId = reader.r_u32();

      this.takenArtefacts.set(k, k);
    }
  }

  public override save(packet: NetPacket): void {
    packet.w_u16(this.actorStatistics.surgesCount);
    packet.w_u16(this.actorStatistics.completedQuestsCount);
    packet.w_u32(this.actorStatistics.killedMonstersCount);
    packet.w_u32(this.actorStatistics.killedStalkersCount);
    packet.w_u16(this.actorStatistics.collectedTreasuresCount);
    packet.w_u16(this.actorStatistics.collectedArtefactsCount);
    packet.w_u32(this.actorStatistics.bestKilledMonsterRank);
    packet.w_stringZ(tostring(this.actorStatistics.bestKilledMonster));
    packet.w_stringZ(tostring(this.actorStatistics.favoriteWeapon));

    const weaponsCount: TCount = getTableSize(this.weaponsStatistics);

    packet.w_u8(weaponsCount);

    for (const [k, v] of this.weaponsStatistics) {
      packet.w_stringZ(tostring(k));
      packet.w_float(v);
    }

    const artefactsCount: TCount = getTableSize(this.actorStatistics.collectedArtefacts);

    packet.w_u8(artefactsCount);

    for (const [k, v] of this.actorStatistics.collectedArtefacts) {
      packet.w_stringZ(tostring(k));
      packet.w_bool(v === true);
    }

    const takenArtefactsCount: TCount = getTableSize(this.takenArtefacts);

    packet.w_u8(takenArtefactsCount);
    for (const [k, v] of this.takenArtefacts) {
      packet.w_u32(k);
    }
  }
}
