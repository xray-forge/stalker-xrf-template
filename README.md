# 🎮 Stalker XRay-TS modding utilities
Enabling power of typescript for scripting and dynamic configuration.

## 📌What is used:
 - [Typescript](https://www.typescriptlang.org/) to write custom scripts
 - [TypeScriptToLua](https://typescripttolua.github.io/docs/getting-started) to compile typescript to lua
 - Custom build system to collect 'gamedata' mod packages, emit metainfo and logs
 - (todo) Custom tools and JSX to emit XML files from typescript files
 - (todo) Custom tools to generate .ltx config files based on typescript files

## 📍 Purposes
Main goals of the project are:

- type safety
- unified tools for mod development
- automated builds steps and versioning system
- build-level globals to reduce amount of magical constants in codebase
- shared template for mods development
- documented code that can be used by others without searching forums from 2000s
- creating development tools to simplify life
- fun

<br/>

---

<br/>

## 🌓 Starting work

### 🧰 Pre-requirements  
- [NodeJS](https://nodejs.org/en/)
- `config.ini` file should be edited, paths matched to your local system

### 💿 Start development
- EDIT `config.ini` - correct paths to match your local system
- RUN `cd stalker-xrts-modding` - cd to project folder
- RUN `npm install` - install all the dependencies
- RUN `npm run build` - build gamedata to the destination
- RUN `npm run link` - link gamedata to the game folder
- RUN `npm run start_game` - start game in debug mode and test changes

## 🛠 Commands 

### NPM
`$ npm run COMMAND_NAME`

- `build` - build project gamedata with all assets
- `build:clean` - same as build, but cleans directory before emitting assets
- `build_scripts` - build dynamic/static scripts and configs
- `format` - reformat TS code and lint it
- `lint` - lint TS code with eslint utils
- `link` - link target/gamedata folder and stalker folder for faster development
- `unlink` - unlink target/gamedata folder and stalker folder
- `open_game_folder` - open game folder in explorer
- `start_game` - start game with debug flag, admin permissions may be required
