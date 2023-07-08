import { Fragment, JSXNode, JSXXML } from "jsx-xml";

/**
 * todo;
 */
export function MultiplayerBuyButtons16(): JSXNode {
  return (
    <Fragment>
      <btn_tab_pistols x="0" y="37" width="68" height="94" accel="k1" horz_al="0" stretch="1">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_1</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_pistols>

      <btn_tab_primary x="0" y="139" width="68" height="94" accel="k2" horz_al="1" stretch="1">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_2</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_primary>
      <btn_tab_granades x="0" y="241" width="68" height="94" accel="k3" horz_al="1" stretch="1">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_3</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_granades>
      <btn_tab_outfits x="0" y="344" width="68" height="94" accel="k4" horz_al="1" stretch="1">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_4</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_outfits>

      <btn_tab_equipment x="0" y="447" width="68" height="94" accel="k5" horz_al="1" stretch="1">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_5</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_equipment>

      <btn_bag_shotgun x="28" y="50" width="167" height="118" horz_al="0" accel="k1" stretch="1">
        <window_name>sub_btn</window_name>
        <texture>ui_inGame2_Mp_buyscreen_second_weapons_shotguns</texture>
        <text font="letterica16" align="l" vert_align="t">
          ui_inv_shotguns
        </text>
        <idention over_x="26" normal_x="26" normal_y="87" over_y="87" />
        <text_color>
          <e r="130" g="130" b="130" />
        </text_color>
        <sound_h>weapons\gen_empty</sound_h>
        <sound_t>weapons\generic_close</sound_t>
      </btn_bag_shotgun>

      <btn_bag_assault x="28" y="168" width="167" height="118" horz_al="0" accel="k2" stretch="1">
        <window_name>sub_btn</window_name>
        <texture>ui_inGame2_Mp_buyscreen_second_weapons_machineguns</texture>
        <text font="letterica16" align="l" vert_align="t">
          ui_inv_rifles
        </text>
        <idention over_x="26" normal_x="26" normal_y="87" over_y="87" />
        <text_color>
          <e r="130" g="130" b="130" />
        </text_color>
        <sound_h>weapons\gen_empty</sound_h>
        <sound_t>weapons\generic_close</sound_t>
      </btn_bag_assault>

      <btn_bag_sniper x="28" y="286" width="167" height="118" horz_al="0" accel="k3" stretch="1">
        <window_name>sub_btn</window_name>
        <texture>ui_inGame2_Mp_buyscreen_second_weapons_Sniperrifles</texture>
        <text font="letterica16" align="l" vert_align="t">
          ui_inv_sniper_rifles
        </text>
        <idention over_x="26" normal_x="26" normal_y="87" over_y="87" />
        <text_color>
          <e r="130" g="130" b="130" />
        </text_color>
        <sound_h>weapons\gen_empty</sound_h>
        <sound_t>weapons\generic_close</sound_t>
      </btn_bag_sniper>

      <btn_bag_heavy x="28" y="404" width="167" height="118" horz_al="0" accel="k4" stretch="1">
        <window_name>sub_btn</window_name>
        <texture>ui_inGame2_Mp_buyscreen_second_weapons_HeavyWeapons</texture>
        <text font="letterica16" align="l" vert_align="t">
          ui_inv_heavy_weapons
        </text>
        <idention over_x="26" normal_x="26" normal_y="87" over_y="87" />
        <text_color>
          <e r="130" g="130" b="130" />
        </text_color>
        <sound_h>weapons\gen_empty</sound_h>
        <sound_t>weapons\generic_close</sound_t>
      </btn_bag_heavy>

      <shop_back_btn x="0" y="0" width="29" height="35" accel="kBACK" accel_ext="kESCAPE" stretch="1">
        <window_name>btn_shop_back</window_name>
        <texture>ui_inGame2_Mp_buyscreen_back_button</texture>
        <sound_t>weapons\generic_close</sound_t>
      </shop_back_btn>

      <btn_preset_1 x="692" y="255" width="102" height="28" hint="ui_inv_preset1(F1)" accel="kF1" stretch="1">
        <window_name>btn_preset_1</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_preset1
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_preset_1>

      <btn_preset_2 x="692" y="343" width="102" height="28" hint="ui_inv_preset2(F2)" accel="kF2" stretch="1">
        <window_name>btn_preset_2</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_preset2
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_preset_2>

      <btn_preset_3 x="692" y="431" width="102" height="28" hint="ui_inv_preset3(F3)" accel="kF3" stretch="1">
        <window_name>btn_preset_3</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_preset3
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_preset_3>

      <btn_last_set x="692" y="519" width="102" height="28" hint="ui_inv_last_buy(F4)" accel="kF4" stretch="1">
        <window_name>btn_last_set</window_name>
        <texture>ui_inGame2_Mp_bigbuttone_nodowncorner</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_last_set
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_last_set>

      <btn_preset_def x="692" y="574" width="102" height="28" hint="ui_inv_default(F5)" accel="kF5" stretch="1">
        <window_name>btn_preset_def</window_name>
        <texture>ui_inGame2_Mp_bigbuttone_noupcorner</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_preset_def
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_preset_def>

      <btn_ok x="692" y="636" width="102" height="28" accel="kRETURN" accel_ext="kSPACE" stretch="1">
        <window_name>btn_ok</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_inv_ok
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_ok>

      <btn_cancel x="692" y="670" width="102" height="28" accel="kESCAPE" stretch="1">
        <window_name>btn_cancel</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_inv_cancel
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_cancel>

      <btn_reset x="692" y="730" width="102" height="28" hint="ui_inv_reset_items(C)" accel="kC" stretch="1">
        <window_name>btn_reset</window_name>
        <texture>ui_inGame2_Mp_bigbuttone_nodowncorner</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_reset
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_reset>

      <btn_save_preset_1 x="768" y="217" width="21" height="25" check_mode="0" stretch="1">
        <window_name>btn_save_preset_1</window_name>
        <texture>ui_inGame2_Mp_buyscreen_saveselection_buttone</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_save_preset_1>

      <btn_save_preset_2 x="768" y="305" width="21" height="25" check_mode="0" stretch="1">
        <window_name>btn_save_preset_2</window_name>
        <texture>ui_inGame2_Mp_buyscreen_saveselection_buttone</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_save_preset_2>

      <btn_save_preset_3 x="768" y="393" width="21" height="25" check_mode="0" stretch="1">
        <window_name>btn_save_preset_3</window_name>
        <texture>ui_inGame2_Mp_buyscreen_saveselection_buttone</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_save_preset_3>

      <btn_sell x="433" y="509" width="110" height="27" hint="ui_inv_sell_items(X)" accel="kX" stretch="1">
        <window_name>btn_sell</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_sell_all
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_sell>

      <btn_pistol_silencer x="411" y="112" width="15" height="19" hint="ui_inv_silencer_pistol" accel="kA" stretch="1">
        <window_name>btn_pistol_silencer</window_name>
        <texture>ui_inGame2_Mp_buyscreen_buysilencer_buttone</texture>
      </btn_pistol_silencer>

      <btn_rifle_silencer x="632" y="112" width="15" height="19" hint="ui_inv_silencer_rifle" accel="kF" stretch="1">
        <window_name>btn_rifle_silencer</window_name>
        <texture>ui_inGame2_Mp_buyscreen_buysilencer_buttone</texture>
      </btn_rifle_silencer>

      <btn_rifle_scope x="614" y="112" width="15" height="19" hint="ui_inv_scope_rifle" accel="kS" stretch="1">
        <window_name>btn_rifle_scope</window_name>
        <texture>ui_inGame2_Mp_buyscreen_buyscope_buttone</texture>
      </btn_rifle_scope>

      <btn_rifle_glauncher
        x="597"
        y="112"
        width="15"
        height="19"
        hint="ui_inv_granadelauncher_rifle"
        accel="kD"
        stretch="1"
      >
        <window_name>btn_rifle_glauncher</window_name>
        <texture>ui_inGame2_Mp_buyscreen_buygrenadeluncher_buttone</texture>
      </btn_rifle_glauncher>
    </Fragment>
  );
}
