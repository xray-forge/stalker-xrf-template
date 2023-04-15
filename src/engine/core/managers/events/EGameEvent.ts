/**
 * List of event to emit across the core.
 */
export enum EGameEvent {
  ACTOR_NET_SPAWN = 1,
  ACTOR_NET_DESTROY,
  ACTOR_UPDATE,
  ACTOR_INFO_UPDATE,
  ACTOR_TAKE_BOX_ITEM,
  ACTOR_ITEM_DROP,
  ACTOR_ITEM_TAKE,
  ACTOR_TRADE,
  ACTOR_USE_ITEM,
  ACTOR_START_SLEEP,
  ACTOR_FINISH_SLEEP,
  SURGE_ENDED,
  SURGE_SKIPPED,
  TASK_STATE_UPDATE,
  HIT,
  MONSTER_HIT,
  NPC_HIT,
  ENEMY_SEE_ACTOR,
  ACTOR_SEE_ENEMY,
  NPC_SHOT_ACTOR,
  MAIN_MENU_ON,
  MAIN_MENU_OFF,
}
