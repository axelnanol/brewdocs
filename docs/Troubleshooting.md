# Troubleshooting

Step-by-step fixes for the most common TizenBrew and TizenTube issues.
Click on a topic to expand the fix.

---

<details open>
<summary><strong>"The application cannot be installed because the validity period has expired" / Error (-6)</strong></summary>

**Cause:** The **USB Demo Package** installation method is permanently dead. Samsung
shut down the signing service used to generate USB packages months ago. Any guide
that mentions USB installation or extracting files to a USB drive is outdated.

**Fix:** Use the **TizenBrew Installer** desktop app instead:

1. Follow the [Installation guide](tizenbrew/Installation.md) — Method 1.
2. Enable Developer Mode on your TV and set the Host PC IP to your PC's IP.
3. Run the installer and click **Install TizenBrew**.

> ⚠️ Do **not** attempt the USB method. It cannot work regardless of what you try.

</details>

<details>
<summary><strong>"Could not connect to the SDB Daemon" / TV not found</strong></summary>

**Cause:** Wrong IP address, Developer Mode not enabled, or the TV is not reachable
on the network.

**Checklist:**

1. **Find your TV's IP address** — it is _not_ the same as the Host PC IP you entered
   in Developer Mode. Go to:
   `TV Settings → Connection → Network → IP Settings`

2. **Confirm Developer Mode is on** — open the Apps panel, type `12345`, and check
   that Developer Mode is **On**.

3. **Check the Host PC IP** — in the Developer Mode popup, enter your **PC's** local
   IP (not the TV's IP).

4. **Try connecting manually:**
   ```bash
   sdb connect <TV_IP>
   sdb devices
   ```
   The TV should appear in the device list.

5. **Firewall** — make sure your PC's firewall does not block port `26101` (SDB).

</details>

<details>
<summary><strong>TizenBrew / TizenTube Crashes on Launch</strong></summary>

**Fix:** **Reboot your TV** (long-press the power button, or unplug and replug).
Most crash-on-open issues are caused by stale state in the TV's browser engine that
a full reboot clears.

If the crash persists after reboot, try uninstalling and reinstalling TizenBrew via
the TizenBrew Installer.

</details>

<details>
<summary><strong>TizenTube Is Showing Ads</strong></summary>

**Fix:** **Reboot your TV.** The ad-blocker can fall out of sync with YouTube's
served scripts; a reboot forces a clean reload of the TizenTube module.

If ads continue after several reboots, check the
[TizenTube issue tracker](https://github.com/reisxd/TizenTube/issues) — the team
may have already identified the cause.

</details>

<details>
<summary><strong>4K Video Playback Issues (Lag or Crashes)</strong></summary>

**Cause:** Known limitation of the Tizen browser engine on Tizen 7 and above.
This is not fixable by TizenTube.

| Resolution / Mode | Works? |
| :---------------- | :----- |
| Up to 1080p | ✅ Yes |
| 4K 24/30 fps, non-HDR | ✅ Usually yes |
| 4K 60 fps | ❌ Lags / crashes |
| 4K HDR | ❌ Lags / crashes |

**Workaround:** Use the native YouTube app for 4K HDR content.

</details>

<details>
<summary><strong>TizenTube Disappeared After Reinstalling TizenBrew</strong></summary>

Reinstalling TizenBrew does not automatically restore previously installed modules.

**Fix:**
1. Open TizenBrew on your TV.
2. Navigate to the **Module Manager** (3rd icon from the left at the top of the
   TizenBrew home screen).
3. Add the module again:
   ```
   reisxd/tizentube
   ```

</details>

<details>
<summary><strong>Certificate Error When Installing a TPK (`-12` / `Check certificate error`)</strong></summary>

Some Tizen apps (e.g. HyperTizen) are distributed as `.tpk` files that require a
Samsung certificate matching the registered TV's DUID.

**Fix:** Resign the package with your own certificate — see
[Building & Resigning](tizenbrew/Building.md) for instructions.

</details>

<details>
<summary><strong>TizenBrew Autostart — TV Hangs / Cannot Get Back to Menu</strong></summary>

**Symptoms:** TizenBrew launches straight into TizenTube, the TV hangs or stutters,
and pressing Back doesn't return to the TizenBrew dashboard.

**Possible cause:** A memory leak or stale session accumulating over time, especially
noticeable after upgrading from 2.x.

**Steps:**

1. **Reboot your TV** (long-press the power button or unplug from the wall). On
   reboot TizenBrew usually pauses briefly on the home screen before autostarting.
2. **Interrupt the autostart** — press **Back** immediately after TizenBrew appears,
   before YouTube fully loads.
3. Once on the TizenBrew home screen, go to **Settings** and disable **Autostart**.
4. If you cannot interrupt the autostart at all, reinstall TizenBrew via the
   TizenBrew Installer — this resets the configuration to defaults.

</details>

<details>
<summary><strong>TV Rebooting in a Loop While Using TizenTube Cobalt (NVIDIA Shield / Android)</strong></summary>

**Symptoms:** TV screen turns blue and enters a reboot loop while using TizenTube
Cobalt on an attached device (e.g. NVIDIA Shield). Only unplugging the TV stops it.

**Cause:** This is an **HDMI handshake / CEC (Consumer Electronics Control) issue**
between the Shield and the TV — it is not caused by TizenTube Cobalt itself. The app
cannot directly crash a connected TV.

**Steps to resolve:**

1. **Disable HDMI-CEC** on both the TV and the Shield:
   - TV: `Settings → General → External Device Manager → Anynet+ (HDMI-CEC) → Off`
   - Shield: `Settings → Device Preferences → HDMI → CEC control → Disabled`
2. **Update TV firmware** — Samsung releases firmware updates that fix HDMI stability
   issues. `Settings → Support → Software Update → Update Now`.
3. **Try a different HDMI cable or port** — a marginal cable can trigger CEC errors
   under high-bandwidth scenarios (4K HDR video).
4. If the loop persists, report the specific TV model and Shield firmware to the
   NVIDIA Shield forums — this is a hardware compatibility issue.

</details>

---

## Related Pages

- [FAQ](FAQ.md) — common questions answered concisely
- [TizenBrew Installation](tizenbrew/Installation.md)
- [Building & Resigning](tizenbrew/Building.md)
