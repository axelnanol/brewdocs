# ArtGalleryTB — Overview

**ArtGalleryTB** is a TizenBrew app module inspired by Samsung's *The Frame* art
mode — instead of paid Samsung Art Store content, it displays artworks sourced
from free public museum APIs.

| Source | Author | Module type |
| :----- | :----- | :---------- |
| [dchwilk/ArtGalleryTB](https://github.com/dchwilk/ArtGalleryTB) | [dchwilk](https://github.com/dchwilk) | `app` |

---

## Features

- **Multiple museum sources** — artworks from:
  - [Art Institute of Chicago](https://www.artic.edu/open-access/public-api)
  - [Metropolitan Museum of Art](https://metmuseum.github.io/)
  - [Rijksmuseum](https://data.rijksmuseum.nl/) *(API key required)*
  - [Cleveland Museum of Art](https://openaccess-api.clevelandart.org/)
- **Advanced filtering** by art type, historical period, department, and
  properties (public domain, high resolution, with images).
- **Passepartout & frame styles** — multiple styles and colors, similar to
  Samsung's presentation.
- **Randomized slideshow** — random ordering with adjustable display time.
- **Artwork info overlay** — toggle detailed metadata (title, artist, origin,
  materials, source tags).

---

## Remote Controls

| Action | Remote / Keyboard |
| :----- | :---------------- |
| Next artwork | `→` |
| Previous artwork | `←` |
| Toggle artwork info | `↑` |
| Hide info | `↓` |
| Change passepartout color | `PLAY` / Green |
| Increase slideshow time | `Chan UP` / Yellow |
| Decrease slideshow time | `Chan DOWN` / Blue |
| Change passepartout style | `OK` / Enter |
| Open / close menu | `BACK` / Red |
| Reload with new random order | `-` |

---

## Installation

1. Open **TizenBrew** on your TV.
2. Navigate to the **Module Manager** (3rd icon from the left at the top of the
   TizenBrew home screen).
3. Select **Add Module** and enter:
   ```
   dchwilk/ArtGalleryTB
   ```
4. Launch **ArtGalleryTB** from the TizenBrew dashboard.

---

## API Keys

Some museum sources require a free API key:

- **Rijksmuseum** — obtain a free key at <https://data.rijksmuseum.nl/>
- **Cleveland Museum of Art** — some features may require registration.

---

## `package.json` Summary

```json
{
  "name": "@dchwilk/artgallerytb",
  "appName": "ArtGalleryTB",
  "packageType": "app",
  "appPath": "app/index.html",
  "serviceFile": "dist/service.js",
  "keys": ["MediaPlayPause", "MediaPlay", "MediaPause", "ChannelUp", "ChannelDown", ...]
}
```

---

## Related Pages

- [TizenBrew Module System](../tizenbrew/Modules.md)
- [TizenBrew Overview](../tizenbrew/README.md)
