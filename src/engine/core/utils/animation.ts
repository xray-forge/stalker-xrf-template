import { TAnimationSequenceElement, TAnimationSequenceElements } from "@/engine/core/objects/state";
import { LuaArray, TIndex } from "@/engine/lib/types";

/**
 * Create animation sequence.
 *
 * @param sequence - variadic parameters describing animations
 * @returns sequence of animations, 0-based array
 */
export function createSequence(...sequence: Array<TAnimationSequenceElements>): LuaArray<TAnimationSequenceElements>;
export function createSequence(
  ...sequence: Array<Array<TAnimationSequenceElement>>
): LuaArray<TAnimationSequenceElements>;
export function createSequence(
  ...sequence: Array<
    TAnimationSequenceElements | LuaArray<TAnimationSequenceElement> | Array<TAnimationSequenceElements>
  >
): LuaArray<TAnimationSequenceElements> {
  const list: LuaArray<TAnimationSequenceElements> = new LuaTable();
  let index: TIndex = 0;

  for (const it of sequence) {
    list.set(index, it as TAnimationSequenceElement);
    index++;
  }

  return list;
}
