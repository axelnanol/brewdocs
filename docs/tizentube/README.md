# TizenTube — Overview

**TizenTube** is the original and most widely used TizenBrew mod. It gives you an
ad-free, sponsor-free YouTube experience on Samsung Smart TVs running Tizen OS.

> **Source:** <https://github.com/reisxd/TizenTube>  
> **Author:** Reis Can  
> **Module type:** `mods` (site modification)  
> **Target site:** <https://youtube.com/tv>

---

## Features

- **No ads** — blocks all YouTube advertisements on the TV interface.
- **No sponsors** — integrates SponsorBlock to skip sponsored segments.
- **Full media-key support** — play/pause, stop, fast-forward, rewind, and track skip
  all work as expected with the Samsung remote.
- **Lightweight** — a single injected script with no persistent background service
  required for playback.

---

## Installation

1. Open **TizenBrew** on your TV.
2. Select **Add Module** and enter:
   ```
   reisxd/tizentube
   ```
3. TizenBrew will fetch the latest release and register TizenTube.
4. Launch **TizenTube** from the TizenBrew dashboard — YouTube opens in TV mode with
   the mods applied.

---

## `package.json` Summary

```json
{
  "name": "@foxreis/tizentube",
  "appName": "TizenTube",
  "packageType": "mods",
  "websiteURL": "https://youtube.com/tv?additionalDataUrl=...",
  "main": "dist/userScript.js",
  "serviceFile": "dist/service.js",
  "keys": [
    "MediaPlayPause", "MediaPlay", "MediaPause",
    "MediaStop", "MediaFastForward", "MediaRewind",
    "MediaTrackNext", "MediaTrackPrevious"
  ]
}
```

---

## Related Pages

- [TizenBrew Module System](../tizenbrew/Modules.md)
- [TizenPortal Overview](../tizenportal/README.md) — a more advanced mod with a portal
  launcher for any site
