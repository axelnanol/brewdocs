# TwitchTB — Overview

**TwitchTB** is a TizenBrew mod that brings a full ad-free Twitch experience to
Samsung Smart TVs, including an integrated ad-blocker, community point auto-claim,
and 7TV emote support.

> **Source:** <https://github.com/owen-the-kid/TwitchTB>  
> **Author:** Owen The Kid  
> **Module type:** `mods` (site modification)  
> **Target site:** <https://hisense.tv.twitch.tv/>

---

## Features

- **Ad blocking** — hides and mutes ads automatically during streams.
- **Community points** — automatically claims community point bonuses.
- **Sub-only VODs** — lets you view sub-only VODs without a subscription.
- **7TV emotes** — integrated support for 7TV third-party emotes.
- **Performance mode** — option to disable animations to improve performance.
- **Remote navigation** — use number keys **1–4** to jump between sections:
  - **1** — Home
  - **2** — Following
  - **3** — Browse
  - **4** — Search
- **Auto-accept banners** — automatically rejects cookie prompts and accepts the
  mature content banner.
- **Configuration screen** — press the **GREEN** button on your remote to open
  the settings screen.

---

## Installation

1. Open **TizenBrew** on your TV.
2. Navigate to the **Module Manager** (3rd icon from the left at the top of the
   TizenBrew home screen).
3. Select **Add Module** and enter:
   ```
   owen-the-kid/TwitchTB
   ```
4. Launch **TwitchTB** from the TizenBrew dashboard.

---

## `package.json` Summary

```json
{
  "name": "@owen-the-kid/twitchtb",
  "appName": "TwitchTB",
  "packageType": "mods",
  "websiteURL": "https://hisense.tv.twitch.tv/",
  "main": "dist/bundle.user.js",
  "keys": ["MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", ...]
}
```

---

## Related Pages

- [TizenBrew Module System](../tizenbrew/Modules.md)
- [TizenTube Overview](../tizentube/README.md) — ad-free YouTube mod
