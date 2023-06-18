import { JSXNode } from "jsx-xml";

export interface IBaseXmlNode {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  tag?: string;
  stretch?: boolean;
  children?: JSXNode;
}

export interface IRgbColor {
  r: number;
  g: number;
  b: number;
}

export type TTextAlign = "c" | "l" | "r";
