# TFlix — Overview

**TFlix** is a TizenBrew mod that transforms [Cineby.gd](https://www.cineby.gd/) into a
Netflix-like, TV-remote-friendly streaming experience on Samsung Smart TVs.

> **Source:** <https://github.com/Zyrecx/TFlix>  
> **Author:** Zyrecx  
> **Module type:** `mods` (site modification)  
> **Target site:** <https://www.cineby.gd/>

---

## Features

- **TV-remote navigation** — full D-pad support optimised for remote-control operation.
- **Enhanced visual focus** — clear indicators showing the selected element.
- **Streamlined video playback** — media keys control playback.
- **Smart navigation** — natural focus movement between elements with arrow keys.
- **Automatic scrolling** — page scrolls when focus moves off-screen.
- **Visual enhancements** — focus highlighting and scaling for better visibility.

---

## Installation

### Via npm (Recommended)

1. Open **TizenBrew** on your TV.
2. Select **Add Module** and enter:
   ```
   @zyrecx/tflix
   ```
3. Launch **TFlix** from the TizenBrew dashboard.

### Manual

1. Clone the repository and build:
   ```bash
   git clone https://github.com/Zyrecx/TFlix.git
   ./build.bat
   ```
2. Copy the built module to your TizenBrew modules directory.

---

## Project Structure

```
mods/     JavaScript modules for enhancing Cineby.gd
service/  Service code for TV functionality
dist/     Built module files
```

---

## Related Pages

- [TizenBrew Module System](../tizenbrew/Modules.md)
- [TizenTube Overview](../tizentube/README.md)
