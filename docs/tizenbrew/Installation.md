# TizenBrew — Installation

There are several ways to install TizenBrew on your Samsung TV. The **TizenBrew Installer**
desktop app is the easiest and recommended method.

> **Minimum requirement:** Samsung TV with Tizen 3.0 or newer (2017 model or later).

---

## Method 1 — TizenBrew Installer (Recommended)

This method works on every supported Samsung TV and requires no command-line knowledge.

### Step 1 — Enable Developer Mode on your TV

1. Open **Apps** (or **App Settings**) on your Samsung TV.
2. While the Apps panel is open, type `12345` on your remote or the on-screen keypad.
3. A *Developer Mode* popup appears:
   - Toggle **Developer mode** to **On**.
   - Under **Host PC IP**, enter your PC's local IP address.
4. Press **OK** and reboot the TV.

> For a visual walkthrough see
> [Samsung's guide to connecting a TV and SDK](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html#Connecting-the-TV-and-SDK).

### Step 2 — Run TizenBrew Installer on your PC

1. Download the [latest installer executable](https://github.com/reisxd/TizenBrewInstaller/releases/latest)
   for your OS from the TizenBrew Installer releases page.
2. Run the executable.
   - On macOS or Linux you may need to mark it executable first:
     ```bash
     chmod +x tizenbrew-installer-<os>-<arch>
     ./tizenbrew-installer-<os>-<arch>
     ```

### Step 3 — Install TizenBrew

1. In the installer, click **Install TizenBrew**.
2. On **Tizen 7 or above** you will be asked to sign in to your Samsung account so the
   installer can create a Samsung certificate. Follow the on-screen prompts.

> **Tip:** The installer can also deploy other `.wgt` / `.tpk` files (Jellyfin, Moonlight,
> etc.) — just supply the GitHub repository in `user/repo` format or a local `.wgt` file.

---

## Method 2 — Command Line (Advanced)

Use this method if you prefer a manual approach or need to script the deployment.

### Prerequisites

- [Tizen Studio](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html)
  installed and its `tools/ide/bin` directory added to `PATH`.
- TV in Developer Mode (see Step 1 above).

### Steps

1. [Connect to your TV](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html)
   using the Tizen Studio guide.
2. Download the latest **TizenBrew Widget** (`.wgt` file) from the
   [releases page](https://github.com/reisxd/TizenBrew/releases).
3. Check that the TV shows up:
   ```bash
   sdb devices
   ```
   > `sdb` is in `C:\tizen-studio\tools` (Windows) or `~/tizen-studio/tools` (Linux/macOS).
4. Install the widget:
   ```bash
   tizen install -n path/to/TizenBrewStandalone.wgt
   ```
   > `tizen` is in `C:\tizen-studio\tools\ide\bin` (Windows) or
   > `~/tizen-studio/tools/ide/bin` (Linux/macOS).
5. Set the **Host PC IP** to `127.0.0.1` (same Developer Mode screen as Step 1).
6. Launch **TizenBrew** from the TV's app list.

---

## Method 3 — USB Demo Package (Deprecated)

This method is no longer available. Samsung shut down the service used to generate USB
Demo Packages, so it cannot be used to install TizenBrew.

---

## Next Steps

- [Module System](Modules.md) — add your first mod (e.g. TizenTube)
- [Building & Resigning](Building.md) — create a signed package from source
