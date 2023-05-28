import {
  CUI3tButton,
  CUIListBoxItemMsgChain,
  CUITextWnd,
  GetARGB,
  GetFontLetterica16Russian,
  LuabindClass,
  ui_events,
  vector2,
} from "xray16";

import { MultiplayerDemo } from "@/engine/core/ui/menu/multiplayer/MultiplayerDemo";
import { TName } from "@/engine/lib/types";

/**
 * todo;
 */
@LuabindClass()
export class MultiplayerDemoLoadItem extends CUIListBoxItemMsgChain {
  public filename: TName;

  public fn: CUITextWnd;
  public fage: CUITextWnd;
  public deleteButton: CUI3tButton;

  public constructor(owner: MultiplayerDemo, height: number, w1: number, w2: number) {
    super(height);

    const handler = owner.owner;

    this.filename = "filename";
    this.SetTextColor(GetARGB(255, 255, 255, 255));

    this.fn = this.GetTextItem();
    this.fn.SetFont(GetFontLetterica16Russian());
    this.fn.SetWndPos(new vector2().set(20, 0));
    this.fn.SetWndSize(new vector2().set(w1, height));
    this.fn.SetEllipsis(true);

    this.fage = this.AddTextField("", w2);
    this.fage.SetFont(GetFontLetterica16Russian());
    this.fage.SetWndSize(new vector2().set(w2, height));

    // --this.AttachChild                        (del_btn)
    this.deleteButton = owner.xml.Init3tButton("delete_demo_button", this);

    handler.Register(this.deleteButton, "delete_demo_button");
    handler.AddCallback("delete_demo_button", ui_events.BUTTON_CLICKED, () => owner.deleteSelectedDemo(), owner);
  }
}
