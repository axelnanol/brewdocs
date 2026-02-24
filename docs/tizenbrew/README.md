# TizenBrew — Overview

**TizenBrew** is a modular platform for Samsung Smart TVs running Tizen OS. It lets you
experience modified websites (mods) and install newer web apps without having to use
Tizen Studio every time you want to add or update a module.

> **Source:** <https://github.com/reisxd/TizenBrew>

---

## How It Works

TizenBrew is a Tizen web app that runs on your TV. When launched it acts as a
lightweight app loader:

1. It reads the `package.json` of each installed module from a GitHub tag.
2. Depending on the module type it either opens a standalone web page (`app`) or
   navigates to a target website and injects a user-script (`mods`).
3. Registered remote-control keys are forwarded to the running module.

---

## Module Types

| Type | Description |
| :--- | :---------- |
| `app` | A standalone web page served from the module's own files |
| `mods` | A site modification — JavaScript injected into an existing website |

See [Module System](Modules.md) for full details on creating modules.

---

## Key Features

- **No Tizen Studio per update** — install or update a module by pointing TizenBrew at
  a GitHub repository.
- **Remote-control key registration** — modules declare which media/colour keys they need.
- **Service support** — modules can ship a Node.js service file that runs alongside the
  front-end.
- **Works on Tizen 3.0 +** — compatible with Samsung TVs from 2017 onwards.

---

## Related Pages

- [Installation](Installation.md)
- [Module System](Modules.md)
- [Building & Resigning](Building.md)
