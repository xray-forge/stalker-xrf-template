import { CScriptXmlInit, CUIWindow, LuabindClass, XR_CScriptXmlInit, XR_CUIScriptWnd } from "xray16";

import { LuaLogger } from "@/engine/core/utils/logging";
import { resolveXmlFormPath } from "@/engine/core/utils/ui";

const base: string = "menu\\debug\\DebugItemsSection.component";
const logger: LuaLogger = new LuaLogger($filename);

/**
 * todo;
 */
@LuabindClass()
export class DebugItemsSection extends CUIWindow {
  public owner: XR_CUIScriptWnd;

  public constructor(owner: XR_CUIScriptWnd) {
    super();

    this.owner = owner;
    this.SetWindowName(DebugItemsSection.__name);

    this.initControls();
    this.initCallBacks();
  }

  public initControls(): void {
    const xml: XR_CScriptXmlInit = new CScriptXmlInit();

    xml.ParseFile(resolveXmlFormPath(base));
  }

  public initCallBacks(): void {}
}
