# TizenBrew — Installation

You are about to take a big step — installing TizenBrew on your Samsung TV opens
the door to a whole world of improvements, starting with an ad-free YouTube experience.
You should be proud of giving this a go. This guide will take you through it step by step.

There are two installation methods. **Method 1** (the TizenBrew Installer desktop app)
is recommended for everyone — it is designed to be as straightforward as possible and
requires no command-line knowledge.

> **Minimum requirement:** Samsung TV with Tizen 3.0 or newer (2017 model or later).  
> Not sure which model you have? Check `Settings → Support → About Smart TV` on your TV.

---

## Method 1 — TizenBrew Installer (Recommended)

This method works on every supported Samsung TV. You will need your TV and a PC (Windows,
macOS, or Linux) connected to the **same Wi-Fi network**.

### Step 1 — Enable Developer Mode on your TV

Developer Mode is a hidden feature that lets you install apps from your PC. It is safe
to enable and does not affect normal TV use.

1. On your Samsung TV, go to **Apps** (or open the app panel from the home screen).
2. While the Apps panel is open, use your remote to type `12345` — either on a number
   pad remote or using the **Samsung SmartThings** app on your phone as a virtual remote.
3. A *Developer Mode* popup will appear:
   - Toggle **Developer mode** to **On**.
   - Under **Host PC IP**, enter your **PC's local IP address** (e.g. `192.168.1.50`).
     - On Windows: open Command Prompt and type `ipconfig`. Look for **IPv4 Address**.
     - On macOS: open Terminal and type `ifconfig | grep "inet "`.
     - On Linux: open Terminal and type `hostname -I`.
4. Press **OK** and when prompted, **reboot your TV**.

> **No number buttons on your remote?** Newer Samsung "One Remote" models omit them.
> Use the **Samsung SmartThings** app on your phone (iOS or Android) which includes a
> virtual number pad. A USB keyboard plugged into the TV also works.

> For a visual walkthrough of Developer Mode see
> [Samsung's guide to connecting a TV and SDK](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html#Connecting-the-TV-and-SDK).

### Step 2 — Download and Run the TizenBrew Installer

1. On your PC, go to the
   [TizenBrew Installer releases page](https://github.com/reisxd/TizenBrewInstaller/releases/latest)
   and download the installer for your operating system.
2. Run the downloaded file.
   - **Windows:** double-click the `.exe` file. If Windows Defender warns you, click
     **More info → Run anyway** — this is a known open-source tool and is safe.
   - **macOS / Linux:** you may need to mark it as executable first:
     ```bash
     chmod +x tizenbrew-installer-<os>-<arch>
     ./tizenbrew-installer-<os>-<arch>
     ```

### Step 3 — Install TizenBrew on Your TV

1. In the TizenBrew Installer, enter your TV's IP address.
   - Find it on your TV at `Settings → Connection → Network → IP Settings`.
   - This is a different IP from the one you entered in Developer Mode (that was your PC's IP).
2. Click **Install TizenBrew**.
3. **On Tizen 7 or above** you will be asked to sign in to your Samsung account so the
   installer can create a Samsung certificate. Follow the on-screen prompts — this is
   required by Samsung for newer TVs and is a normal part of the process.
4. Wait for the installer to finish. You should see a confirmation message.

### Step 4 — Launch TizenBrew

1. On your TV, go to **Apps** (or the app panel on the home screen).
2. You should see **TizenBrew** listed as an app. Select it to launch.
3. TizenBrew will open and TizenTube (ad-free YouTube) should already be available.

🎉 **Congratulations — you have installed TizenBrew!**

> **Tip:** The installer can also deploy other apps (Jellyfin, Moonlight, etc.) —
> just supply the GitHub repository in `user/repo` format or a local `.wgt` file.

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
   > `~/tizen-studio/tools/ide\bin` (Linux/macOS).
5. Set the **Host PC IP** to `127.0.0.1` (same Developer Mode screen as Step 1).
6. Launch **TizenBrew** from the TV's app list.

---

## Method 3 — USB Demo Package (Deprecated)

This method is no longer available. Samsung shut down the service used to generate USB
Demo Packages, so it cannot be used to install TizenBrew.

---

## Next Steps

Now that TizenBrew is installed, here is what you might want to do next:

- [Module System](Modules.md) — learn how to add mods like TizenTube
- [TizenTube Overview](../tizentube/README.md) — ad-free YouTube on your TV
- [Building & Resigning](Building.md) — advanced: create a signed package from source
