import { JSXNode, JSXXML } from "jsx-xml";

export const IS_XML: boolean = true;

export function create(): JSXNode {
  return (
    <w>
      <file name="ui\ui_team_logo_small">
        <texture id="green_team_logo_small" x="0" y="0" width="32" height="32" />
        <texture id="blue_team_logo_small" x="32" y="0" width="32" height="32" />
      </file>
    </w>
  );
}
