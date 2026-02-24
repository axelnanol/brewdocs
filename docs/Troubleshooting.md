# Troubleshooting

Step-by-step fixes for the most common TizenBrew and TizenTube issues.

---

## "The application cannot be installed because the validity period has expired" / Error (-6)

**Cause:** The **USB Demo Package** installation method is permanently dead. Samsung
shut down the signing service used to generate USB packages months ago. Any guide
that mentions USB installation or extracting files to a USB drive is outdated.

**Fix:** Use the **TizenBrew Installer** desktop app instead:

1. Follow the [Installation guide](tizenbrew/Installation.md) — Method 1.
2. Enable Developer Mode on your TV and set the Host PC IP to your PC's IP.
3. Run the installer and click **Install TizenBrew**.

> ⚠️ Do **not** attempt the USB method. It cannot work regardless of what you try.

---

## "Could not connect to the SDB Daemon" / TV not found

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

---

## TizenBrew / TizenTube Crashes on Launch

**Fix:** **Reboot your TV** (long-press the power button, or unplug and replug).
Most crash-on-open issues are caused by stale state in the TV's browser engine that
a full reboot clears.

If the crash persists after reboot, try uninstalling and reinstalling TizenBrew via
the TizenBrew Installer.

---

## TizenTube Is Showing Ads

**Fix:** **Reboot your TV.** The ad-blocker can fall out of sync with YouTube's
served scripts; a reboot forces a clean reload of the TizenTube module.

If ads continue after several reboots, check the
[TizenTube issue tracker](https://github.com/reisxd/TizenTube/issues) — the team
may have already identified the cause.

---

## 4K Video Playback Issues (Lag or Crashes)

**Cause:** Known limitation of the Tizen browser engine on Tizen 7 and above.
This is not fixable by TizenTube.

| Resolution / Mode | Works? |
| :---------------- | :----- |
| Up to 1080p | ✅ Yes |
| 4K 24/30 fps, non-HDR | ✅ Usually yes |
| 4K 60 fps | ❌ Lags / crashes |
| 4K HDR | ❌ Lags / crashes |

**Workaround:** Use the native YouTube app for 4K HDR content.

---

## TizenTube Disappeared After Reinstalling TizenBrew

Reinstalling TizenBrew does not automatically restore previously installed modules.

**Fix:**
1. Open TizenBrew on your TV.
2. Press **GREEN** to open the Module Manager.
3. Add the module again:
   ```
   reisxd/tizentube
   ```

---

## Certificate Error When Installing a TPK (`-12` / `Check certificate error`)

Some Tizen apps (e.g. HyperTizen) are distributed as `.tpk` files that require a
Samsung certificate matching the registered TV's DUID.

**Fix:** Resign the package with your own certificate — see
[Building & Resigning](tizenbrew/Building.md) for instructions.

---

## Related Pages

- [FAQ](FAQ.md) — common questions answered concisely
- [TizenBrew Installation](tizenbrew/Installation.md)
- [Building & Resigning](tizenbrew/Building.md)
