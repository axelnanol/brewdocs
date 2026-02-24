# μTube — Overview

**μTube (MuTube)** is an unofficial port of the
[TizenTube Cobalt](../tizentubecobalt/README.md) userscript to Apple TV. It
patches the YouTube IPA to inject TizenTube Cobalt's ad-blocking and
enhancement script into the app.

> **Source:** <https://github.com/Exaphis/mutube>  
> **Author:** Exaphis  
> **Platform:** Apple TV (tvOS) — not a TizenBrew module

---

## Features

- **Ad Blocker** — removes ads from YouTube on Apple TV.
- **SponsorBlock Support** — automatically skips sponsored segments.
- Powered by the same TizenTube Cobalt userscript used on Android / Google TV.

---

## Requirements

- `uv` (used to run `patcher.py` and resolve script dependencies)
- Xcode Command Line Tools (`xcrun` + `clang` with the AppleTV SDK)
- A decrypted YouTube IPA

---

## Building

```bash
git clone https://github.com/Exaphis/mutube
cd mutube
make
```

The output file is `mutube.ipa`.  
Optional printf tracing in stubs:

```bash
make PRINTF_LOGS=1
```

---

## Installation

Sideload the generated `mutube.ipa` onto your Apple TV using a tool such as
[Sideloadly](https://sideloadly.io/). Once installed, open the YouTube app
and a popup in the top-right corner will confirm that TizenTube has loaded.

> **Note:** μTube is **not** a TizenBrew module. It targets tvOS (Apple TV).
> For Samsung Tizen TVs use [TizenTube](../tizentube/README.md) instead.

---

## Related Pages

- [TizenTube Cobalt](../tizentubecobalt/README.md) — the Android / Google TV variant
- [TizenTube Overview](../tizentube/README.md) — the TizenBrew mod for Samsung TVs
