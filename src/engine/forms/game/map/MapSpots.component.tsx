﻿import { Fragment, JSXNode, JSXXML } from "jsx-xml";

import { normalizeBaseNodeProps } from "#/utils";

import { XrTexture } from "@/engine/forms/components/base/XrTexture.component";
import { MapSpotsComplex } from "@/engine/forms/game/map/MapSpotsComplex.part";
import { MapSpotsMp } from "@/engine/forms/game/map/MapSpotsMp.part";
import { MapSpotsRelations } from "@/engine/forms/game/map/MapSpotsRelations.part";
import { textures } from "@/engine/lib/constants/textures";
import { IBaseXmlNode, TTextAlign } from "@/engine/lib/types";

interface IPdaMapSpotProps extends IBaseXmlNode {
  heading?: boolean;
  alignment?: TTextAlign;
}

function PdaMapSpot(props: IPdaMapSpotProps): JSXNode {
  const { tag = "map_spot", width, height, x, y, heading, children = null } = normalizeBaseNodeProps(props);

  return JSXXML(tag, { width, height, x, y, heading: heading ? 1 : 0 }, children);
}

export function MapSpots(): JSXNode {
  return (
    <map_spots>
      <MapSpotsMp />
      <MapSpotsRelations />
      <MapSpotsComplex />

      <PdaMapSpot tag={"quest_pointer"} width={11} height={24} heading={true} alignment={"c"}>
        <XrTexture a={255} r={255} g={255} b={255} id={textures.ui_ui_hud_map_arrow} />
      </PdaMapSpot>

      <PdaMapSpot tag={"quest_pointer2"} width={11} height={24} heading={true} alignment={"c"}>
        <XrTexture a={255} r={242} g={231} b={11} id={textures.ui_ui_hud_map_arrow} />
      </PdaMapSpot>

      <PdaMapSpot tag={"quest_pointer_small"} width={5} height={12} heading={true} alignment={"c"}>
        <XrTexture a={255} id={textures.ui_ui_hud_map_arrow} />
      </PdaMapSpot>

      <combat_pointer width="11" height="24" heading="1" alignment="c">
        <texture a="255" color="red">
          ui_hud_map_arrow
        </texture>
      </combat_pointer>

      <crlc_big>
        <level_map spot="crlc_big_spot" pointer="quest_pointer" />
      </crlc_big>

      <crlc_big_spot width="115" height="115" alignment="c" scale="1" scale_min="1" scale_max="3" stretch="1">
        <texture x="730" y="456" width="115" height="115">
          ui\ui_common
        </texture>
      </crlc_big_spot>

      <crlc_mdl>
        <level_map spot="crlc_mdl_spot" pointer="quest_pointer" />
      </crlc_mdl>

      <crlc_mdl_spot width="62" height="62" alignment="c" scale="1" scale_min="1" scale_max="3" stretch="1">
        <texture x="858" y="392" width="62" height="62">
          ui\ui_common
        </texture>
      </crlc_mdl_spot>

      <crlc_small>
        <level_map spot="crlc_small_spot" pointer="quest_pointer" />
      </crlc_small>

      <crlc_small_spot width="31" height="31" alignment="c" scale="1" scale_min="1" scale_max="3" stretch="1">
        <texture x="633" y="789" width="31" height="31">
          ui\ui_common
        </texture>
      </crlc_small_spot>

      <blue_location>
        <level_map spot="blue_spot" pointer="quest_pointer" />
        <mini_map spot="blue_mini_spot" pointer="quest_pointer" />
      </blue_location>

      <blue_spot width="32" height="32" stretch="1" alignment="c" xform_anim="map_spot_new_xform" xform_anim_cyclic="0">
        <texture>ui_icons_mapPDA_persBig_e</texture>
      </blue_spot>

      <blue_mini_spot
        width="11"
        height="11"
        stretch="1"
        alignment="c"
        xform_anim="map_spot_new_xform"
        xform_anim_cyclic="0"
      >
        <texture>ui_icons_newPDA_SmallBlue</texture>
        <texture_below r="255" g="255" b="255">
          ui_mini_sn_spot_below
        </texture_below>
        <texture_above r="255" g="255" b="255">
          ui_mini_sn_spot_above
        </texture_above>
      </blue_mini_spot>

      <green_location>
        <level_map spot="green_spot" pointer="quest_pointer" />
        <mini_map spot="green_mini_spot" pointer="quest_pointer" />
      </green_location>
      <green_spot
        width="32"
        height="32"
        stretch="1"
        alignment="c"
        xform_anim="map_spot_new_xform"
        xform_anim_cyclic="0"
      >
        <texture>ui_icons_mapPDA_persBig_h</texture>
      </green_spot>

      <green_mini_spot
        width="11"
        height="11"
        stretch="1"
        alignment="c"
        xform_anim="map_spot_new_xform"
        xform_anim_cyclic="0"
      >
        <texture>ui_icons_newPDA_SmallGreen</texture>
        <texture_below r="0" g="255" b="0">
          ui_mini_sn_spot_below
        </texture_below>
        <texture_above r="0" g="255" b="0">
          ui_mini_sn_spot_above
        </texture_above>
      </green_mini_spot>

      <red_location>
        <level_map spot="red_spot" pointer="quest_pointer" />
        <mini_map spot="red_mini_spot" pointer="quest_pointer" />
      </red_location>
      <red_spot width="32" height="32" stretch="1" alignment="c" xform_anim="map_spot_new_xform" xform_anim_cyclic="0">
        <texture>ui_icons_mapPDA_mark_t</texture>
      </red_spot>
      <red_mini_spot
        width="11"
        height="11"
        stretch="1"
        alignment="c"
        xform_anim="map_spot_new_xform"
        xform_anim_cyclic="0"
      >
        <texture>ui_icons_newPDA_SmallRed</texture>
        <texture_below r="255" g="0" b="0">
          ui_mini_sn_spot_below
        </texture_below>
        <texture_above r="255" g="0" b="0">
          ui_mini_sn_spot_above
        </texture_above>
      </red_mini_spot>

      <level_map_spot_border
        width="37"
        height="37"
        alignment="c"
        stretch="1"
        xform_anim="map_spot_border_xform"
        xform_anim_cyclic="1"
      >
        <texture a="0">ui_pda2_hl_quest_base</texture>
      </level_map_spot_border>

      <mini_map_spot_border
        width="18"
        height="18"
        alignment="c"
        stretch="1"
        xform_anim="map_spot_border_xform"
        xform_anim_cyclic="1"
      >
        <texture a="0">ui_pda2_hl_quest_base</texture>
      </mini_map_spot_border>

      <complex_map_spot_border
        width="37"
        height="37"
        alignment="c"
        stretch="1"
        xform_anim="map_spot_border_xform"
        xform_anim_cyclic="1"
      >
        <texture a="0">ui_pda2_hl_quest_base</texture>
      </complex_map_spot_border>

      <actor_location hint="disable_hint">
        <level_map spot="actor_level_spot" />
      </actor_location>
      <actor_level_spot width="26" height="26" alignment="c" location_level="-1">
        <texture>ui_icons_newPDA_man</texture>
      </actor_level_spot>

      <actor_location_p hint="disable_hint">
        <level_map spot="actor_level_spot_p" />
      </actor_location_p>
      <actor_level_spot_p width="49" height="49" heading="1" alignment="c" location_level="-2">
        <texture>ui_icons_newPDA_manArrow</texture>
      </actor_level_spot_p>

      <level_changer_up>
        <level_map spot="level_changer_up_spot" pointer="quest_pointer" />
      </level_changer_up>
      <level_changer_up_spot width="19" height="21" alignment="c" location_level="1" heading_angle="1">
        <texture r="10" g="250" b="250">
          ui_pda2_exit_point
        </texture>
      </level_changer_up_spot>

      <level_changer_up_right>
        <level_map spot="level_changer_up_right_spot" pointer="quest_pointer" />
      </level_changer_up_right>
      <level_changer_up_right_spot width="19" height="21" alignment="c" location_level="1" heading_angle="-45">
        <texture r="10" g="250" b="250">
          ui_pda2_exit_point
        </texture>
      </level_changer_up_right_spot>

      <level_changer_right>
        <level_map spot="level_changer_right_spot" pointer="quest_pointer" />
      </level_changer_right>
      <level_changer_right_spot width="19" height="21" alignment="c" location_level="1" heading_angle="-90">
        <texture r="10" g="250" b="250">
          ui_pda2_exit_point
        </texture>
      </level_changer_right_spot>

      <level_changer_right_down>
        <level_map spot="level_changer_right_down_spot" pointer="quest_pointer" />
      </level_changer_right_down>
      <level_changer_right_down_spot width="19" height="21" alignment="c" location_level="1" heading_angle="-135">
        <texture r="10" g="250" b="250">
          ui_pda2_exit_point
        </texture>
      </level_changer_right_down_spot>

      <level_changer_down>
        <level_map spot="level_changer_down_spot" pointer="quest_pointer" />
      </level_changer_down>

      <level_changer_down_spot width="19" height="21" alignment="c" location_level="1" heading_angle="180">
        <texture r="10" g="250" b="250">
          ui_pda2_exit_point
        </texture>
      </level_changer_down_spot>

      <level_changer_down_left>
        <level_map spot="level_changer_down_left_spot" pointer="quest_pointer" />
      </level_changer_down_left>
      <level_changer_down_left_spot width="19" height="21" alignment="c" location_level="1" heading_angle="135">
        <texture r="10" g="250" b="250">
          ui_pda2_exit_point
        </texture>
      </level_changer_down_left_spot>

      <level_changer_left>
        <level_map spot="level_changer_left_spot" pointer="quest_pointer" />
      </level_changer_left>
      <level_changer_left_spot width="19" height="21" alignment="c" location_level="1" heading_angle="90">
        <texture r="10" g="250" b="250">
          ui_pda2_exit_point
        </texture>
      </level_changer_left_spot>

      <level_changer_left_up>
        <level_map spot="level_changer_left_up_spot" pointer="quest_pointer" />
      </level_changer_left_up>
      <level_changer_left_up_spot width="19" height="21" alignment="c" location_level="1" heading_angle="45">
        <texture r="10" g="250" b="250">
          ui_pda2_exit_point
        </texture>
      </level_changer_left_up_spot>

      <treasure hint="st_ui_pda_secret">
        <level_map spot="treasure_spot" pointer="quest_pointer" />
        <mini_map spot="treasure_spot_mini" />
      </treasure>
      <treasure_spot width="20" height="20" alignment="c" stretch="1">
        <texture>ui_inGame2_PDA_icon_secret</texture>
      </treasure_spot>
      <treasure_spot_mini width="17" height="17" alignment="c" stretch="1">
        <texture>ui_inGame2_PDA_icon_secret</texture>
      </treasure_spot_mini>

      <debug_stalker hint="invalid hint">
        <level_map spot="debug_stalker_spot" />
      </debug_stalker>

      <debug_stalker_spot width="3" height="3" alignment="c">
        <texture r="50" g="255" b="0">
          ui_minimap_point
        </texture>
      </debug_stalker_spot>

      <storyline_task_location>
        <level_map spot="storyline_task_spot" pointer="quest_pointer2" />
        <mini_map spot="storyline_task_spot_mini" pointer="quest_pointer2" />
      </storyline_task_location>

      <storyline_task_spot width="19" height="19" stretch="1" alignment="c" location_level="5">
        <texture>ui_inGame2_PDA_icon_Primary_mission</texture>
        <static_border
          x="-5"
          y="-5"
          width="29"
          height="29"
          stretch="1"
          light_anim="ui_slow_blinking_alpha"
          la_cyclic="1"
          la_texture="1"
          la_text="0"
          la_alpha="1"
        >
          <texture r="242" g="231" b="11">
            ui_pda2_stask_last_02
          </texture>
        </static_border>
      </storyline_task_spot>

      <storyline_task_spot_mini width="19" height="19" stretch="1" alignment="c" location_level="5">
        <texture>ui_inGame2_PDA_icon_Primary_mission</texture>
        <static_border
          x="-5"
          y="-5"
          width="29"
          height="29"
          stretch="1"
          light_anim="ui_slow_blinking_alpha"
          la_cyclic="1"
          la_texture="1"
          la_text="0"
          la_alpha="1"
        >
          <texture r="242" g="231" b="11">
            ui_mmap_stask_last_02
          </texture>
        </static_border>
        <texture_below>storyline_task_spot_below</texture_below>
        <texture_above>storyline_task_spot_above</texture_above>
      </storyline_task_spot_mini>

      <secondary_task_location>
        <level_map spot="secondary_task_spot" pointer="quest_pointer" />
        <mini_map spot="secondary_task_spot_mini" pointer="quest_pointer" />
      </secondary_task_location>

      <secondary_task_spot width="19" height="19" stretch="1" alignment="c" location_level="5">
        <texture>ui_inGame2_PDA_icon_Secondary_mission</texture>
        <static_border
          x="-5"
          y="-5"
          width="29"
          height="29"
          stretch="1"
          light_anim="ui_slow_blinking_alpha"
          la_cyclic="1"
          la_texture="1"
          la_text="0"
          la_alpha="1"
        >
          <texture>ui_pda2_stask_last_02</texture>
        </static_border>
      </secondary_task_spot>

      <secondary_task_spot_mini width="19" height="19" stretch="1" alignment="c" location_level="5">
        <texture>ui_inGame2_PDA_icon_Secondary_mission</texture>
        <static_border
          x="-5"
          y="-5"
          width="29"
          height="29"
          stretch="1"
          light_anim="ui_slow_blinking_alpha"
          la_cyclic="1"
          la_texture="1"
          la_text="0"
          la_alpha="1"
        >
          <texture>ui_mmap_stask_last_02</texture>
        </static_border>
        <texture_below>secondary_task_spot_below</texture_below>
        <texture_above>secondary_task_spot_above</texture_above>
      </secondary_task_spot_mini>

      <ui_secondary_task_blink ttl="15" hint="disable_hint" location_level="-1">
        <level_map spot="ui_secondary_task_blink_spot" />
      </ui_secondary_task_blink>
      <ui_secondary_task_blink_spot
        x="-8"
        y="-40"
        width="39"
        height="39"
        stretch="1"
        light_anim="new_task_highlight_00"
        light_anim_cyclic="1"
        la_texture="1"
        xform_anim="new_task_highlight_xform"
        xform_anim_cyclic="1"
        alignment="c"
        location_level="-1"
      >
        <texture>ui_pda2_stask_last_01a</texture>
      </ui_secondary_task_blink_spot>

      <ui_storyline_task_blink ttl="15" hint="disable_hint" location_level="-1">
        <level_map spot="ui_storyline_task_blink_spot" />
      </ui_storyline_task_blink>
      <ui_storyline_task_blink_spot
        x="-8"
        y="-10"
        width="39"
        height="39"
        stretch="1"
        light_anim="new_task_highlight"
        light_anim_cyclic="1"
        la_texture="1"
        xform_anim="new_task_highlight_xform"
        xform_anim_cyclic="1"
        alignment="c"
        location_level="-1"
      >
        <texture>ui_pda2_stask_last_01a</texture>
      </ui_storyline_task_blink_spot>

      {/** <!-- <secondary_na_border width="37" height="37" alignment="c" stretch="1" scale_min="2.5" scale_max="4.1"
       scale="1" location_level="5">
       <texture r="0" g="154" b="218">ui_pda2_hl_quest_base</texture>
       </secondary_na_border>
       <secondary_mini_na_border width="18" height="18" alignment="c" stretch="1" scale_min="2.5" scale_max="4.1"
       scale="1" location_level="5">
       <texture r="0" g="154" b="218">ui_pda2_hl_quest_base</texture>
       </secondary_mini_na_border>

       <secondary_ac_border width="37" height="37" alignment="c" stretch="1" scale_min="2.5" scale_max="4.1" scale="1"
       location_level="5">
       <texture r="255" g="240" b="0">ui_pda2_hl_quest_base</texture>
       </secondary_ac_border>
       <secondary_mini_ac_border width="18" height="18" alignment="c" stretch="1" scale_min="2.5" scale_max="4.1"
       scale="1" location_level="5">
       <texture r="255" g="240" b="0">ui_pda2_hl_quest_base</texture>
       </secondary_mini_ac_border> -->

       <!--
       <primary_task_location>
       <level_map spot="primary_task_spot"        pointer="quest_pointer"/>
       <mini_map spot="primary_task_spot_mini"        pointer="quest_pointer"/>
       </primary_task_location>
       <primary_task_spot width="21" height="21" stretch="1" alignment="c" location_level="5">
       <texture r="242" g="15" b="11">ui_pda2_quest</texture>
       </primary_task_spot>
       <primary_task_spot_mini  width="15" height="15" stretch="1" alignment="c" location_level="5">
       <texture r="242" g="15" b="11">ui_mmap_quest</texture>
       <texture_below r="242" g="15" b="11">ui_mini_sn_spot_below</texture_below>
       <texture_above r="242" g="15" b="11">ui_mini_sn_spot_above</texture_above>
       </primary_task_spot_mini>

       <primary_na_border width="37" height="37" alignment="c" stretch="1" location_level="5">
       <texture r="0" g="154" b="218">ui_pda2_hl_quest_base</texture>
       </primary_na_border>
       <primary_mini_na_border width="18" height="18" alignment="c" stretch="1" location_level="5">
       <texture r="0" g="154" b="218">ui_pda2_hl_quest_base</texture>
       </primary_mini_na_border>

       <primary_ac_border width="37" height="37" alignment="c" stretch="1" location_level="5">
       <texture r="255" g="240" b="0">ui_pda2_hl_quest_base</texture>
       </primary_ac_border>
       <primary_mini_ac_border width="18" height="18" alignment="c" stretch="1" location_level="5">
       <texture r="255" g="240" b="0">ui_pda2_hl_quest_base</texture>
       </primary_mini_ac_border>

       <third_task_location>
       <level_map spot="third_task_spot"/>
       </third_task_location>
       <third_task_spot width="27" height="27" stretch="1" alignment="c" location_level="5">
       <texture r="0" g="154" b="218">ui_pda2_sq_sos</texture>
       </third_task_spot>

       <third_na_border width="37" height="37" alignment="c" stretch="1" location_level="5">
       <texture r="0" g="154" b="218">ui_pda2_hl_quest_base</texture>
       </third_na_border>

       <third_ac_border width="37" height="37" alignment="c" stretch="1" location_level="5">
       <texture r="255" g="240" b="0">ui_pda2_hl_quest_base</texture>
       </third_ac_border>

       --> */}

      <no_spot width="0" height="0" stretch="1" alignment="c">
        <texture>ui_pda2_hl_seq_quest2</texture>
      </no_spot>

      <primary_object>
        <level_map spot="primary_object_spot" />
      </primary_object>

      <primary_object_spot
        width="15"
        height="15"
        stretch="1"
        alignment="c"
        location_level="-3"
        scale="1"
        scale_min="1"
        scale_max="6"
      >
        <texture>ui_inGame2_PDA_icon_location</texture>
      </primary_object_spot>
      {/** <!--
       <primary_object_spot_mini  width="15" height="15" stretch="1" alignment="c" location_level="5">
       <texture r="242" g="15" b="11">ui_mmap_quest</texture>
       </primary_object_spot_mini>
       --> */}
      <storyline_task_on_guider>
        <mini_map spot="storyline_task_on_guider_spot" />
      </storyline_task_on_guider>
      <storyline_task_on_guider_spot x="0" y="0" width="21" height="21" stretch="1" alignment="c" location_level="-1">
        <texture r="242" g="231" b="11">
          ui_pda2_stask_last_01
        </texture>
      </storyline_task_on_guider_spot>

      <secondary_task_on_guider>
        <mini_map spot="secondary_task_on_guider_spot" />
      </secondary_task_on_guider>
      <secondary_task_on_guider_spot x="0" y="0" width="21" height="21" stretch="1" alignment="c" location_level="-1">
        <texture>ui_pda2_stask_last_01</texture>
      </secondary_task_on_guider_spot>

      <AlifeRepresentationsCollection />
    </map_spots>
  );
}

function UsefulNpcsCollection(): JSXNode {
  return (
    <Fragment>
      <ui_pda2_mechanic_location hint="st_ui_pda_legend_mechanic">
        <level_map spot="ui_pda2_mechanic_location_spot" />
        <mini_map spot="ui_pda2_mechanic_location_mini_spot" />
      </ui_pda2_mechanic_location>
      <ui_pda2_mechanic_location_spot
        width="19"
        height="19"
        stretch="1"
        alignment="c"
        location_level="-1"
        scale_min="3"
      >
        <texture>ui_inGame2_PDA_icon_Stalker_machanik</texture>
      </ui_pda2_mechanic_location_spot>
      <ui_pda2_mechanic_location_mini_spot width="14" height="14" stretch="1" alignment="c" location_level="-1">
        <texture>ui_inGame2_PDA_icon_Stalker_machanik_small</texture>
      </ui_pda2_mechanic_location_mini_spot>

      <ui_pda2_trader_location hint="st_ui_pda_legend_trader">
        <level_map spot="ui_pda2_trader_location_spot" />
        <mini_map spot="ui_pda2_trader_location_mini_spot" pointer="quest_pointer" />
      </ui_pda2_trader_location>
      <ui_pda2_trader_location_spot width="19" height="19" stretch="1" alignment="c" location_level="-1" scale_min="3">
        <texture>ui_inGame2_PDA_icon_Stalker_Trader</texture>
      </ui_pda2_trader_location_spot>
      <ui_pda2_trader_location_mini_spot width="14" height="14" stretch="1" alignment="c" location_level="-1">
        <texture>ui_inGame2_PDA_icon_Stalker_Trader_small</texture>
      </ui_pda2_trader_location_mini_spot>

      <ui_pda2_scout_location hint="st_ui_pda_legend_scout">
        <level_map spot="ui_pda2_scout_location_spot" />
        <mini_map spot="ui_pda2_scout_location_mini_spot" />
      </ui_pda2_scout_location>
      <ui_pda2_scout_location_spot width="19" height="19" stretch="1" alignment="c" location_level="-1" scale_min="3">
        <texture>ui_inGame2_PDA_icon_Stalker_guide</texture>
      </ui_pda2_scout_location_spot>
      <ui_pda2_scout_location_mini_spot width="14" height="14" stretch="1" alignment="c" location_level="-1">
        <texture>ui_inGame2_PDA_icon_Stalker_guide_small</texture>
      </ui_pda2_scout_location_mini_spot>

      <ui_pda2_quest_npc_location hint="st_ui_pda_legend_vip">
        <level_map spot="ui_pda2_quest_npc_location_spot" />
        <mini_map spot="ui_pda2_quest_npc_location_mini_spot" />
      </ui_pda2_quest_npc_location>
      <ui_pda2_quest_npc_location_spot
        width="19"
        height="19"
        stretch="1"
        alignment="c"
        location_level="-1"
        scale_min="3"
      >
        <texture>ui_inGame2_PDA_icon_Stalker_VIP</texture>
      </ui_pda2_quest_npc_location_spot>

      <ui_pda2_quest_npc_location_mini_spot width="14" height="14" stretch="1" alignment="c" location_level="-1">
        <texture>ui_inGame2_PDA_icon_Stalker_VIP</texture>
      </ui_pda2_quest_npc_location_mini_spot>

      <ui_pda2_medic_location hint="st_ui_pda_legend_medic">
        <level_map spot="ui_pda2_medic_location_spot" />
        <mini_map spot="ui_pda2_medic_location_mini_spot" />
      </ui_pda2_medic_location>
      <ui_pda2_medic_location_spot width="19" height="19" stretch="1" alignment="c" location_level="-1" scale_min="3">
        <texture>ui_inGame2_PDA_icon_Stalker_Medic</texture>
      </ui_pda2_medic_location_spot>
      <ui_pda2_medic_location_mini_spot width="14" height="14" stretch="1" alignment="c" location_level="-1">
        <texture>ui_inGame2_PDA_icon_Stalker_Medic_small</texture>
      </ui_pda2_medic_location_mini_spot>

      <ui_pda2_actor_box_location hint="st_ui_pda_actor_box">
        <level_map spot="ui_pda2_actor_box_location_spot" />
        <mini_map spot="ui_pda2_actor_box_location_mini_spot" />
      </ui_pda2_actor_box_location>
      <ui_pda2_actor_box_location_spot
        width="19"
        height="19"
        stretch="1"
        alignment="c"
        location_level="-1"
        scale_min="3"
      >
        <texture>ui_inGame2_PDA_icon_Actor_Box</texture>
      </ui_pda2_actor_box_location_spot>
      <ui_pda2_actor_box_location_mini_spot width="14" height="14" stretch="1" alignment="c" location_level="-1">
        <texture>ui_inGame2_PDA_icon_Actor_Box_small</texture>
      </ui_pda2_actor_box_location_mini_spot>

      <ui_pda2_actor_sleep_location hint="st_ui_pda_sleep_place">
        <level_map spot="ui_pda2_actor_sleep_location_spot" />
        <mini_map spot="ui_pda2_actor_sleep_location_mini_spot" />
      </ui_pda2_actor_sleep_location>
      <ui_pda2_actor_sleep_location_spot
        width="19"
        height="19"
        stretch="1"
        alignment="c"
        location_level="-1"
        scale_min="3"
      >
        <texture>ui_inGame2_PDA_icon_Place_to_rest</texture>
      </ui_pda2_actor_sleep_location_spot>
      <ui_pda2_actor_sleep_location_mini_spot width="14" height="14" stretch="1" alignment="c" location_level="-1">
        <texture>ui_inGame2_PDA_icon_Place_to_rest_small</texture>
      </ui_pda2_actor_sleep_location_mini_spot>
    </Fragment>
  );
}

function AlifeRepresentationsCollection(): JSXNode {
  return (
    <Fragment>
      <alife_combat_fight>
        <level_map spot="alife_combat_fight_spot" pointer="combat_pointer" />
        <mini_map spot="alife_combat_fight_spot_mini" />
      </alife_combat_fight>
      <alife_combat_fight_spot width="5" height="5" alignment="c" stretch="1" scale="1" scale_min="1" scale_max="3">
        <texture>ui_mapQuest_gold</texture>
      </alife_combat_fight_spot>
      <alife_combat_fight_spot_mini
        width="15"
        height="15"
        alignment="c"
        stretch="1"
        scale="1"
        scale_min="1"
        scale_max="3"
      >
        <texture>ui_sm_mapQuest_gold</texture>
      </alife_combat_fight_spot_mini>

      <alife_combat_help>
        <level_map spot="alife_combat_help_spot" pointer="combat_pointer" />
        <mini_map spot="alife_combat_help_spot_mini" />
      </alife_combat_help>
      <alife_combat_help_spot width="5" height="5" alignment="c" stretch="1" scale="1" scale_min="1" scale_max="3">
        <texture>ui_mapQuest_gold</texture>
      </alife_combat_help_spot>
      <alife_combat_help_spot_mini
        width="15"
        height="15"
        alignment="c"
        stretch="1"
        scale="1"
        scale_min="1"
        scale_max="3"
      >
        <texture>ui_sm_mapQuest_gold</texture>
      </alife_combat_help_spot_mini>

      <alife_combat_attack>
        <level_map spot="alife_combat_attack_spot" pointer="combat_pointer" />
        <mini_map spot="alife_combat_attack_spot_mini" />
      </alife_combat_attack>
      <alife_combat_attack_spot width="5" height="5" alignment="c" stretch="1" scale="1" scale_min="1" scale_max="3">
        <texture>ui_mapQuest_gold</texture>
      </alife_combat_attack_spot>
      <alife_combat_attack_spot_mini
        width="15"
        height="15"
        alignment="c"
        stretch="1"
        scale="1"
        scale_min="1"
        scale_max="3"
      >
        <texture>ui_sm_mapQuest_gold</texture>
      </alife_combat_attack_spot_mini>

      {/** <!-- Новые мапспоты для симуляции --> */}
      <alife_combat>
        <level_map spot="alife_combat_spot" />
      </alife_combat>
      <alife_combat_spot width="32" height="32" alignment="c" stretch="1" scale_min="1" scale_max="3" scale="1">
        <texture>ui_alife_combat</texture>
      </alife_combat_spot>

      <alife_presentation_faction_duty>
        <level_map spot="alife_presentation_faction_duty_spot" />
      </alife_presentation_faction_duty>
      <alife_presentation_faction_duty_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
      >
        <texture x="720" y="630" width="128" height="128" r="0" g="0" b="255">
          ui\ui_common
        </texture>
      </alife_presentation_faction_duty_spot>

      <alife_presentation_faction_dolg>
        <level_map spot="alife_presentation_faction_dolg_spot" />
      </alife_presentation_faction_dolg>
      <alife_presentation_faction_dolg_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
      >
        <texture x="720" y="630" width="128" height="128" r="0" g="0" b="255">
          ui\ui_common
        </texture>
      </alife_presentation_faction_dolg_spot>

      <alife_presentation_faction_freedom>
        <level_map spot="alife_presentation_faction_freedom_spot" />
      </alife_presentation_faction_freedom>
      <alife_presentation_faction_freedom_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
      >
        <texture x="720" y="630" width="128" height="128" r="128" g="255" b="0">
          ui\ui_common
        </texture>
      </alife_presentation_faction_freedom_spot>

      <alife_presentation_faction_bandit>
        <level_map spot="alife_presentation_faction_bandit_spot" />
      </alife_presentation_faction_bandit>
      <alife_presentation_faction_bandit_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
      >
        <texture x="720" y="630" width="128" height="128" r="255" g="255" b="0">
          ui\ui_common
        </texture>
      </alife_presentation_faction_bandit_spot>

      <alife_presentation_faction_killer>
        <level_map spot="alife_presentation_faction_killer_spot" />
      </alife_presentation_faction_killer>
      <alife_presentation_faction_killer_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
      >
        <texture x="720" y="630" width="128" height="128" r="0" g="128" b="128">
          ui\ui_common
        </texture>
      </alife_presentation_faction_killer_spot>

      <alife_presentation_faction_army>
        <level_map spot="alife_presentation_faction_army_spot" />
      </alife_presentation_faction_army>
      <alife_presentation_faction_army_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
      >
        <texture x="720" y="630" width="128" height="128" r="128" g="128" b="0">
          ui\ui_common
        </texture>
      </alife_presentation_faction_army_spot>

      <alife_presentation_faction_monster>
        <level_map spot="alife_presentation_faction_monster_spot" />
      </alife_presentation_faction_monster>
      <alife_presentation_faction_monster_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
      >
        <texture x="720" y="630" width="128" height="128" r="255" g="0" b="0">
          ui\ui_common
        </texture>
      </alife_presentation_faction_monster_spot>

      <alife_presentation_faction_zombied>
        <level_map spot="alife_presentation_faction_zombied_spot" />
      </alife_presentation_faction_zombied>
      <alife_presentation_faction_zombied_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
      >
        <texture x="720" y="630" width="128" height="128" r="255" g="128" b="0">
          ui\ui_common
        </texture>
      </alife_presentation_faction_zombied_spot>

      <alife_presentation_faction_stalker>
        <level_map spot="alife_presentation_faction_stalker_spot" />
      </alife_presentation_faction_stalker>
      <alife_presentation_faction_stalker_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
      >
        <texture x="720" y="630" width="128" height="128" r="255" g="128" b="255">
          ui\ui_common
        </texture>
      </alife_presentation_faction_stalker_spot>

      <alife_presentation_faction_monolith>
        <level_map spot="alife_presentation_faction_digger_spot" />
      </alife_presentation_faction_monolith>

      <alife_presentation_smart>
        <level_map spot="alife_presentation_smart_spot" />
      </alife_presentation_smart>
      <alife_presentation_smart_spot
        width="64"
        height="64"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="255" g="255" b="255" a="0">
          ui_pda2_pt_territory
        </texture>
      </alife_presentation_smart_spot>

      <alife_presentation_smart_default_none>
        <level_map spot="alife_presentation_smart_default_none_spot" />
      </alife_presentation_smart_default_none>
      <alife_presentation_smart_default_none_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="50" g="50" b="50">
          ui_pda2_pt_territory
        </texture>
      </alife_presentation_smart_default_none_spot>
      <alife_presentation_smart_territory_none>
        <level_map spot="alife_presentation_smart_territory_none_spot" />
      </alife_presentation_smart_territory_none>

      <alife_presentation_smart_territory_none_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="50" g="50" b="50">
          ui_pda2_pt_territory
        </texture>
      </alife_presentation_smart_territory_none_spot>
      <alife_presentation_smart_base_none>
        <level_map spot="alife_presentation_smart_base_none_spot" />
        <mini_map spot="alife_presentation_smart_base_none_spot_mini" />
      </alife_presentation_smart_base_none>
      <alife_presentation_smart_base_none_spot
        width="21"
        height="21"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="0"
        location_level="0"
      >
        <texture r="50" g="50" b="50">
          ui_pda2_base
        </texture>
      </alife_presentation_smart_base_none_spot>
      <alife_presentation_smart_base_none_spot_mini
        width="15"
        height="15"
        alignment="c"
        stretch="1"
        scale="0"
        scale_min="1"
        scale_max="3"
        location_level="0"
      >
        <texture r="50" g="50" b="50">
          ui_mmap_base
        </texture>
      </alife_presentation_smart_base_none_spot_mini>

      <alife_presentation_smart_science_none>
        <level_map spot="alife_presentation_smart_science_none_spot" />
      </alife_presentation_smart_science_none>
      <alife_presentation_smart_science_none_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="50" g="50" b="50">
          ui_pda2_pt_science
        </texture>
      </alife_presentation_smart_science_none_spot>
      <alife_presentation_smart_resource_none>
        <level_map spot="alife_presentation_smart_none_resource_spot" />
      </alife_presentation_smart_resource_none>
      <alife_presentation_smart_none_resource_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="50" g="50" b="50">
          ui_pda2_pt_resource
        </texture>
      </alife_presentation_smart_none_resource_spot>

      <alife_presentation_smart_default_friend>
        <level_map spot="alife_presentation_smart_default_friend_spot" />
      </alife_presentation_smart_default_friend>
      <alife_presentation_smart_default_friend_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="0" g="255" b="0">
          ui_pda2_pt_territory
        </texture>
      </alife_presentation_smart_default_friend_spot>
      <alife_presentation_smart_territory_friend>
        <level_map spot="alife_presentation_smart_territory_friend_spot" />
      </alife_presentation_smart_territory_friend>
      <alife_presentation_smart_territory_friend_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="0" g="255" b="0">
          ui_pda2_pt_territory
        </texture>
      </alife_presentation_smart_territory_friend_spot>
      <alife_presentation_smart_base_friend>
        <level_map spot="alife_presentation_smart_base_friend_spot" />
        <mini_map spot="alife_presentation_smart_base_friend_spot_mini" />
      </alife_presentation_smart_base_friend>
      <alife_presentation_smart_base_friend_spot
        width="21"
        height="21"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="0"
        location_level="0"
      >
        <texture r="0" g="255" b="0">
          ui_pda2_base
        </texture>
      </alife_presentation_smart_base_friend_spot>
      <alife_presentation_smart_base_friend_spot_mini
        width="15"
        height="15"
        alignment="c"
        stretch="1"
        scale="0"
        scale_min="1"
        scale_max="3"
        location_level="0"
      >
        <texture r="0" g="255" b="0">
          ui_mmap_base
        </texture>
      </alife_presentation_smart_base_friend_spot_mini>

      <alife_presentation_smart_science_friend>
        <level_map spot="alife_presentation_smart_science_friend_spot" />
      </alife_presentation_smart_science_friend>
      <alife_presentation_smart_science_friend_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="0" g="255" b="0">
          ui_pda2_pt_science
        </texture>
      </alife_presentation_smart_science_friend_spot>
      <alife_presentation_smart_resource_friend>
        <level_map spot="alife_presentation_smart_resource_friend_spot" />
      </alife_presentation_smart_resource_friend>
      <alife_presentation_smart_resource_friend_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="0" g="255" b="0">
          ui_pda2_pt_resource
        </texture>
      </alife_presentation_smart_resource_friend_spot>

      <alife_presentation_smart_default_enemy>
        <level_map spot="alife_presentation_smart_default_enemy_spot" />
      </alife_presentation_smart_default_enemy>
      <alife_presentation_smart_default_enemy_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="237" g="28" b="36">
          ui_pda2_pt_territory
        </texture>
      </alife_presentation_smart_default_enemy_spot>
      <alife_presentation_smart_territory_enemy>
        <level_map spot="alife_presentation_smart_territory_enemy_spot" />
      </alife_presentation_smart_territory_enemy>
      <alife_presentation_smart_territory_enemy_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="237" g="28" b="36">
          ui_pda2_pt_territory
        </texture>
      </alife_presentation_smart_territory_enemy_spot>
      <alife_presentation_smart_base_enemy>
        <level_map spot="alife_presentation_smart_base_enemy_spot" />
        <mini_map spot="alife_presentation_smart_base_enemy_spot_mini" />
      </alife_presentation_smart_base_enemy>
      <alife_presentation_smart_base_enemy_spot
        width="21"
        height="21"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="0"
        location_level="0"
      >
        <texture r="237" g="28" b="36">
          ui_pda2_base
        </texture>
      </alife_presentation_smart_base_enemy_spot>
      <alife_presentation_smart_base_enemy_spot_mini
        width="15"
        height="15"
        alignment="c"
        stretch="1"
        scale="0"
        scale_min="1"
        scale_max="3"
        location_level="0"
      >
        <texture r="237" g="28" b="36">
          ui_mmap_base
        </texture>
      </alife_presentation_smart_base_enemy_spot_mini>

      <alife_presentation_smart_science_enemy>
        <level_map spot="alife_presentation_smart_science_enemy_spot" />
      </alife_presentation_smart_science_enemy>
      <alife_presentation_smart_science_enemy_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="237" g="28" b="36">
          ui_pda2_pt_science
        </texture>
      </alife_presentation_smart_science_enemy_spot>
      <alife_presentation_smart_resource_enemy>
        <level_map spot="alife_presentation_smart_resource_enemy_spot" />
      </alife_presentation_smart_resource_enemy>
      <alife_presentation_smart_resource_enemy_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="237" g="28" b="36">
          ui_pda2_pt_resource
        </texture>
      </alife_presentation_smart_resource_enemy_spot>

      <alife_presentation_smart_default_neutral>
        <level_map spot="alife_presentation_smart_default_neutral_spot" />
      </alife_presentation_smart_default_neutral>
      <alife_presentation_smart_default_neutral_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="193" g="193" b="193">
          ui_pda2_pt_territory
        </texture>
      </alife_presentation_smart_default_neutral_spot>
      <alife_presentation_smart_territory_neutral>
        <level_map spot="alife_presentation_smart_territory_neutral_spot" />
      </alife_presentation_smart_territory_neutral>
      <alife_presentation_smart_territory_neutral_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="193" g="193" b="193">
          ui_pda2_pt_territory
        </texture>
      </alife_presentation_smart_territory_neutral_spot>
      <alife_presentation_smart_base_neutral>
        <level_map spot="alife_presentation_smart_base_neutral_spot" />
        <mini_map spot="alife_presentation_smart_base_neutral_spot_mini" />
      </alife_presentation_smart_base_neutral>
      <alife_presentation_smart_base_neutral_spot
        width="21"
        height="21"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="0"
        location_level="0"
      >
        <texture r="193" g="193" b="193">
          ui_pda2_base
        </texture>
      </alife_presentation_smart_base_neutral_spot>
      <alife_presentation_smart_base_neutral_spot_mini
        width="15"
        height="15"
        alignment="c"
        stretch="1"
        scale="0"
        scale_min="1"
        scale_max="3"
        location_level="0"
      >
        <texture r="193" g="193" b="193">
          ui_mmap_base
        </texture>
      </alife_presentation_smart_base_neutral_spot_mini>

      <alife_presentation_smart_science_neutral>
        <level_map spot="alife_presentation_smart_science_neutral_spot" />
      </alife_presentation_smart_science_neutral>
      <alife_presentation_smart_science_neutral_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="193" g="193" b="193">
          ui_pda2_pt_science
        </texture>
      </alife_presentation_smart_science_neutral_spot>
      <alife_presentation_smart_resource_neutral>
        <level_map spot="alife_presentation_smart_resource_neutral_spot" />
      </alife_presentation_smart_resource_neutral>
      <alife_presentation_smart_resource_neutral_spot
        width="27"
        height="27"
        alignment="c"
        stretch="1"
        scale_min="1"
        scale_max="3"
        scale="1"
        location_level="0"
      >
        <texture r="193" g="193" b="193">
          ui_pda2_pt_resource
        </texture>
      </alife_presentation_smart_resource_neutral_spot>

      <alife_presentation_squad_friend>
        <mini_map spot="alife_presentation_squad_friend_spot_mini" />
      </alife_presentation_squad_friend>
      <alife_presentation_squad_friend_spot
        width="11"
        height="11"
        alignment="c"
        stretch="1"
        location_level="10"
        scale_min="3.0"
        scale_max="5.1"
        scale="0"
      >
        <texture r="0" g="255" b="0">
          ui_pda2_squad_leader
        </texture>
      </alife_presentation_squad_friend_spot>
      <alife_presentation_squad_friend_spot_mini
        width="9"
        height="9"
        alignment="c"
        stretch="1"
        location_level="10"
        scale_min="3.0"
        scale_max="5.1"
        scale="0"
      >
        <texture r="0" g="255" b="0">
          ui_minimap_squad_leader
        </texture>
      </alife_presentation_squad_friend_spot_mini>

      <alife_presentation_squad_neutral>
        <mini_map spot="alife_presentation_squad_neutral_spot_mini" />
      </alife_presentation_squad_neutral>
      <alife_presentation_squad_neutral_spot
        width="11"
        height="11"
        alignment="c"
        stretch="1"
        location_level="10"
        scale_min="3.0"
        scale_max="5.1"
        scale="0"
      >
        <texture r="255" g="240" b="0">
          ui_pda2_squad_leader
        </texture>
      </alife_presentation_squad_neutral_spot>
      <alife_presentation_squad_neutral_spot_mini
        width="9"
        height="9"
        alignment="c"
        stretch="1"
        location_level="10"
        scale_min="3.0"
        scale_max="5.1"
        scale="0"
      >
        <texture r="255" g="240" b="0">
          ui_minimap_squad_leader
        </texture>
      </alife_presentation_squad_neutral_spot_mini>

      <alife_presentation_squad_enemy>
        <mini_map spot="alife_presentation_squad_enemy_spot_mini" />
      </alife_presentation_squad_enemy>
      <alife_presentation_squad_enemy_spot
        width="11"
        height="11"
        alignment="c"
        stretch="1"
        location_level="10"
        scale_min="3.0"
        scale_max="5.1"
        scale="0"
      >
        <texture r="237" g="28" b="36">
          ui_pda2_squad_leader
        </texture>
      </alife_presentation_squad_enemy_spot>
      <alife_presentation_squad_enemy_spot_mini
        width="9"
        height="9"
        alignment="c"
        stretch="1"
        location_level="10"
        scale_min="3.0"
        scale_max="5.1"
        scale="0"
      >
        <texture r="237" g="28" b="36">
          ui_minimap_squad_leader
        </texture>
      </alife_presentation_squad_enemy_spot_mini>

      <alife_presentation_squad_monster>
        <mini_map spot="alife_presentation_squad_monster_spot_mini" />
      </alife_presentation_squad_monster>
      <alife_presentation_squad_monster_spot
        width="11"
        height="11"
        alignment="c"
        stretch="1"
        location_level="10"
        scale_min="3.0"
        scale_max="5.1"
        scale="0"
      >
        <texture r="237" g="28" b="36">
          ui_pda2_squad_leader
        </texture>
      </alife_presentation_squad_monster_spot>
      <alife_presentation_squad_monster_spot_mini
        width="9"
        height="9"
        alignment="c"
        stretch="1"
        location_level="10"
        scale_min="3.0"
        scale_max="5.1"
        scale="0"
      >
        <texture r="237" g="28" b="36">
          ui_mmap_squad_leader
        </texture>
      </alife_presentation_squad_monster_spot_mini>
      {/**  <!--
       <alife_presentation_squad_attack_point>
       <level_map spot="alife_presentation_squad_attack_point_spot"/>
       <mini_map spot="alife_presentation_squad_attack_point_spot_mini"/>
       </alife_presentation_squad_attack_point>
       <alife_presentation_squad_attack_point_spot width="11" height="11" alignment="c" stretch="1" scale_min="3.0"
       scale_max="5.1" scale="0" location_level="10">
       <texture r="0" g="0" b="255">ui_pda2_squad_leader</texture>
       </alife_presentation_squad_attack_point_spot>
       <alife_presentation_squad_attack_point_spot_mini width="9" height="9" alignment="c" stretch="1"
       scale_min="3.0" scale_max="5.1" scale="0" location_level="10">
       <texture r="0" g="0" b="255">ui_minimap_squad_leader</texture>
       </alife_presentation_squad_attack_point_spot_mini>

       <alife_presentation_enemy_squad_attack_point>
       <level_map spot="alife_presentation_enemy_squad_attack_point_spot"/>
       <mini_map spot="alife_presentation_enemy_squad_attack_point_spot_mini"/>
       </alife_presentation_enemy_squad_attack_point>
       <alife_presentation_enemy_squad_attack_point_spot width="11" height="11" alignment="c" stretch="1"
       scale_min="3.0" scale_max="5.1" scale="0" location_level="10">
       <texture r="255" g="100" b="100">ui_pda2_squad_leader</texture>
       </alife_presentation_enemy_squad_attack_point_spot>
       <alife_presentation_enemy_squad_attack_point_spot_mini width="9" height="9" alignment="c" stretch="1"
       scale_min="3.0" scale_max="5.1" scale="0" location_level="10">
       <texture r="255" g="100" b="100">ui_minimap_squad_leader</texture>
       </alife_presentation_enemy_squad_attack_point_spot_mini>

       <alife_presentation_neutral_squad_attack_point>
       <level_map spot="alife_presentation_neutral_squad_attack_point_spot"/>
       <mini_map spot="alife_presentation_neutral_squad_attack_point_spot_mini"/>
       </alife_presentation_neutral_squad_attack_point>
       <alife_presentation_neutral_squad_attack_point_spot width="11" height="11" alignment="c" stretch="1"
       scale_min="3.0" scale_max="5.1" scale="0" location_level="10">
       <texture r="255" g="255" b="100">ui_pda2_squad_leader</texture>
       </alife_presentation_neutral_squad_attack_point_spot>
       <alife_presentation_neutral_squad_attack_point_spot_mini width="9" height="9" alignment="c" stretch="1"
       scale_min="3.0" scale_max="5.1" scale="0" location_level="10">
       <texture r="255" g="255" b="100">ui_minimap_squad_leader</texture>
       </alife_presentation_neutral_squad_attack_point_spot_mini>

       <alife_presentation_friend_squad_attack_point>
       <level_map spot="alife_presentation_friend_squad_attack_point_spot"/>
       <mini_map spot="alife_presentation_friend_squad_attack_point_spot_mini"/>
       </alife_presentation_friend_squad_attack_point>
       <alife_presentation_friend_squad_attack_point_spot width="11" height="11" alignment="c" stretch="1"
       scale_min="3.0" scale_max="5.1" scale="0" location_level="10">
       <texture r="170" g="255" b="170">ui_pda2_squad_leader</texture>
       </alife_presentation_friend_squad_attack_point_spot>
       <alife_presentation_friend_squad_attack_point_spot_mini width="9" height="9" alignment="c" stretch="1"
       scale_min="3.0" scale_max="5.1" scale="0" location_level="10">
       <texture r="170" g="255" b="170">ui_minimap_squad_leader</texture>
       </alife_presentation_friend_squad_attack_point_spot_mini>
       --> */}
    </Fragment>
  );
}
