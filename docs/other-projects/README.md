# Tizen Community Packages & Other Projects

---

## Tizen Community Packages

> **Source:** <https://github.com/PatrickSt1991/tizen-community-packages>  
> **Author:** PatrickSt1991

A community-curated repository that bundles multiple Tizen web applications (`.wgt`
packages) into single, convenient releases. Instead of downloading and installing each
app individually, grab one bundle that includes several community apps.

### Included Apps (latest bundle)

| App | Description |
| :-- | :---------- |
| Moonlight (OneLiberty) | NVIDIA GameStream / Sunshine client — Tizen 5.5+ |
| Moonlight No-Gamemode (MrPhaze62) | Same, with game mode disabled |
| TizenBrew | Modular homebrew platform for Samsung TVs |
| Jellyfin | Open-source media server client |
| Twitch | Twitch client for Samsung TVs (2015+) |
| FCast | Open-source wireless audio/video streaming |
| Doom (WASM) | WebAssembly port of Doom for Tizen |
| OpenTTD | Transport Tycoon Deluxe for Tizen |
| Fireplace | Samsung TV fireplace screensaver |
| TVapp | HLS/m3u8 stream player |
| TizenTVAudioRecorder | HTML5 audio recorder / karaoke app |
| TVideoPlayer | Tizen TV video player (VideoJS) |

See the [releases page](https://github.com/PatrickSt1991/tizen-community-packages/releases)
for exact contents of each bundle.

### Requirements

- Samsung Certificate — create one via Tizen Studio:
  `Tools > Certificate Manager`.
  See [Building & Resigning](../tizenbrew/Building.md) for guidance.

---

## Failed & Abandoned Projects

### Better xCloud TV (better-xcloud-tv)

> **Source:** <https://github.com/redphx/better-xcloud-tv/issues/11>  
> **Author:** redphx  
> **Status:** Not feasible on current Tizen hardware

An attempt to bring [Better xCloud](https://github.com/redphx/better-xcloud) (the Xbox
Cloud Gaming enhancer) to Samsung Tizen TVs via TizenBrew. The developer found that
while injection worked, the TV's browser was too slow for cloud gaming to be playable.

The project is on hold unless a rooted Tizen TV or a better injection method is found.

---

## Related Pages

- [Moonlight on Tizen](../moonlight/README.md)
- [Jellyfin on Tizen](../jellyfin/README.md)
- [TizenBrew Module System](../tizenbrew/Modules.md)
