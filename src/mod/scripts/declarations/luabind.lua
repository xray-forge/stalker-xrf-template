local LuaLogger = require("scripts.utils.logging").LuaLogger
local create_ts_class_instance = require("lualib_bundle").__TS__New
local log = create_ts_class_instance(LuaLogger, "global");

-- ---------------------------------------------------------------------------------------------------------------------
-- Method to declare native C++ classes from lua
-- Easier to declare it as LUA global and use than transpile from TS directly
-- LuaBind classes require constructor-destructor implementation and are defined as 'userdata'
-- Usage of metatables and TsToLua approach will not work with lua bind
--
-- @param name - name of new class
-- @param base - base luabind class for extending
-- @param implementation - optional object with class implementation
-- ---------------------------------------------------------------------------------------------------------------------
_G.declare_xr_class = function(name, base, implementation)
  if (_G[name]) then
    log:warn("Skip declaring class name that is already used in globals: " .. name)
  else
    log:info("Declare [C++] class:", name, type(base))
  end

  if base then
    class (name) (base)
  else
    class (name)
  end

  local global_declaration = _G[name];

  global_declaration.__name = name

  -- Apply implementation immediately if it is provided
  if implementation ~= nil then
    for k, v in pairs(implementation) do
      global_declaration[k] = v
    end
  end

  return global_declaration
end

-- ---------------------------------------------------------------------------------------------------------------------
-- Create XR class instance safely from typescript skipping all the polyfills
-- ---------------------------------------------------------------------------------------------------------------------
_G.create_xr_class_instance = function(it, ...)
  return it(...)
end

-- ---------------------------------------------------------------------------------------------------------------------
-- With TS we are using mostly locals to prevent scope pollution
-- If explicit global declaration is needed, we can use this utility function and declare something as global from TS
-- ---------------------------------------------------------------------------------------------------------------------
_G.declare_global = function (key, value)
  local matches = string.gmatch(key, "[^.]+")
  local target = _G
  local target_key = matches()

  for match in matches do
    target = target[target_key]
    target_key = match;
  end

  target[target_key] = value
end

-- ---------------------------------------------------------------------------------------------------------------------
-- Get LUA globals from TS
-- ---------------------------------------------------------------------------------------------------------------------
_G.get_global = function(key)
  local matches = string.gmatch(key, "[^.]+")
  local value = _G[matches()];

  for match in matches do
    value = value[match]
  end

  return value;
end