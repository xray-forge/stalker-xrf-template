/**
 * Utility to declare global variables.
 * Declared values can be found in _G / global LUA scope.
 */
declare const declare_global: (key: string, value: unknown) => void;

/**
 * Utility to get global variables.
 * TSTL assumes that returned value is object with methods, cast it to function/module with callbacks for correct usage.
 * todo: Remove after TS migration.
 */
declare const get_global: <T = any>(key: string) => T;

/**
 * Binding of implemented class defining function.
 * todo: Infer + more type safety.
 */
declare const declare_xr_class: <T, B extends abstract new (...args: Array<any>) => any>(
  name: string,
  base?: B | null,
  implementation?: Partial<T>
) => T & InstanceType<B>;

/**
 * Binding of implemented class creation function.
 * todo: Infer + InstanceType<T> generic.
 */
declare const create_xr_class_instance: <T>(it: T, ...params: Array<any>) => T;

declare const LuabindClass: () => ClassDecorator;
