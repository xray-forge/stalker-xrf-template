import { sounds, TSound } from "@/engine/lib/constants/sound/sounds";
import { Optional } from "@/engine/lib/types";

export interface IDynamicMusicDescriptor {
  maps?: Optional<string>;
  files: LuaTable<number, TSound>;
}

export const dynamicMusicThemes: LuaTable<number, IDynamicMusicDescriptor> = [
  {
    files: [sounds.music_combat_theme1_part_1, sounds.music_combat_theme1_part_2, sounds.music_combat_theme1_part_3],
  },
  {
    files: [sounds.music_combat_theme2_part_1, sounds.music_combat_theme2_part_2, sounds.music_combat_theme2_part_3],
  },
  {
    files: [sounds.music_combat_theme3_part_1, sounds.music_combat_theme3_part_2, sounds.music_combat_theme3_part_3],
  },
  {
    files: [sounds.music_combat_theme4_part_1, sounds.music_combat_theme4_part_2, sounds.music_combat_theme4_part_3],
  },
] as any;

/* --[[
themes={
	{
		maps = "stancia_2",
		files={
			intro = "music\\combat\\aes_intro",
			intro_2 = "music\\combat\\aes_intro",
			main = "music\\combat\\aes_main"
		},
		graph={
			null={
				main = {"hi",">"}
			},
			main={
				main = {"lo","<"},
				main = {"lo",">"},
				main = {"hi",">"}
			}
		}
	},
	{
		maps = "garbage, darkvalley, agroprom, agroprom_u, yantar, red_forest, military, limansk, hospital,
		 peacemaker_selo",
		files={
			intro = "music\\combat\\theme1_intro",
			intro_2 = "music\\combat\\theme1_intro_2",
			wait_1 = "music\\combat\\theme1_wait_1",
			wait_2 = "music\\combat\\theme1_wait_2",
			wait_3 = "music\\combat\\theme1_wait_3",
			idle_1 = "music\\combat\\theme1_idle_1",
			idle_2 = "music\\combat\\theme1_idle_2",
			combat_1 = "music\\combat\\theme1_combat_1",
			combat_2 = "music\\combat\\theme1_combat_2",
			combat_3 = "music\\combat\\theme1_combat_3",
			final = "music\\combat\\theme1_final",
			relax = "music\\combat\\theme1_relax"
		},
		graph={
			null={
				intro = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			intro={
				relax = {"lo","<"},
				wait_1 = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			intro_2={
				final = {"lo","<"},
				wait_1 = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			wait_1={
				final = {"lo","<"},
				wait_2 = {"lo",">"},
				intro_2 = {"hi",">"}
			},
			wait_2={
				final = {"lo","<"},
				wait_3 = {"lo",">"},
				intro_2 = {"hi",">"}
			},
			wait_3={
				final = {"lo","<"},
				idle_1 = {"hi","<"},
				intro_2 = {"hi",">"}
			},
			idle_1={
				final = {"lo","<"},
				wait_1 = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			idle_2={
				final = {"lo","<"},
				idle_1 = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			combat_1={
				final = {"lo","<"},
				idle_2 = {"hi","<"},
				combat_2 = {"hi",">"}
			},
			combat_2={
				final = {"lo","<"},
				idle_2 = {"hi","<"},
				combat_3 = {"hi",">"}
			},
			combat_3={
				final = {"lo","<"},
				idle_2 = {"hi","<"},
				combat_1 = {"hi",">"}
			},
			final={
				null = {"lo","<"},
				idle_1 = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			relax={
				null = {"lo","<"},
				idle_1 = {"lo",">"},
				combat_1 = {"hi",">"}
			}
		}
	},
	{
		maps = "marsh, escape, garbage, darkvalley, agroprom, agroprom_u, yantar, red_forest, military, limansk,
		 hospital",
		files={
			intro_1 = "music\\combat\\theme2_intro_1",
			intro_2 = "music\\combat\\theme2_intro_2",
			danger_1 = "music\\combat\\theme2_danger_1",
			danger_1a = "music\\combat\\theme2_danger_1a",
			danger_2 = "music\\combat\\theme2_danger_2",
			danger_3 = "music\\combat\\theme2_danger_3",
			danger_3a = "music\\combat\\theme2_danger_3a",
			danger_3b = "music\\combat\\theme2_danger_3b",
			danger_3c = "music\\combat\\theme2_danger_3c",
			danger_4 = "music\\combat\\theme2_danger_4",
			danger_5 = "music\\combat\\theme2_danger_5",
			idle_1 = "music\\combat\\theme2_idle_1",
			idle_2 = "music\\combat\\theme2_idle_2",
			combat_1 = "music\\combat\\theme2_combat_1",
			combat_2 = "music\\combat\\theme2_combat_2",
			combat_3 = "music\\combat\\theme2_combat_3",
			combat_4 = "music\\combat\\theme2_combat_4",
			combat_5 = "music\\combat\\theme2_combat_5",
			combat_6 = "music\\combat\\theme2_combat_6",
			combat_7 = "music\\combat\\theme2_combat_7",
			combat_8 = "music\\combat\\theme2_combat_8",
			final_1 = "music\\combat\\theme2_final_1",
			final_2 = "music\\combat\\theme2_final_2",
			final_3 = "music\\combat\\theme2_final_3",
			final_4 = "music\\combat\\theme2_final_4",
			final_5 = "music\\combat\\theme2_final_5"
		},
		graph={
			null={
				intro_1 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			intro_1={
				final_2 = {"lo","<"},
				danger_1 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			intro_2={
				final_2 = {"lo","<"},
				danger_3 = {"lo",">"},
				combat_6 = {"hi",">"}
			},
			danger_1={
				final_2 = {"lo","<"},
				danger_2 = {"lo",">"},
 				combat_5 = {"hi",">"}
			},
			danger_1a={
				final_2 = {"lo","<"},
				danger_2 = {"lo",">"},
 				combat_5 = {"hi",">"}
			},
			danger_2={
				final_1 = {"lo","<"},
				danger_3a = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			danger_3={
				final_2 = {"lo","<"},
				danger_4 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			danger_3a={
				final_2 = {"lo","<"},
				danger_4 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			danger_3b={
				final_2 = {"lo","<"},
				danger_4 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			danger_3c={
				final_2 = {"lo","<"},
				danger_4 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			danger_4={
				final_4 = {"lo","<"},
				danger_5 = {"lo",">"}
			},
			danger_5={
				final_4 = {"lo","<"},
				danger_1a = {"lo",">"},
				combat_6 = {"hi",">"}
			},
			idle_1={
				final_1 = {"lo","<"},
				danger_3a = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			idle_2={
				final_3 = {"lo","<"},
				danger_3c = {"lo",">"},
				combat_4 = {"hi",">"}
			},
			combat_1={
				final_3 = {"lo","<"},
				danger_4 = {"hi","<"},
				combat_2 = {"hi",">"}
			},
			combat_2={
				final_5 = {"lo","<"},
				danger_4 = {"hi","<"},
				combat_3 = {"hi",">"}
			},
			combat_3={
				final_2 = {"lo","<"},
				idle_1 = {"hi","<"},
				combat_4 = {"hi",">"}
			},
			combat_4={
				idle_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				combat_6 = {"hi",">"}
			},
			combat_5={
				final_3 = {"lo","<"},
				danger_4 = {"hi","<"},
				combat_2 = {"hi",">"}
			},
			combat_6={
				final_3 = {"lo","<"},
				idle_2 = {"hi","<"},
				combat_7 = {"hi",">"}
			},
			combat_7={
				final_3 = {"lo","<"},
				idle_2 = {"hi","<"},
				combat_8 = {"hi",">"}
			},
			combat_8={
				final_2 = {"lo","<"},
				danger_3b = {"hi","<"},
				combat_5 = {"hi",">"}
			},
			final_1={
				null = {"lo","<"},
				intro_1 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			final_2={
				null = {"lo","<"},
				intro_1 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			final_3={
				null = {"lo","<"},
				idle_2 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			final_4={
				null = {"lo","<"},
				intro_2 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			final_5={
				null = {"lo","<"},
				intro_2 = {"lo",">"},
				combat_5 = {"hi",">"}
			}
		}
	},
	{
		maps = "marsh, escape, garbage, darkvalley, agroprom, agroprom_u, yantar, red_forest, military, limansk,
		 hospital",
		files={
			intro_1 = "music\\combat\\theme2_intro_1",
			intro_2 = "music\\combat\\theme2_intro_2",
			danger_1 = "music\\combat\\theme2_danger_1",
			danger_1a = "music\\combat\\theme2_danger_1a",
			danger_2 = "music\\combat\\theme2_danger_2",
			danger_3 = "music\\combat\\theme2_danger_3",
			danger_3a = "music\\combat\\theme2_danger_3a",
			danger_3b = "music\\combat\\theme2_danger_3b",
			danger_3c = "music\\combat\\theme2_danger_3c",
			danger_4 = "music\\combat\\theme2_danger_4",
			danger_5 = "music\\combat\\theme2_danger_5",
			idle_1 = "music\\combat\\theme2_idle_1",
			idle_2 = "music\\combat\\theme2_idle_2",
			combat_1 = "music\\combat\\theme2_combat_1",
			combat_2 = "music\\combat\\theme2_combat_2",
			combat_3 = "music\\combat\\theme2_combat_3",
			combat_4 = "music\\combat\\theme2_combat_4",
			combat_5 = "music\\combat\\theme2_combat_5",
			combat_6 = "music\\combat\\theme2_combat_6",
			combat_7 = "music\\combat\\theme2_combat_7",
			combat_8 = "music\\combat\\theme2_combat_8",
			final_1 = "music\\combat\\theme2_final_1",
			final_2 = "music\\combat\\theme2_final_2",
			final_3 = "music\\combat\\theme2_final_3",
			final_4 = "music\\combat\\theme2_final_4",
			final_5 = "music\\combat\\theme2_final_5"
		},
		graph={
			null={
				intro_2 = {"lo",">"},
				combat_6 = {"hi",">"}
			},
			intro_1={
				final_2 = {"lo","<"},
				danger_1 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			intro_2={
				final_2 = {"lo","<"},
				danger_3 = {"lo",">"},
				combat_6 = {"hi",">"}
			},
			danger_1={
				final_2 = {"lo","<"},
				danger_2 = {"lo",">"},
 				combat_5 = {"hi",">"}
			},
			danger_1a={
				final_2 = {"lo","<"},
				danger_2 = {"lo",">"},
 				combat_5 = {"hi",">"}
			},
			danger_2={
				final_1 = {"lo","<"},
				danger_3a = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			danger_3={
				final_2 = {"lo","<"},
				danger_4 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			danger_3a={
				final_2 = {"lo","<"},
				danger_4 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			danger_3b={
				final_2 = {"lo","<"},
				danger_4 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			danger_3c={
				final_2 = {"lo","<"},
				danger_4 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			danger_4={
				final_4 = {"lo","<"},
				danger_5 = {"lo",">"}
			},
			danger_5={
				final_4 = {"lo","<"},
				danger_1a = {"lo",">"},
				combat_6 = {"hi",">"}
			},
			idle_1={
				final_1 = {"lo","<"},
				danger_3a = {"lo",">"},
				combat_1 = {"hi",">"}
			},
			idle_2={
				final_3 = {"lo","<"},
				danger_3c = {"lo",">"},
				combat_4 = {"hi",">"}
			},
			combat_1={
				final_3 = {"lo","<"},
				danger_4 = {"hi","<"},
				combat_2 = {"hi",">"}
			},
			combat_2={
				final_5 = {"lo","<"},
				danger_4 = {"hi","<"},
				combat_3 = {"hi",">"}
			},
			combat_3={
				final_2 = {"lo","<"},
				idle_1 = {"hi","<"},
				combat_4 = {"hi",">"}
			},
			combat_4={
				idle_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				combat_6 = {"hi",">"}
			},
			combat_5={
				final_3 = {"lo","<"},
				danger_4 = {"hi","<"},
				combat_2 = {"hi",">"}
			},
			combat_6={
				final_3 = {"lo","<"},
				idle_2 = {"hi","<"},
				combat_7 = {"hi",">"}
			},
			combat_7={
				final_3 = {"lo","<"},
				idle_2 = {"hi","<"},
				combat_8 = {"hi",">"}
			},
			combat_8={
				final_2 = {"lo","<"},
				danger_3b = {"hi","<"},
				idle_1 = {"hi",">"}
			},
			final_1={
				null = {"lo","<"},
				intro_1 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			final_2={
				null = {"lo","<"},
				intro_1 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			final_3={
				null = {"lo","<"},
				idle_2 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			final_4={
				null = {"lo","<"},
				intro_2 = {"lo",">"},
				combat_5 = {"hi",">"}
			},
			final_5={
				null = {"lo","<"},
				intro_2 = {"lo",">"},
				combat_5 = {"hi",">"}
			}
		}
	},
	{
		maps = "marsh, escape, garbage, darkvalley, agroprom, agroprom_u, yantar, red_forest, military, limansk,
		 hospital",
		files={
			intro_1 = "music\\combat\\theme3_intro_1",
--			intro_2a = "music\\combat\\theme3_intro_2a",
--			intro_2b = "music\\combat\\theme3_intro_2b",

			danger_1 = "music\\combat\\theme3_danger_1",
			danger_2 = "music\\combat\\theme3_danger_2",
			danger_3 = "music\\combat\\theme3_danger_3",
			danger_4 = "music\\combat\\theme3_danger_4",
			idle_1 = "music\\combat\\theme3_bridge_3",

			main_1 = "music\\combat\\theme3_combat_1a",
			main_2 = "music\\combat\\theme3_combat_6m",
			main_3 = "music\\combat\\theme3_combat_5",
			main_4 = "music\\combat\\theme3_combat_7m",
			main_5 = "music\\combat\\theme3_combat_3",
			main_6 = "music\\combat\\theme3_combat_4",
			main_7 = "music\\combat\\theme3_combat_7",
			alt_1 = "music\\combat\\theme3_combat_1",
			final_1 = "music\\combat\\theme3_final_1",
			final_2 = "music\\combat\\theme3_final_2"
		},
		graph={
			null={
				intro_1 = {"lo",">"},
				main_1 = {"hi",">"}
			},
			intro_1={
				final_1 = {"lo","<"},
				danger_1 = {"lo",">"},
				main_1 = {"hi",">"}
			},
			danger_1={
				final_1 = {"lo","<"},
				danger_2 = {"lo",">"},
 				main_1 = {"hi",">"}
			},
			danger_2={
				final_1 = {"lo","<"},
				danger_3 = {"lo",">"},
				alt_1 = {"hi",">"}
			},
			danger_3={
				final_1 = {"lo","<"},
				danger_4 = {"lo",">"},
				main_1 = {"hi",">"}
			},
			danger_4={
				final_1 = {"lo","<"},
				danger_1 = {"lo",">"},
				alt_1 = {"hi",">"}
			},
			idle_1={
				final_1 = {"lo","<"},
				danger_1 = {"lo",">"},
				main_1 = {"hi",">"}
			},
			main_1={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_2 = {"hi",">"}
			},
			main_2={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_3 = {"hi",">"}
			},
			main_3={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_4 = {"hi",">"}
			},
			main_4={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_5 = {"hi",">"}
			},
			main_5={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_6 = {"hi",">"}
			},
			main_6={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_7 = {"hi",">"}
			},
			main_7={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_1 = {"hi",">"}
			},
			alt_1={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_5 = {"hi",">"}
			},
			final_1={
				null = {"lo","<"},
				intro_1 = {"lo",">"},
				main_1 = {"hi",">"}
			},
			final_2={
				null = {"lo","<"},
				intro_1 = {"lo",">"},
				main_1 = {"hi",">"}
			}
		}
	},
	{
		maps = "marsh, escape, garbage, darkvalley, agroprom, agroprom_u, yantar, red_forest, military, limansk,
		 hospital",
		files={
--			intro_1 = "music\\combat\\theme3_intro_1",
			intro_2a = "music\\combat\\theme3_intro_2a",
			intro_2b = "music\\combat\\theme3_intro_2b",

			danger_1 = "music\\combat\\theme3_danger_1",
			danger_2 = "music\\combat\\theme3_danger_2",
			danger_3 = "music\\combat\\theme3_danger_3",
			danger_4 = "music\\combat\\theme3_danger_4",
			idle_1 = "music\\combat\\theme3_bridge_3",

			main_1 = "music\\combat\\theme3_combat_1a",
			main_2 = "music\\combat\\theme3_combat_6m",
			main_3 = "music\\combat\\theme3_combat_5",
			main_4 = "music\\combat\\theme3_combat_7m",
			main_5 = "music\\combat\\theme3_combat_3",
			main_6 = "music\\combat\\theme3_combat_4",
			main_7 = "music\\combat\\theme3_combat_7",
			alt_1 = "music\\combat\\theme3_combat_1",
			final_1 = "music\\combat\\theme3_final_1",
			final_2 = "music\\combat\\theme3_final_2"
		},
		graph={
			null={
				intro_2a = {"lo",">"},
				alt_1 = {"hi",">"}
			},
			intro_2a={
				final_1 = {"lo","<"},
				intro_2b = {"lo",">"},
				main_6 = {"hi",">"}
			},
			intro_2b={
				final_1 = {"lo","<"},
				danger_4 = {"lo",">"},
				alt_1 = {"hi",">"}
			},
			danger_1={
				final_1 = {"lo","<"},
				danger_2 = {"lo",">"},
 				main_1 = {"hi",">"}
			},
			danger_2={
				final_1 = {"lo","<"},
				danger_3 = {"lo",">"},
				alt_1 = {"hi",">"}
			},
			danger_3={
				final_1 = {"lo","<"},
				danger_4 = {"lo",">"},
				main_1 = {"hi",">"}
			},
			danger_4={
				final_1 = {"lo","<"},
				danger_1 = {"lo",">"},
				alt_1 = {"hi",">"}
			},
			idle_1={
				final_1 = {"lo","<"},
				danger_1 = {"lo",">"},
				main_1 = {"hi",">"}
			},
			main_1={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_2 = {"hi",">"}
			},
			main_2={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_3 = {"hi",">"}
			},
			main_3={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_4 = {"hi",">"}
			},
			main_4={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_5 = {"hi",">"}
			},
			main_5={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_6 = {"hi",">"}
			},
			main_6={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_7 = {"hi",">"}
			},
			main_7={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_1 = {"hi",">"}
			},
			alt_1={
				final_1 = {"lo","<"},
				idle_1 = {"hi","<"},
				main_5 = {"hi",">"}
			},
			final_1={
				null = {"lo","<"},
				intro_2a = {"lo",">"},
				main_1 = {"hi",">"}
			},
			final_2={
				null = {"lo","<"},
				intro_2a = {"lo",">"},
				main_1 = {"hi",">"}
			}
		}
	}
}
]]
*/
