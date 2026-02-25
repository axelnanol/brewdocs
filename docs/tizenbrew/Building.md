# TizenBrew — Building & Resigning

This page covers two advanced scenarios:

- **Resigning** — applying a new Samsung certificate to an existing TizenBrew `.wgt`
  package. You need to do this when your certificate expires, when you change to a
  different Samsung TV, or when your existing certificate does not work on your TV.
- **Rebuilding** — compiling TizenBrew entirely from source code.

Both operations require **Tizen Studio** to be installed on your PC.

> **Note:** Most users will never need this page. The
> [TizenBrew Installer](https://github.com/reisxd/TizenBrewInstaller/releases/latest)
> handles certificates and deployment automatically. Come here only if the installer
> did not work for you or you specifically need to sign or build the package yourself.

---

## Installing Tizen Studio

Tizen Studio is Samsung's free development toolkit. You need it to create certificates
and deploy `.wgt` app packages to your TV.

### Step 1 — Download Tizen Studio

1. Go to the [Tizen Studio download page](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html).
2. Download the **Tizen Studio with IDE** installer for your operating system
   (Windows, macOS, or Linux).

### Step 2 — Run the Installer

1. Run the downloaded installer file.
   - **Windows:** double-click the `.exe`. If Windows asks for permission, click **Yes**.
   - **macOS:** open the `.dmg` and run the installer package inside.
   - **Linux:** make the file executable and run it:
     ```bash
     chmod +x tizen-studio-*-ubuntu-64.bin
     ./tizen-studio-*-ubuntu-64.bin
     ```
2. Accept the licence agreement and follow the prompts. The default installation
   directory is fine for most users.
3. When the main installer finishes, the **Package Manager** window opens automatically.

### Step 3 — Install the TV Extension via Package Manager

The Package Manager lets you add extra tools to Tizen Studio. You need the Samsung TV
extension to work with Smart TVs.

1. In the Package Manager, click the **Extension SDK** tab (at the top).
2. Find **Samsung TV Extensions** in the list and click **Install** next to it.
3. Wait for the download and installation to complete, then close Package Manager.

### Step 4 — Add Tizen Studio to your PATH

Adding Tizen Studio's tools to your system PATH means you can run `tizen` and `sdb`
from any terminal window without typing the full file path every time.

**Windows:**
1. Open **Start** and search for **Environment Variables**, then open
   *Edit the system environment variables*.
2. Click **Environment Variables…**.
3. Under *System variables*, find **Path** and click **Edit**.
4. Click **New** and add these two entries (adjust the drive letter if needed):
   ```
   C:\tizen-studio\tools\ide\bin
   C:\tizen-studio\tools
   ```
5. Click **OK** on all dialogs and **restart your terminal**.

**macOS / Linux:**
Add the following lines to your shell profile (`~/.zshrc`, `~/.bashrc`, etc.):
```bash
export PATH="$HOME/tizen-studio/tools/ide/bin:$PATH"
export PATH="$HOME/tizen-studio/tools:$PATH"
```
Then reload: `source ~/.zshrc` (or your shell's equivalent).

**Verify the setup** by opening a new terminal and running:
```bash
tizen version
sdb version
```
Both commands should print a version number without errors.

---

## Creating a Samsung Certificate

A Samsung certificate ties an app package to your TV's unique identifier (DUID). You
need one to install apps in Developer Mode on Tizen 7 and above.

### Step 1 — Open Certificate Manager

1. Open **Tizen Studio**.
2. In the menu bar, click **Tools → Certificate Manager**.

### Step 2 — Create a New Certificate Profile

1. Click the **+** (Add) button to create a new profile.
2. Select **Samsung** as the certificate type and click **Next**.
3. Choose **Create a new certificate profile** and click **Next**.
4. Enter a name for the profile (e.g. `MyTVCert`) and click **Next**.

### Step 3 — Create the Author Certificate

1. Select **Create a new author certificate** and click **Next**.
2. Fill in your details:
   - **Author name:** any name (e.g. your first name).
   - **Password:** choose a secure password — you will need it again later.
   - **Country, State, City:** fill in as appropriate.
3. Click **Next**.
4. You will be prompted to **sign in to your Samsung account**.
   - If you do not have one, click the link to create a free Samsung account first.
   - Sign in and authorise the certificate request.
5. The author certificate is created. Click **Next**.

### Step 4 — Create the Distributor Certificate

1. Select **Create a new distributor certificate** and click **Next**.
2. The privilege level should be set to **Public** (default). Click **Next**.
3. You need to enter your TV's **DUID** (Device Unique ID):
   - On your Samsung TV, go to **Apps**, type `12345` to open Developer Mode, then
     look for the **DUID** displayed in the popup — or go to
     `Settings → Support → About Smart TV → DUID`.
   - Copy the DUID and paste it into the DUID field in Tizen Studio.
4. Click **Add** and then **Next**.
5. Sign in to your Samsung account again if prompted.
6. Click **Finish**.

Your certificate profile is now active and will be used automatically when you package
or resign a `.wgt` file.

---

## Resigning TizenBrew

Use this when you need to re-sign an existing TizenBrew release with your own Samsung
certificate — for example, when your certificate has expired or you have switched to a
different TV.

### Prerequisites

- Tizen Studio installed and on your PATH (see above).
- A Samsung certificate profile created in Certificate Manager (see above).
- Your TV connected and in Developer Mode.
  See [Connecting the TV and SDK](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html#Connecting-the-TV-and-SDK).
- The TizenBrew `.wgt` file downloaded from the
  [releases page](https://github.com/reisxd/TizenBrew/releases/latest).

### Step 1 — Connect to your TV

Open a terminal and connect to your TV over the network:
```bash
sdb connect <TV_IP>
```
Replace `<TV_IP>` with your TV's IP address (`Settings → Connection → Network → IP Settings`).

Confirm the TV appears in the device list:
```bash
sdb devices
```
You should see a line like `192.168.1.xx:26101  device  UE55MU6105`.

### Step 2 — Re-sign the Widget

Run the following command (replace `<profile name>` with the name of the certificate
profile you created in Certificate Manager):

```bash
tizen package -t wgt -s "<profile name>" -o ./resigned -- path/to/TizenBrewStandalone.wgt
```

This creates a new `.wgt` file in a folder called `resigned/`.

### Step 3 — Install the Resigned Widget

```bash
tizen install -n ./resigned/TizenBrewStandalone.wgt
```

### Step 4 — Final Setup

1. On your TV, set the **Host PC IP** to `127.0.0.1` in the Developer Mode settings
   (same screen where you enabled Developer Mode).
2. Launch **TizenBrew** from the TV's app list.

---

## Rebuilding TizenBrew from Source

This section is for advanced users who want to compile TizenBrew themselves — for
example, to include custom patches or to test a development build.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- Tizen Studio installed and on your PATH (see above)
- A Samsung certificate profile created in Certificate Manager (see above)
- Git installed

### Step 1 — Clone the Repository

```bash
git clone https://github.com/reisxd/TizenBrew.git
cd TizenBrew
```

### Step 2 — Build the NextGen Service

The service is the back-end Node.js process that TizenBrew runs on the TV.

```bash
cd tizenbrew-app/TizenBrew/service-nextgen/service
npm install
npx @vercel/ncc build index.js
cd -
```

> If `@vercel/ncc` is not installed globally, `npx` will download it automatically.

### Step 3 — Build the UI

The UI is the React / front-end application you see on screen.

```bash
cd tizenbrew-app/TizenBrew/tizenbrew-ui
npm install --force
npm run build
cd -
```

> The `--force` flag is needed to bypass some peer-dependency version mismatches in
> the TizenBrew dependency tree. This is expected and safe.

### Step 4 — Connect to your TV

```bash
sdb connect <TV_IP>
sdb devices
```

Your TV should appear in the device list before continuing.

### Step 5 — Package and Deploy

```bash
cd tizenbrew-app/TizenBrew

# Build the web package (excluding development files)
tizen build-web -e ".*" -e "node_modules/*" -e "package*.json" -e "yarn.lock"

# Sign and package (replace <profile name> with your certificate profile name)
tizen package -t wgt -s "<profile name>" -o ./release -- .buildResult

# Install on your TV
tizen install -n ./release/TizenBrewStandalone.wgt
```

### Step 6 — Final Setup

1. Set the **Host PC IP** to `127.0.0.1` in Developer Mode settings on your TV.
2. Launch **TizenBrew** from the TV's app list.

---

## Troubleshooting Common Issues

### "author-signature.xml not found" or signing error

Your certificate profile may not be active. Open **Tizen Studio → Tools → Certificate
Manager**, ensure your profile has a tick/checkmark next to it (indicating it is the
active profile), and try again.

### "device not found" or `sdb devices` shows nothing

- Make sure Developer Mode is enabled on the TV.
- Check that your PC and TV are on the same network.
- Try the connection again: `sdb connect <TV_IP>`.
- Make sure your firewall is not blocking port `26101`.

### Tizen 7+ certificate requirement

On Tizen 7 and above, Samsung requires a Samsung-account-backed certificate. The
free Samsung developer account at [developer.samsung.com](https://developer.samsung.com)
is sufficient. Follow Steps 3 and 4 in *Creating a Samsung Certificate* above and
make sure you enter your TV's DUID.

---

## Related Pages

- [Installation](Installation.md)
- [TizenBrew Module System](Modules.md)
