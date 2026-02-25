# Frequently Asked Questions

Answers to the most common questions about TizenBrew, TizenTube, and related mods.
Click on a question to expand the answer.

---

## Platform Clarification

> ⚠️ **TizenBrew is for Samsung Smart TVs running Tizen OS only.**
>
> Many questions in the TizenTube subreddit and Discord come from users on
> **Android TV / Google TV / Fire TV / NVIDIA Shield / Onn devices**. Those devices
> use [TizenTube Cobalt](tizentubecobalt/README.md), which is a completely separate
> Android app — not a TizenBrew module. If you are on one of those devices, some
> answers below may not apply.

**Which issue tracker should I use?**

| Product | Platform | Issue tracker |
| :------ | :------- | :------------ |
| TizenTube | Samsung Tizen TV (via TizenBrew) | [reisxd/TizenTube/issues](https://github.com/reisxd/TizenTube/issues) |
| TizenTube Cobalt | Android TV / Fire TV / Google TV | [reisxd/TizenTubeCobalt/issues](https://github.com/reisxd/TizenTubeCobalt/issues) |

---

## TizenBrew & Modules

<details open>
<summary><strong>Where can I find modules other than TizenTube?</strong></summary>

Navigate to the **Module Manager** — it is the **3rd icon from the left** at the top of
the TizenBrew home screen. Use the directional pad on your remote to highlight it and
press **OK/Enter** to open it. You can add any module from GitHub by entering its
repository path in `user/repo` format (e.g. `reisxd/tizentube`).

Available modules documented in this wiki:

- [TizenTube](tizentube/README.md), [TizenBrowse](tizenbrowse/README.md),
  [TFlix](tflix/README.md), [HyperTizen](hypertizen/README.md)

</details>

<details>
<summary><strong>Do I need to manually update TizenTube?</strong></summary>

No. Since TizenBrew **v2.0.2**, modules are updated automatically. You do not need
to re-add or reinstall them.

</details>

<details>
<summary><strong>How do I update TizenBrew itself?</strong></summary>

Use the **TizenBrew Installer** desktop app to reinstall the latest version.

> ⚠️ The **USB Demo Package** method is permanently broken. Samsung shut down the
> signing service months ago. Do not follow guides that mention USB installation.

</details>

<details>
<summary><strong>How do I reinstall TizenTube (or any module) after uninstalling it?</strong></summary>

1. Open TizenBrew and navigate to the **Module Manager** (3rd icon from the left at the
   top of the TizenBrew home screen).
2. Select **Add Module** and enter: `reisxd/tizentube`
3. The module will download and appear in your dashboard.

</details>

<details>
<summary><strong>TizenBrew opens but shows a blank screen / no modules</strong></summary>

This can happen on a fresh install before any modules are added. TizenTube is
normally pre-installed, but if the home screen is empty:

1. Navigate to the **Module Manager** (3rd icon from the left at the top of the
   TizenBrew home screen).
2. Add `reisxd/tizentube` (or `@foxreis/tizentube`) as a module.
3. If the screen stays blank after adding a module, **reboot your TV** and relaunch.

If the problem persists, ensure your TV's network connection is working and that
the **Host PC IP** in Developer Mode settings is set to `127.0.0.1`.

</details>

<details>
<summary><strong>TizenBrew autostart — how do I get back to the TizenBrew menu?</strong></summary>

If TizenTube is set to autostart, TizenBrew launches straight into YouTube without
showing the dashboard. To get back to the menu:

1. Press the **Back** button on your remote while TizenTube is loading (before YouTube
   fully opens) — this should land you on the TizenBrew home screen.
2. Once on the TizenBrew home screen, open **Settings** and disable **Autostart**.

If you cannot interrupt the autostart and the TV hangs:

- **Reboot your TV** (long-press the power button). On reboot TizenBrew usually
  lands on the home screen before autostarting.
- As a last resort, reinstall TizenBrew via the TizenBrew Installer — this resets
  the configuration.

</details>

<details>
<summary><strong>Can TizenTube appear directly on the Tizen home screen like the native YouTube app?</strong></summary>

TizenBrew itself appears as an app on the Tizen home screen. TizenTube is a module
*inside* TizenBrew — it cannot currently be pinned as a standalone icon on the home
screen. To launch TizenTube, open TizenBrew first and select it from the dashboard.

</details>

---

## TizenTube

<details>
<summary><strong>TizenTube is crashing, UI is unresponsive, or I can't log in</strong></summary>

**Check whether YouTube itself is down first.** A worldwide YouTube outage produces
identical symptoms in TizenTube — crashes, blank screens, login failures, UI not
responding, speed controls stuck. This is not a TizenTube bug.

Check status at [downdetector.com/status/youtube](https://downdetector.com/status/youtube/)
or try YouTube on another device.

**If YouTube is up**, reboot your TV and relaunch TizenTube.

</details>

<details>
<summary><strong>Ads are showing again</strong></summary>

**Reboot your TV.** The ad-blocker can fall out of sync with YouTube's served
scripts. A full reboot forces a clean reload. This is the fix for the vast majority
of ad-regression reports.

If ads persist after several reboots — especially if many users report the same
issue at the same time — YouTube may have rolled out an update that broke the
blocker. Check the [TizenTube issue tracker](https://github.com/reisxd/TizenTube/issues).

</details>

<details>
<summary><strong>TizenTube "turned into" normal YouTube / TizenTube settings are gone</strong></summary>

If TizenTube's UI looks identical to the standard YouTube app and the TizenTube
settings panel is empty or missing, the injected script has failed to load. This
usually happens after a YouTube front-end update.

**Fix:** Reboot your TV. If the issue persists, wait for a TizenTube update — check
the [releases page](https://github.com/reisxd/TizenTube/releases).

</details>

<details>
<summary><strong>The long-press menu or context menu options are not working</strong></summary>

(e.g. "Add to Queue", "Go to Channel", "Don't recommend this channel")

This happens after YouTube rolls out a front-end change that affects TizenTube's
script. **Reboot your TV** first. If it persists after reboot, check the
[TizenTube issue tracker](https://github.com/reisxd/TizenTube/issues).

</details>

<details>
<summary><strong>Playback speed is stuck at 1.25×</strong></summary>

Usually caused by a YouTube front-end change breaking TizenTube's speed control.
**Reboot your TV.** If it persists, report it on the
[TizenTube issue tracker](https://github.com/reisxd/TizenTube/issues).

</details>

<details>
<summary><strong>"Something went wrong" when signing in to YouTube</strong></summary>

Google periodically changes its sign-in / verification flow, which can break login
in TizenTube. This requires a TizenTube patch. Check the
[releases page](https://github.com/reisxd/TizenTube/releases) for an update.

In the meantime, try signing in on a different YouTube TV device and see if the
session carries over.

</details>

<details>
<summary><strong>My phone gets a sign-in notification every time I open TizenTube</strong></summary>

When TizenTube signs in to your Google account, Google sends a verification prompt
to other devices on your account. To stop this:

1. On your phone, open the **Google** app or go to [myaccount.google.com](https://myaccount.google.com).
2. Go to **Security → Your devices** and review the session, or
3. Go to **Security → 2-Step Verification** and review your sign-in prompts settings.

Alternatively, use a separate YouTube account in TizenTube to avoid the notification
on your primary account.

</details>

<details>
<summary><strong>YouTube Shorts are enabled in settings but still not working</strong></summary>

If you have enabled Shorts in TizenTube's settings but they still do not play or
appear, try:

1. **Restart TizenTube** — back out to TizenBrew and relaunch.
2. **Reboot your TV** — a stale session can cause settings not to take effect.
3. If it still does not work, report it on the
   [TizenTube issue tracker](https://github.com/reisxd/TizenTube/issues).

</details>

<details>
<summary><strong>Does TizenTube support viewing without a Google account?</strong></summary>

**Yes — as of a recent TizenTube update**, you can now watch YouTube without signing
in to a Google account. Update TizenTube to the latest version via TizenBrew's Module
Manager and the sign-in prompt will be optional.

If you are still being forced to sign in, make sure TizenTube has updated to the
latest release (TizenBrew updates modules automatically since v2.0.2, but a manual
relaunch may be needed to pick up the change).

</details>

<details>
<summary><strong>Can I use casting (YouTube Cast) with TizenTube?</strong></summary>

Casting from a phone to TizenTube requires TizenTube to already be **open and active
on the TV**. You cannot cast to launch TizenTube from cold — open TizenBrew →
TizenTube first, then cast from your phone.

</details>

<details>
<summary><strong>Context menu options are missing after an update</strong></summary>

("Don't recommend this channel", "Go to Channel", etc.)

These options are part of YouTube's TV interface and change with YouTube updates.
Check the [TizenTube issue tracker](https://github.com/reisxd/TizenTube/issues).

</details>

<details>
<summary><strong>Buffering — videos play for 1 second then stop</strong></summary>

**Reboot your device.** Most transient buffering issues (especially ones that
recur every time the app is relaunched but clear after a reboot) are caused by stale
network state. If buffering continues after reboot, check your Wi-Fi signal strength
or try a wired connection.

</details>

<details>
<summary><strong>Can I use voice / mic search in TizenTube?</strong></summary>

Voice search in TizenTube depends on the TV remote's hardware microphone and the
OS-level voice input. TizenTube does not add voice search to remotes that do not
already support it. If your Samsung TV remote has a mic button, it may work via the
native voice input.

</details>

<details>
<summary><strong>Can I watch 4K on my FHD (1080p) TV?</strong></summary>

Your TV display is fixed at 1080p — it cannot output 4K pixels. You can still select
a higher-quality stream in the YouTube quality menu (the TV will downscale it to
1080p). If 4K does not appear as a quality option, YouTube is limiting it based on
detected screen resolution — this is not a TizenTube limitation.

</details>

<details>
<summary><strong>How do I disable YouTube Shorts in TizenTube?</strong></summary>

TizenTube includes a built-in **hide Shorts** option:

1. Open TizenTube's **Settings / Customization** panel.
2. Toggle **Hide Shorts** on.
3. Restart TizenTube for the change to take full effect.

</details>

<details>
<summary><strong>4K videos lag or crash — is this fixable?</strong></summary>

This is a **known Tizen 7+ limitation** that cannot be fixed by TizenTube.

| Resolution | Works? |
| :--------- | :----- |
| 1080p and below | ✅ Yes |
| 4K 24/30 fps, non-HDR | ✅ Generally yes |
| 4K 60 fps / HDR | ❌ Lags / crashes |

Use the native YouTube app for 4K HDR content.

</details>

<details>
<summary><strong>TizenBrew / TizenTube keeps crashing on open</strong></summary>

**Reboot your TV.** Most crash-on-open issues are caused by stale browser state.

</details>

---

## Compatibility

<details>
<summary><strong>Does TizenBrew work on my 2016 Samsung TV?</strong></summary>

No. TizenBrew requires **Tizen OS 3.0 or newer**, which corresponds to **2017 model
year Samsung TVs and later**. 2016 models (such as the KU6079) run Tizen 2.x and
are not compatible.

There is currently no known ad-free YouTube alternative specifically for Tizen 2.x TVs.
Options for 2016 TVs:

- Use a streaming stick (Fire TV, Chromecast, Roku, etc.) plugged into the HDMI port
  and install [TizenTube Cobalt](tizentubecobalt/README.md) or another Android
  YouTube client on it.
- Use a network-level ad-blocker (e.g. Pi-hole or NextDNS) to reduce ads on the
  built-in YouTube app.

</details>

<details>
<summary><strong>My TV is a 2024 model but seems to be running Tizen 2.x — is that right?</strong></summary>

Almost certainly not. Most 2024 Samsung Smart TVs run Tizen 7.x or 8.x. A few
possible explanations:

- You may be reading a **firmware build number** rather than the Tizen OS version.
  Check `Settings → Support → About Smart TV` for the exact Tizen OS version.
- Some **budget or region-specific** Samsung models sold under the same name may
  run different software. Check the Tizen version specifically, not just the model year.

If the Tizen OS version shown is genuinely 2.x on a 2017+ TV, contact Samsung
support — this would be unusual.

</details>

<details>
<summary><strong>My new Samsung remote has no number buttons — how do I enter `12345` for Developer Mode?</strong></summary>

Newer Samsung One Remote / Slim remotes omit number buttons. Alternatives:

1. **Samsung SmartThings app** (iOS / Android) — acts as a remote with a full virtual
   keypad. Open SmartThings, select your TV, and use the virtual remote's number pad.
2. **USB keyboard** — plug a USB keyboard into the TV; it will work in text fields.
3. **On-screen number pad** — in some regions, navigating to the `Apps` panel and
   pressing and holding the **Back** button may bring up an on-screen keyboard.

</details>

<details>
<summary><strong>Does TizenBrew / TizenTube work on LG (webOS) TVs?</strong></summary>

No. TizenBrew and TizenTube are **Samsung Tizen OS** specific. LG TVs run **webOS**,
which is an entirely different operating system. TizenTube's APK / WGT files cannot
be installed on LG TVs.

There is no direct equivalent of TizenBrew for webOS at this time.

</details>

<details>
<summary><strong>Is there a TizenTube for NVIDIA Shield / Firestick / Onn / Google TV?</strong></summary>

Yes — but it is a different app called **[TizenTube Cobalt](tizentubecobalt/README.md)**.
It is a standalone Android app, not a TizenBrew module. Download it from the
[GitHub releases page](https://github.com/reisxd/TizenTubeCobalt/releases/latest).

</details>

<details>
<summary><strong>Which APK should I download for TizenTube Cobalt on Android — `cobalt-arm.apk` or `cobalt-arm64.apk`?</strong></summary>

- **`cobalt-arm64.apk`** — for most modern Android TV devices (Fire TV Stick 4K,
  NVIDIA Shield, Onn 4K, Chromecast with Google TV, etc.). These use 64-bit ARM CPUs.
- **`cobalt-arm.apk`** — for older 32-bit ARM devices (some older Fire TV Sticks,
  budget boxes). If you are unsure, try `arm64` first.

Your device's CPU architecture is shown in `Settings → Device → About → CPU`.

</details>

---

## Installation

<details>
<summary><strong>Is there a way to install TizenBrew without a PC?</strong></summary>

Not directly, but the TizenBrew Installer desktop app makes it as simple as possible.
See [Installation](tizenbrew/Installation.md).

The USB Demo Package method is **permanently unavailable**.

</details>

---

## Scope & Support

<details>
<summary><strong>My issue looks like a TizenTube bug. Is it?</strong></summary>

Before reporting, check:

1. **Is YouTube down?** — worldwide outages cause identical symptoms.
2. **Have you rebooted your TV/device?** — resolves the majority of transient issues.
3. **Which product are you using?**
   - On a **Samsung Tizen TV** → report at [reisxd/TizenTube/issues](https://github.com/reisxd/TizenTube/issues)
   - On **Android / Fire TV / NVIDIA Shield / Google TV** → report at [reisxd/TizenTubeCobalt/issues](https://github.com/reisxd/TizenTubeCobalt/issues)

</details>

<details>
<summary><strong>Can TizenBrew run [some unrelated app]?</strong></summary>

TizenBrew is designed for **web-based apps and site modifications** on Tizen TVs.
Apps that require native capabilities, store access, or a non-Tizen OS are out of scope.

</details>

<details>
<summary><strong>Is auto frame rate matching supported?</strong></summary>

Auto frame rate matching (switching the TV's refresh rate to match video content)
is not currently a TizenTube feature. It is a hardware-level capability that depends
on the TV's display pipeline and OS-level integration. It can be requested on the
[TizenTube issue tracker](https://github.com/reisxd/TizenTube/issues).

</details>

<details>
<summary><strong>Can I get Google Home screen recommendations from TizenTube Cobalt?</strong></summary>

TizenTube Cobalt does not currently integrate with the Android TV / Google TV home
screen recommendations row. This is an Android TV system feature that requires
specific integration by the app. It can be requested on the
[TizenTube Cobalt issue tracker](https://github.com/reisxd/TizenTubeCobalt/issues).

</details>

<details>
<summary><strong>Where can I get live support?</strong></summary>

The TizenBrew community maintains a Discord server linked from the
[TizenBrew GitHub page](https://github.com/reisxd/TizenBrew).

</details>

---

## Related Pages

- [Troubleshooting](Troubleshooting.md) — step-by-step fixes
- [TizenBrew Installation](tizenbrew/Installation.md)
- [TizenBrew Module System](tizenbrew/Modules.md)
