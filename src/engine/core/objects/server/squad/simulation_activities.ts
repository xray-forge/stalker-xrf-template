import { SurgeManager } from "@/engine/core/managers/world/SurgeManager";
import { ISimulationActivityDescriptor, SmartTerrain } from "@/engine/core/objects";
import { Squad } from "@/engine/core/objects/server/squad/Squad";
import { isInTimeInterval } from "@/engine/core/utils/game/game_time";
import { LuaLogger } from "@/engine/core/utils/logging";
import { getServerDistanceBetween } from "@/engine/core/utils/object";
import { hasAlifeInfo } from "@/engine/core/utils/object/object_info_portion";
import { isAnySquadMemberEnemyToActor } from "@/engine/core/utils/relation";
import { communities, TCommunity } from "@/engine/lib/constants/communities";
import { infoPortions } from "@/engine/lib/constants/info_portions";
import { storyNames } from "@/engine/lib/constants/story_names";
import { ServerObject, TName } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * Descriptor of faction activities based on simulation role.
 */
export const simulationActivities: LuaTable<TCommunity, ISimulationActivityDescriptor> = $fromObject({
  [communities.none]: {
    squad: null,
    smart: null,
    actor: null,
  },
  [communities.stalker]: {
    actor: null,
    smart: {
      base: {
        canSelect: (squad: Squad, target: SmartTerrain) => {
          const smartName: TName = target.name();

          return (
            isInTimeInterval(18, 8) &&
            !SurgeManager.getInstance().isStarted &&
            !isAnySquadMemberEnemyToActor(squad) &&
            (smartName === storyNames.zat_stalker_base_smart ||
              smartName === storyNames.jup_a6 ||
              smartName === storyNames.pri_a16)
          );
        },
      },
      surge: { canSelect: () => SurgeManager.getInstance().isStarted },
      territory: {
        canSelect: () => isInTimeInterval(8, 18) && !SurgeManager.getInstance().isStarted,
      },
      resource: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 18) && !SurgeManager.getInstance().isStarted,
      },
    },
    squad: null,
  },
  [communities.bandit]: {
    squad: {
      stalker: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 21) &&
          !SurgeManager.getInstance().isStarted &&
          getServerDistanceBetween(squad, target) <= 150,
      },
    },
    smart: {
      base: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(21, 8) &&
          !SurgeManager.getInstance().isStarted &&
          !isAnySquadMemberEnemyToActor(squad) &&
          (target.name() === storyNames.zat_stalker_base_smart || target.name() === storyNames.jup_a10_smart_terrain),
      },
      territory: {
        canSelect: () => isInTimeInterval(8, 21) && !SurgeManager.getInstance().isStarted,
      },
      surge: { canSelect: () => SurgeManager.getInstance().isStarted },
      resource: null,
    },
    actor: {
      canSelect: (squad: Squad, target: ServerObject) =>
        hasAlifeInfo(infoPortions.sim_bandit_attack_harder) && getServerDistanceBetween(squad, target) <= 150,
    },
  },
  [communities.dolg]: {
    squad: {
      freedom: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 19) &&
          !SurgeManager.getInstance().isStarted &&
          getServerDistanceBetween(squad, target) <= 150,
      },
      monster_predatory_day: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 19) &&
          !SurgeManager.getInstance().isStarted &&
          getServerDistanceBetween(squad, target) <= 150,
      },
      monster_predatory_night: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 19) &&
          !SurgeManager.getInstance().isStarted &&
          getServerDistanceBetween(squad, target) <= 150,
      },
      monster_vegetarian: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 19) &&
          !SurgeManager.getInstance().isStarted &&
          getServerDistanceBetween(squad, target) <= 150,
      },
      monster_zombied_day: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 19) &&
          !SurgeManager.getInstance().isStarted &&
          getServerDistanceBetween(squad, target) <= 150,
      },
      monster_special: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 19) &&
          !SurgeManager.getInstance().isStarted &&
          getServerDistanceBetween(squad, target) <= 150,
      },
    },
    smart: {
      base: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 8) &&
          !SurgeManager.getInstance().isStarted &&
          !isAnySquadMemberEnemyToActor(squad) &&
          (target.name() === storyNames.zat_stalker_base_smart ||
            target.name() === storyNames.jup_a6 ||
            target.name() === storyNames.pri_a16),
      },
      territory: {
        canSelect: () => isInTimeInterval(8, 19) && !SurgeManager.getInstance().isStarted,
      },
      surge: { canSelect: () => SurgeManager.getInstance().isStarted },
      resource: null,
    },
    actor: null,
  },
  [communities.freedom]: {
    squad: {
      dolg: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 19) &&
          !SurgeManager.getInstance().isStarted &&
          getServerDistanceBetween(squad, target) <= 150,
      },
    },
    smart: {
      base: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 8) &&
          !SurgeManager.getInstance().isStarted &&
          !isAnySquadMemberEnemyToActor(squad) &&
          (target.name() === storyNames.zat_stalker_base_smart ||
            target.name() === storyNames.jup_a6 ||
            target.name() === storyNames.pri_a16),
      },
      territory: {
        canSelect: () => isInTimeInterval(8, 19) && !SurgeManager.getInstance().isStarted,
      },
      surge: { canSelect: () => SurgeManager.getInstance().isStarted },
      resource: null,
    },
    actor: null,
  },
  [communities.killer]: {
    squad: null,
    smart: {
      territory: { canSelect: () => !SurgeManager.getInstance().isStarted },
      base: null,
      resource: null,
      surge: { canSelect: () => SurgeManager.getInstance().isStarted },
    },
    actor: {
      canSelect: (squad: Squad, target: ServerObject) => getServerDistanceBetween(squad, target) <= 150,
    },
  },
  [communities.zombied]: {
    squad: null,
    smart: { territory: { canSelect: () => true }, lair: { canSelect: () => true }, resource: null, base: null },
    actor: null,
  },
  [communities.monster_predatory_day]: {
    squad: {
      monster_vegetarian: { canSelect: () => isInTimeInterval(6, 19) },
      stalker: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
      bandit: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
      dolg: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
      freedom: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
      killer: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
    },
    smart: {
      territory: { canSelect: () => isInTimeInterval(6, 19) },
      lair: { canSelect: () => isInTimeInterval(19, 6) },
      base: null,
      resource: null,
    },
    actor: {
      canSelect: (squad: Squad, target: ServerObject) =>
        isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
    },
  },
  [communities.monster_predatory_night]: {
    squad: {
      monster_vegetarian: { canSelect: () => isInTimeInterval(21, 6) },
      stalker: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
      bandit: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
      dolg: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
      freedom: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
      killer: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
    },
    smart: {
      territory: { canSelect: () => isInTimeInterval(19, 6) },
      lair: { canSelect: () => isInTimeInterval(6, 19) },
      base: null,
      resource: null,
    },
    actor: {
      canSelect: (squad: Squad, target: ServerObject) =>
        isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
    },
  },
  [communities.monster_vegetarian]: {
    squad: null,
    smart: {
      lair: { canSelect: () => true },
      base: null,
      resource: null,
    },
    actor: {
      canSelect: (squad: Squad, target: ServerObject) =>
        isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
    },
  },
  [communities.monster_zombied_day]: {
    squad: {
      stalker: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
      bandit: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
      dolg: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
      freedom: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
      killer: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
      },
    },
    smart: {
      territory: { canSelect: () => !SurgeManager.getInstance().isStarted },
      lair: { canSelect: () => isInTimeInterval(19, 6) },
      base: null,
      resource: null,
    },
    actor: {
      canSelect: (squad: Squad, target: ServerObject) =>
        isInTimeInterval(6, 19) && getServerDistanceBetween(squad, target) <= 150,
    },
  },
  [communities.monster_zombied_night]: {
    squad: {
      stalker: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
      bandit: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
      dolg: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
      freedom: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
      killer: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
      },
    },
    smart: {
      territory: { canSelect: () => isInTimeInterval(19, 6) },
      lair: { canSelect: () => isInTimeInterval(6, 19) },
      base: null,
      resource: null,
    },
    actor: {
      canSelect: (squad: Squad, target: ServerObject) =>
        isInTimeInterval(19, 6) && getServerDistanceBetween(squad, target) <= 150,
    },
  },
  [communities.monster_special]: {
    squad: null,
    smart: { lair: { canSelect: () => true }, base: null, resource: null },
    actor: null,
  },
  [communities.monster]: {
    squad: null,
    smart: { lair: { canSelect: () => true }, base: null, resource: null },
    actor: null,
  },
  [communities.army]: {
    squad: null,
    smart: {
      base: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(18, 8) && !SurgeManager.getInstance().isStarted,
      },
      surge: { canSelect: () => SurgeManager.getInstance().isStarted },
      territory: {
        canSelect: () => isInTimeInterval(8, 18) && !SurgeManager.getInstance().isStarted,
      },
      resource: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 18) && !SurgeManager.getInstance().isStarted,
      },
    },
    actor: null,
  },
  [communities.ecolog]: {
    squad: null,
    smart: {
      base: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(18, 8) && !SurgeManager.getInstance().isStarted,
      },
      surge: { canSelect: () => SurgeManager.getInstance().isStarted },
      territory: {
        canSelect: () => isInTimeInterval(8, 18) && !SurgeManager.getInstance().isStarted,
      },
      resource: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 18) && !SurgeManager.getInstance().isStarted,
      },
    },
    actor: null,
  },
  [communities.monolith]: {
    squad: null,
    smart: {
      base: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(18, 8) && !SurgeManager.getInstance().isStarted,
      },
      surge: { canSelect: () => SurgeManager.getInstance().isStarted },
      territory: {
        canSelect: () => isInTimeInterval(8, 18) && !SurgeManager.getInstance().isStarted,
      },
      resource: {
        canSelect: (squad: Squad, target: ServerObject) =>
          isInTimeInterval(8, 18) && !SurgeManager.getInstance().isStarted,
      },
    },
    actor: null,
  },
}) as LuaTable<TCommunity, ISimulationActivityDescriptor>;
