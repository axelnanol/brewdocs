# TizenBrew — Module System

TizenBrew uses a **modular system** — each mod is a normal npm package hosted on GitHub
(or npm) with a special `package.json` that tells TizenBrew what kind of module it is.

> **Source:** <https://github.com/reisxd/TizenBrew/blob/main/docs/MODULES.md>

---

## Installing a Module

From the TizenBrew launcher on your TV:

1. Navigate to the **Module Manager** — it is the **3rd icon from the left** at the
   top of the TizenBrew home screen. Use the directional pad on your remote to
   highlight it and press **OK/Enter** to open it.
2. Select **Add Module**.
3. Enter the GitHub repository in `user/repo` format (e.g. `reisxd/tizentube`).
4. TizenBrew fetches the latest release tag, reads `package.json`, and registers the module.
5. The module now appears in your TizenBrew dashboard.

---

## Module Types

### `app` — Application Module

An application module is a standalone web page that TizenBrew opens in a full-screen
browser. The files are served directly from the module package.

**Required `package.json` fields:**

| Field | Description |
| :---- | :---------- |
| `packageType` | Must be `"app"` |
| `appName` | User-facing display name (e.g. `"BrewDocs"`) |
| `appPath` | Path to the main HTML file (e.g. `"dist/index.html"`) |
| `keys` | Array of [TVInputDevice](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/tvinputdevice-api.html) key names to register |
| `serviceFile` | *(optional)* Path to a Node.js background service file |
| `evaluateScriptOnDocumentStart` | *(optional)* Inject an additional script into the app page before it loads |

**Minimal example:**
```json
{
  "name": "@example/my-app",
  "appName": "My App",
  "version": "1.0.0",
  "packageType": "app",
  "appPath": "dist/index.html",
  "keys": []
}
```

---

### `mods` — Site Modification Module

A site modification injects JavaScript into an existing website (e.g. YouTube, Plex).
TizenBrew navigates to the target URL and evaluates the module's `main` script on the page.

**Required `package.json` fields:**

| Field | Description |
| :---- | :---------- |
| `packageType` | Must be `"mods"` |
| `appName` | User-facing display name |
| `websiteURL` | The URL to navigate to |
| `main` | JavaScript file to inject into the page |
| `keys` | Array of TVInputDevice key names to register |
| `serviceFile` | *(optional)* Path to a Node.js background service file |
| `evaluateScriptOnDocumentStart` | *(optional)* Inject the `main` script before the target page finishes loading |

**Minimal example:**
```json
{
  "name": "@example/my-mod",
  "appName": "My Mod",
  "version": "1.0.0",
  "packageType": "mods",
  "websiteURL": "https://example.com",
  "main": "dist/userScript.js",
  "keys": ["MediaPlayPause", "MediaPlay", "MediaPause"]
}
```

---

## Real-World Examples

| Module | Type | Repository |
| :----- | :--- | :--------- |
| TizenTube | `mods` | [reisxd/TizenTube](https://github.com/reisxd/TizenTube) |
| TwitchTB | `mods` | [owen-the-kid/TwitchTB](https://github.com/owen-the-kid/TwitchTB) |
| Jellyfin-Tizen | `app` | [GlenLowland/jellyfin-tizen-npm-publish](https://github.com/GlenLowland/jellyfin-tizen-npm-publish) |
| BrewDocs | `app` | [axelnanol/brewdocs](https://github.com/axelnanol/brewdocs) |

---

## Available Remote-Control Keys

The following key names can be placed in the `keys` array:

**Media keys:**
`MediaPlayPause`, `MediaPlay`, `MediaPause`, `MediaStop`, `MediaFastForward`,
`MediaRewind`, `MediaTrackNext`, `MediaTrackPrevious`

**Colour buttons:**
`ColorF0Red`, `ColorF1Green`, `ColorF2Yellow`, `ColorF3Blue`

---

## Related Pages

- [Building & Resigning](Building.md)
- [TizenTube Overview](../tizentube/README.md)
