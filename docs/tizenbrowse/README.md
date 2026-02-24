# TizenBrowse — Overview

**TizenBrowse** is a TizenBrew mod that turns Google Chrome / the Tizen browser into an
ad-free browsing experience on Samsung Smart TVs.

> **Source:** <https://github.com/ghostfxck/TizenBrowse>  
> **Author:** ghostfxck  
> **Module type:** `mods` (site modification)  
> **Target site:** <https://google.com/>

---

## Features

- **Ad-free browsing** — removes advertisements from the browser experience.
- **Media-key support** — play/pause, stop, fast-forward, rewind, and track skip.
- **Service integration** — ships both a user-script and a Node.js service file.

---

## Installation

1. Open **TizenBrew** on your TV.
2. Select **Add Module** and enter:
   ```
   ghostfxck/TizenBrowse
   ```
3. Launch **TizenBrowse** from the TizenBrew dashboard.

---

## `package.json` Summary

```json
{
  "name": "@ghostfxck/TizenBrowse",
  "appName": "TizenBrowse",
  "packageType": "mods",
  "websiteURL": "https://google.com/",
  "main": "dist/userScript.js",
  "serviceFile": "dist/service.js",
  "keys": ["MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", ...]
}
```

---

## Related Pages

- [TizenBrew Module System](../tizenbrew/Modules.md)
- [TizenTube Overview](../tizentube/README.md) — ad-free YouTube mod
