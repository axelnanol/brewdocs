# TizenBrew — Overview

**TizenBrew** is a free, open-source platform for Samsung Smart TVs running Tizen OS.
Once installed, it lets you add powerful mods — such as an ad-free version of YouTube —
directly on your TV. You only need a PC to install TizenBrew once; after that, adding
and updating mods is done from the TV itself with just a remote control.

> **Source:** <https://github.com/reisxd/TizenBrew>

---

## How It Works

TizenBrew is a Tizen web app that runs on your TV. When you launch it, it acts as a
lightweight loader for your installed mods:

1. It reads the `package.json` of each installed mod from a GitHub tag.
2. Depending on the mod type it either opens a standalone web page (`app`) or
   navigates to a target website and quietly injects a user-script (`mods`).
3. Any remote-control buttons the mod needs are registered automatically.

---

## Module Types

TizenBrew supports two types of module:

| Type | What it does |
| :--- | :----------- |
| `app` | A **standalone web app** whose files are saved directly on the TV and run locally — like a mini website that lives on your TV. |
| `mods` | A **site modification** that injects JavaScript into an existing website (e.g. YouTube) to change how that site behaves. |

**In plain English:**
- **`app` modules** are self-contained pages stored on the TV. TizenBrew opens them
  like a built-in app — no internet needed for the app itself to load.
- **`mods` modules** take a website you already know (like YouTube) and silently
  improve it — removing ads, adding features, and fixing compatibility issues for
  your TV remote.

See [Module System](Modules.md) for full details on installing and creating modules.

---

## Key Features

- **No Tizen Studio per update** — install or update a mod by pointing TizenBrew at
  a GitHub repository. No command-line tools needed after initial setup.
- **Remote-control key registration** — mods declare which media/colour keys they need,
  so your remote works exactly as expected.
- **Service support** — mods can ship a Node.js service file that runs alongside the
  front-end for more advanced functionality.
- **Works on Tizen 3.0 +** — compatible with Samsung TVs from 2017 onwards.

---

## Related Pages

- [Installation](Installation.md)
- [Module System](Modules.md)
- [Building & Resigning](Building.md)
