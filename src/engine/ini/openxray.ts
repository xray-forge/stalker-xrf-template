import { newFloatField } from "#/utils";

export const IS_LTX: boolean = true;

/**
 * todo;
 */
export const config = {
  environment: {
    /**
     * Set to false if you want weather config defined sun movement.
     */
    dynamic_sun_dir: true,
    /**
     * Defines sun movement direction.
     * Useless if dynamic_sun_dir is disabled.
     */
    sun_dir_azimuth: newFloatField(0.0),
  },
  gameplay: {
    /**
     * You can set camera behaviour on actor death.
     * Allowed values: firsteye, freelook, fixedlook.
     * Note, that the player can turn on firsteye himself if you set freelook or fixedlook.
     */
    actor_death_camera: "freelook",
  },
  lua_scripting: {
    /**
     * This will allow you to skip errors related to wrong arguments passed to functions.
     * WARNING. This may lead to undefined behavior, random crashes and saves corruption
     */
    allow_nil_conversion: false,
    /**
     * If false partially disables new LuaJIT escape sequences
     * that break compatibility with original game scripts.
     */
    allow_escape_sequences: false,
  },
  compatibility: {
    /**
     * Compatibility with previous games.
     * cop, cs, shoc or soc and unlock.
     * unlock is cop with disabled restrictions.
     */
    game_mode: "cop",
  },
};
