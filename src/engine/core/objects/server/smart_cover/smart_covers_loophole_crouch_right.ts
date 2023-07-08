import { ISmartCoverLoopholeDescriptor } from "@/engine/core/objects/server/smart_cover/smart_covers_list";
import { createEmptyVector, createVector } from "@/engine/core/utils/vector";
import { TStringId, Vector } from "@/engine/lib/types";

/**
 * todo;
 */
export function getCrouchRightLoophole(
  id: TStringId,
  fovDirection: Vector,
  position?: Vector,
  enterDirection?: Vector
): ISmartCoverLoopholeDescriptor {
  const pos: Vector = position || createEmptyVector();
  const enterDir: Vector = enterDirection || createVector(-1, 0, 0);

  return {
    id: id,
    fov_position: pos,
    fov_direction: fovDirection,
    enter_direction: enterDir,
    enterable: true,
    exitable: true,
    usable: true,
    fov: 90.0,
    range: 50.0,
    actions: {
      idle: {
        animations: {
          idle: ["loophole_crouch_back_idle_0"],
        },
      },
      lookout: {
        animations: {
          idle: ["loophole_crouch_back_idle_0"],
        },
      },
      fire: {
        animations: {
          idle: ["loophole_crouch_back_attack_idle_0"],
          shoot: ["loophole_crouch_back_attack_shoot_0", "loophole_crouch_back_attack_shoot_1"],
        },
      },
      fire_no_lookout: {
        animations: {
          idle: ["loophole_crouch_back_attack_idle_0"],
          shoot: ["loophole_crouch_back_attack_shoot_0", "loophole_crouch_back_attack_shoot_1"],
        },
      },
      reload: {
        animations: {
          idle: ["loophole_crouch_back_reload_0"],
        },
      },
    },

    transitions: [
      {
        action_from: "idle",
        action_to: "lookout",
        weight: 1.2,
        animations: ["loophole_crouch_back_idle_0"],
      },
      {
        action_from: "lookout",
        action_to: "idle",
        weight: 1.2,
        animations: ["loophole_crouch_back_idle_0"],
      },
      {
        action_from: "idle",
        action_to: "fire",
        weight: 1.2,
        animations: ["loophole_crouch_back_attack_in_0"],
      },
      {
        action_from: "fire",
        action_to: "idle",
        weight: 1.2,
        animations: ["loophole_crouch_back_attack_out_0"],
      },
      {
        action_from: "idle",
        action_to: "fire_no_lookout",
        weight: 1.2,
        animations: ["loophole_crouch_back_attack_in_0"],
      },
      {
        action_from: "fire_no_lookout",
        action_to: "idle",
        weight: 1.2,
        animations: ["loophole_crouch_back_attack_out_0"],
      },
    ],
  };
}
