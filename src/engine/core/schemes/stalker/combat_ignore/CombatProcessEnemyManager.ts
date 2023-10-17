import { ILogicsOverrides, registry } from "@/engine/core/database";
import { AbstractSchemeManager } from "@/engine/core/objects/ai/scheme";
import { SmartTerrain } from "@/engine/core/objects/server/smart_terrain/SmartTerrain";
import { combatConfig } from "@/engine/core/schemes/stalker/combat/CombatConfig";
import { ISchemeCombatIgnoreState } from "@/engine/core/schemes/stalker/combat_ignore/index";
import { canObjectSelectAsEnemy } from "@/engine/core/schemes/stalker/danger/utils";
import { LuaLogger } from "@/engine/core/utils/logging";
import { startSmartTerrainAlarm } from "@/engine/core/utils/smart_terrain";
import { ACTOR_ID } from "@/engine/lib/constants/ids";
import { MAX_U16 } from "@/engine/lib/constants/memory";
import { GameObject, Optional, ServerCreatureObject, TCount, TNumberId, Vector } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export class CombatProcessEnemyManager extends AbstractSchemeManager<ISchemeCombatIgnoreState> {
  /**
   * todo: Description.
   */
  public onObjectEnemy(object: GameObject, enemy: GameObject): boolean {
    if (enemy.id() === ACTOR_ID) {
      registry.actorCombat.set(object.id(), true);
    }

    const canSelectEnemy: boolean = canObjectSelectAsEnemy(object, enemy);

    if (canSelectEnemy) {
      const serverObject: Optional<ServerCreatureObject> = registry.simulator.object(object.id());

      /**
       * Set alarm if object is in smart zone.
       */
      if (serverObject && serverObject.m_smart_terrain_id !== MAX_U16) {
        const smartTerrain: SmartTerrain = registry.simulator.object<SmartTerrain>(serverObject.m_smart_terrain_id)!;

        startSmartTerrainAlarm(smartTerrain);

        if (enemy.id() === ACTOR_ID && smartTerrain.smartTerrainActorControl !== null) {
          smartTerrain.smartTerrainActorControl.onActorAttackSmartTerrain();
        }
      }

      const serverEnemyObject: Optional<ServerCreatureObject> = registry.simulator.object(enemy.id());

      // todo: Do timer based.
      if (serverObject && serverEnemyObject) {
        if (serverObject.position.distance_to_sqr(serverEnemyObject.position) > combatConfig.ATTACK_DISTANCE_SQR) {
          return false;
        }
      }
    }

    return canSelectEnemy;
  }

  /**
   * todo: Description.
   */
  public override onHit(
    object: GameObject,
    amount: TCount,
    direction: Vector,
    who: GameObject,
    boneId: TNumberId
  ): void {
    if (who === null || amount === 0) {
      return;
    }

    if (who.id() === ACTOR_ID) {
      const overrides: Optional<ILogicsOverrides> = this.state.overrides;

      if (!overrides || !overrides.combatIgnoreKeepWhenAttacked) {
        this.state.enabled = false;
      }
    }
  }
}
