import { registry } from "@/engine/core/database";
import { SmartTerrain } from "@/engine/core/objects";
import { jobPreconditionAnimpoint } from "@/engine/core/utils/job/job_precondition";
import { EJobPathType, EJobType, TSmartTerrainJobsList } from "@/engine/core/utils/job/job_types";
import { isPatrolInRestrictor } from "@/engine/core/utils/patrol";
import { StringBuilder } from "@/engine/core/utils/string";
import { logicsConfig } from "@/engine/lib/configs/LogicsConfig";
import { TIndex, TName } from "@/engine/lib/types";

/**
 * Create animpoint jobs for stalkers in smart terrain.
 *
 * @param smartTerrain - smart terrain to create default animpoint jobs for
 * @param jobs - list of smart terrain jobs to insert into
 * @param builder - builder of large ltx file
 * @returns cover jobs list and updated string builder
 */
export function createStalkerAnimpointJobs(
  smartTerrain: SmartTerrain,
  jobs: TSmartTerrainJobsList,
  builder: StringBuilder
): LuaMultiReturn<[TSmartTerrainJobsList, StringBuilder]> {
  const smartTerrainName: TName = smartTerrain.name();

  let index: TIndex = 1;

  while (registry.smartCovers.get(string.format("%s_animpoint_%s", smartTerrainName, index)) !== null) {
    const smartCoverName: TName = string.format("%s_animpoint_%s", smartTerrainName, index);

    table.insert(jobs, {
      type: EJobType.ANIMPOINT,
      isMonsterJob: false,
      priority: logicsConfig.JOBS.STALKER_ANIMPOINT.PRIORITY,
      section: string.format("logic@%s", smartCoverName),
      pathType: EJobPathType.SMART_COVER,
      preconditionParameters: {},
      preconditionFunction: jobPreconditionAnimpoint,
    });

    builder.append(
      string.format(
        `[logic@%s]
active = animpoint@%s
[animpoint@%s]
meet = meet@generic_animpoint
cover_name = %s
`,
        smartCoverName,
        smartCoverName,
        smartCoverName,
        smartCoverName
      )
    );

    if (smartTerrain.defendRestrictor !== null) {
      builder.append(string.format("out_restr = %s\n", smartTerrain.defendRestrictor));
    }

    // todo: Bad path name as third parameter? Bad smart.safe_restr?
    if (smartTerrain.safeRestrictor !== null && isPatrolInRestrictor(smartTerrain.safeRestrictor, null as any)) {
      builder.append("invulnerable = {=npc_in_zone(smart.safe_restr)} true\n");
    }

    if (smartTerrain.smartTerrainActorControl !== null && smartTerrain.smartTerrainActorControl.ignoreZone !== null) {
      // todo: Bad smart.base_on_actor_control.ignore_zone?
      builder.append(
        `combat_ignore_cond = {=npc_in_zone(smart.base_on_actor_control.ignore_zone)} true
combat_ignore_keep_when_attacked = true
`
      );
    }

    index += 1;
  }

  return $multi(jobs, builder);
}
