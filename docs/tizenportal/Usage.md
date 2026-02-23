# TizenPortal — Usage Guide

This guide covers everyday use of TizenPortal on your Samsung TV.

---

## First Launch

After installing via TizenBrew (`axelnanol/tizenportal`) and launching the module,
you will see the **Portal** — an empty grid with a single **"+"** card.

---

## Adding Sites

1. Focus the **"+"** card and press **Enter**.
2. Fill in the site details in the editor:
   - **Name** — display name shown on the card.
   - **URL** — full URL including `http://` or `https://`.
   - **Bundle** — optional site-specific compatibility fix (e.g. `audiobookshelf`).
   - **Icon** — press **Fetch Favicon** for automatic detection, or enter a custom URL.
3. Press **Save**.

---

## Opening a Site

1. Focus the site card and press **Enter**.
2. TizenPortal navigates to the URL and applies the selected bundle.
3. Use the **D-pad** to navigate the page.

---

## Editing or Removing a Site

- **Long-press Enter** on a site card to open the editor.
- In the editor, use **Delete** to remove the site entirely.

---

## Address Bar (🔴 Red)

Press **🔴 Red** at any time to open the address bar overlay:

| Control | Action |
| :------ | :----- |
| ⎈ (Return) | Return to the portal |
| 🏠 Home | Navigate to site's home page |
| ← | Go back |
| → | Go forward |
| ↻ | Reload |
| URL field | Press Enter to edit; type a new address and press **Go** |
| ℹ Info | Open BrewDocs (TizenPortal documentation) |

---

## Mouse Mode (🟢 Green)

Press **🟢 Green** to toggle mouse-pointer emulation. In mouse mode:

- The D-pad moves a virtual cursor.
- **Enter** acts as a mouse click.
- Press **🟢 Green** again to return to D-pad focus mode.

---

## Preferences (🟡 Yellow on the Portal)

Press **🟡 Yellow** while on the portal to open Preferences:

| Setting | Description |
| :------ | :---------- |
| Theme | Light / Dark / Automatic / Portal / Custom Backdrop / Custom Colours |
| Debug HUD | Show a diagnostic overlay (Off / Top Right / Top Left / Bottom Right / Bottom Left) |
| Portal hints | Show colour-button labels on the portal |
| Viewport lock | Prevent the page from resizing when the OSK appears |
| Focus outline | Style of the focus ring around the active element |
| User agent | Override the browser's user-agent string |
| Auto-focusable | Automatically make non-focusable elements focusable |
| Text input protection | Prevent the TV's on-screen keyboard from opening until **Enter** is pressed |

---

## Returning to the Portal (🟡 Yellow on a Site)

Press **🟡 Yellow** while browsing a site to return to the portal grid.

---

## Diagnostics (🔵 Blue)

Press **🔵 Blue** to open the Diagnostics panel. It shows:

- Current page URL.
- Active bundle and bundle options.
- Performance metrics.
- TizenPortal version and build info.

Long-press **🔵 Blue** to enter **Safe Mode** (disables all bundles for the current
session — useful for debugging injection issues).

---

## D-pad Navigation

TizenPortal injects a **spatial navigation** engine that enables focus to move in
the direction you press — up, down, left, right — on any page, including pages that
were not designed for TV.

Three navigation modes are available (configurable in Preferences):

| Mode | Best For |
| :--- | :------- |
| `geometric` | Perfect grids and aligned layouts |
| `directional` | Complex / irregular layouts (cone-based) |
| `polyfill` | Legacy compatibility |

---

## Related Pages

- [TizenPortal Overview](README.md)
- [TizenBrew Module System](../tizenbrew/Modules.md)
