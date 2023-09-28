import { registry } from "@/engine/core/database";
import { GlobalSoundManager } from "@/engine/core/managers/sounds/GlobalSoundManager";
import { ISchemeAbuseState } from "@/engine/core/schemes/stalker/abuse";
import { ISchemeMeetState } from "@/engine/core/schemes/stalker/meet";
import { MeetManager } from "@/engine/core/schemes/stalker/meet/MeetManager";
import { ISchemeWoundedState } from "@/engine/core/schemes/stalker/wounded";
import { pickSectionFromCondList } from "@/engine/core/utils/ini";
import { LuaLogger } from "@/engine/core/utils/logging";
import { isObjectHelpingWounded, isObjectSearchingCorpse, isObjectWounded } from "@/engine/core/utils/object";
import { getObjectsRelationSafe } from "@/engine/core/utils/relation";
import { FALSE, NIL, TRUE } from "@/engine/lib/constants/words";
import { ClientObject, EClientObjectRelation, EScheme, Optional, TCount, TName } from "@/engine/lib/types";

const logger: LuaLogger = new LuaLogger($filename, { file: "meet" });

/**
 * todo: Description.
 */
export function updateObjectMeetAvailability(object: ClientObject): void {
  if (isObjectWounded(object.id())) {
    if (object.relation(registry.actor) === EClientObjectRelation.ENEMY) {
      object.disable_talk();
    } else {
      const state: Optional<ISchemeWoundedState> = registry.objects.get(object.id())[
        EScheme.WOUNDED
      ] as ISchemeWoundedState;

      if (state.isTalkEnabled) {
        object.enable_talk();
      } else {
        object.disable_talk();
      }
    }

    return;
  }

  const state: ISchemeMeetState = registry.objects.get(object.id())[EScheme.MEET] as ISchemeMeetState;
  const use: Optional<string> = state.meetManager.use;

  if (use === TRUE) {
    if (isObjectSearchingCorpse(object) || isObjectHelpingWounded(object)) {
      object.disable_talk();
    } else {
      object.enable_talk();
    }
  } else if (use === FALSE) {
    object.disable_talk();

    if (object.is_talking()) {
      object.stop_talk();
    }
  }
}

/**
 * Handle meet interaction with object.
 *
 * todo: Description.
 */
export function activateMeetWithObject(object: ClientObject): void {
  if (!object.alive()) {
    return;
  }

  const state: Optional<ISchemeMeetState> = registry.objects.get(object.id())[EScheme.MEET] as ISchemeMeetState;

  if (state === null) {
    return;
  }

  logger.format("Activate meet interaction: '%s'", object.name());

  const actor: ClientObject = registry.actor;
  const sound: Optional<TName> = pickSectionFromCondList(actor, object, state.useSound);

  if (tostring(sound) !== NIL) {
    logger.format("Play meet sound: '%s' - '%s'", object.name(), sound);
    GlobalSoundManager.getInstance().playSound(object.id(), sound);
  }

  const meetManager: MeetManager = state.meetManager;

  if (
    meetManager.use === FALSE &&
    meetManager.isAbuseModeEnabled === TRUE &&
    getObjectsRelationSafe(object, actor) !== EClientObjectRelation.ENEMY
  ) {
    addObjectAbuse(object, 1);
  }
}

/**
 * Increment abuse for object.
 *
 * @param object - target client object
 * @param value - count of abuse to add
 */
export function addObjectAbuse(object: ClientObject, value: TCount): void {
  const abuseState: Optional<ISchemeAbuseState> = registry.objects.get(object.id())[EScheme.ABUSE] as ISchemeAbuseState;

  abuseState?.abuseManager.addAbuse(value);
}

/**
 * Clear abuse state for object.
 *
 * @param object - target client object
 */
export function clearObjectAbuse(object: ClientObject): void {
  const state: Optional<ISchemeAbuseState> = registry.objects.get(object.id())[EScheme.ABUSE] as ISchemeAbuseState;

  state?.abuseManager.clearAbuse();
}

/**
 * Set object abuse state.
 *
 * @param object - target client object
 * @param isEnabled - whether object abuse state should be enabled
 */
export function setObjectAbuseState(object: ClientObject, isEnabled: boolean): void {
  const state: Optional<ISchemeAbuseState> = registry.objects.get(object.id())[EScheme.ABUSE] as ISchemeAbuseState;

  if (isEnabled) {
    state?.abuseManager.enableAbuse();
  } else {
    state?.abuseManager.disableAbuse();
  }
}
