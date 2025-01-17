import { config as alifeConfig } from "@/engine/configs/alife";
import { config as forgeConfig } from "@/engine/configs/forge";
import { AnyObject, TPath } from "@/engine/lib/types";
import { mockDialogManager } from "@/fixtures/xray/mocks/ini/files/dialog_manager.ltx.mock";
import { mockDropManager } from "@/fixtures/xray/mocks/ini/files/drop_manager.ltx.mock";
import { mockGameMapsSingle } from "@/fixtures/xray/mocks/ini/files/game_maps_single.ltx.mock";
import { mockMapDisplayManager } from "@/fixtures/xray/mocks/ini/files/map_display_manager.ltx.mock";
import { mockBoxGeneric } from "@/fixtures/xray/mocks/ini/files/ph_box_generic.ltx.mock";
import { mockScriptSound } from "@/fixtures/xray/mocks/ini/files/script_sound.ltx.mock";
import { mockSimulation } from "@/fixtures/xray/mocks/ini/files/simulation.ltx.mock";
import { mockSimulationObjectsProps } from "@/fixtures/xray/mocks/ini/files/simulation_objects_props.ltx.mock";
import { mockSoundStories } from "@/fixtures/xray/mocks/ini/files/sound_stories.ltx.mock";
import { mockSpawnIni } from "@/fixtures/xray/mocks/ini/files/spawn.ini.mock";
import { mockSquadBehaviours } from "@/fixtures/xray/mocks/ini/files/squad_behaviours.ltx.mock";
import { mockStalkerUpgradeInfo } from "@/fixtures/xray/mocks/ini/files/stalkers_upgrade_info.ltx.mock";
import { mockSurgeManager } from "@/fixtures/xray/mocks/ini/files/surge_manager.ltx.mock";
import { mockSystemIni } from "@/fixtures/xray/mocks/ini/files/system.ini.mock";
import { mockTaskManager } from "@/fixtures/xray/mocks/ini/files/task_manager.ltx.mock";
import { mockTradeGeneric } from "@/fixtures/xray/mocks/ini/files/trade_generic.ltx.mock";
import { mockTradeManager } from "@/fixtures/xray/mocks/ini/files/trade_manager.ltx.mock";
import { mockTravelManager } from "@/fixtures/xray/mocks/ini/files/travel_manager.ltx.mock";
import { mockTreasureManager } from "@/fixtures/xray/mocks/ini/files/treasure_manager.ltx.mock";
import { mockUpgradesLtx } from "@/fixtures/xray/mocks/ini/files/upgrades.ltx.mock";
import { mockUpgradesManager } from "@/fixtures/xray/mocks/ini/files/upgrades_manager.ltx.mock";

/**
 * Mock ini files for testing.
 */
export const FILES_MOCKS: Record<TPath, AnyObject> = {
  "alife.ltx": alifeConfig,
  "forge.ltx": forgeConfig,
  "game\\game_maps_single.ltx": mockGameMapsSingle,
  "item_upgrades.ltx": mockUpgradesLtx,
  "managers\\box_manager.ltx": mockBoxGeneric,
  "managers\\dialog_manager.ltx": mockDialogManager,
  "managers\\drop_manager.ltx": mockDropManager,
  "managers\\map_display_manager.ltx": mockMapDisplayManager,
  "managers\\simulation\\simulation.ltx": mockSimulation,
  "managers\\simulation\\simulation_objects_props.ltx": mockSimulationObjectsProps,
  "managers\\simulation\\squad_behaviours.ltx": mockSquadBehaviours,
  "managers\\sounds\\script_sound.ltx": mockScriptSound,
  "managers\\sounds\\sound_stories.ltx": mockSoundStories,
  "managers\\surge_manager.ltx": mockSurgeManager,
  "managers\\task_manager.ltx": mockTaskManager,
  "managers\\trade\\trade_generic.ltx": mockTradeGeneric,
  "managers\\trade_manager.ltx": mockTradeManager,
  "managers\\travel_manager.ltx": mockTravelManager,
  "managers\\treasure_manager.ltx": mockTreasureManager,
  "managers\\upgrades\\stalkers_upgrade_info.ltx": mockStalkerUpgradeInfo,
  "managers\\upgrades_manager.ltx": mockUpgradesManager,
  "object_spawn.ini": {},
  "scripts\\dummy.ltx": {},
  "spawn.ini": mockSpawnIni,
  "system.ini": mockSystemIni,
};
