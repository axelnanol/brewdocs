# 📺 BrewDocs

**A comprehensive wiki for all things TizenBrew related.**

BrewDocs is both a markdown-based reference wiki and a live TizenBrew module — open it
directly on your Samsung TV to browse the documentation from your couch.

---

## 📖 Documentation

### TizenBrew

| Page | Description |
| :--- | :---------- |
| [Overview](docs/tizenbrew/README.md) | What TizenBrew is and how it works |
| [Installation](docs/tizenbrew/Installation.md) | Installing TizenBrew on your Samsung TV |
| [Module System](docs/tizenbrew/Modules.md) | How to install and create TizenBrew modules |
| [Building & Resigning](docs/tizenbrew/Building.md) | Rebuilding and resigning the TizenBrew package |

### TizenBrew Mods

| Page | Description |
| :--- | :---------- |
| [TizenTube](docs/tizentube/README.md) | Ad-free, sponsor-free YouTube for Samsung TVs |
| [TizenPortal](docs/tizenportal/README.md) | Universal browser shell for Tizen OS |
| [TizenPortal Usage](docs/tizenportal/Usage.md) | Day-to-day usage and remote-control reference |
| [TizenBrowse](docs/tizenbrowse/README.md) | Ad-free browsing mod for Samsung TVs |
| [TFlix](docs/tflix/README.md) | Netflix-like mod for Cineby.gd on Samsung TVs |
| [HyperTizen](docs/hypertizen/README.md) | Hyperion / HyperHDR Ambilight capturer (Tizen 6.5+) |
| [TwitchTB](docs/twitchtb/README.md) | Ad-free Twitch mod with 7TV emotes for Samsung TVs |
| [PrimeVideoTB](docs/primevideotb/README.md) | Ad-blocking and enhanced Amazon Prime Video for Samsung TVs |
| [ArtGalleryTB](docs/artgallerytb/README.md) | Multi-museum art slideshow for Samsung TVs |
| [BrewBridge](docs/brewbridge/README.md) | Real-time JSON data-transfer bridge for TizenBrew |

### Media & Apps

| Page | Description |
| :--- | :---------- |
| [Jellyfin on Tizen](docs/jellyfin/README.md) | Free open-source media server |
| [Moonlight on Tizen](docs/moonlight/README.md) | NVIDIA GameStream / Sunshine client |

### Related & Other Projects

| Page | Description |
| :--- | :---------- |
| [TizenTube Cobalt](docs/tizentubecobalt/README.md) | TizenTube for Android / Google TV |
| [Tizen Community Packages & Other Projects](docs/other-projects/README.md) | Community bundles, failed projects |

### Support

| Page | Description |
| :--- | :---------- |
| [FAQ](docs/FAQ.md) | Frequently asked questions |
| [Troubleshooting](docs/Troubleshooting.md) | Step-by-step fixes for common errors |

---

BrewDocs is packaged as a TizenBrew **mods** module. Add it to TizenBrew with:

```
axelnanol/brewdocs
```

TizenBrew will open `dist/brewdocs.html` — a TV-friendly wiki viewer with full
D-pad / remote-control navigation powered by spatial navigation.

---

## 🔗 Links

- [TizenBrew](https://github.com/reisxd/TizenBrew)
- [TizenTube](https://github.com/reisxd/TizenTube)
- [TizenTube Cobalt](https://github.com/reisxd/TizenTubeCobalt)
- [TizenPortal](https://github.com/axelnanol/tizenportal)
- [TizenBrowse](https://github.com/ghostfxck/TizenBrowse)
- [TFlix](https://github.com/Zyrecx/TFlix)
- [HyperTizen](https://github.com/reisxd/HyperTizen)
- [Moonlight for Tizen](https://github.com/OneLiberty/moonlight-chrome-tizen)
- [Jellyfin for TizenBrew](https://github.com/GlenLowland/jellyfin-tizen-npm-publish)
- [Tizen Community Packages](https://github.com/PatrickSt1991/tizen-community-packages)
- [TizenBrew Installer](https://github.com/reisxd/TizenBrewInstaller)
- [PrimeVideoTB](https://github.com/dchwilk/PrimeVideoTB)
- [ArtGalleryTB](https://github.com/dchwilk/ArtGalleryTB)
- [BrewBridge](https://github.com/axelnanol/brewbridge)

---

## 🔨 Contributing

The `docs/` directory is the single source of truth for all wiki content.
**Do not edit `dist/brewdocs.js` by hand** — it is generated automatically.

### Adding or updating a page

1. Edit (or add) a Markdown file under `docs/`.
2. If adding a new page, register it in `docs/manifest.json` with its `id`, `label`, `section`, and `file` path.
3. Regenerate the site JavaScript:
   ```bash
   npm install  # first time only
   npm run build
   ```
4. Commit both the updated `docs/` files and the regenerated `dist/brewdocs.js`.

---

## 📜 License

MIT
