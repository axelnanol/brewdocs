# Moonlight on Tizen — Overview

[Moonlight](https://moonlight-stream.org/) is an open-source client for
[NVIDIA GameStream](https://www.nvidia.com/en-us/shield/support/shield-tv/gamestream/) and
[Sunshine](https://github.com/LizardByte/Sunshine) (the open-source GameStream host).
It lets you stream games from a powerful desktop PC to your Samsung Smart TV.

There are two separate Moonlight ports for Tizen, each targeting a different generation
of Samsung TVs.

---

## Moonlight for Tizen (Chrome/WASM) — Tizen 5.5+

> **Source:** <https://github.com/OneLiberty/moonlight-chrome-tizen>  
> **Author:** OneLiberty  
> **Requirements:** Samsung Smart TV running Tizen OS **5.5 or higher**

Based on the Chrome OS version of Moonlight, rebuilt as a WebAssembly app for modern
Samsung TVs.

### Installation (Recommended — Samsung-Jellyfin-Installer)

1. Download and open the [Samsung-Jellyfin-Installer](https://github.com/Jellyfin2Samsung/Samsung-Jellyfin-Installer).
2. Sign in to your Samsung account.
3. In the installer go to **Release → Tizen Community** and select **Moonlight.wgt**
   (or **Moonlight-NoGame.wgt** for the no-game-mode variant).
4. Select your TV and click **Download and Install**.

Moonlight will appear under **Recent Apps** after installation.

### Installation (Docker / Advanced)

```bash
docker run -it --rm ghcr.io/oneliberty/moonlight-chrome-tizen:samsung_wasm
sdb connect <YOUR_TV_IP>
tizen install -n Moonlight.wgt
exit
```

> For multiple TVs connected to SDB use `-t <device_id>` with the ID from `sdb devices`.

---

## Moonlight for Tizen NaCl — Tizen 3.0–6.0 (Older TVs)

> **Source:** <https://github.com/OneLiberty/moonlight-tizen-nacl>  
> **Author:** OneLiberty  
> **Requirements:** Samsung Smart TV running Tizen OS **3.0 to 6.0**

A Proof-of-Concept NaCl (Native Client) port for older TVs that cannot run the WASM
version. Performance is limited — this is provided as a starting point for developers
who want to improve it.

### Installation (Docker)

```bash
docker run -it --rm ghcr.io/oneliberty/moonlight-tizen-nacl:samsung_nacl
sdb connect <YOUR_TV_IP>
tizen install -n MoonlightNaCl.wgt
exit
```

> If multiple TVs are connected, specify the target with `-t <device_id>`.
>
> Developer Mode must be enabled on the TV. See
> [TizenBrew Installation](../tizenbrew/Installation.md) Step 1.

---

## Moonlight Forks & Discussion

The community maintains several Moonlight variants. For a comparison and discussion of
all available forks see:
<https://github.com/OneLiberty/moonlight-chrome-tizen/discussions/121>

| Variant | Repo | Notes |
| :------ | :--- | :---- |
| OneLiberty (WASM) | [moonlight-chrome-tizen](https://github.com/OneLiberty/moonlight-chrome-tizen) | Main maintained fork for Tizen 5.5+ |
| OneLiberty (NaCl) | [moonlight-tizen-nacl](https://github.com/OneLiberty/moonlight-tizen-nacl) | PoC for Tizen 3.0–6.0 |
| MrPhaze62 (no game mode) | [moonlight-chrome-tizen-no-gamemode](https://github.com/MrPhaze62/moonlight-chrome-tizen-no-gamemode) | Removes game-mode requirement |
| BrightCraft | [moonlight-tizen](https://github.com/brightcraft/moonlight-tizen) | Alternative Tizen 5.5+ build |

---

## Prerequisites

- TV in Developer Mode (see [TizenBrew Installation](../tizenbrew/Installation.md))
- [Tizen Studio](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html) or Docker installed on your PC

---

## Related Pages

- [Jellyfin on Tizen](../jellyfin/README.md) — media server for Samsung TVs
- [Tizen Community Packages & Other Projects](../other-projects/README.md)
