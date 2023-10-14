import { jest } from "@jest/globals";

import {
  MockActionBase,
  MockActionPlanner,
  MockAnim,
  MockCond,
  MockLook,
  MockMove,
  MockPropertyStorage,
  MockSightParameters,
  MockWorldProperty,
  MockWorldState,
} from "@/fixtures/xray/mocks/actions";
import { MockEntityAction } from "@/fixtures/xray/mocks/actions/entity_action.mock";
import { MockSound } from "@/fixtures/xray/mocks/actions/sound.mock";
import { MockCGameGraph } from "@/fixtures/xray/mocks/CGameGraph.mock";
import { MockColor } from "@/fixtures/xray/mocks/color.mock";
import { mockGetConsole } from "@/fixtures/xray/mocks/console.mock";
import {
  mockCallbacks,
  mockClsid,
  mockDikKeys,
  mockSndType,
  mockStalkerIds,
  mockUiEvents,
} from "@/fixtures/xray/mocks/constants";
import { MockCSightParams } from "@/fixtures/xray/mocks/CSightParams.mock";
import { MockCTime } from "@/fixtures/xray/mocks/CTime.mock";
import { MockDevice } from "@/fixtures/xray/mocks/device.mock";
import { MockPhraseDialog } from "@/fixtures/xray/mocks/dialogs";
import { MockEffector } from "@/fixtures/xray/mocks/effector.mock";
import { MockFrect } from "@/fixtures/xray/mocks/frect.mock";
import { MockCSavedGameWrapper, MockFileSystem } from "@/fixtures/xray/mocks/fs";
import { MockHit } from "@/fixtures/xray/mocks/hit.mock";
import { mockCreateIniFile, MockIniFile, mockIniFile } from "@/fixtures/xray/mocks/ini";
import {
  mockGameInterface,
  mockGetGameHud,
  mockLevelInterface,
  mockMainMenuInterface,
  mockRelationRegistryInterface,
} from "@/fixtures/xray/mocks/interface";
import { mocksConfig } from "@/fixtures/xray/mocks/MocksConfig";
import { MockNoise } from "@/fixtures/xray/mocks/noise.mock";
import {
  MockAlifeCreatureActor,
  MockAlifeDynamicObject,
  MockAlifeDynamicObjectVisual,
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
  MockAlifeSimulator,
  MockAlifeSmartCover,
  MockAlifeSmartZone,
  MockAnomalousZone,
  MockCALifeSmartTerrainTask,
  MockCGameTask,
  MockCScriptXmlInit,
  MockCUICheckButton,
  MockCUIComboBox,
  MockCUIEditBox,
  MockCUIListBoxItem,
  MockCUIListBoxItemMsgChain,
  MockCUIMapInfo,
  MockCUIMapList,
  MockCUIMessageBoxEx,
  MockCUIMMShniaga,
  MockCUIScriptWnd,
  MockCUIScrollView,
  MockCUISpinNum,
  MockCUISpinText,
  MockCUIStatic,
  MockCUIWindow,
  MockCZoneCampfire,
  MockDangerObject,
  MockFlags32,
  MockLoginOperationCb,
  MockObjectBinder,
  MockPatrol,
  MockPhysicsJoint,
  MockPhysicsShell,
  MockProfile,
  MockSoundObject,
  MockSpaceRestrictor,
  MockTask,
  MockTorridZone,
  MockZoneVisual,
} from "@/fixtures/xray/mocks/objects";
import { MockCUI3tButton } from "@/fixtures/xray/mocks/objects/ui/CUI3tButton.mock";
import { MockProfileTimer } from "@/fixtures/xray/mocks/ProfileTimer.mock";
import { MockPropertyEvaluator } from "@/fixtures/xray/mocks/PropertyEvaluator.mock";
import { MockVector } from "@/fixtures/xray/mocks/vector.mock";
import { MockVector2D } from "@/fixtures/xray/mocks/vector2.mock";

/**
 * Mock whole xray16 game libraries for testing environment and replace with testable mocks.
 */
export function mockXRay16({
  CALifeSmartTerrainTask = MockCALifeSmartTerrainTask,
  CGameTask = MockCGameTask,
  CPhraseDialog = MockPhraseDialog,
  CSavedGameWrapper = MockCSavedGameWrapper,
  CScriptXmlInit = MockCScriptXmlInit,
  CSightParams = MockCSightParams,
  CTime = MockCTime,
  CUI3tButton = MockCUI3tButton,
  CUICheckButton = MockCUICheckButton,
  CUIComboBox = MockCUIComboBox,
  CUIEditBox = MockCUIEditBox,
  CUIListBoxItem = MockCUIListBoxItem,
  CUIListBoxItemMsgChain = MockCUIListBoxItemMsgChain,
  CUIMMShniaga = MockCUIMMShniaga,
  CUIMapInfo = MockCUIMapInfo,
  CUIMapList = MockCUIMapList,
  CUIMessageBoxEx = MockCUIMessageBoxEx,
  CUIScriptWnd = MockCUIScriptWnd,
  CUIScrollView = MockCUIScrollView,
  CUISpinNum = MockCUISpinNum,
  CUISpinText = MockCUISpinText,
  CUIStatic = MockCUIStatic,
  CUIWindow = MockCUIWindow,
  CZoneCampfire = MockCZoneCampfire,
  DIK_keys = mockDikKeys,
  FS = MockFileSystem,
  Frect = MockFrect,
  IsImportantSave = jest.fn(() => mocksConfig.isAutoSavingEnabled),
  action_base = MockActionBase,
  action_planner = MockActionPlanner,
  alife = jest.fn(() => MockAlifeSimulator.mock()),
  anim = MockAnim,
  bit_and = jest.fn((first: number, second: number) => first & second),
  bit_or = jest.fn((first: number, second: number) => first | second),
  callback = mockCallbacks,
  clsid = mockClsid,
  color = MockColor,
  cond = MockCond,
  create_ini_file = mockCreateIniFile,
  cse_alife_creature_actor = MockAlifeCreatureActor,
  cse_alife_dynamic_object = MockAlifeDynamicObject,
  cse_alife_dynamic_object_visual = MockAlifeDynamicObjectVisual,
  cse_alife_helicopter = MockAlifeHelicopter,
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
  device = jest.fn(() => MockDevice.getInstance()),
  editor = jest.fn(() => false),
  effector = MockEffector,
  entity_action = MockEntityAction,
  flags32 = MockFlags32,
  game = mockGameInterface,
  game_graph = () => MockCGameGraph.getInstance(),
  getFS = () => MockFileSystem.getInstance(),
  get_console = mockGetConsole,
  get_hud = mockGetGameHud,
  hit = MockHit,
  ini_file = MockIniFile,
  level = mockLevelInterface,
  log = jest.fn(),
  login_operation_cb = MockLoginOperationCb,
  look = MockLook,
  main_menu = mockMainMenuInterface,
  move = MockMove,
  noise = MockNoise,
  object_binder = MockObjectBinder,
  patrol = MockPatrol,
  physics_joint = MockPhysicsJoint,
  physics_shell = MockPhysicsShell,
  print_stack = jest.fn(),
  profile = MockProfile,
  profile_timer = MockProfileTimer,
  property_evaluator = MockPropertyEvaluator,
  property_storage = MockPropertyStorage,
  relation_registry = mockRelationRegistryInterface,
  set_start_game_vertex_id = jest.fn(),
  set_start_position = jest.fn(),
  sight_params = MockSightParameters,
  snd_type = mockSndType,
  sound = MockSound,
  sound_object = MockSoundObject,
  stalker_ids = mockStalkerIds,
  system_ini = () => mockIniFile("system.ini"),
  task = MockTask,
  time_global = jest.fn(() => Date.now()),
  ui_events = mockUiEvents,
  user_name = jest.fn(() => "os_user_name"),
  vector = MockVector,
  vector2 = MockVector2D,
  world_property = MockWorldProperty,
  world_state = MockWorldState,
} = {}): void {
  jest.mock("xray16", () => ({
    CALifeSmartTerrainTask,
    CGameTask,
    CPhraseDialog,
    CSavedGameWrapper,
    CScriptXmlInit,
    CSightParams,
    CTime,
    CUI3tButton,
    CUICheckButton,
    CUIComboBox,
    CUIEditBox,
    CUIListBoxItem,
    CUIListBoxItemMsgChain,
    CUIMMShniaga,
    CUIMapInfo,
    CUIMapList,
    CUIMessageBoxEx,
    CUIScriptWnd,
    CUIScrollView,
    CUISpinNum,
    CUISpinText,
    CUIStatic,
    CUIWindow,
    CZoneCampfire,
    DIK_keys,
    FS,
    Frect,
    IsImportantSave,
    LuabindClass: () => {},
    action_base,
    action_planner,
    alife,
    anim,
    bit_and,
    bit_or,
    callback,
    clsid,
    color,
    cond,
    create_ini_file,
    cse_alife_creature_actor,
    cse_alife_dynamic_object,
    cse_alife_dynamic_object_visual,
    cse_alife_helicopter,
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
    entity_action,
    flags32,
    game,
    game_graph,
    getFS,
    get_console,
    get_hud,
    hit,
    ini_file,
    level,
    log,
    login_operation_cb,
    look,
    main_menu,
    move,
    noise,
    object_binder,
    patrol,
    physics_joint,
    physics_shell,
    print_stack,
    profile,
    profile_timer,
    property_evaluator,
    property_storage,
    relation_registry,
    set_start_game_vertex_id,
    set_start_position,
    sight_params,
    snd_type,
    sound,
    sound_object,
    stalker_ids,
    system_ini,
    task,
    time_global,
    ui_events,
    user_name,
    vector,
    vector2,
    world_property,
    world_state,
  }));
}
