import { IObjectJobDescriptor } from "@/engine/core/utils/job/job_types";
import { LuaLogger } from "@/engine/core/utils/logging";
import { isStalker } from "@/engine/core/utils/object/object_class";
import { NIL } from "@/engine/lib/constants/words";
import { ESchemeType, ServerCreatureObject } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
export function createObjectJobDescriptor(object: ServerCreatureObject): IObjectJobDescriptor {
  logger.info("Create object job descriptor:", object.name());

  const isObjectStalker: boolean = isStalker(object);

  return {
    serverObject: object,
    isMonster: !isObjectStalker,
    desiredJob: NIL,
    jobPriority: -1,
    jobLink: null,
    jobId: -1,
    shouldBeginJob: false,
    schemeType: isObjectStalker ? ESchemeType.STALKER : ESchemeType.MONSTER,
  };
}
