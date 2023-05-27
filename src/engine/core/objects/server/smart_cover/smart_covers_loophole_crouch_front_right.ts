import { ISmartCoverLoopholeDescriptor } from "@/engine/core/objects/server/smart_cover/smart_covers_list";
import { createVector } from "@/engine/core/utils/vector";
import { Optional, TStringId, Vector } from "@/engine/lib/types";

export function get_crouch_front_right_loophole(
  id: TStringId,
  fov_direction: Vector,
  position?: Optional<Vector>,
  enter_direction?: Optional<Vector>
): ISmartCoverLoopholeDescriptor {
  const pos: Vector = position || createVector(0, 0, 0);
  const enter_dir: Vector = enter_direction || createVector(-1, 0, 0);

  return {
    id: id,
    fov_position: pos,
    fov_direction: fov_direction,
    danger_fov_direction: createVector(-1, 0, 1),
    enter_direction: enter_dir,
    enterable: true,
    exitable: true,
    usable: true,
    fov: 70.0,
    danger_fov: 90.0,
    range: 70.0,
    actions: {
      idle: {
        animations: {
          idle: ["loophole_crouch_front_right_idle_0"],
        },
      },
      lookout: {
        animations: {
          idle: ["loophole_crouch_front_right_look_idle_0"],
        },
      },
      fire: {
        animations: {
          idle: ["loophole_crouch_front_right_attack_idle_0"],
          shoot: ["loophole_crouch_front_right_attack_shoot_0", "loophole_crouch_front_right_attack_shoot_1"],
        },
      },
      fire_no_lookout: {
        animations: {
          idle: ["loophole_crouch_front_right_attack_idle_0"],
          shoot: ["loophole_crouch_front_right_attack_shoot_0", "loophole_crouch_front_right_attack_shoot_1"],
        },
      },
      reload: {
        animations: {
          idle: ["loophole_crouch_front_right_reload_0"],
        },
      },
    },
    transitions: [
      {
        action_from: "idle",
        action_to: "lookout",
        weight: 1.2,
        animations: ["loophole_crouch_front_right_look_in_0"],
      },
      {
        action_from: "lookout",
        action_to: "idle",
        weight: 1.2,
        animations: ["loophole_crouch_front_right_look_out_0"],
      },
      {
        action_from: "idle",
        action_to: "fire",
        weight: 1.2,
        animations: ["loophole_crouch_front_right_attack_in_0"],
      },
      {
        action_from: "fire",
        action_to: "idle",
        weight: 1.2,
        animations: ["loophole_crouch_front_right_attack_out_0"],
      },
      {
        action_from: "idle",
        action_to: "fire_no_lookout",
        weight: 1.2,
        animations: ["loophole_crouch_front_right_attack_in_0"],
      },
      {
        action_from: "fire_no_lookout",
        action_to: "idle",
        weight: 1.2,
        animations: ["loophole_crouch_front_right_attack_out_0"],
      },
    ],
  };
}
