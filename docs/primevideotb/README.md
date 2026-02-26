# PrimeVideoTB — Overview

**PrimeVideoTB** is a TizenBrew mod that brings an enhanced Amazon Prime Video
experience to Samsung Smart TVs, including ad-blocking, auto-skip features, and
playback speed control.

| Source | Author | Module type | Target site |
| :----- | :----- | :---------- | :---------- |
| [dchwilk/PrimeVideoTB](https://github.com/dchwilk/PrimeVideoTB) | [dchwilk](https://github.com/dchwilk) | `mods` | [primevideo.com](https://www.primevideo.com) |

---

## Features

- **FreeVee ad blocking** — automatically skips all FreeVee advertisements.
- **Self-ad skipping** — bypasses Amazon's own promotional content.
- **Intro skip** — automatically skips TV show intros and recaps.
- **Credits skip** — auto-advances to the next episode (configurable).
- **Speed control slider** — adjustable playback speed from 0.6× to 3.0×.
- **X-Ray enhancement** — removes distracting background overlays.
- **Paid content filter** — hides premium/rental content from browsing.
- **Full remote support** — Samsung Tizen TV remote integration.

---

## Remote Controls

| Button | Action |
| :----- | :----- |
| `↑` Arrow Up | Increase playback speed |
| `↓` Arrow Down | Decrease playback speed |
| `Back / ESC` | Navigate back |
| `Play / Pause` | Toggle playback |
| `Fast Forward` | Skip forward |
| `Rewind` | Skip backward |

---

## Installation

1. Open **TizenBrew** on your TV.
2. Navigate to the **Module Manager** (3rd icon from the left at the top of the
   TizenBrew home screen).
3. Select **Add Module** and enter:
   ```
   dchwilk/PrimeVideoTB
   ```
4. Launch **PrimeVideoTB** from the TizenBrew dashboard.

---

## `package.json` Summary

```json
{
  "name": "@dchwilk/primevideotb",
  "appName": "PrimeVideoTB",
  "packageType": "mods",
  "websiteURL": "https://www.primevideo.com",
  "main": "scripts/userScript.js",
  "keys": ["MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", ...]
}
```

---

## Related Pages

- [TizenBrew Module System](../tizenbrew/Modules.md)
- [TizenTube Overview](../tizentube/README.md) — ad-free YouTube mod
