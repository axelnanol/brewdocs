# TizenPortal — Overview

**TizenPortal** is a universal browser shell for Samsung Smart TVs running Tizen OS.
It provides a TV-friendly launcher for any website and automatically injects
compatibility fixes (bundles) for each site you add.

| Source | Author | Module type | Compatibility |
| :----- | :----- | :---------- | :------------ |
| [axelnanol/tizenportal](https://github.com/axelnanol/tizenportal) | [Axel Nanol](https://github.com/axelnanol) | `mods` | Tizen 3.0 – 6.5 (Chrome 47 – 69) |

---

## Features

### 🚀 Portal Launcher
- Grid-based layout optimised for TV remote D-pad navigation.
- Site editor to add / remove / edit apps with custom names and icons.
- Multiple themes: Light, Dark, Automatic (Sunset), Portal (Blue & Orange), Custom.

### 🔧 Site Enhancement
- Runs as a TizenBrew module; injects a runtime into every page you navigate to.
- **Bundle system** — per-site CSS/JS compatibility fixes applied automatically.
- Focus tooling, viewport locking, and scroll helpers for TV use.

### 🎮 Remote-Control Support

| Button | Short Press | Long Press |
| :----- | :---------- | :--------- |
| 🔴 Red | Address bar overlay | Reload page |
| 🟢 Green | Toggle mouse mode | Edit card (portal) / Focus highlight (sites) |
| 🟡 Yellow | Preferences (portal) / Return to portal (sites) | Add site (portal) |
| 🔵 Blue | Diagnostics panel | Safe mode |

D-pad navigation uses a **spatial navigation** engine so focus always moves in the
direction you press, even on pages that were not designed for TV.

---

## Installation

1. Open **TizenBrew** on your TV.
2. Select **Add Module** and enter:
   ```
   axelnanol/tizenportal
   ```
3. Launch **TizenPortal** from the TizenBrew dashboard.

---

## Architecture

```
TizenBrew
  └─ opens websiteURL (the portal page)
       └─ injects tizenportal.js into ALL pages
            ├─ Portal page  → renders site-card grid
            └─ Target site  → reads bundle, applies CSS/JS fixes
```

A **single runtime** (`dist/tizenportal.js`) runs on every page. It detects whether
it is on the portal or a target site and behaves accordingly.

---

## Related Pages

- [Usage Guide](Usage.md) — day-to-day usage and colour-button reference
- [TizenBrew Module System](../tizenbrew/Modules.md)
