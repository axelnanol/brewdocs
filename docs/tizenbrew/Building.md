# TizenBrew — Building & Resigning

This page covers two advanced scenarios:

- **Resigning** — applying a new Samsung certificate to an existing TizenBrew `.wgt`
  package (needed when your certificate expires or you switch TVs).
- **Rebuilding** — compiling TizenBrew from source.

Both require **Tizen Studio** and `tizen`/`sdb` on your `PATH`.

> Install Tizen Studio:
> <https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html>
>
> `tizen` is at `C:\tizen-studio\tools\ide\bin` (Windows) or
> `~/tizen-studio/tools/ide/bin` (Linux/macOS).  
> `sdb` is at `C:\tizen-studio\tools` (Windows) or `~/tizen-studio/tools` (Linux/macOS).

---

## Resigning TizenBrew

Use this if you need to re-sign an existing release with your own Samsung certificate.

### Prerequisites

1. Tizen Studio installed.
2. A **Samsung certificate** — create one via Tizen Studio:
   `Tools > Certificate Manager`.
   See [Creating Certificates](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/creating-certificates.html).
3. Your TV connected and in Developer Mode.
   See [Connecting the TV and SDK](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html#Connecting-the-TV-and-SDK).
4. The TizenBrew `.wgt` file from the
   [releases page](https://github.com/reisxd/TizenBrew/releases/latest).

### Steps

```bash
# 1. Re-sign the widget (replace <profile name> with your certificate profile)
tizen package -t wgt -s <profile name> -o ./resigned -- path/to/TizenBrewStandalone.wgt

# 2. Install the resigned widget
tizen install -n ./resigned/TizenBrewStandalone.wgt
```

3. Set the **Host PC IP** to `127.0.0.1` in the TV's Developer Mode settings.
4. Launch **TizenBrew** from the TV.

---

## Rebuilding TizenBrew from Source

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- Tizen Studio (see above)
- A Samsung certificate (see above)

### Steps

```bash
# 1. Clone or download the source
git clone https://github.com/reisxd/TizenBrew.git
cd TizenBrew
```

```bash
# 2. Build the service (NextGen backend)
cd tizenbrew-app/TizenBrew/service-nextgen/service
npm install
npx @vercel/ncc build index.js
cd -
```

```bash
# 3. Build the UI
cd tizenbrew-app/TizenBrew/tizenbrew-ui
npm install --force
npm run build
cd -
```

```bash
# 4. Connect to your TV (replace <TV IP> with your TV's IP address)
sdb connect <TV IP>
```

```bash
# 5. Build, package, and deploy
cd tizenbrew-app/TizenBrew
tizen build-web -e ".*" -e "node_modules/*" -e "package*.json" -e "yarn.lock"
tizen package -t wgt -o ./release -- .buildResult
tizen install -n ./release/TizenBrewStandalone.wgt
```

6. Set the **Host PC IP** to `127.0.0.1` and launch TizenBrew.
