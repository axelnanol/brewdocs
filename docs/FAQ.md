# Frequently Asked Questions

Answers to the most common questions about TizenBrew, TizenTube, and related mods.

---

## TizenBrew & Modules

### Where can I find modules other than TizenTube?

Press the **GREEN** button on your remote while TizenBrew is open to access the
**Module Manager**. You can add any module from GitHub by entering its repository
path in `user/repo` format (e.g. `reisxd/tizentube`).

For a full list of available modules see:

- [TizenBrew Module System](tizenbrew/Modules.md) — official module format reference
- [TizenTube](tizentube/README.md), [TizenPortal](tizenportal/README.md),
  [TizenBrowse](tizenbrowse/README.md), [TFlix](tflix/README.md),
  [HyperTizen](hypertizen/README.md)

### Do I need to manually update TizenTube?

No. Since TizenBrew **v2.0.2**, modules are updated automatically by TizenBrew when
a new release is available. You do not need to re-add or reinstall them.

### How do I reinstall TizenTube (or any module) after uninstalling it?

1. Open TizenBrew on your TV.
2. Press **GREEN** to open the Module Manager.
3. Select **Add Module** and enter the repository path:
   ```
   reisxd/tizentube
   ```
4. The module will be downloaded and appear in your dashboard.

### How do I navigate TizenBrew with the remote?

Use the **D-pad** (arrow keys) to move focus between items and **OK / Enter** to
select. The colour buttons give quick access to key features:

| Button | Action |
| :----- | :----- |
| 🟢 Green | Open Module Manager (add / remove modules) |
| Other buttons | Module-specific (see each module's documentation) |

---

## TizenTube

### I'm still seeing ads in TizenTube. What should I do?

**Reboot your TV.** This is the most reliable fix for ad-blocker issues. If ads
return after reboot, report the issue on the
[TizenTube issue tracker](https://github.com/reisxd/TizenTube/issues).

### 4K videos lag or crash — is this fixable?

This is a **known limitation on higher Tizen versions** (Tizen 7+). It cannot be
fixed by TizenTube.

| Resolution | Status |
| :--------- | :----- |
| 1080p and below | ✅ Works fine |
| 4K 30 fps, non-HDR | ✅ Generally fine |
| 4K 60 fps / HDR | ❌ Lags and crashes — will not work |

If you need 4K HDR playback, use the native YouTube app.

### TizenBrew / TizenTube keeps crashing when I open it

**Reboot your TV** and try again. Most crash-on-open issues are caused by stale
state that a reboot clears.

---

## Installation

### Is there a way to install TizenBrew without a PC?

Not directly, but the **TizenBrew Installer** desktop app makes it as simple as
possible. See [Installation](tizenbrew/Installation.md) for the full guide.

The **USB Demo Package** method is permanently unavailable — Samsung shut down the
service used to generate USB packages. Do not follow guides that mention it.

### Is TizenBrew available on Android TV?

No. TizenBrew runs on **Samsung Smart TVs running Tizen OS** only.

For Android TV / Google TV, use
[TizenTube Cobalt](tizentubecobalt/README.md) instead — it is a standalone Android
app with similar features.

---

## Scope & Support

### Can TizenBrew run [some unrelated app]?

TizenBrew is designed for **web-based apps and site modifications** on Tizen TVs.
Apps that require native device capabilities, store access, or a specific OS
environment outside Tizen are out of scope.

### Where can I get live support?

The TizenBrew community maintains a Discord server. A link can be found on the
[TizenBrew GitHub page](https://github.com/reisxd/TizenBrew).

---

## Related Pages

- [Troubleshooting](Troubleshooting.md) — step-by-step fixes for specific errors
- [TizenBrew Installation](tizenbrew/Installation.md)
- [TizenBrew Module System](tizenbrew/Modules.md)
