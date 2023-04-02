import {
  CUIListBoxItem,
  GetARGB,
  GetFontLetterica16Russian,
  GetFontLetterica18Russian,
  LuabindClass,
  XR_CUITextWnd,
} from "xray16";

import { TSection } from "@/engine/lib/types";

/**
 * todo;
 */
@LuabindClass()
export class DebugItemListEntry extends CUIListBoxItem {
  public innerNameText: XR_CUITextWnd;
  public innerSectionText: XR_CUITextWnd;

  public constructor(height: number, width: number, section: TSection) {
    super(height);

    this.SetTextColor(GetARGB(255, 170, 170, 170));

    this.innerNameText = this.GetTextItem();
    this.innerNameText.SetFont(GetFontLetterica18Russian());
    this.innerNameText.SetEllipsis(true);
    this.innerSectionText = this.AddTextField(section, width);
    this.innerSectionText.SetFont(GetFontLetterica16Russian());
  }
}
