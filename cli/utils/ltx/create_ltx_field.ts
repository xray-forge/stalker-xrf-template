import { createCondlist, joinCondlists } from "#/utils/ltx/condlist";
import {
  ELtxFieldType,
  IConditionListDescriptor,
  ILtxFieldDescriptor,
  ILtxFieldMeta,
  LTX_EXTEND,
} from "#/utils/ltx/types";

/**
 * todo;
 */
export function newField<T>(type: ELtxFieldType, value: T, meta: ILtxFieldMeta = {}): ILtxFieldDescriptor<T> {
  return {
    $isField: true,
    type: type,
    value: value,
    meta,
  };
}

/**
 * todo;
 */
export function newStringField<T extends string>(value: T, meta: ILtxFieldMeta = {}): ILtxFieldDescriptor<T> {
  return newField(ELtxFieldType.STRING, value, meta);
}

/**
 * todo;
 */
export function newIntegerField(value: number, meta: ILtxFieldMeta = {}): ILtxFieldDescriptor<number> {
  return newField(ELtxFieldType.INTEGER, value, meta);
}

/**
 * todo;
 */
export function newFloatField(value: number, meta: ILtxFieldMeta = {}): ILtxFieldDescriptor<number> {
  return newField(ELtxFieldType.FLOAT, value, meta);
}

/**
 * todo;
 */
export function newBooleanField(value: boolean, meta: ILtxFieldMeta = {}): ILtxFieldDescriptor<boolean> {
  return newField(ELtxFieldType.BOOLEAN, value, meta);
}

/**
 * todo;
 */
export function newCondlistField(
  value?: boolean | IConditionListDescriptor,
  meta: ILtxFieldMeta = {}
): ILtxFieldDescriptor<string> {
  return newField(ELtxFieldType.CONDLIST, createCondlist(value), meta);
}

/**
 * todo;
 */
export function newCondlistsField(
  value: Array<boolean | IConditionListDescriptor>,
  meta: ILtxFieldMeta = {}
): ILtxFieldDescriptor<string> {
  return newField(ELtxFieldType.CONDLIST, joinCondlists(...value.map(createCondlist)), meta);
}

/**
 * todo;
 */
export function newStringsField<T extends string>(
  value: Array<T>,
  meta: ILtxFieldMeta = {}
): ILtxFieldDescriptor<Array<T>> {
  return newField(ELtxFieldType.STRING_ARRAY, value, meta);
}

/**
 * todo;
 */
export function newIntegersField(value: Array<number>, meta: ILtxFieldMeta = {}): ILtxFieldDescriptor<Array<number>> {
  return newField(ELtxFieldType.INTEGER_ARRAY, value, meta);
}

/**
 * todo;
 */
export function newFloatsField(value: Array<number>, meta: ILtxFieldMeta = {}): ILtxFieldDescriptor<Array<number>> {
  return newField(ELtxFieldType.FLOAT_ARRAY, value, meta);
}

/**
 * todo;
 */
export function newSection<T>(value: T, ltxExtend?: string | Array<string>): T {
  if (ltxExtend) {
    value[LTX_EXTEND] = ltxExtend;
  }

  return value;
}
