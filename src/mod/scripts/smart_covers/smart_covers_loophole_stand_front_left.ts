import { vector, XR_vector } from "xray16";

import { Optional } from "@/mod/lib/types";
import { ISmartCoverLoopholeDescriptor } from "@/mod/scripts/smart_covers/smart_covers_list";

export function get_stand_front_left_loophole(
  id: string,
  fov_direction: XR_vector,
  position?: Optional<XR_vector>,
  enter_direction?: Optional<XR_vector>
): ISmartCoverLoopholeDescriptor {
  const pos = position || new vector().set(0, 0, 0);
  const enter_dir = enter_direction || new vector().set(-1, 0, 0);

  return {
    id: id,
    fov_position: pos,
    fov_direction: fov_direction,
    danger_fov_direction: new vector().set(-1, 0, -1),
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
          idle: ["loophole_stand_front_left_idle_0"],
        },
      },
      lookout: {
        animations: {
          idle: ["loophole_stand_front_left_look_idle_0"],
        },
      },
      fire: {
        animations: {
          idle: ["loophole_stand_front_left_attack_idle_0"],
          shoot: ["loophole_stand_front_left_attack_shoot_0", "loophole_stand_front_left_attack_shoot_1"],
        },
      },
      fire_no_lookout: {
        animations: {
          idle: ["loophole_stand_front_left_attack_idle_0"],
          shoot: ["loophole_stand_front_left_attack_shoot_0", "loophole_stand_front_left_attack_shoot_1"],
        },
      },
      reload: {
        animations: {
          idle: ["loophole_stand_front_left_reload_0"],
        },
      },
    },
    transitions: [
      {
        action_from: "idle",
        action_to: "lookout",
        weight: 1.2,
        animations: ["loophole_stand_front_left_look_in_0"],
      },
      {
        action_from: "lookout",
        action_to: "idle",
        weight: 1.2,
        animations: ["loophole_stand_front_left_look_out_0"],
      },
      {
        action_from: "idle",
        action_to: "fire",
        weight: 1.2,
        animations: ["loophole_stand_front_left_attack_in_0"],
      },
      {
        action_from: "fire",
        action_to: "idle",
        weight: 1.2,
        animations: ["loophole_stand_front_left_attack_out_0"],
      },
      {
        action_from: "idle",
        action_to: "fire_no_lookout",
        weight: 1.2,
        animations: ["loophole_stand_front_left_attack_in_0"],
      },
      {
        action_from: "fire_no_lookout",
        action_to: "idle",
        weight: 1.2,
        animations: ["loophole_stand_front_left_attack_out_0"],
      },
    ],
  };
}
