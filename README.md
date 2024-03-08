# 🎮 [Stalker XRF](README.md)

[![book](https://img.shields.io/badge/docs-book-blue.svg?style=flat)](https://xray-forge.github.io/stalker-xrf-book)
[![types](https://img.shields.io/badge/docs-types-blue.svg?style=flat)](https://xray-forge.github.io/xray-16-types/index.html)
[![language-ts](https://img.shields.io/badge/language-typescript-blue.svg?style=flat)](https://github.com/xray-forge/stalker-xrf-engine/search?l=typescript)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/Neloreck/dreamstate/blob/master/LICENSE)
<br/>
![status](https://github.com/xray-forge/stalker-xrf-engine/actions/workflows/build_and_test.yml/badge.svg)
[![codecov](https://codecov.io/gh/xray-forge/stalker-xrf-engine/graph/badge.svg?token=4D1ZLNG8YJ)](https://codecov.io/gh/xray-forge/stalker-xrf-engine)

<p>
Fully rewritten stalker lua script engine with typescript. <br/>
</p>

## 📦 In short

- [Faster development](https://xray-forge.github.io/stalker-xrf-book/xrf/developing/developing.html)
- Custom [CLI](https://xray-forge.github.io/stalker-xrf-book/xrf/cli/cli.html) and [build pipeline](https://xray-forge.github.io/stalker-xrf-book/xrf/building/building.html), [dev tools](https://github.com/xray-forge/stalker-xrf-tools)
  - Scripts engine rewritten with typescript ([tstl](https://typescripttolua.github.io/docs/getting-started))
  - [Generation UI forms from JSX](https://xray-forge.github.io/stalker-xrf-book/xrf/building/building_forms.html)
  - [Game configs from dynamic typescript](https://xray-forge.github.io/stalker-xrf-book/xrf/building/building_configs.html)
  - [Simple translations generation](https://xray-forge.github.io/stalker-xrf-book/xrf/building/building_translations.html)
- [Creation of custom modded game packages](https://xray-forge.github.io/stalker-xrf-book/xrf/packaging.html)
- [Modular extensions](https://xray-forge.github.io/stalker-xrf-book/extensions/extensions.html)
- [Debugging tools](https://xray-forge.github.io/stalker-xrf-book/xrf/debugging.html)
- [Unit testing](https://xray-forge.github.io/stalker-xrf-book/xrf/testing.html)
- [Consistent code formatting, static analysis and linting](https://xray-forge.github.io/stalker-xrf-book/xrf/formatting_and_linting.html)

## 📍 Purpose

- Provide shared up-to-date template and tools for mod development
- Produce documented and readable code, document xray SDK
- Simplify development and building process, automate some steps

---

## 🌓 Links

- [Starting work](https://xray-forge.github.io/stalker-xrf-book/xrf/installation.html)
- [CLI commands](https://xray-forge.github.io/stalker-xrf-book/xrf/cli/commands.html)
- [Docs](https://xray-forge.github.io/stalker-xrf-book/general/general.html)
- [Types](https://xray-forge.github.io/xray-16-types/modules.html), [source](https://github.com/xray-forge/xray-16-types)

## 📌What is used

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeScriptToLua](https://typescripttolua.github.io/docs/getting-started)
- [Jest](https://jestjs.io/)
- [Fengari Lua VM](https://github.com/fengari-lua/fengari)
- [Open-X-Ray](https://github.com/OpenXRay/xray-16)

## 📦 Changes / differences from original

Full changes list: [changelist](https://xray-forge.github.io/stalker-xrf-book/changes/changes.html)

The intention of this engine is to allow easier modding without introducing breaking changes to the original plot. <br/>
Optimizations, quality and logics updates are welcome.

Breaking / radical changes can be implemented as extensions.

## 🌓 TODOs / tasks

- [cli and tooling](https://github.com/orgs/xray-forge/projects/3)
- [xrf engine](https://github.com/orgs/xray-forge/projects/4)
- [c++ engine (open xray)](https://github.com/orgs/xray-forge/projects/6)
- [documentation](https://github.com/orgs/xray-forge/projects/5)

## 🧰 State / bugs

It took ~3 months just to migrate all the 20 years of LUA codebase to typescript / support luabind. <br/>
Further game testing and re-architecture produces new bugs and issues which are easier to prevent with unit tests. <br/>
As for now, main focus is separation and clarification of logics, unit tests coverage.
