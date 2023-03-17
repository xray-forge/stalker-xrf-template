import { Fragment, JSXNode, JSXXML } from "jsx-xml";

export function MultiplayerBuyButtons(): JSXNode {
  return (
    <Fragment>
      <btn_tab_pistols x="0" y="37" width="85" height="103" accel="k1" horz_al="0">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_1</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_pistols>

      <btn_tab_primary x="0" y="139" width="85" height="103" accel="k2" horz_al="1">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_2</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_primary>
      <btn_tab_granades x="0" y="241" width="85" height="103" accel="k3" horz_al="1">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_3</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_granades>
      <btn_tab_outfits x="0" y="344" width="85" height="103" accel="k4" horz_al="1">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_4</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_outfits>

      <btn_tab_equipment x="0" y="447" width="85" height="103" accel="k5" horz_al="1">
        <texture>ui_inGame2_Mp_buyscreen_small_weapons_screen_5</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_tab_equipment>

      <btn_bag_shotgun x="35" y="50" width="209" height="118" horz_al="0" accel="k1">
        <window_name>sub_btn</window_name>
        <texture>ui_inGame2_Mp_buyscreen_second_weapons_shotguns</texture>
        <text font="letterica16" align="l" vert_align="t">
          ui_inv_shotguns
        </text>
        <idention over_x="33" normal_x="33" normal_y="87" over_y="87" />
        <text_color>
          <e r="130" g="130" b="130" />
        </text_color>
        <sound_h>weapons\gen_empty</sound_h>
        <sound_t>weapons\generic_close</sound_t>
      </btn_bag_shotgun>

      <btn_bag_assault x="35" y="168" width="209" height="118" horz_al="0" accel="k2">
        <window_name>sub_btn</window_name>
        <texture>ui_inGame2_Mp_buyscreen_second_weapons_machineguns</texture>
        <text font="letterica16" align="l" vert_align="t">
          ui_inv_rifles
        </text>
        <idention over_x="33" normal_x="33" normal_y="87" over_y="87" />
        <text_color>
          <e r="130" g="130" b="130" />
        </text_color>
        <sound_h>weapons\gen_empty</sound_h>
        <sound_t>weapons\generic_close</sound_t>
      </btn_bag_assault>

      <btn_bag_sniper x="35" y="286" width="209" height="118" horz_al="0" accel="k3">
        <window_name>sub_btn</window_name>
        <texture>ui_inGame2_Mp_buyscreen_second_weapons_Sniperrifles</texture>
        <text font="letterica16" align="l" vert_align="t">
          ui_inv_sniper_rifles
        </text>
        <idention over_x="33" normal_x="33" normal_y="87" over_y="87" />
        <text_color>
          <e r="130" g="130" b="130" />
        </text_color>
        <sound_h>weapons\gen_empty</sound_h>
        <sound_t>weapons\generic_close</sound_t>
      </btn_bag_sniper>

      <btn_bag_heavy x="35" y="404" width="209" height="118" horz_al="0" accel="k4">
        <window_name>sub_btn</window_name>
        <texture>ui_inGame2_Mp_buyscreen_second_weapons_HeavyWeapons</texture>
        <text font="letterica16" align="l" vert_align="t">
          ui_inv_heavy_weapons
        </text>
        <idention over_x="33" normal_x="33" normal_y="87" over_y="87" />
        <text_color>
          <e r="130" g="130" b="130" />
        </text_color>
        <sound_h>weapons\gen_empty</sound_h>
        <sound_t>weapons\generic_close</sound_t>
      </btn_bag_heavy>

      <shop_back_btn x="0" y="0" width="36" height="35" accel="kBACK" accel_ext="kESCAPE">
        <window_name>btn_shop_back</window_name>
        <texture>ui_inGame2_Mp_buyscreen_back_button</texture>
        <sound_t>weapons\generic_close</sound_t>
      </shop_back_btn>

      <btn_preset_1 x="865" y="255" width="127" height="28" hint="ui_inv_preset1(F1)" accel="kF1">
        <window_name>btn_preset_1</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_preset1
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_preset_1>

      <btn_preset_2 x="865" y="343" width="127" height="28" hint="ui_inv_preset2(F2)" accel="kF2">
        <window_name>btn_preset_2</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_preset2
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_preset_2>

      <btn_preset_3 x="865" y="431" width="127" height="28" hint="ui_inv_preset3(F3)" accel="kF3">
        <window_name>btn_preset_3</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_preset3
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_preset_3>

      <btn_last_set x="865" y="519" width="127" height="28" hint="ui_inv_last_buy(F4)" accel="kF4">
        <window_name>btn_last_set</window_name>
        <texture>ui_inGame2_Mp_bigbuttone_nodowncorner</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_last_set
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_last_set>

      <btn_preset_def x="865" y="574" width="127" height="28" hint="ui_inv_default(F5)" accel="kF5">
        <window_name>btn_preset_def</window_name>
        <texture>ui_inGame2_Mp_bigbuttone_noupcorner</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_preset_def
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_preset_def>

      <btn_ok x="865" y="636" width="127" height="28" accel="kRETURN" accel_ext="kSPACE">
        <window_name>btn_ok</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_inv_ok
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_ok>

      <btn_cancel x="865" y="670" width="127" height="28" accel="kESCAPE">
        <window_name>btn_cancel</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_inv_cancel
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_cancel>

      <btn_reset x="865" y="730" width="127" height="28" hint="ui_inv_reset_items(C)" accel="kC">
        <window_name>btn_reset</window_name>
        <texture>ui_inGame2_Mp_bigbuttone_nodowncorner</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_reset
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_reset>

      <btn_save_preset_1 x="959" y="217" width="26" height="25" check_mode="0">
        <window_name>btn_save_preset_1</window_name>
        <texture>ui_inGame2_Mp_buyscreen_saveselection_buttone</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_save_preset_1>

      <btn_save_preset_2 x="959" y="305" width="26" height="25" check_mode="0">
        <window_name>btn_save_preset_2</window_name>
        <texture>ui_inGame2_Mp_buyscreen_saveselection_buttone</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_save_preset_2>

      <btn_save_preset_3 x="959" y="393" width="26" height="25" check_mode="0">
        <window_name>btn_save_preset_3</window_name>
        <texture>ui_inGame2_Mp_buyscreen_saveselection_buttone</texture>
        <sound_t>weapons\generic_close</sound_t>
      </btn_save_preset_3>

      <btn_sell x="541" y="509" width="137" height="27" hint="ui_inv_sell_items(X)" accel="kX">
        <window_name>btn_sell</window_name>
        <texture>ui_inGame2_Mp_bigbuttone</texture>
        <text y="2" font="graffiti19" a="170">
          ui_st_sell_all
        </text>
        <sound_t>weapons\generic_close</sound_t>
      </btn_sell>

      <btn_pistol_silencer x="515" y="112" width="19" height="19" hint="ui_inv_silencer_pistol" accel="kA">
        <window_name>btn_pistol_silencer</window_name>
        <texture>ui_inGame2_Mp_buyscreen_buysilencer_buttone</texture>
      </btn_pistol_silencer>

      <btn_rifle_silencer x="793" y="112" width="19" height="19" hint="ui_inv_silencer_rifle" accel="kF">
        <window_name>btn_rifle_silencer</window_name>
        <texture>ui_inGame2_Mp_buyscreen_buysilencer_buttone</texture>
      </btn_rifle_silencer>

      <btn_rifle_scope x="771" y="112" width="19" height="19" hint="ui_inv_scope_rifle" accel="kS">
        <window_name>btn_rifle_scope</window_name>
        <texture>ui_inGame2_Mp_buyscreen_buyscope_buttone</texture>
      </btn_rifle_scope>

      <btn_rifle_glauncher x="749" y="112" width="19" height="19" hint="ui_inv_granadelauncher_rifle" accel="kD">
        <window_name>btn_rifle_glauncher</window_name>
        <texture>ui_inGame2_Mp_buyscreen_buygrenadeluncher_buttone</texture>
      </btn_rifle_glauncher>
    </Fragment>
  );
}
