import { JSXNode, JSXXML } from "jsx-xml";

export function create(): JSXNode {
  return (
    <w>
      <background x="0" y="0" width="1024" height="768">
        <auto_static x="102" y="0" width="819" height="768" stretch="1">
          <texture>ui_inGame2_opt_background</texture>
        </auto_static>
        <auto_static x="253" y="250" width="269" height="176" stretch="1">
          <texture x="1" y="1" width="335" height="174">
            ui\video_window
          </texture>
        </auto_static>
        <auto_static x="0" y="0" width="102" height="768" stretch="1">
          <texture>ui_inGame2_opt_left_widepanel</texture>
        </auto_static>
        <auto_static x="921" y="0" width="102" height="768" stretch="1">
          <texture>ui_inGame2_opt_right_widepanel</texture>
        </auto_static>
      </background>

      <main_dialog>
        <dialog x="484" y="274" width="389" height="462" stretch="1">
          <texture>ui_inGame2_opt_main_window</texture>
          <auto_static x="11" y="27" width="368" height="38" stretch="1">
            <texture>ui_inGame2_opt_buttons_frame</texture>
          </auto_static>
        </dialog>

        <btn_accept x="84" y="431" width="108" height="26" stretch="1">
          <text font="letterica18" align="c">
            ui_mm_apply
          </text>
          <texture>ui_inGame2_Mp_bigbuttone</texture>
          <text_color>
            <e r="170" g="170" b="170" />
          </text_color>
        </btn_accept>

        <btn_cancel x="196" y="431" width="108" height="26" stretch="1">
          <text font="letterica18" align="c">
            ui_mm_cancel
          </text>
          <texture>ui_inGame2_Mp_bigbuttone</texture>
          <text_color>
            <e r="170" g="170" b="170" />
          </text_color>
        </btn_cancel>

        <tab x="11" y="27" width="368" height="38">
          <button x="1" y="2" width="105" height="25" id="video" stretch="1">
            <texture>ui_inGame2_opt_button_1</texture>
            <text font="letterica18" align="c">
              ui_mm_video
            </text>
            <text_color>
              <e r="200" g="200" b="200" />
            </text_color>
          </button>

          <button x="89" y="2" width="104" height="25" id="sound" stretch="1">
            <texture>ui_inGame2_opt_button_1</texture>
            <text font="letterica18" align="c">
              ui_mm_sound
            </text>
            <text_color>
              <e r="200" g="200" b="200" />
            </text_color>
          </button>

          <button x="176" y="2" width="105" height="25" id="gameplay" stretch="1">
            <texture>ui_inGame2_opt_button_1</texture>
            <text font="letterica18" align="c">
              ui_mm_gameplay
            </text>
            <text_color>
              <e r="200" g="200" b="200" />
            </text_color>
          </button>

          <button x="264" y="2" width="103" height="25" id="controls" stretch="1">
            <texture>ui_inGame2_opt_button_2</texture>
            <text font="letterica18" align="c">
              ui_mm_controls
            </text>
            <text_color>
              <e r="200" g="200" b="200" />
            </text_color>
          </button>
        </tab>
      </main_dialog>

      <tab_size x="22" y="63" width="354" height="344" />
      <tab_video>
        <cap_renderer x="12" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_renderer
          </text>
        </cap_renderer>
        <list_renderer x="140" y="5" width="188" height="20" list_length="5" always_show_scroll="0">
          <options_item entry="renderer" group="mm_opt_video" depend="restart" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </list_renderer>

        <cap_preset x="12" y="33" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_quality_presets
          </text>
        </cap_preset>
        <list_presets x="140" y="35" width="188" height="20" list_length="5" always_show_scroll="0">
          <options_item entry="_preset" group="mm_opt_video_preset" depend="restart" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </list_presets>

        <cap_resolution x="12" y="63" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_resolution
          </text>
        </cap_resolution>
        <list_resolution x="140" y="65" width="188" height="20" list_length="7" always_show_scroll="1">
          <options_item entry="vid_mode" group="mm_opt_video" depend="vid" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </list_resolution>

        <cap_gamma x="12" y="93" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_gamma
          </text>
        </cap_gamma>
        <track_gamma x="140" y="97" width="188" height="16">
          <options_item entry="rs_c_gamma" group="mm_opt_video" depend="runtime" />
        </track_gamma>

        <cap_contrast x="12" y="123" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_contrast
          </text>
        </cap_contrast>
        <track_contrast x="140" y="127" width="188" height="16">
          <options_item entry="rs_c_contrast" group="mm_opt_video" depend="runtime" />
        </track_contrast>

        <cap_brightness x="12" y="153" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_brightness
          </text>
        </cap_brightness>
        <track_brightness x="140" y="157" width="188" height="16">
          <options_item entry="rs_c_brightness" group="mm_opt_video" depend="runtime" />
        </track_brightness>

        <cap_fullscreen x="12" y="183" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_fullscreen
          </text>
        </cap_fullscreen>
        <check_fullscreen x="129" y="180" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="rs_fullscreen" group="mm_opt_video" depend="vid" />
        </check_fullscreen>

        <btn_advanced x="270" y="322" width="86" height="24" stretch="1">
          <text r="170" g="170" b="170" align="c" font="letterica16">
            ui_mm_advanced
          </text>
          <texture>ui_inGame2_button</texture>
          <text_color>
            <e r="210" g="210" b="210" />
          </text_color>
        </btn_advanced>
      </tab_video>

      <video_adv>
        <scroll_v
          x="-4"
          y="0"
          width="360"
          height="320"
          right_ident="0"
          left_ident="0"
          top_indent="0"
          bottom_indent="0"
          vert_interval="0"
          always_show_scroll="0"
        />

        <templ_item width="360" height="30" />

        <cap_vis_dist x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_vis_distance
          </text>
        </cap_vis_dist>
        <track_vis_dist x="144" y="6" width="188" height="16" step="0.1">
          <options_item entry="rs_vis_distance" group="mm_opt_video_adv" />
        </track_vis_dist>

        <cap_geometry_lod x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_geometry_lod
          </text>
        </cap_geometry_lod>
        <track_geometry_lod x="144" y="6" width="188" height="16" step="0.1">
          <options_item entry="r__geometry_lod" group="mm_opt_video_adv" />
        </track_geometry_lod>

        <cap_detail_density x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_detail_density
          </text>
        </cap_detail_density>
        <track_detail_density x="144" y="6" width="188" height="16" step="0.02" invert="1">
          <options_item entry="r__detail_density" group="mm_opt_video_adv" />
        </track_detail_density>

        <cap_texture_lod x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_texture_quality
          </text>
        </cap_texture_lod>
        <track_texture_lod x="144" y="6" width="188" height="16" invert="1" step="1" is_integer="1">
          <options_item entry="texture_lod" group="mm_opt_video_adv" depend="restart" />
        </track_texture_lod>

        <cap_aniso x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_anisotropic
          </text>
        </cap_aniso>
        <track_aniso x="144" y="6" width="188" height="16" step="1" is_integer="1">
          <options_item entry="r__tf_aniso" group="mm_opt_video_adv" />
        </track_aniso>

        <cap_ssample x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_supersample
          </text>
        </cap_ssample>
        <track_ssample x="144" y="6" width="188" height="16" step="1" is_integer="1">
          <options_item entry="r__supersample" group="mm_opt_video_adv" depend="vid" />
        </track_ssample>
        <combo_ssample x="144" y="0" width="188" height="20" list_length="4" always_show_scroll="0">
          <options_item entry="r3_msaa" group="mm_opt_video_adv" depend="vid" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </combo_ssample>

        <cap_r2_sun x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_r2_sun
          </text>
        </cap_r2_sun>
        <check_r2_sun x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r2_sun" group="mm_opt_video" />
        </check_r2_sun>

        <cap_r1_detail_textures x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_r1_detail_textures
          </text>
        </cap_r1_detail_textures>
        <check_r1_detail_textures x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r1_detail_textures" group="mm_opt_video" />
        </check_r1_detail_textures>

        <cap_r2_detail_bump x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_r2_detail_bump
          </text>
        </cap_r2_detail_bump>
        <check_r2_detail_bump x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r2_detail_bump" group="mm_opt_video" />
        </check_r2_detail_bump>

        <cap_r2_steep_parallax x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_r2_steep_parallax
          </text>
        </cap_r2_steep_parallax>
        <check_r2_steep_parallax x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r2_steep_parallax" group="mm_opt_video" />
        </check_r2_steep_parallax>

        <cap_r2_sun_quality x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_r2_sun_quality
          </text>
        </cap_r2_sun_quality>
        <list_r2_sun_quality x="144" y="0" width="188" height="20" list_length="3">
          <options_item entry="r2_sun_quality" group="mm_opt_video" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </list_r2_sun_quality>

        <cap_r3_dynamic_wet_surfaces x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_r3_dynamic_wet_surfaces
          </text>
        </cap_r3_dynamic_wet_surfaces>
        <check_r3_dynamic_wet_surfaces x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r3_dynamic_wet_surfaces" group="mm_opt_video" />
        </check_r3_dynamic_wet_surfaces>

        <cap_r3_volumetric_smoke x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_r3_volumetric_smoke
          </text>
        </cap_r3_volumetric_smoke>
        <check_r3_volumetric_smoke x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r3_volumetric_smoke" group="mm_opt_video" />
        </check_r3_volumetric_smoke>

        <cap_light_distance x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_light_distance
          </text>
        </cap_light_distance>
        <track_light_distance x="144" y="6" width="188" height="16">
          <options_item entry="r2_slight_fade" group="mm_opt_video_adv" />
        </track_light_distance>

        <cap_npc_torch x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_npc_torch
          </text>
        </cap_npc_torch>
        <check_npc_torch x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="ai_use_torch_dynamic_lights" group="mm_opt_video_adv" />
        </check_npc_torch>

        <cap_particles_distance x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_sun_quality
          </text>
        </cap_particles_distance>
        <track_particles_distance x="144" y="6" width="188" height="16" step="0.1">
          <options_item entry="r2_ls_squality" group="mm_opt_video_adv" />
        </track_particles_distance>

        <cap_vsync x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_vsync
          </text>
        </cap_vsync>
        <check_vsync x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="rs_v_sync" group="mm_opt_video_adv" depend="vid" />
        </check_vsync>

        <cap_60hz x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_60_hz
          </text>
        </cap_60hz>
        <check_60hz x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="rs_refresh_60hz" group="mm_opt_video_adv" depend="vid" />
        </check_60hz>

        <cap_sun_shafts x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_sun_shafts
          </text>
        </cap_sun_shafts>
        <combo_sun_shafts x="144" y="0" width="188" height="20" always_show_scroll="1">
          <options_item entry="r2_sun_shafts" group="mm_opt_video" depend="vid" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </combo_sun_shafts>

        <cap_ao x="16" y="3" width="108" height="76">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_ssao_text
          </text>
        </cap_ao>
        <radio_tab_ao_options x="144" y="0" width="108" height="101" radio="1">
          <options_item entry="r2_ssao_mode" group="mm_opt_video" depend="restart" />
          <button x="-8" y="0" width="37" height="28" id="disabled" stretch="1">
            <text font="letterica16" vert_align="c" x="29" y="3" align="l">
              st_opt_off
            </text>
            <text_color>
              <e r="170" g="170" b="170" />
              <d r="70" g="70" b="70" />
            </text_color>
          </button>
          <button x="-8" y="25" width="37" height="28" id="default" stretch="1">
            <text font="letterica16" vert_align="c" x="29" y="3" align="l">
              ui_mm_ssao
            </text>
            <text_color>
              <e r="170" g="170" b="170" />
              <d r="70" g="70" b="70" />
            </text_color>
          </button>
          <button x="-8" y="50" width="37" height="28" id="hdao" stretch="1">
            <text font="letterica16" vert_align="c" x="29" y="3" align="l">
              ui_mm_hdao
            </text>
            <text_color>
              <e r="170" g="170" b="170" />
              <d r="70" g="70" b="70" />
            </text_color>
          </button>
          <button x="-8" y="75" width="37" height="28" id="hbao" stretch="1">
            <text font="letterica16" vert_align="c" x="29" y="3" align="l">
              ui_mm_hbao
            </text>
            <text_color>
              <e r="170" g="170" b="170" />
              <d r="70" g="70" b="70" />
            </text_color>
          </button>
        </radio_tab_ao_options>

        <cap_ssao x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_ssao_quality
          </text>
        </cap_ssao>
        <combo_ssao x="144" y="0" width="188" height="20" always_show_scroll="1">
          <options_item entry="r2_ssao" group="mm_opt_video" depend="restart" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </combo_ssao>

        <cap_soft_water x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_soft_water
          </text>
        </cap_soft_water>
        <check_soft_water x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r2_soft_water" group="mm_opt_video_adv" depend="vid" />
        </check_soft_water>

        <cap_soft_particles x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_soft_particles
          </text>
        </cap_soft_particles>
        <check_soft_particles x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r2_soft_particles" group="mm_opt_video_adv" depend="vid" />
        </check_soft_particles>

        <cap_dof x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_dof
          </text>
        </cap_dof>
        <check_dof x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r2_dof_enable" group="mm_opt_video_adv" depend="vid" />
        </check_dof>

        <cap_volumetric_light x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_volumetric_light
          </text>
        </cap_volumetric_light>
        <check_volumetric_light x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r2_volumetric_lights" group="mm_opt_video_adv" depend="vid" />
        </check_volumetric_light>

        <cap_r3_msaa_alphatest x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_msaa_alphatest
          </text>
        </cap_r3_msaa_alphatest>
        <combo_r3_msaa_alphatest x="144" y="0" width="188" height="20" always_show_scroll="1">
          <options_item entry="r3_msaa_alphatest" group="mm_opt_video" depend="restart" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </combo_r3_msaa_alphatest>

        <cap_r3_msaa_opt x="16" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_r3_DX10_1
          </text>
        </cap_r3_msaa_opt>
        <check_r3_msaa_opt x="133" y="0" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="r3_msaa_opt" group="mm_opt_video_adv" depend="vid" />
        </check_r3_msaa_opt>

        <btn_to_simply x="270" y="322" width="86" height="24" stretch="1">
          <text align="c" font="letterica16">
            ui_mm_simply
          </text>
          <texture>ui_inGame2_button</texture>
          <text_color>
            <e r="210" g="210" b="210" />
          </text_color>
        </btn_to_simply>
      </video_adv>

      <tab_sound>
        <cap_mastervolume x="12" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_master_volume
          </text>
        </cap_mastervolume>
        <track_mastervolume x="140" y="6" width="188" height="16">
          <options_item entry="snd_volume_eff" group="mm_opt_sound" />
        </track_mastervolume>

        <cap_musicvolume x="12" y="33" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_music_volume
          </text>
        </cap_musicvolume>
        <track_musicvolume x="140" y="36" width="188" height="16">
          <options_item entry="snd_volume_music" group="mm_opt_sound" />
        </track_musicvolume>

        <cap_snd_device x="12" y="63" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_snd_device
          </text>
        </cap_snd_device>
        <list_snd_device x="140" y="65" width="188" height="20" always_show_scroll="1">
          <options_item entry="snd_device" group="mm_opt_sound" depend="restart" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </list_snd_device>

        <cap_check_eax x="12" y="93" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_eax
          </text>
        </cap_check_eax>
        <check_eax x="129" y="90" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="snd_efx" group="mm_opt_sound" depend="snd" />
        </check_eax>

        <cap_check_dynamic_music x="12" y="123" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_dynamic_music
          </text>
        </cap_check_dynamic_music>
        <check_dynamic_music x="129" y="120" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="g_dynamic_music" group="mm_opt_sound" depend="snd" />
        </check_dynamic_music>
      </tab_sound>
      <tab_gameplay>
        <cap_difficulty x="12" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_difficulty
          </text>
        </cap_difficulty>

        <list_difficulty x="140" y="5" width="188" height="20">
          <options_item entry="g_game_difficulty" group="mm_opt_gameplay" />
          <list_font r="170" g="170" b="170" font="letterica16" />
          <text_color>
            <e r="170" g="170" b="170" />
            <d r="70" g="70" b="70" />
          </text_color>
        </list_difficulty>

        <cap_check_crosshair x="12" y="33" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_show_crosshair
          </text>
        </cap_check_crosshair>
        <check_crosshair x="129" y="30" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="hud_crosshair" group="mm_opt_gameplay" />
        </check_crosshair>

        <cap_check_dyn_crosshair x="12" y="63" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_dyn_crosshair
          </text>
        </cap_check_dyn_crosshair>
        <check_dyn_crosshair x="129" y="60" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="cl_dynamiccrosshair" group="mm_opt_gameplay" />
        </check_dyn_crosshair>

        <cap_check_show_weapon x="12" y="93" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_show_weapon
          </text>
        </cap_check_show_weapon>
        <check_show_weapon x="129" y="90" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="hud_weapon" group="mm_opt_gameplay" />
        </check_show_weapon>

        <cap_check_dist x="12" y="123" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_crosshair_distance
          </text>
        </cap_check_dist>
        <check_dist x="129" y="120" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="hud_crosshair_dist" group="mm_opt_gameplay" />
        </check_dist>

        <cap_check_tips x="12" y="153" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_tips
          </text>
        </cap_check_tips>
        <check_tips x="129" y="150" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="hud_info" group="mm_opt_gameplay" />
        </check_tips>

        <cap_check_crouch_toggle x="12" y="183" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_crouch_toggle
          </text>
        </cap_check_crouch_toggle>
        <check_crouch_toggle x="129" y="180" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="g_crouch_toggle" group="mm_opt_gameplay" />
        </check_crouch_toggle>

        <cap_check_important_save x="12" y="213" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_important_save
          </text>
        </cap_check_important_save>
        <check_important_save x="129" y="210" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="g_important_save" group="mm_opt_gameplay" />
        </check_important_save>

        <cap_check_hud_draw x="12" y="243" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_st_disable_hud
          </text>
        </cap_check_hud_draw>
        <check_hud_draw x="129" y="240" width="35" height="29" stretch="1">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="hud_draw" group="mm_opt_gameplay" />
        </check_hud_draw>

        <btn_check_updates x="270" y="322" width="86" height="24" stretch="1">
          <text align="c" font="letterica16">
            ui_mm_check_updates
          </text>
          <texture>ui_inGame2_button</texture>
          <text_color>
            <e r="210" g="210" b="210" />
          </text_color>
        </btn_check_updates>
      </tab_gameplay>
      <tab_controls>
        <cap_mousesens x="12" y="3" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_mouse_sense
          </text>
        </cap_mousesens>
        <track_mousesens x="140" y="6" width="188" height="16" step="0.01">
          <options_item entry="mouse_sens" group="mm_opt_controls" />
        </track_mousesens>
        <cap_check_mouseinvert x="12" y="33" width="108" height="24">
          <text r="170" g="170" b="170" font="letterica16" align="r" vert_align="c">
            ui_mm_invert_mouse
          </text>
        </cap_check_mouseinvert>
        <check_mouseinvert x="129" y="30" width="35" stretch="1" height="29">
          <texture>ui_inGame2_checkbox</texture>
          <options_item entry="mouse_invert" group="mm_opt_controls" />
        </check_mouseinvert>

        <cap_keyboardsetup x="0" y="65" width="344" height="15">
          <texture a="150">ui_inGame2_servers_list_button</texture>
          <auto_static x="8" y="0" width="108" height="15">
            <text r="170" g="170" b="170" font="letterica16" vert_align="c">
              ui_mm_keyboard_setup
            </text>
          </auto_static>
        </cap_keyboardsetup>

        <key_binding x="0" y="85" width="344" height="240">
          <header_1 x="0" y="0" width="176" height="15">
            <texture a="150">ui_inGame2_servers_list_button</texture>
            <auto_static x="2" y="0" width="176" height="15">
              <text r="170" g="170" b="170" font="arial_14" x="2" y="1" align="l" vert_align="c" complex_mode="0">
                ui_mm_action
              </text>
            </auto_static>
          </header_1>
          <header_2 x="176" y="0" width="84" height="15">
            <texture a="150">ui_inGame2_servers_list_button</texture>
            <auto_static x="2" y="0" width="84" height="15">
              <text r="170" g="170" b="170" font="arial_14" x="2" y="1" align="l" vert_align="c" complex_mode="0">
                ui_mm_key
              </text>
            </auto_static>
          </header_2>
          <auto_frameline x="260" y="0" width="84" height="15">
            <texture>ui_inGame2_servers_list_button</texture>
          </auto_frameline>
          <header_3 x="260" y="0" width="68" height="15">
            <texture a="150">ui_inGame2_empty_frameline_15</texture>
            <auto_static x="2" y="0" width="68" height="15">
              <text r="170" g="170" b="170" font="arial_14" x="2" y="1" align="l" vert_align="c" complex_mode="0">
                ui_mm_alternative
              </text>
            </auto_static>
          </header_3>

          <frame x="0" y="15" width="343" height="215">
            <texture>ui_inGame2_servers_list_frame</texture>
          </frame>

          <scroll_view x="2" y="17" width="341" height="211" always_show_scroll="1" vert_interval="3">
            <item_group x="0" y="0" width="160" height="25">
              <text r="230" g="230" b="230" font="letterica18" />
            </item_group>

            <item_key x="0" y="0" width="331" height="18">
              <text r="170" g="170" b="170" font="letterica16" />
            </item_key>
          </scroll_view>
        </key_binding>

        <btn_default x="270" y="322" width="86" height="24" stretch="1">
          <text align="c" font="letterica16">
            ui_mm_default
          </text>
          <texture>ui_inGame2_button</texture>
          <text_color>
            <e r="210" g="210" b="210" />
          </text_color>
        </btn_default>
      </tab_controls>

      <download_static x="251" y="717" width="482" height="51" stretch="1">
        <texture>ui_patch_back</texture>
      </download_static>

      <download_text x="262" y="730" width="384" height="30">
        <text r="170" g="170" b="170" align="c" font="letterica16" complex_mode="0">
          mm_mp_progress
        </text>
      </download_text>

      <progress_download x="280" y="754" width="322" height="10" horz="1" min="0" max="100">
        <progress>
          <texture>ui_patch_progress</texture>
        </progress>
      </progress_download>

      <btn_cancel_download x="624" y="732" width="88" height="29" stretch="1">
        <text align="c" font="letterica16">
          mm_mp_cancel
        </text>
        <text_color>
          <e r="170" g="170" b="170" />
        </text_color>
        <texture>ui_button_ordinary</texture>
      </btn_cancel_download>
    </w>
  );
}
