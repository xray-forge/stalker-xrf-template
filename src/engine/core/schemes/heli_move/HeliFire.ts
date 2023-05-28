import {
  CHelicopter,
  CScriptXmlInit,
  CUIGameCustom,
  CUIProgressBar,
  get_hud,
  level,
  StaticDrawableWrapper,
  time_global,
} from "xray16";

import { getIdBySid, registry } from "@/engine/core/database";
import { randomChoice } from "@/engine/core/utils/general";
import { LuaLogger } from "@/engine/core/utils/logging";
import { distanceBetween2d } from "@/engine/core/utils/vector";
import { MAX_U16 } from "@/engine/lib/constants/memory";
import { ACTOR, NIL } from "@/engine/lib/constants/words";
import { ClientObject, Optional, TDistance, TIndex, Vector, XmlInit } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);
const heliFirer: LuaTable<number, HeliFire> = new LuaTable();

export class HeliFire {
  public static readonly HELI_STATIC_UI_XML_PATH: string = "game\\heli\\heli_progress.xml";

  public object: ClientObject;
  public enemy_: Optional<string>;
  public enemy: Optional<ClientObject>;
  public enemyId: Optional<number>;
  public firePoint: Optional<Vector>;
  public flagByEnemy: boolean;
  public hitCount: number;
  public fireId: any;
  public enemyDie: boolean;
  public enemyTime: number;
  public updVis: number;
  public showHealth: boolean;

  public heliProgress: Optional<CUIProgressBar> = null;

  public constructor(object: ClientObject) {
    this.object = object;
    this.enemy_ = null;
    this.firePoint = null;
    this.enemy = null;
    this.enemyId = null;
    this.flagByEnemy = true;
    this.hitCount = 0;
    this.fireId = null;
    this.enemyDie = true;
    this.enemyTime = time_global();
    this.updVis = 0;
    this.showHealth = false;
  }

  public updateEnemyState(): void {
    const heli = this.object.get_helicopter();

    // --'    printf("update_enemy_state()")
    if (this.hitCount > 2) {
      this.hitCount = 0;
      this.flagByEnemy = true;
    }

    if (this.enemy && this.enemyDie && this.enemy_ === "all") {
      this.updateEnemyArr();
    }

    if (this.enemy && time_global() - this.enemyTime > this.updVis * 1000) {
      // --'printf("this.upd_vis  = %d", this.upd_vis);
      if (!heli.isVisible(this.enemy)) {
        if (this.enemy_ === "all") {
          this.updateEnemyArr();
        }
      }

      this.enemyTime = time_global();
    }

    if (this.enemy) {
      if (!heli.isVisible(this.enemy)) {
        this.flagByEnemy = true;
      }
    }

    this.setEnemy();
  }

  public csHeli(): void {
    const hud: CUIGameCustom = get_hud();
    const customStatic = hud.GetCustomStatic("cs_heli_health");

    if (customStatic === null) {
      hud.AddCustomStatic("cs_heli_health", true);

      const xml: XmlInit = new CScriptXmlInit();

      xml.ParseFile(HeliFire.HELI_STATIC_UI_XML_PATH);

      const st = hud.GetCustomStatic("cs_heli_health")!;
      const w = st.wnd();

      this.heliProgress = xml.InitProgressBar("heli_health", w);
      this.setCsHeliProgressHealth();
    }
  }

  public setCsHeliProgressHealth(): void {
    const heli = this.object.get_helicopter();
    const hud = get_hud();
    const customStatic = hud.GetCustomStatic("cs_heli_health");
    const xml = new CScriptXmlInit();

    xml.ParseFile(HeliFire.HELI_STATIC_UI_XML_PATH);

    if (customStatic) {
      hud.AddCustomStatic("cs_heli_health", true);

      const st = hud.GetCustomStatic("cs_heli_health")!;
      const w = st.wnd();
      const _progr = heli.GetfHealth() * 100;

      if (_progr > 0) {
        this.heliProgress!.Show(true);
        this.heliProgress!.SetProgressPos(_progr);
      } else {
        this.heliProgress!.Show(false);
        this.showHealth = false;
        hud.RemoveCustomStatic("cs_heli_health");
      }
    }
  }

  public csRemove(): void {
    const hud: CUIGameCustom = get_hud();
    const customStatic: Optional<StaticDrawableWrapper> = hud.GetCustomStatic("cs_heli_health");

    if (customStatic) {
      hud.RemoveCustomStatic("cs_heli_health");
    }
  }

  public setEnemy(): void {
    const heli = this.object.get_helicopter();

    if (this.flagByEnemy) {
      heli.ClearEnemy();
      // --'printf("ClearEnemy()")
      this.enemyDie = false;
      if (this.enemy) {
        if (heli.isVisible(this.enemy)) {
          heli.SetEnemy(this.enemy);
          this.flagByEnemy = false;
        }
      } else {
        if (this.enemy_) {
          if (this.enemy_ === ACTOR) {
            this.enemy = registry.actor;
          } else {
            if (this.enemy_ === "all") {
              this.updateEnemyArr();
            } else {
              if (this.enemy_ !== NIL) {
                this.enemyId = getIdBySid(tonumber(this.enemy_)!);
                this.enemy = level.object_by_id(this.enemyId!);
              }
            }
          }
        }

        if (this.enemy) {
          heli.SetEnemy(this.enemy!);
          // --'printf("set_enemy(this.enemy, actor or SID)")
        } else {
          this.enemyDie = true;
        }

        this.flagByEnemy = false;
      }
    }

    if (!this.enemyDie && this.enemy!.death_time() > 0) {
      // --'printf("ClearEnemy()")
      heli.ClearEnemy();
      this.enemyDie = true;
    }

    if (this.enemyDie && this.firePoint) {
      heli.SetEnemy(this.firePoint);
    }
  }

  public updateHit(): void {
    if (this.showHealth) {
      this.setCsHeliProgressHealth();
    } else {
      this.csRemove();
    }

    if (this.enemy!.id() === this.fireId) {
      if (this.enemy_ !== NIL) {
        this.hitCount = this.hitCount + 1;
      } else {
        this.hitCount = 0;
      }
    } else {
      this.fireId = this.enemy!.id();
      this.hitCount = 1;
    }
  }

  public updateEnemyArr(): void {
    const heli: CHelicopter = this.object.get_helicopter();
    let index: TIndex = 0;
    let minDist2D: TDistance = MAX_U16;

    while (index < registry.helicopter.enemyIndex) {
      if (registry.helicopter.enemies.has(index)) {
        const enemy: ClientObject = registry.helicopter.enemies.get(index);

        if (heli.isVisible(enemy)) {
          if (distanceBetween2d(this.object.position(), enemy.position()) < minDist2D) {
            this.enemy = enemy;
            minDist2D = distanceBetween2d(this.object.position(), enemy.position());
            this.flagByEnemy = true;
          }
        }
      }

      index += 1;
    }

    const actor: ClientObject = registry.actor;

    if ((heli.isVisible(actor) && randomChoice(false, true)) || registry.helicopter.enemyIndex === 0) {
      if (distanceBetween2d(this.object.position(), actor.position()) <= minDist2D * 2) {
        this.enemy = actor;
      }
    }
  }
}

export function getHeliFirer(object: ClientObject): HeliFire {
  if (heliFirer.get(object.id()) === null) {
    heliFirer.set(object.id(), new HeliFire(object));
  }

  return heliFirer.get(object.id());
}
