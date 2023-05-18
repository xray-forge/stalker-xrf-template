import { jest } from "@jest/globals";

import {
  MockActionBase,
  MockActionPlanner,
  MockAnim,
  MockLook,
  MockMove,
  MockPropertyStorage,
  MockSightParameters,
  MockWorldProperty,
  MockWorldState,
} from "@/fixtures/xray/mocks/actions";
import { MockCGameGraph } from "@/fixtures/xray/mocks/CGameGraph.mock";
import { mockGetConsole } from "@/fixtures/xray/mocks/console.mock";
import { mockCallbacks, mockClsid, mockStalkerIds } from "@/fixtures/xray/mocks/constants";
import { MockCSightParams } from "@/fixtures/xray/mocks/CSightParams.mock";
import { MockCTime } from "@/fixtures/xray/mocks/CTime.mock";
import { mockRenderDevice } from "@/fixtures/xray/mocks/device.mock";
import { MockEffector } from "@/fixtures/xray/mocks/effector.mock";
import { MockFileSystem } from "@/fixtures/xray/mocks/fs/FileSystem.mock";
import { MockIniFile, mockIniFile } from "@/fixtures/xray/mocks/ini";
import { mockGameInterface } from "@/fixtures/xray/mocks/interface/gameInterface.mock";
import { mockGetGameHud } from "@/fixtures/xray/mocks/interface/globalInteraface.mock";
import { mockLevelInterface } from "@/fixtures/xray/mocks/interface/levelInterface.mock";
import { mockRelationRegistryInterface } from "@/fixtures/xray/mocks/interface/relationRegistryInterface.mock";
import { mocksConfig } from "@/fixtures/xray/mocks/MocksConfig";
import {
  MockAlifeCreatureActor,
  MockAlifeHangingLamp,
  MockAlifeHelicopter,
  MockAlifeHumanStalker,
  MockAlifeInventoryBox,
  MockAlifeItem,
  MockAlifeItemAmmo,
  MockAlifeItemArtefact,
  MockAlifeItemDetector,
  MockAlifeItemExplosive,
  MockAlifeItemGrenade,
  MockAlifeItemHelmet,
  MockAlifeItemOutfit,
  MockAlifeItemPda,
  MockAlifeItemTorch,
  MockAlifeItemWeapon,
  MockAlifeItemWeaponAutoShotgun,
  MockAlifeItemWeaponMagazined,
  MockAlifeItemWeaponMagazinedWGL,
  MockAlifeItemWeaponShotgun,
  MockAlifeLevelChanger,
  MockAlifeMonsterBase,
  MockAlifeObjectPhysic,
  MockAlifeOnlineOfflineGroup,
  MockAlifeSmartCover,
  MockAlifeSmartZone,
  MockAnomalousZone,
  MockCScriptXmlInit,
  MockCUIListBoxItem,
  MockCUIListBoxItemMsgChain,
  MockCUIScriptWnd,
  MockCUIWindow,
  MockSpaceRestrictor,
  MockTorridZone,
  MockZoneVisual,
} from "@/fixtures/xray/mocks/objects";
import { mockAlifeSimulator } from "@/fixtures/xray/mocks/objects/AlifeSimulator.mock";
import { MockDangerObject } from "@/fixtures/xray/mocks/objects/client/danger_object.mock";
import { MockObjectBinder } from "@/fixtures/xray/mocks/objects/client/object_binder.mock";
import { MockAlifeDynamicObject } from "@/fixtures/xray/mocks/objects/server/cse_alife_dynamic_object.mock";
import { MockAlifeDynamicObjectVisual } from "@/fixtures/xray/mocks/objects/server/cse_alife_dynamic_object_visual.mock";
import { MockCGameTask, MockTask } from "@/fixtures/xray/mocks/objects/task";
import { MockPropertyEvaluator } from "@/fixtures/xray/mocks/PropertyEvaluator.mock";
import { MockSoundObject } from "@/fixtures/xray/mocks/sound/SoundObject.mock";
import { MockVector } from "@/fixtures/xray/mocks/vector.mock";

/**
 * todo;
 */
export function mockXRay16({
  CGameTask = MockCGameTask,
  CScriptXmlInit = MockCScriptXmlInit,
  CSightParams = MockCSightParams,
  CTime = MockCTime,
  CUIListBoxItem = MockCUIListBoxItem,
  CUIListBoxItemMsgChain = MockCUIListBoxItemMsgChain,
  CUIScriptWnd = MockCUIScriptWnd,
  CUIWindow = MockCUIWindow,
  IsImportantSave = jest.fn(() => mocksConfig.isAutoSavingEnabled),
  action_base = MockActionBase,
  action_planner = MockActionPlanner,
  alife = () => mockAlifeSimulator(),
  anim = MockAnim,
  callback = mockCallbacks,
  clsid = mockClsid,
  cse_alife_creature_actor = MockAlifeCreatureActor,
  cse_alife_helicopter = MockAlifeHelicopter,
  cse_alife_dynamic_object = MockAlifeDynamicObject,
  cse_alife_dynamic_object_visual = MockAlifeDynamicObjectVisual,
  cse_alife_human_stalker = MockAlifeHumanStalker,
  cse_alife_inventory_box = MockAlifeInventoryBox,
  cse_alife_item = MockAlifeItem,
  cse_alife_item_ammo = MockAlifeItemAmmo,
  cse_alife_item_artefact = MockAlifeItemArtefact,
  cse_alife_item_custom_outfit = MockAlifeItemOutfit,
  cse_alife_item_detector = MockAlifeItemDetector,
  cse_alife_item_explosive = MockAlifeItemExplosive,
  cse_alife_item_grenade = MockAlifeItemGrenade,
  cse_alife_item_helmet = MockAlifeItemHelmet,
  cse_alife_item_pda = MockAlifeItemPda,
  cse_alife_item_torch = MockAlifeItemTorch,
  cse_alife_item_weapon = MockAlifeItemWeapon,
  cse_alife_item_weapon_auto_shotgun = MockAlifeItemWeaponAutoShotgun,
  cse_alife_item_weapon_magazined = MockAlifeItemWeaponMagazined,
  cse_alife_item_weapon_magazined_w_gl = MockAlifeItemWeaponMagazinedWGL,
  cse_alife_item_weapon_shotgun = MockAlifeItemWeaponShotgun,
  cse_alife_level_changer = MockAlifeLevelChanger,
  cse_alife_monster_base = MockAlifeMonsterBase,
  cse_alife_object_hanging_lamp = MockAlifeHangingLamp,
  cse_alife_object_physic = MockAlifeObjectPhysic,
  cse_alife_online_offline_group = MockAlifeOnlineOfflineGroup,
  cse_alife_smart_zone = MockAlifeSmartZone,
  cse_alife_space_restrictor = MockSpaceRestrictor,
  cse_anomalous_zone = MockAnomalousZone,
  cse_smart_cover = MockAlifeSmartCover,
  cse_torrid_zone = MockTorridZone,
  cse_zone_visual = MockZoneVisual,
  danger_object = MockDangerObject,
  device = jest.fn(() => mockRenderDevice()),
  editor = jest.fn(() => false),
  effector = MockEffector,
  game = mockGameInterface,
  game_graph = () => new MockCGameGraph(),
  getFS = () => MockFileSystem.getInstance(),
  get_console = mockGetConsole,
  get_hud = mockGetGameHud,
  ini_file = MockIniFile,
  level = mockLevelInterface,
  look = MockLook,
  move = MockMove,
  object_binder = MockObjectBinder,
  property_evaluator = MockPropertyEvaluator,
  property_storage = MockPropertyStorage,
  relation_registry = mockRelationRegistryInterface,
  sound_object = MockSoundObject,
  sight_params = MockSightParameters,
  stalker_ids = mockStalkerIds,
  system_ini = () => mockIniFile("system.ini"),
  task = MockTask,
  time_global = jest.fn(() => Date.now()),
  user_name = jest.fn(() => "os_user_name"),
  vector = MockVector,
  world_property = MockWorldProperty,
  world_state = MockWorldState,
} = {}): void {
  jest.mock("xray16", () => ({
    CGameTask,
    CScriptXmlInit,
    CSightParams,
    CTime,
    CUIListBoxItem,
    CUIListBoxItemMsgChain,
    CUIScriptWnd,
    CUIWindow,
    IsImportantSave,
    LuabindClass: () => {},
    action_base,
    action_planner,
    alife,
    anim,
    callback,
    clsid,
    cse_alife_creature_actor,
    cse_alife_helicopter,
    cse_alife_dynamic_object,
    cse_alife_dynamic_object_visual,
    cse_alife_human_stalker,
    cse_alife_inventory_box,
    cse_alife_item,
    cse_alife_item_ammo,
    cse_alife_item_artefact,
    cse_alife_item_custom_outfit,
    cse_alife_item_detector,
    cse_alife_item_explosive,
    cse_alife_item_grenade,
    cse_alife_item_helmet,
    cse_alife_item_pda,
    cse_alife_item_torch,
    cse_alife_item_weapon,
    cse_alife_item_weapon_auto_shotgun,
    cse_alife_item_weapon_magazined,
    cse_alife_item_weapon_magazined_w_gl,
    cse_alife_item_weapon_shotgun,
    cse_alife_level_changer,
    cse_alife_monster_base,
    cse_alife_object_hanging_lamp,
    cse_alife_object_physic,
    cse_alife_online_offline_group,
    cse_alife_smart_zone,
    cse_alife_space_restrictor,
    cse_anomalous_zone,
    cse_smart_cover,
    cse_torrid_zone,
    cse_zone_visual,
    danger_object,
    device,
    editor,
    effector,
    game,
    game_graph,
    getFS,
    get_console,
    get_hud,
    ini_file,
    level,
    look,
    move,
    object_binder,
    property_evaluator,
    property_storage,
    relation_registry,
    sound_object,
    sight_params,
    stalker_ids,
    system_ini,
    task,
    time_global,
    user_name,
    vector,
    world_property,
    world_state,
  }));
}
