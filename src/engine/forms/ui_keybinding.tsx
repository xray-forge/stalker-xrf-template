import { JSXNode, JSXXML } from "jsx-xml";

/**
 * todo;
 */
export function create(): JSXNode {
  return (
    <keybingidg>
      <group name="kb_grp_direction">
        <command id="kb_left" exe="left" />
        <command id="kb_right" exe="right" />
        <command id="kb_up" exe="up" />
        <command id="kb_down" exe="down" />
      </group>
      <group name="kb_grp_movement">
        <command id="kb_forward" exe="forward" />
        <command id="kb_backward" exe="back" />
        <command id="kb_left_strafe" exe="lstrafe" />
        <command id="kb_right_strafe" exe="rstrafe" />
        <command id="kb_jump" exe="jump" />
        <command id="kb_crouch" exe="crouch" />
        <command id="kb_always_run" exe="accel" />
        <command id="kb_sprint" exe="sprint_toggle" />
        <command id="kb_left_lookout" exe="llookout" />
        <command id="kb_right_lookout" exe="rlookout" />
      </group>
      <group name="kb_grp_weapons">
        <command id="kb_weapon1" exe="wpn_1" />
        <command id="kb_weapon2" exe="wpn_2" />
        <command id="kb_weapon3" exe="wpn_3" />
        <command id="kb_weapon4" exe="wpn_4" />
        <command id="kb_weapon5" exe="wpn_5" />
        <command id="kb_weapon6" exe="wpn_6" />
        <command id="kb_wpn_next" exe="wpn_next" />
        <command id="kb_next_slot" exe="next_slot" />
        <command id="kb_prev_slot" exe="prev_slot" />
        <command id="kb_fire" exe="wpn_fire" />
        <command id="kb_zoom" exe="wpn_zoom" />
        <command id="kb_reload" exe="wpn_reload" />
        <command id="kb_func" exe="wpn_func" />
        <command id="kb_firemode_next" exe="wpn_firemode_next" />
        <command id="kb_firemode_prev" exe="wpn_firemode_prev" />
      </group>
      <group name="kb_grp_inventory">
        <command id="kb_inventory" exe="inventory" />
        <command id="kb_active_jobs" exe="active_jobs" />
        <command id="kb_torch" exe="torch" />
        <command id="kb_detector" exe="show_detector" />
        <command id="kb_night_vision" exe="night_vision" />
        <command id="kb_quick_use_1" exe="quick_use_1" />
        <command id="kb_quick_use_2" exe="quick_use_2" />
        <command id="kb_quick_use_3" exe="quick_use_3" />
        <command id="kb_quick_use_4" exe="quick_use_4" />
        <command id="kb_drop" exe="drop" />
      </group>
      <group name="kb_grp_common">
        <command id="kb_pause" exe="pause" />
        <command id="kb_use" exe="use" />
        <command id="kb_screenshot" exe="screenshot" />
        <command id="kb_quit" exe="quit" />
        <command id="kb_console" exe="console" />
        <command id="ui_mm_save_game" exe="quick_save" />
        <command id="ui_mm_load_game" exe="quick_load" />
      </group>
      <group name="kb_grp_multiplayer">
        <command id="kb_artefact" exe="artefact" />
        <command id="kb_scores" exe="scores" />
        <command id="kb_chat" exe="chat" />
        <command id="kb_chat_team" exe="chat_team" />
        <command id="kb_buy_menu" exe="buy_menu" />
        <command id="kb_skin_menu" exe="skin_menu" />
        <command id="kb_team_menu" exe="team_menu" />
        <command id="kb_vote_begin" exe="vote_begin" />
        <command id="kb_vote_menu" exe="vote" />
        <command id="kb_vote_yes" exe="vote_yes" />
        <command id="kb_vote_no" exe="vote_no" />
        <command id="speech_menu_group" exe="speech_menu_0" />
        <command id="speech_menu_personal" exe="speech_menu_1" />
      </group>
    </keybingidg>
  );
}
