import { EStalkerState, IAnimationStateDescriptor } from "@/engine/core/objects/state";
import { TName } from "@/engine/lib/types";

export const baseAnimstates: LuaTable<TName, IAnimationStateDescriptor> = $fromObject<TName, IAnimationStateDescriptor>(
  {
    sit: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
      },
      into: $fromObject({ [0]: ["idle_0_to_sit_0"] }),
      out: $fromObject({ [0]: ["sit_0_to_idle_0"] }),
      idle: $fromObject({ [0]: "sit_0_idle_0" }),
      rnd: $fromObject({
        [0]: ["sit_0_idle_1", "sit_0_idle_2", "sit_0_idle_3"],
      }),
    },
    sit_knee: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
      },
      into: { [0]: ["idle_0_to_sit_1"] },
      out: { [0]: ["sit_1_to_idle_0"] },
      idle: { [0]: "sit_1_idle_0" },
      rnd: {
        [0]: ["sit_1_idle_1", "sit_1_idle_2", "sit_1_idle_3"],
      },
    },
    sit_ass: {
      prop: {
        maxidle: 5,
        sumidle: 3,
        rnd: 80,
      },
      into: { [0]: ["idle_0_to_sit_2"] },
      out: { [0]: ["sit_2_to_idle_0"] },
      idle: { [0]: "sit_2_idle_0" },
      rnd: {
        [0]: ["sit_2_idle_1", "sit_2_idle_2", "sit_2_idle_3"],
      },
    },
  } as unknown as Record<EStalkerState, IAnimationStateDescriptor>
);
