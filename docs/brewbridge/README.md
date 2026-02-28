# BrewBridge — Overview

**BrewBridge** is a proof-of-concept data-transfer bridge for TizenBrew. It lets a
Samsung Smart TV app (or any sender) push small JSON payloads to a phone or second
screen in real time — with no accounts, no pairing, just a QR code.

A **Sender** creates an ephemeral session and sends JSON messages over a Cloudflare
Worker API. A **Viewer** scans the QR code (or follows the link) and polls for new
messages every 2 seconds.

| Source | Author | Module type | Target site |
| :----- | :----- | :---------- | :---------- |
| [axelnanol/brewbridge](https://github.com/axelnanol/brewbridge) | [Axel Nanol](https://github.com/axelnanol) | `mods` (site modification) | [axelnanol.github.io/brewbridge](https://axelnanol.github.io/brewbridge/index.html) |

---

## Features

- **Ephemeral sessions** — no accounts or sign-up; each session exists only as long as
  you use it.
- **QR code sharing** — the Sender generates a QR code; the Viewer scans it on any device.
- **Real-time polling** — the Viewer checks for new messages every 2 seconds.
- **JSON & human-readable views** — toggle between raw JSON and a formatted human-readable
  layout using the 🟡 Yellow button.
- **Download** — save the latest received payload as a `.json` file.
- **TV remote support** — D-pad navigation, colour-button page cycling, and Channel Up/Down
  page scrolling all work on Samsung TVs.

---

## Remote Controls

| Button | Action |
| :----- | :----- |
| 🔴 Red | Navigate to previous page |
| 🟢 Green | Navigate to next page |
| 🟡 Yellow | Toggle JSON / human-readable view (Viewer) or Text / JSON input mode (Sender) |
| 🔵 Blue | Scroll content back to top |
| Chan ▲ | Page up in content |
| Chan ▼ | Page down in content |

---

## Installation

1. Open **TizenBrew** on your TV.
2. Navigate to the **Module Manager** (the 3rd icon from the left at the top of the
   TizenBrew home screen).
3. Select **Add Module** and enter:
   ```
   axelnanol/brewbridge
   ```
4. Launch **BrewBridge** from the TizenBrew dashboard.

---

## How to Use

### Sender (`/#/send`)

1. Click **Create New Session** — the Worker generates a session ID, write key, and
   read key.
2. A viewer URL and QR code are displayed in a sticky panel on the right. Share the
   URL or QR with the receiver.
3. Paste any JSON into the text area and click **Send JSON**, or use
   **Send Test Message** to try a pre-built payload.

### Viewer (`/#/view?s=…&r=…`)

1. Open the viewer URL (or scan the QR code from the Sender).
2. Messages appear automatically as they arrive (polled every 2 seconds).
3. Press 🟡 Yellow to switch between raw JSON and a human-readable layout.
4. Click **⬇ Download Latest JSON** to save the most recent message as a `.json` file.

---

## `package.json` Summary

```json
{
  "name": "@axelnanol/brewbridge",
  "appName": "BrewBridge",
  "description": "TizenBrew data bridge for sending and viewing structured messages between devices",
  "packageType": "mods",
  "websiteURL": "https://axelnanol.github.io/brewbridge/index.html",
  "main": "main.js",
  "keys": ["ColorF0Red", "ColorF1Green", "ColorF2Yellow", "ColorF3Blue", "ChannelUp", "ChannelDown"]
}
```

---

## Related Pages

- [TizenBrew Module System](../tizenbrew/Modules.md)
- [Welcome to BrewDocs](../brewdocs/README.md)
