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
- **No sponsors** — integrates [SponsorBlock](https://sponsor.ajay.app/) to skip
  sponsored segments automatically.
- **Picture-in-Picture** — watch a video in a floating overlay while browsing.
- **DeArrow** — replaces clickbait thumbnails and titles with neutral alternatives
  via [DeArrow](https://dearrow.ajay.app/).
- **Customizable themes** — custom colour schemes for the YouTube TV interface.
- **Full media-key support** — play/pause, stop, fast-forward, rewind, and track skip
  all work as expected with the Samsung remote.
- **Hide Shorts** — removes YouTube Shorts from home-screen feeds and recommendations.

> **Tip:** TizenTube is installed in TizenBrew by default. If it is missing, add it
> as an npm module: `@foxreis/tizentube`

---

## Installation

TizenTube is **installed by default** in TizenBrew. It should appear on the home screen
immediately after installing TizenBrew.

If it is missing, add it manually:

1. Open **TizenBrew** on your TV.
2. Navigate to the **Module Manager** — the **3rd icon from the left** at the top of
   the TizenBrew home screen. Use the directional pad to highlight it and press **OK**.
3. Select **Add Module** and enter either:
   ```
   reisxd/tizentube
   ```
   or the npm package name:
   ```
   @foxreis/tizentube
   ```
4. Launch **TizenTube** from the TizenBrew dashboard.

---

## Common Questions

### How do I disable YouTube Shorts?

Open the TizenTube **Settings / Customization** panel and toggle **Hide Shorts** on.
Restart TizenTube for the change to take full effect.

### Can I watch 4K on my FHD (1080p) TV?

Your display is fixed at 1080p — it cannot output 4K pixels. You can still select
higher-quality streams in the YouTube quality menu, but the TV will downscale them to
1080p. If 4K does not appear as a quality option, this is YouTube's decision based on
the detected screen resolution.

### 4K videos lag or crash

This is a known limitation on Tizen 7+. See [FAQ](../FAQ.md) for the compatibility table.

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
- [TizenTube Cobalt](../tizentubecobalt/README.md) — TizenTube for Android / Google TV
