# Jellyfin on Tizen — Overview

[Jellyfin](https://jellyfin.org/) is a free, open-source media server. It can be installed
on Samsung Smart TVs in several ways — pick the one that best fits your situation:

| Method | Best if… |
| :----- | :------- |
| Method 1 — TizenBrew Module | You already have TizenBrew installed and want the simplest option |
| Method 2 — jellyfin-tizen-builds | You want the latest pre-built app installed directly on your TV (no TizenBrew needed) |
| Method 3 — Samsung-Jellyfin-Installer | You want a GUI tool that also installs Moonlight and other community apps |
| Method 4 — Docker | You are comfortable with the command line and want full control |

---

## Method 1 — TizenBrew Module (Recommended)

The `@glenlowland/jellyfin-tizen` npm package wraps the official
[jellyfin-tizen](https://github.com/jellyfin/jellyfin-tizen) web app and adds a Tizen
adapter layer so it works correctly when loaded through TizenBrew.

> **Source:** <https://github.com/GlenLowland/jellyfin-tizen-npm-publish>  
> **Author:** Glen Lowland  
> **Module type:** `app`  
> **npm package:** `@glenlowland/jellyfin-tizen`

> **Requirement:** TizenBrew v1.3.0 or higher must already be installed on your TV.  
> New to TizenBrew? Follow the [Installation guide](../tizenbrew/Installation.md) first.

### Steps

1. Open **TizenBrew** on your TV.
2. Navigate to the **Module Manager** — it is the **3rd icon from the left** at the
   top of the TizenBrew home screen. Use the directional pad to highlight it and
   press **OK**.
3. Select **Add Module** and enter:
   ```
   @glenlowland/jellyfin-tizen
   ```
4. TizenBrew will download and register Jellyfin. It will then appear on your
   TizenBrew dashboard — select it to launch.

---

## Method 2 — jellyfin-tizen-builds (TizenBrew Installer)

Pre-built Jellyfin `.wgt` packages automatically compiled from the latest
[jellyfin-tizen](https://github.com/jellyfin/jellyfin-tizen) source.
This method installs Jellyfin as a **standalone app** directly on your TV — it does not
require TizenBrew to be installed or running. New builds are produced automatically when
Jellyfin releases a new version.

> **Source:** <https://github.com/jeppevinkel/jellyfin-tizen-builds>  
> **Author:** jeppevinkel

> **Not sure which variant to download?** Start with `Jellyfin.wgt` — it is the
> latest stable release and works on the vast majority of TVs.

### Build Variants

| File | Description |
| :--- | :---------- |
| `Jellyfin.wgt` | ✅ **Recommended** — latest stable release |
| `10.11.z` | Latest build on the 10.11.x release branch (bleeding edge) |
| `master` | Cutting-edge (potentially unstable; only use if the stable build has a known issue) |
| `secondary` | Different app ID — lets you have a second Jellyfin instance signed in to a different server |
| `SmartHub` | Adds Samsung Smart Hub Preview integration |
| `OblongIcon` | Uses an oblong-shaped icon — required on some older TVs that reject the default round icon |

### What you will need

- A **Windows, macOS, or Linux PC** on the same Wi-Fi network as your TV
- Your **TV's IP address** — find it at `Settings → Connection → Network → IP Settings`
- **Developer Mode enabled** on your TV — this is a one-time setup that lets your PC
  push apps to the TV. It is safe and does not affect normal TV use.
  Full instructions are in [Step 1 of the TizenBrew Installation guide](../tizenbrew/Installation.md).

### Steps

1. **Enable Developer Mode** on your TV if you have not already
   (see [TizenBrew Installation](../tizenbrew/Installation.md)).
2. **Download the TizenBrew Installer** from the
   [releases page](https://github.com/reisxd/TizenBrewInstaller/releases/latest)
   and run it on your PC.
   - **Windows:** double-click the `.exe`. If Windows Defender warns you, click
     **More info → Run anyway** — this is a well-known open-source tool.
   - **macOS / Linux:** mark the installer as executable and then run it:
     ```bash
     chmod +x tizenbrew-installer<os><arch>
     ./tizenbrew-installer<os><arch>
     ```
3. Enter your **TV's IP address** in the installer.
4. In the **GitHub repository** field enter:
   ```
   jeppevinkel/jellyfin-tizen-builds
   ```
5. Click **Install** and wait for the confirmation message.

After installation, Jellyfin will appear in your TV's **App List** — you do not need
to open TizenBrew to launch it.

> **Already have a `.wgt` file?** You can also choose **Local file** in the installer
> and point it at a `.wgt` downloaded from the
> [releases page](https://github.com/jeppevinkel/jellyfin-tizen-builds/releases/latest).

> **Certificate error on install?** If you previously installed Jellyfin from a
> different source, you may need to uninstall it first (go to your TV's **Apps**
> settings, find Jellyfin, and remove it) before installing this version.

---

## Method 3 — Samsung-Jellyfin-Installer

A dedicated desktop GUI installer for deploying Jellyfin (and other community apps such
as [Moonlight](../moonlight/README.md)) directly to your Samsung TV.

> **Source:** <https://github.com/Jellyfin2Samsung/Samsung-Jellyfin-Installer>

### What It Can Install

| App | Description |
| :-- | :---------- |
| Jellyfin | Official Jellyfin client for Tizen |
| Moonlight | NVIDIA GameStream / Sunshine client (see [Moonlight](../moonlight/README.md)) |
| Other community apps | Available under **Release → Tizen Community** |

### Steps

1. Download and open the [Samsung-Jellyfin-Installer](https://github.com/Jellyfin2Samsung/Samsung-Jellyfin-Installer/releases/latest) on your PC.
2. Sign in to your **Samsung account** when prompted — this is required on most TVs
   to generate an installation certificate.
3. Go to **Release → Tizen Community** and select the app you want to install
   (e.g. **Jellyfin.wgt**).
4. Select your TV from the list and click **Download and Install**.

> **Tip:** Developer Mode must be enabled on your TV before the installer can
> push apps to it. See [TizenBrew Installation](../tizenbrew/Installation.md) Step 1.

---

## Method 4 — Docker-Based Installer

For users comfortable with Docker and the command line. No Tizen Studio installation
required.

```bash
docker run --rm ghcr.io/georift/install-jellyfin-tizen <TV_IP> [build option] [tag url] [cert password]
```

Replace `<TV_IP>` with your TV's local IP address (found at
`Settings → Connection → Network → IP Settings`).

> **Source:** <https://github.com/Georift/install-jellyfin-tizen>  
> **Requirements:** Docker, TV in Developer Mode, TV IP address.

---

## Method Comparison

| Method | Needs PC? | Needs Developer Mode? | Ease of Use |
| :----- | :-------- | :-------------------- | :---------- |
| TizenBrew module | ❌ | ❌ | ⭐⭐⭐⭐⭐ |
| jellyfin-tizen-builds (TizenBrew Installer) | ✅ | ✅ | ⭐⭐⭐⭐ |
| Samsung-Jellyfin-Installer | ✅ | ✅ | ⭐⭐⭐⭐ |
| Docker installer | ✅ | ✅ | ⭐⭐⭐ |

---

## Related Pages

- [TizenBrew Installation](../tizenbrew/Installation.md)
- [TizenBrew Module System](../tizenbrew/Modules.md)
- [Moonlight on Tizen](../moonlight/README.md)
