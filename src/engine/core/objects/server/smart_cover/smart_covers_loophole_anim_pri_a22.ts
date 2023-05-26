import { vector } from "xray16";

import { ISmartCoverLoopholeDescriptor } from "@/engine/core/objects/server/smart_cover/smart_covers_list";

export function get_anim_pri_a22_loophole(
  id: string,
  position: vector,
  fov_direction: vector,
  enter_direction: vector
): ISmartCoverLoopholeDescriptor {
  return {
    id: id,
    fov_position: position,
    fov_direction: fov_direction,
    danger_fov_direction: new vector().set(-1, 0, 0),
    enter_direction: enter_direction,
    usable: true,
    fov: 45.0,
    danger_fov: 45.0,
    range: 70.0,
    actions: {
      idle: {
        animations: {
          idle: ["pri_a22_colonel_lean_on_tabl_idle"],
        },
      },
      lookout: {
        animations: {
          idle: ["pri_a22_colonel_lean_on_tabl_idle"],
        },
      },
      fire: {
        animations: {
          idle: ["pri_a22_colonel_lean_on_tabl_idle"],
          shoot: ["pri_a22_colonel_lean_on_tabl_idle"],
        },
      },
      fire_no_lookout: {
        animations: {
          idle: ["pri_a22_colonel_lean_on_tabl_idle"],
          shoot: ["pri_a22_colonel_lean_on_tabl_idle"],
        },
      },
      reload: {
        animations: {
          idle: ["pri_a22_colonel_lean_on_tabl_idle"],
        },
      },
    },
    transitions: [
      {
        action_from: "idle",
        action_to: "lookout",
        weight: 1.2,
        animations: ["pri_a22_colonel_lean_on_tabl_idle"],
      },
      {
        action_from: "lookout",
        action_to: "idle",
        weight: 1.2,
        animations: ["pri_a22_colonel_lean_on_tabl_idle"],
      },
      {
        action_from: "idle",
        action_to: "fire",
        weight: 1.2,
        animations: ["pri_a22_colonel_lean_on_tabl_idle"],
      },
      {
        action_from: "fire",
        action_to: "idle",
        weight: 1.2,
        animations: ["pri_a22_colonel_lean_on_tabl_idle"],
      },
      {
        action_from: "idle",
        action_to: "fire_no_lookout",
        weight: 1.2,
        animations: ["pri_a22_colonel_lean_on_tabl_idle"],
      },
      {
        action_from: "fire_no_lookout",
        action_to: "idle",
        weight: 1.2,
        animations: ["pri_a22_colonel_lean_on_tabl_idle"],
      },
    ],
  };
}
