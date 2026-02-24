# HyperTizen — Overview

**HyperTizen** is a [Hyperion](https://hyperion-project.org/) /
[HyperHDR](https://github.com/awawa-dev/HyperHDR) screen capturer for Samsung Smart TVs
running Tizen OS. It enables Ambilight-style ambient lighting driven by what is
actually on your TV screen.

> **Source:** <https://github.com/reisxd/HyperTizen>  
> **Author:** Reis Can  
> **Module type:** `app` (TizenBrew UI module) + native TPK (Tizen app)  
> **Minimum Tizen version:** 6.5 (2022 Samsung TVs or newer)

---

## How It Works

HyperTizen has two components:

1. **Native TPK** — a low-level Tizen app that captures the screen and sends frames to
   your Hyperion / HyperHDR server over the network.
2. **TizenBrew UI module** (`reisxd/HyperTizen/HyperTizenUI`) — the settings and
   control interface, loaded through TizenBrew.

Both components are required for full functionality.

---

## Installation

### Step 1 — Install the Native TPK via Tizen Studio

> Requires Tizen Studio. See
> [Building & Resigning](../tizenbrew/Building.md) for setup instructions.

1. Enable **Developer Mode** on your TV and set the **Host PC IP** to your PC's IP.
   See [TizenBrew Installation](../tizenbrew/Installation.md) Step 1.
2. Download the latest `.tpk` from the
   [releases page](https://github.com/reisxd/HyperTizen/releases/latest).
3. Install the package:
   ```bash
   tizen install -n path/to/io.gh.reisxd.HyperTizen.tpk
   ```
   > `tizen` is in `C:\tizen-studio\tools\ide\bin` (Windows) or
   > `~/tizen-studio/tools/ide/bin` (Linux/macOS).

If you get `install failed[118, -12], reason: Check certificate error`, you need to
resign the package (see below).

### Step 2 — Add the TizenBrew UI Module

1. Open **TizenBrew** on your TV.
2. Press the **GREEN** button to open the module manager.
3. Add the following GitHub module path:
   ```
   reisxd/HyperTizen/HyperTizenUI
   ```
4. Launch **HyperTizen** from the TizenBrew dashboard.

---

## Resigning the TPK

If the default package doesn't install due to a certificate error:

1. Create a Samsung certificate in Tizen Studio:
   `Tools > Certificate Manager` — see
   [Creating Certificates](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/creating-certificates.html).
2. Re-sign the package:
   ```bash
   tizen package -t tpk -s YourProfileName -o path/to/output -- path/to/io.gh.reisxd.HyperTizen.tpk
   ```
3. Install the re-signed package as in Step 1 above.

---

## `package.json` Summary (TizenBrew UI Module)

```json
{
  "name": "@foxreis/hypertizen",
  "appName": "HyperTizen",
  "packageType": "app",
  "appPath": "index.html",
  "serviceFile": "js/service.js",
  "keys": []
}
```

---

## Related Pages

- [TizenBrew Module System](../tizenbrew/Modules.md)
- [Building & Resigning](../tizenbrew/Building.md)
