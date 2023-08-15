import { JSXNode, JSXXML } from "jsx-xml";

import { ArtefactParams } from "@/engine/forms/af_params_16";
import { BoosterParams } from "@/engine/forms/booster_params_16";

/**
 * Create UI forms related to buying and selling menu items.
 */
export function create(): JSXNode {
  return (
    <w>
      <main_frame x="0" y="573" width="680" height="183" />

      <auto_static x="296" y="0" width="40" height="18">
        <text font="letterica18" r="128" g="128" b="128" align="r">
          st_weight
        </text>
      </auto_static>

      <static_name x="28" y="0" width="350" height="20">
        <text font="graffiti22" complex_mode="1" align="l" vert_align="c" />
      </static_name>

      <static_cost x="553" y="0" width="110" height="20">
        <text align="r" vert_align="c" font="graffiti22" a="170" />
      </static_cost>

      <static_weight x="340" y="0" width="64" height="30">
        <text align="l" x="0" y="0" font="letterica18" r="240" g="217" b="182" />
      </static_weight>

      <image_static x="144" y="110" width="160" height="130" alignment="c" stretch="1" />

      <descr_list x="300" y="35" width="368" height="144" always_show_scroll="0" left_ident="15">
        <font font="letterica16" a="170" />
      </descr_list>
      <description_line x="16" y="50" width="208" height="9" stretch="1"></description_line>

      <condition_params x="0" y="0" width="96" height="28">
        <caption x="12" y="4" width="48" height="14">
          <text align="l" font="letterica16" r="124" g="119" b="115">
            st_condition
          </text>
        </caption>

        <progress_state x="12" y="20" width="96" height="8" horz="1">
          <progress>
            <texture a="255" r="55" g="255" b="255">
              ui_buymenu_progBar
            </texture>
          </progress>
          <background>
            <texture a="90" r="55" g="255" b="255">
              ui_buymenu_progBar
            </texture>
          </background>
          <color_less color="pda_red" />
          <color_more color="pda_green" />
        </progress_state>
      </condition_params>

      <wpn_params x="0" y="0" width="368" height="50">
        <prop_line x="0" y="0" width="208" height="9" stretch="1"></prop_line>
        <static_accuracy x="0" y="10" width="14" height="18" stretch="1">
          <texture>ui_wp_prop_tochnost</texture>
        </static_accuracy>
        <static_handling x="184" y="10" width="14" height="18" stretch="1">
          <texture>ui_wp_prop_ergonomics</texture>
        </static_handling>
        <static_damage x="0" y="28" width="14" height="18" stretch="1">
          <texture>ui_wp_prop_damage</texture>
        </static_damage>
        <static_rpm x="184" y="28" width="14" height="18" stretch="1">
          <texture>ui_wp_prop_skorostrelnost</texture>
        </static_rpm>
        <cap_accuracy x="18" y="12" width="64" height="8">
          <text font="letterica16" r="170" g="170" b="170" align="l">
            ui_inv_accuracy
          </text>
        </cap_accuracy>
        <cap_damage x="18" y="30" width="64" height="8">
          <text font="letterica16" r="170" g="170" b="170" align="l">
            ui_inv_damage
          </text>
        </cap_damage>
        <cap_handling x="202" y="12" width="64" height="8">
          <text font="letterica16" r="170" g="170" b="170" align="l">
            ui_inv_handling
          </text>
        </cap_handling>
        <cap_rpm x="202" y="30" width="64" height="8">
          <text font="letterica16" r="170" g="170" b="170" align="l">
            ui_inv_rate_of_fire
          </text>
        </cap_rpm>

        <progress_accuracy x="96" y="17" width="80" height="9" horz="1">
          <progress>
            <texture a="150">ui_inGame2_hint_wnd_bar_alfa_line</texture>
          </progress>
          <background>
            <texture>ui_inGame2_hint_wnd_bar</texture>
          </background>
        </progress_accuracy>
        <progress_damage x="96" y="35" width="80" height="9" horz="1">
          <progress>
            <texture a="150">ui_inGame2_hint_wnd_bar_alfa_line</texture>
          </progress>
          <background>
            <texture>ui_inGame2_hint_wnd_bar</texture>
          </background>
        </progress_damage>
        <progress_handling x="268" y="17" width="80" height="9" horz="1">
          <progress>
            <texture a="150">ui_inGame2_hint_wnd_bar_alfa_line</texture>
          </progress>
          <background>
            <texture>ui_inGame2_hint_wnd_bar</texture>
          </background>
        </progress_handling>
        <progress_rpm x="268" y="35" width="80" height="9" horz="1">
          <progress>
            <texture a="150">ui_inGame2_hint_wnd_bar_alfa_line</texture>
          </progress>
          <background>
            <texture>ui_inGame2_hint_wnd_bar</texture>
          </background>
        </progress_rpm>
      </wpn_params>

      <ArtefactParams />
      <BoosterParams />
    </w>
  );
}
