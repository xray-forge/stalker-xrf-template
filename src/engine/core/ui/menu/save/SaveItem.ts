import {
  CUIListBoxItem,
  GetARGB,
  GetFontLetterica16Russian,
  GetFontLetterica18Russian,
  LuabindClass,
  XR_CUITextWnd,
} from "xray16";

/**
 * todo;
 */
@LuabindClass()
export class SaveItem extends CUIListBoxItem {
  public innerNameText: XR_CUITextWnd;
  public innerAgeText: XR_CUITextWnd;

  public constructor(height: number, ageFieldWidth: number, dataTime: string) {
    super(height);

    this.SetTextColor(GetARGB(255, 170, 170, 170));
    this.innerNameText = this.GetTextItem();
    this.innerNameText.SetFont(GetFontLetterica18Russian());
    this.innerNameText.SetEllipsis(true);

    this.innerAgeText = this.AddTextField(dataTime, ageFieldWidth);
    this.innerAgeText.SetFont(GetFontLetterica16Russian());
  }
}