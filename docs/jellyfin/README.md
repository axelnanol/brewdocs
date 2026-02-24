# Jellyfin on Tizen — Overview

[Jellyfin](https://jellyfin.org/) is a free, open-source media server. It can be installed
on Samsung Smart TVs as a TizenBrew module or via dedicated installer tools.

---

## Method 1 — TizenBrew Module (Recommended)

The `@glenlowland/jellyfin-tizen` npm package wraps the official
[jellyfin-tizen](https://github.com/jellyfin/jellyfin-tizen) web app and adds a Tizen
adapter layer so it works correctly when loaded through TizenBrew.

> **Source:** <https://github.com/GlenLowland/jellyfin-tizen-npm-publish>  
> **Author:** Glen Lowland  
> **Module type:** `app`  
> **npm package:** `@glenlowland/jellyfin-tizen`

### Installation

1. Open **TizenBrew** on your TV.
2. Press the **GREEN** button (or select **Add Module**) and enter:
   ```
   @glenlowland/jellyfin-tizen
   ```
3. Press **GREEN** again to open the modules list.
4. Launch **Jellyfin Tizen** from the list.

> **Requirement:** TizenBrew v1.3.0 or higher.

---

## Method 2 — Samsung-Jellyfin-Installer

A dedicated desktop installer for deploying Jellyfin (and other apps such as
[Moonlight](../moonlight/README.md)) directly to your Samsung TV.

> **Source:** <https://github.com/Jellyfin2Samsung/Samsung-Jellyfin-Installer>

### What It Installs

| App | Description |
| :-- | :---------- |
| Jellyfin | Official Jellyfin client for Tizen |
| Moonlight | NVIDIA GameStream / Sunshine client (see [Moonlight](../moonlight/README.md)) |
| Other community apps | Selected via **Release → Tizen Community** |

### Steps

1. Download and open the Samsung-Jellyfin-Installer on your PC.
2. Sign in to your Samsung account (required on most TVs).
3. Go to **Release → Tizen Community** and select **Moonlight.wgt** or any other app.
4. Select your TV in the installer and click **Download and Install**.

---

## Method 3 — Docker-Based Installer

For users comfortable with Docker and automation.

```bash
docker run --rm ghcr.io/georift/install-jellyfin-tizen <TV_IP> [build option] [tag url] [cert password]
```

> **Source:** <https://github.com/Georift/install-jellyfin-tizen>  
> Requires: Docker, TV in Developer Mode, TV IP address, Samsung Tizen SDK tools.

---

## Method Comparison

| Method | Needs PC? | Needs Developer Mode? | Ease of Use |
| :----- | :-------- | :-------------------- | :---------- |
| TizenBrew module | ❌ | ❌ | ⭐⭐⭐⭐ |
| Samsung-Jellyfin-Installer | ✅ | ✅ | ⭐⭐⭐⭐ |
| Docker installer | ✅ | ✅ | ⭐⭐⭐ |

---

## Related Pages

- [TizenBrew Module System](../tizenbrew/Modules.md)
- [Moonlight on Tizen](../moonlight/README.md)
