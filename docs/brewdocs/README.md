# Welcome to BrewDocs

**BrewDocs** is the unofficial documentation wiki for TizenBrew and all of its
mods. Whether you are setting up TizenBrew for the first time, looking to install
a new mod, or trying to fix a problem, you will find everything you need here.

> **Source:** <https://github.com/axelnanol/brewdocs>  
> **Author:** Axel Nanol  
> **Module type:** `app`

---

## What Is TizenBrew?

TizenBrew is a free, open-source platform for Samsung Smart TVs that lets you
install powerful mods — like an ad-free version of YouTube — directly on your TV.
You only need a PC to set it up once, and after that everything runs on the TV.

If you are new here, the best place to start is the
[TizenBrew Installation](../tizenbrew/Installation.md) guide.

---

## Quick Links

| I want to… | Go to… |
| :---------- | :----- |
| Install TizenBrew for the first time | [Installation](../tizenbrew/Installation.md) |
| Get ad-free YouTube on my Samsung TV | [TizenTube](../tizentube/README.md) |
| Add a new mod to TizenBrew | [Module System](../tizenbrew/Modules.md) |
| Fix something that is not working | [Troubleshooting](../Troubleshooting.md) |
| Browse all topics | [Table of Contents](../README.md) |

---

## Installing BrewDocs as a TizenBrew Module

BrewDocs is itself a TizenBrew module — so you can read this very wiki directly
on your Samsung TV without ever touching a phone or PC.

1. Open TizenBrew on your Samsung TV.
2. Navigate to the **Module Manager** (the 3rd icon from the left at the top of
   the TizenBrew home screen).
3. Select **Add Module**.
4. Enter `axelnanol/brewdocs` and confirm.
5. BrewDocs will appear in your TizenBrew dashboard.

Use the colour buttons and directional pad on your remote to navigate between pages.

For general module installation guidance, see
[TizenBrew Module System](../tizenbrew/Modules.md).

---

## `package.json` Summary

```json
{
  "name": "@axelnanol/brewdocs",
  "appName": "BrewDocs",
  "packageType": "app",
  "appPath": "dist/brewdocs.html",
  "keys": ["ColorF0Red", "ColorF1Green", "ColorF2Yellow", "ColorF3Blue"]
}
```

BrewDocs uses `packageType: "app"`, so TizenBrew opens `dist/brewdocs.html` directly in
the browser. That HTML file contains `<script src="./brewdocs.js"></script>`, which loads
the application script — no `serviceFile` or `evaluateScriptOnDocumentStart` is needed.

The `Return`/Back key is not listed in `keys` because Samsung TVs always deliver its
events without explicit registration. BrewDocs intercepts it to navigate back within
the wiki, and falls through to the browser's default behaviour (returning to TizenBrew)
when there are no more pages to step back through.

---

## Reading BrewDocs in a Browser

The same content is hosted on GitHub Pages and is always up to date:
<https://axelnanol.github.io/brewdocs/dist/brewdocs.html>
