/**
 * BrewDocs — TizenBrew Wiki Viewer
 *
 * Spatial navigation engine adapted from TizenPortal
 * https://github.com/axelnanol/tizenportal/tree/main/navigation
 *
 * TizenPortal navigation sources:
 *   geometry.js    — geometric distance helpers
 *   helpers.js     — focusable-element utilities
 *   init.js        — navigation mode initialiser
 *   spatial-navigation.js — core directional-focus algorithm
 */

(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────
  // 1. WIKI CONTENT
  // Each entry: { id, label, section, html }
  // ─────────────────────────────────────────────────────────────
  var pages = [
    {
      id: 'home',
      label: 'Home',
      section: 'BrewDocs',
      html: [
        '<h1>📺 BrewDocs</h1>',
        '<p>A comprehensive wiki for all things TizenBrew related.</p>',
        '<p>BrewDocs is both a markdown-based reference wiki and a live TizenBrew module.',
        'Navigate with the D-pad and press <kbd>Enter</kbd> to open a page.</p>',
        '<h2>Contents</h2>',
        '<ul>',
        '  <li><strong>TizenBrew</strong> — the modular platform</li>',
        '  <li><strong>TizenTube</strong> — ad-free YouTube for Samsung TVs</li>',
        '  <li><strong>TizenPortal</strong> — universal browser shell</li>',
        '  <li><strong>More Mods</strong> — TizenBrowse, TFlix, TizenTube Cobalt</li>',
        '  <li><strong>Media &amp; Apps</strong> — Jellyfin, Moonlight, Community Packages</li>',
        '</ul>',
        '<h2>Links</h2>',
        '<ul>',
        '  <li><a href="https://github.com/reisxd/TizenBrew" class="ext-link">TizenBrew on GitHub</a></li>',
        '  <li><a href="https://github.com/reisxd/TizenTube" class="ext-link">TizenTube on GitHub</a></li>',
        '  <li><a href="https://github.com/axelnanol/tizenportal" class="ext-link">TizenPortal on GitHub</a></li>',
        '  <li><a href="https://github.com/ghostfxck/TizenBrowse" class="ext-link">TizenBrowse on GitHub</a></li>',
        '  <li><a href="https://github.com/Zyrecx/TFlix" class="ext-link">TFlix on GitHub</a></li>',
        '  <li><a href="https://github.com/reisxd/TizenTubeCobalt" class="ext-link">TizenTube Cobalt on GitHub</a></li>',
        '  <li><a href="https://github.com/OneLiberty/moonlight-chrome-tizen" class="ext-link">Moonlight for Tizen on GitHub</a></li>',
        '  <li><a href="https://github.com/GlenLowland/jellyfin-tizen-npm-publish" class="ext-link">Jellyfin for TizenBrew on GitHub</a></li>',
        '  <li><a href="https://github.com/PatrickSt1991/tizen-community-packages" class="ext-link">Tizen Community Packages on GitHub</a></li>',
        '</ul>',
      ].join('\n'),
    },

    // ── TizenBrew ──────────────────────────────────────────────
    {
      id: 'tb-overview',
      label: 'Overview',
      section: 'TizenBrew',
      html: [
        '<h1>TizenBrew — Overview</h1>',
        '<p><strong>TizenBrew</strong> is a modular platform for Samsung Smart TVs running Tizen OS.',
        'It lets you install modified websites (mods) and standalone web apps without',
        'running Tizen Studio every time you want to add or update a module.</p>',
        '<h2>How It Works</h2>',
        '<ol>',
        '  <li>TizenBrew reads the <code>package.json</code> of each installed module from a GitHub tag.</li>',
        '  <li>For <code>app</code> modules it opens a standalone web page.</li>',
        '  <li>For <code>mods</code> modules it navigates to the target URL and injects a user-script.</li>',
        '  <li>Registered remote-control keys are forwarded to the running module.</li>',
        '</ol>',
        '<h2>Module Types</h2>',
        '<table>',
        '  <tr><th>Type</th><th>Description</th></tr>',
        '  <tr><td><code>app</code></td><td>Standalone web page served from the module\'s own files</td></tr>',
        '  <tr><td><code>mods</code></td><td>JavaScript injected into an existing website</td></tr>',
        '</table>',
        '<h2>Key Features</h2>',
        '<ul>',
        '  <li>No Tizen Studio per update — install modules via GitHub repo name</li>',
        '  <li>Remote-control key registration via <code>keys</code> array in package.json</li>',
        '  <li>Optional Node.js service file support</li>',
        '  <li>Works on Tizen 3.0+ (Samsung TVs from 2017 onwards)</li>',
        '</ul>',
      ].join('\n'),
    },
    {
      id: 'tb-install',
      label: 'Installation',
      section: 'TizenBrew',
      html: [
        '<h1>TizenBrew — Installation</h1>',
        '<p>Minimum requirement: Samsung TV with Tizen 3.0 or newer (2017 model or later).</p>',
        '<h2>Method 1 — TizenBrew Installer (Recommended)</h2>',
        '<h3>Step 1 — Enable Developer Mode on your TV</h3>',
        '<ol>',
        '  <li>Open <strong>Apps</strong> on your Samsung TV.</li>',
        '  <li>Type <code>12345</code> on your remote.</li>',
        '  <li>In the Developer Mode popup, toggle <strong>Developer mode</strong> to <strong>On</strong>.',
        '      Enter your PC\'s local IP under <strong>Host PC IP</strong>.</li>',
        '  <li>Press <strong>OK</strong> and reboot the TV.</li>',
        '</ol>',
        '<h3>Step 2 — Run TizenBrew Installer on your PC</h3>',
        '<ol>',
        '  <li>Download the <a href="https://github.com/reisxd/TizenBrewInstaller/releases/latest" class="ext-link">latest installer</a>.',
        '  </li>',
        '  <li>Run the executable. On macOS/Linux: <code>chmod +x tizenbrew-installer-*</code></li>',
        '</ol>',
        '<h3>Step 3 — Install TizenBrew</h3>',
        '<ol>',
        '  <li>Click <strong>Install TizenBrew</strong> in the installer.</li>',
        '  <li>On Tizen 7+ you will be prompted to sign in to your Samsung account.</li>',
        '</ol>',
        '<h2>Method 2 — Command Line</h2>',
        '<ol>',
        '  <li>Install <a href="https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html" class="ext-link">Tizen Studio</a>.</li>',
        '  <li>Enable Developer Mode (Step 1 above).</li>',
        '  <li>Download the <a href="https://github.com/reisxd/TizenBrew/releases" class="ext-link">latest .wgt</a>.</li>',
        '  <li>Run: <code>sdb devices</code> to confirm TV is connected.</li>',
        '  <li>Run: <code>tizen install -n TizenBrewStandalone.wgt</code></li>',
        '  <li>Set Host PC IP to <code>127.0.0.1</code> and launch TizenBrew.</li>',
        '</ol>',
      ].join('\n'),
    },
    {
      id: 'tb-modules',
      label: 'Module System',
      section: 'TizenBrew',
      html: [
        '<h1>TizenBrew — Module System</h1>',
        '<p>Each TizenBrew module is an npm package on GitHub with a special',
        '<code>package.json</code> that describes its type and entry points.</p>',
        '<h2>Installing a Module</h2>',
        '<ol>',
        '  <li>In the TizenBrew launcher, select <strong>Add Module</strong>.</li>',
        '  <li>Enter the GitHub repo in <code>user/repo</code> format (e.g. <code>reisxd/tizentube</code>).</li>',
        '  <li>TizenBrew fetches the latest release tag, reads <code>package.json</code>, and registers the module.</li>',
        '</ol>',
        '<h2>App Module (<code>packageType: "app"</code>)</h2>',
        '<p>A standalone web page. TizenBrew opens <code>appPath</code> in a full-screen browser.</p>',
        '<pre><code>{\n  "packageType": "app",\n  "appName": "My App",\n  "appPath": "dist/index.html",\n  "keys": []\n}</code></pre>',
        '<h2>Mods Module (<code>packageType: "mods"</code>)</h2>',
        '<p>Injects a script into an existing website.</p>',
        '<pre><code>{\n  "packageType": "mods",\n  "appName": "My Mod",\n  "websiteURL": "https://example.com",\n  "main": "dist/userScript.js",\n  "keys": ["MediaPlayPause"]\n}</code></pre>',
        '<h2>Available Remote-Control Keys</h2>',
        '<p><strong>Media:</strong> MediaPlayPause, MediaPlay, MediaPause, MediaStop,',
        'MediaFastForward, MediaRewind, MediaTrackNext, MediaTrackPrevious</p>',
        '<p><strong>Colour:</strong> ColorF0Red, ColorF1Green, ColorF2Yellow, ColorF3Blue</p>',
        '<h2>Real-World Examples</h2>',
        '<table>',
        '  <tr><th>Module</th><th>Type</th><th>Repo</th></tr>',
        '  <tr><td>TizenTube</td><td>mods</td><td>reisxd/tizentube</td></tr>',
        '  <tr><td>TizenPortal</td><td>mods</td><td>axelnanol/tizenportal</td></tr>',
        '  <tr><td>BrewDocs</td><td>app</td><td>axelnanol/brewdocs</td></tr>',
        '</table>',
      ].join('\n'),
    },
    {
      id: 'tb-building',
      label: 'Building & Resigning',
      section: 'TizenBrew',
      html: [
        '<h1>TizenBrew — Building &amp; Resigning</h1>',
        '<h2>Resigning an Existing Release</h2>',
        '<p>Use this when your Samsung certificate expires or you switch TVs.</p>',
        '<ol>',
        '  <li>Install Tizen Studio and create a Samsung certificate via <strong>Tools &gt; Certificate Manager</strong>.</li>',
        '  <li>Download the <a href="https://github.com/reisxd/TizenBrew/releases/latest" class="ext-link">latest .wgt</a>.</li>',
        '  <li>Re-sign:<br><code>tizen package -t wgt -s &lt;profile&gt; -o ./resigned -- TizenBrewStandalone.wgt</code></li>',
        '  <li>Install:<br><code>tizen install -n ./resigned/TizenBrewStandalone.wgt</code></li>',
        '  <li>Set Host PC IP to <code>127.0.0.1</code> and launch TizenBrew.</li>',
        '</ol>',
        '<h2>Rebuilding from Source</h2>',
        '<p>Requires Node.js and Tizen Studio.</p>',
        '<ol>',
        '  <li><code>git clone https://github.com/reisxd/TizenBrew.git</code></li>',
        '  <li>Build the service:<br>',
        '      <code>cd service-nextgen/service &amp;&amp; npm install &amp;&amp; npx @vercel/ncc build index.js</code></li>',
        '  <li>Build the UI:<br>',
        '      <code>cd tizenbrew-ui &amp;&amp; npm install --force &amp;&amp; npm run build</code></li>',
        '  <li>Connect TV: <code>sdb connect &lt;TV IP&gt;</code></li>',
        '  <li>Build and deploy:<br>',
        '      <code>tizen build-web -e ".*" -e "node_modules/*" -e "package*.json"</code><br>',
        '      <code>tizen package -t wgt -o ./release -- .buildResult</code><br>',
        '      <code>tizen install -n ./release/TizenBrewStandalone.wgt</code></li>',
        '</ol>',
      ].join('\n'),
    },

    // ── TizenTube ──────────────────────────────────────────────
    {
      id: 'tt-overview',
      label: 'Overview',
      section: 'TizenTube',
      html: [
        '<h1>TizenTube — Overview</h1>',
        '<p><strong>TizenTube</strong> is the original and most widely used TizenBrew mod.',
        'It gives you an ad-free, sponsor-free YouTube experience on Samsung Smart TVs.</p>',
        '<p>Author: Reis Can &nbsp;|&nbsp; Type: <code>mods</code> &nbsp;|&nbsp;',
        '<a href="https://github.com/reisxd/TizenTube" class="ext-link">GitHub</a></p>',
        '<h2>Features</h2>',
        '<ul>',
        '  <li><strong>No ads</strong> — blocks all YouTube advertisements.</li>',
        '  <li><strong>No sponsors</strong> — SponsorBlock integration skips sponsored segments.</li>',
        '  <li><strong>Full media-key support</strong> — play/pause, stop, fast-forward, rewind, track skip.</li>',
        '  <li><strong>Lightweight</strong> — a single injected script; no background service required.</li>',
        '</ul>',
        '<h2>Installation</h2>',
        '<ol>',
        '  <li>Open TizenBrew on your TV.</li>',
        '  <li>Select <strong>Add Module</strong> and enter: <code>reisxd/tizentube</code></li>',
        '  <li>Launch TizenTube from the TizenBrew dashboard.</li>',
        '</ol>',
        '<h2>package.json Summary</h2>',
        '<pre><code>{\n  "packageType": "mods",\n  "websiteURL": "https://youtube.com/tv?...",\n  "main": "dist/userScript.js",\n  "serviceFile": "dist/service.js",\n  "keys": ["MediaPlayPause", "MediaPlay", ...]\n}</code></pre>',
      ].join('\n'),
    },

    // ── TizenPortal ────────────────────────────────────────────
    {
      id: 'tp-overview',
      label: 'Overview',
      section: 'TizenPortal',
      html: [
        '<h1>TizenPortal — Overview</h1>',
        '<p><strong>TizenPortal</strong> is a universal browser shell for Samsung Smart TVs.',
        'It provides a TV-friendly launcher for any website and automatically injects',
        'compatibility fixes (bundles) for each site you add.</p>',
        '<p>Author: Alex Nolan &nbsp;|&nbsp; Type: <code>mods</code> &nbsp;|&nbsp;',
        'Compatibility: Tizen 3.0 – 6.5 &nbsp;|&nbsp;',
        '<a href="https://github.com/axelnanol/tizenportal" class="ext-link">GitHub</a></p>',
        '<h2>Features</h2>',
        '<ul>',
        '  <li><strong>Portal Launcher</strong> — grid layout for TV remote navigation, site editor, themes.</li>',
        '  <li><strong>Site Enhancement</strong> — bundle system applies per-site CSS/JS fixes automatically.</li>',
        '  <li><strong>Spatial Navigation</strong> — D-pad focus engine works on any page.</li>',
        '  <li><strong>Colour Button Actions</strong> — address bar, mouse mode, preferences, diagnostics.</li>',
        '</ul>',
        '<h2>Installation</h2>',
        '<ol>',
        '  <li>Open TizenBrew on your TV.</li>',
        '  <li>Select <strong>Add Module</strong> and enter: <code>axelnanol/tizenportal</code></li>',
        '  <li>Launch TizenPortal from the TizenBrew dashboard.</li>',
        '</ol>',
        '<h2>Architecture</h2>',
        '<p>A single runtime (<code>dist/tizenportal.js</code>) runs on every page.',
        'On the portal page it renders the site-card grid.',
        'On target sites it applies the selected bundle and provides the overlay UI.</p>',
        '<h2>Colour Button Reference</h2>',
        '<table>',
        '  <tr><th>Button</th><th>Short Press</th><th>Long Press</th></tr>',
        '  <tr><td>🔴 Red</td><td>Address bar</td><td>Reload page</td></tr>',
        '  <tr><td>🟢 Green</td><td>Mouse mode</td><td>Edit card / Focus highlight</td></tr>',
        '  <tr><td>🟡 Yellow</td><td>Preferences / Return to portal</td><td>Add site (portal)</td></tr>',
        '  <tr><td>🔵 Blue</td><td>Diagnostics</td><td>Safe mode</td></tr>',
        '</table>',
      ].join('\n'),
    },
    {
      id: 'tp-usage',
      label: 'Usage Guide',
      section: 'TizenPortal',
      html: [
        '<h1>TizenPortal — Usage Guide</h1>',
        '<h2>Adding Sites</h2>',
        '<ol>',
        '  <li>Focus the <strong>"+"</strong> card and press <strong>Enter</strong>.</li>',
        '  <li>Fill in Name, URL, Bundle, and optional Icon.</li>',
        '  <li>Press <strong>Save</strong>.</li>',
        '</ol>',
        '<h2>Opening a Site</h2>',
        '<ol>',
        '  <li>Focus the site card and press <strong>Enter</strong>.</li>',
        '  <li>TizenPortal navigates to the URL and applies the bundle.</li>',
        '  <li>Use the D-pad to navigate the page.</li>',
        '</ol>',
        '<h2>Address Bar (🔴 Red)</h2>',
        '<table>',
        '  <tr><th>Control</th><th>Action</th></tr>',
        '  <tr><td>⎈</td><td>Return to portal</td></tr>',
        '  <tr><td>🏠 Home</td><td>Site home page</td></tr>',
        '  <tr><td>← / →</td><td>Back / Forward</td></tr>',
        '  <tr><td>↻</td><td>Reload</td></tr>',
        '  <tr><td>URL field</td><td>Press Enter to edit, type address, press Go</td></tr>',
        '</table>',
        '<h2>Mouse Mode (🟢 Green)</h2>',
        '<p>Toggles virtual cursor. D-pad moves the cursor; Enter clicks. Press 🟢 again to exit.</p>',
        '<h2>Preferences (🟡 Yellow on the Portal)</h2>',
        '<table>',
        '  <tr><th>Setting</th><th>Description</th></tr>',
        '  <tr><td>Theme</td><td>Light / Dark / Automatic / Portal / Custom</td></tr>',
        '  <tr><td>Debug HUD</td><td>Diagnostic overlay position</td></tr>',
        '  <tr><td>Viewport lock</td><td>Prevent resize when OSK appears</td></tr>',
        '  <tr><td>Focus outline</td><td>Style of the focus ring</td></tr>',
        '  <tr><td>Text input protection</td><td>Delays OSK until Enter is pressed</td></tr>',
        '</table>',
        '<h2>Navigation Modes</h2>',
        '<table>',
        '  <tr><th>Mode</th><th>Best For</th></tr>',
        '  <tr><td><code>geometric</code></td><td>Perfect grids and aligned layouts</td></tr>',
        '  <tr><td><code>directional</code></td><td>Complex / irregular layouts (cone-based)</td></tr>',
        '  <tr><td><code>polyfill</code></td><td>Legacy compatibility</td></tr>',
        '</table>',
      ].join('\n'),
    },

    // ── TizenBrowse ────────────────────────────────────────────
    {
      id: 'tbrowse-overview',
      label: 'TizenBrowse',
      section: 'More Mods',
      html: [
        '<h1>TizenBrowse — Overview</h1>',
        '<p><strong>TizenBrowse</strong> is a TizenBrew mod that turns Google / the Tizen browser',
        'into an ad-free browsing experience on Samsung Smart TVs.</p>',
        '<p>Author: ghostfxck &nbsp;|&nbsp; Type: <code>mods</code> &nbsp;|&nbsp;',
        '<a href="https://github.com/ghostfxck/TizenBrowse" class="ext-link">GitHub</a></p>',
        '<h2>Features</h2>',
        '<ul>',
        '  <li><strong>Ad-free browsing</strong> — removes advertisements from the browser.</li>',
        '  <li><strong>Media-key support</strong> — play/pause, stop, fast-forward, rewind.</li>',
        '  <li><strong>Service integration</strong> — ships both a user-script and a Node.js service.</li>',
        '</ul>',
        '<h2>Installation</h2>',
        '<ol>',
        '  <li>Open TizenBrew on your TV.</li>',
        '  <li>Select <strong>Add Module</strong> and enter: <code>ghostfxck/TizenBrowse</code></li>',
        '  <li>Launch TizenBrowse from the TizenBrew dashboard.</li>',
        '</ol>',
      ].join('\n'),
    },

    // ── TFlix ──────────────────────────────────────────────────
    {
      id: 'tflix-overview',
      label: 'TFlix',
      section: 'More Mods',
      html: [
        '<h1>TFlix — Overview</h1>',
        '<p><strong>TFlix</strong> is a TizenBrew mod that transforms',
        '<a href="https://www.cineby.gd/" class="ext-link">Cineby.gd</a> into a Netflix-like,',
        'TV-remote-friendly streaming experience on Samsung Smart TVs.</p>',
        '<p>Author: Zyrecx &nbsp;|&nbsp; Type: <code>mods</code> &nbsp;|&nbsp;',
        '<a href="https://github.com/Zyrecx/TFlix" class="ext-link">GitHub</a></p>',
        '<h2>Features</h2>',
        '<ul>',
        '  <li><strong>TV-remote navigation</strong> — full D-pad support.</li>',
        '  <li><strong>Enhanced visual focus</strong> — clear indicators on selected elements.</li>',
        '  <li><strong>Media-key playback control</strong> — play, pause, stop.</li>',
        '  <li><strong>Smart navigation</strong> — natural focus movement with arrow keys.</li>',
        '  <li><strong>Automatic scrolling</strong> — page scrolls when focus moves off-screen.</li>',
        '</ul>',
        '<h2>Installation</h2>',
        '<ol>',
        '  <li>Open TizenBrew on your TV.</li>',
        '  <li>Select <strong>Add Module</strong> and enter: <code>@zyrecx/tflix</code></li>',
        '  <li>Launch TFlix from the TizenBrew dashboard.</li>',
        '</ol>',
      ].join('\n'),
    },

    // ── TizenTube Cobalt ───────────────────────────────────────
    {
      id: 'ttcobalt-overview',
      label: 'TizenTube Cobalt',
      section: 'More Mods',
      html: [
        '<h1>TizenTube Cobalt — Overview</h1>',
        '<p><strong>TizenTube Cobalt</strong> is an Android app based on',
        '<a href="https://cobalt.dev" class="ext-link">Cobalt</a> that brings ad-free,',
        'sponsor-free streaming to Android / Google TV devices.</p>',
        '<p>Author: Reis Can &nbsp;|&nbsp; Platform: Android / Google TV',
        '(not a TizenBrew module) &nbsp;|&nbsp;',
        '<a href="https://github.com/reisxd/TizenTubeCobalt" class="ext-link">GitHub</a></p>',
        '<p>AFTVNews code: <code>6366500</code></p>',
        '<h2>Features</h2>',
        '<ul>',
        '  <li><strong>Ad Blocker</strong></li>',
        '  <li><strong>SponsorBlock</strong> — auto-skip sponsored segments.</li>',
        '  <li><strong>Video Speed Control</strong></li>',
        '  <li><strong>DeArrow</strong> — removes clickbait thumbnails and titles.</li>',
        '</ul>',
        '<h2>Installation</h2>',
        '<ol>',
        '  <li>Download the <a href="https://github.com/reisxd/TizenTubeCobalt/releases/latest" class="ext-link">latest release</a>.</li>',
        '  <li>Sideload or install on your Android / Google TV device.</li>',
        '</ol>',
        '<p><strong>Note:</strong> For Samsung Tizen TVs use',
        '<a href="#tt-overview" class="int-link">TizenTube</a> instead.</p>',
      ].join('\n'),
    },

    // ── Jellyfin ───────────────────────────────────────────────
    {
      id: 'jf-overview',
      label: 'Jellyfin',
      section: 'Media & Apps',
      html: [
        '<h1>Jellyfin on Tizen — Overview</h1>',
        '<p><a href="https://jellyfin.org/" class="ext-link">Jellyfin</a> is a free,',
        'open-source media server. It can be installed on Samsung Smart TVs as a TizenBrew',
        'module or via dedicated installer tools.</p>',
        '<h2>Method 1 — TizenBrew Module (Recommended)</h2>',
        '<p>Source: <a href="https://github.com/GlenLowland/jellyfin-tizen-npm-publish" class="ext-link">GlenLowland/jellyfin-tizen-npm-publish</a></p>',
        '<ol>',
        '  <li>Open TizenBrew on your TV.</li>',
        '  <li>Press GREEN or select <strong>Add Module</strong> and enter: <code>@glenlowland/jellyfin-tizen</code></li>',
        '  <li>Press GREEN again to open the modules list.</li>',
        '  <li>Launch Jellyfin Tizen. (Requires TizenBrew v1.3.0+)</li>',
        '</ol>',
        '<h2>Method 2 — Samsung-Jellyfin-Installer</h2>',
        '<p>Source: <a href="https://github.com/Jellyfin2Samsung/Samsung-Jellyfin-Installer" class="ext-link">Jellyfin2Samsung/Samsung-Jellyfin-Installer</a></p>',
        '<ol>',
        '  <li>Download and open the installer on your PC.</li>',
        '  <li>Sign in to your Samsung account.</li>',
        '  <li>Go to <strong>Release → Tizen Community</strong> and select the desired .wgt.</li>',
        '  <li>Select your TV and click <strong>Download and Install</strong>.</li>',
        '</ol>',
        '<h2>Method 3 — Docker</h2>',
        '<pre><code>docker run --rm ghcr.io/georift/install-jellyfin-tizen &lt;TV_IP&gt;</code></pre>',
        '<h2>Method Comparison</h2>',
        '<table>',
        '  <tr><th>Method</th><th>Needs PC?</th><th>Developer Mode?</th></tr>',
        '  <tr><td>TizenBrew module</td><td>❌</td><td>❌</td></tr>',
        '  <tr><td>Samsung-Jellyfin-Installer</td><td>✅</td><td>✅</td></tr>',
        '  <tr><td>Docker</td><td>✅</td><td>✅</td></tr>',
        '</table>',
      ].join('\n'),
    },

    // ── Moonlight ──────────────────────────────────────────────
    {
      id: 'ml-overview',
      label: 'Moonlight',
      section: 'Media & Apps',
      html: [
        '<h1>Moonlight on Tizen — Overview</h1>',
        '<p><a href="https://moonlight-stream.org/" class="ext-link">Moonlight</a> is an',
        'open-source client for NVIDIA GameStream and',
        '<a href="https://github.com/LizardByte/Sunshine" class="ext-link">Sunshine</a>.',
        'It lets you stream games from a desktop PC to your Samsung Smart TV.</p>',
        '<p>There are two Tizen ports targeting different TV generations.</p>',
        '<h2>Chrome/WASM — Tizen 5.5+ (Recommended)</h2>',
        '<p>Source: <a href="https://github.com/OneLiberty/moonlight-chrome-tizen" class="ext-link">OneLiberty/moonlight-chrome-tizen</a></p>',
        '<h3>Install via Samsung-Jellyfin-Installer</h3>',
        '<ol>',
        '  <li>Download and open the <a href="https://github.com/Jellyfin2Samsung/Samsung-Jellyfin-Installer" class="ext-link">Samsung-Jellyfin-Installer</a>.</li>',
        '  <li>Sign in to your Samsung account.</li>',
        '  <li>Go to <strong>Release → Tizen Community</strong> and select <strong>Moonlight.wgt</strong>.</li>',
        '  <li>Select your TV and click <strong>Download and Install</strong>.</li>',
        '</ol>',
        '<h3>Install via Docker</h3>',
        '<pre><code>docker run -it --rm ghcr.io/oneliberty/moonlight-chrome-tizen:samsung_wasm\nsdb connect &lt;TV_IP&gt;\ntizen install -n Moonlight.wgt\nexit</code></pre>',
        '<h2>NaCl — Tizen 3.0–6.0 (Older TVs, PoC)</h2>',
        '<p>Source: <a href="https://github.com/OneLiberty/moonlight-tizen-nacl" class="ext-link">OneLiberty/moonlight-tizen-nacl</a></p>',
        '<p>A Proof-of-Concept NaCl port for older TVs. Performance is limited.</p>',
        '<pre><code>docker run -it --rm ghcr.io/oneliberty/moonlight-tizen-nacl:samsung_nacl\nsdb connect &lt;TV_IP&gt;\ntizen install -n MoonlightNaCl.wgt\nexit</code></pre>',
        '<h2>Forks &amp; Discussion</h2>',
        '<p>For a full comparison of all Moonlight forks see the',
        '<a href="https://github.com/OneLiberty/moonlight-chrome-tizen/discussions/121" class="ext-link">community discussion</a>.</p>',
        '<table>',
        '  <tr><th>Variant</th><th>Tizen Version</th></tr>',
        '  <tr><td>OneLiberty (WASM)</td><td>5.5+</td></tr>',
        '  <tr><td>OneLiberty (NaCl)</td><td>3.0–6.0 (PoC)</td></tr>',
        '  <tr><td>MrPhaze62 (no game mode)</td><td>5.5+</td></tr>',
        '  <tr><td>BrightCraft</td><td>5.5+</td></tr>',
        '</table>',
      ].join('\n'),
    },

    // ── Community Packages & Failed Projects ────────────────────
    {
      id: 'other-overview',
      label: 'Community & Other',
      section: 'Media & Apps',
      html: [
        '<h1>Tizen Community Packages &amp; Other Projects</h1>',
        '<h2>Tizen Community Packages</h2>',
        '<p>Source: <a href="https://github.com/PatrickSt1991/tizen-community-packages" class="ext-link">PatrickSt1991/tizen-community-packages</a></p>',
        '<p>Community-curated bundles of Tizen web applications as single convenient releases.</p>',
        '<table>',
        '  <tr><th>App</th><th>Description</th></tr>',
        '  <tr><td>Moonlight (OneLiberty)</td><td>GameStream / Sunshine — Tizen 5.5+</td></tr>',
        '  <tr><td>TizenBrew</td><td>Modular homebrew platform</td></tr>',
        '  <tr><td>Jellyfin</td><td>Open-source media server client</td></tr>',
        '  <tr><td>Twitch</td><td>Twitch client for Samsung TVs 2015+</td></tr>',
        '  <tr><td>FCast</td><td>Open-source wireless audio/video streaming</td></tr>',
        '  <tr><td>Doom (WASM)</td><td>WebAssembly port of Doom</td></tr>',
        '  <tr><td>OpenTTD</td><td>Transport Tycoon Deluxe for Tizen</td></tr>',
        '</table>',
        '<h2>Failed &amp; Abandoned Projects</h2>',
        '<h3>Better xCloud TV</h3>',
        '<p>Source: <a href="https://github.com/redphx/better-xcloud-tv/issues/11" class="ext-link">redphx/better-xcloud-tv issue #11</a></p>',
        '<p>An attempt to bring Better xCloud (Xbox Cloud Gaming enhancer) to Samsung Tizen TVs',
        'via TizenBrew. The developer found that while injection worked, the TV browser was too',
        'slow for cloud gaming to be playable. The project is on hold unless a rooted Tizen TV',
        'or a better injection method is found.</p>',
      ].join('\n'),
    },
  ];

  // ─────────────────────────────────────────────────────────────
  // 2. SPATIAL NAVIGATION
  //
  // Adapted from TizenPortal's navigation system:
  //   https://github.com/axelnanol/tizenportal/tree/main/navigation
  //
  // Key files referenced:
  //   geometry.js     — getDistance / getCenter helpers
  //   helpers.js      — getFocusableElements / isVisible
  //   init.js         — initializeNavigationMode / getEffectiveMode
  //   spatial-navigation.js — core directional-focus algorithm
  // ─────────────────────────────────────────────────────────────
  var SpatialNav = (function () {
    // Direction vectors (from TizenPortal geometry.js)
    var DIRS = {
      37: { x: -1, y: 0 },  // Left
      38: { x: 0, y: -1 },  // Up
      39: { x: 1, y: 0 },   // Right
      40: { x: 0, y: 1 },   // Down
    };

    var FOCUSABLE_SELECTOR = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '.focusable',
    ].join(', ');

    // ── helpers.js: isVisible ──────────────────────────────────
    function isVisible(el) {
      if (!el) return false;
      var style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return false;
      }
      var rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }

    // ── helpers.js: getFocusableElements ──────────────────────
    function getFocusableElements(container) {
      var root = container || document;
      var all = root.querySelectorAll(FOCUSABLE_SELECTOR);
      var result = [];
      for (var i = 0; i < all.length; i++) {
        if (isVisible(all[i])) result.push(all[i]);
      }
      return result;
    }

    // ── geometry.js: getCenter ────────────────────────────────
    function getCenter(rect) {
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }

    // ── geometry.js: getDistance (geometric axis-aligned mode) ─
    // Returns Infinity if the element is not in the requested direction.
    // Uses a weighted combination of primary (axial) and secondary (lateral)
    // distances — matching TizenPortal's geometric mode.
    function getDistance(fromRect, toRect, dir) {
      var fc = getCenter(fromRect);
      var tc = getCenter(toRect);

      var dx = tc.x - fc.x;
      var dy = tc.y - fc.y;

      // Primary axis — must be positive (in the correct direction)
      var primary = dir.x * dx + dir.y * dy;
      if (primary <= 0) return Infinity;

      // Secondary (perpendicular) offset
      var secondary = Math.abs(dir.y * dx - dir.x * dy);

      // Overlap bonus: reduce distance when elements are aligned on the
      // secondary axis (mirrors TizenPortal's rowColumnBias logic)
      var overlapBonus = 0;
      if (dir.x !== 0) {
        // Horizontal movement — check vertical overlap
        var overlapTop = Math.max(fromRect.top, toRect.top);
        var overlapBot = Math.min(fromRect.bottom, toRect.bottom);
        if (overlapBot > overlapTop) overlapBonus = (overlapBot - overlapTop) * 0.3;
      } else {
        // Vertical movement — check horizontal overlap
        var overlapLeft = Math.max(fromRect.left, toRect.left);
        var overlapRight = Math.min(fromRect.right, toRect.right);
        if (overlapRight > overlapLeft) overlapBonus = (overlapRight - overlapLeft) * 0.3;
      }

      return primary + secondary * 0.5 - overlapBonus;
    }

    // ── spatial-navigation.js: findNextFocusable ──────────────
    function findNextFocusable(currentEl, keyCode) {
      var dir = DIRS[keyCode];
      if (!dir) return null;

      var candidates = getFocusableElements();
      var fromRect = currentEl.getBoundingClientRect();

      var best = null;
      var bestDist = Infinity;

      for (var i = 0; i < candidates.length; i++) {
        var el = candidates[i];
        if (el === currentEl) continue;
        var rect = el.getBoundingClientRect();
        var dist = getDistance(fromRect, rect, dir);
        if (dist < bestDist) {
          bestDist = dist;
          best = el;
        }
      }

      return best;
    }

    // ── init.js: initializeNavigationMode ─────────────────────
    // We use 'geometric' mode by default (matches TizenPortal's default).
    function init() {
      document.addEventListener('keydown', function (e) {
        var code = e.keyCode;
        if (!DIRS[code]) return;

        var focused = document.activeElement;
        if (!focused || focused === document.body || focused === document.documentElement) {
          var els = getFocusableElements();
          if (els.length) {
            els[0].focus();
          }
          e.preventDefault();
          return;
        }

        var next = findNextFocusable(focused, code);
        if (next) {
          e.preventDefault();
          next.focus();
          next.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
      });

      // Focus the first element after paint
      window.addEventListener('load', function () {
        var els = getFocusableElements();
        if (els.length) {
          setTimeout(function () { els[0].focus(); }, 150);
        }
      });
    }

    return { init: init, getFocusableElements: getFocusableElements };
  })();

  // ─────────────────────────────────────────────────────────────
  // 3. WIKI RENDERER
  // ─────────────────────────────────────────────────────────────
  var currentPageId = 'home';

  function buildSidebar() {
    var nav = document.getElementById('bd-nav');
    if (!nav) return;

    // Group by section
    var sections = {};
    var sectionOrder = [];
    pages.forEach(function (p) {
      if (!sections[p.section]) {
        sections[p.section] = [];
        sectionOrder.push(p.section);
      }
      sections[p.section].push(p);
    });

    var html = '';
    sectionOrder.forEach(function (sec) {
      html += '<div class="nav-section"><span class="nav-section-title">' + esc(sec) + '</span>';
      sections[sec].forEach(function (p) {
        html += '<a class="nav-link" href="#" data-page="' + esc(p.id) + '" tabindex="0">' + esc(p.label) + '</a>';
      });
      html += '</div>';
    });

    nav.innerHTML = html;

    nav.addEventListener('click', function (e) {
      var link = e.target.closest ? e.target.closest('.nav-link') : null;
      if (!link) return;
      e.preventDefault();
      showPage(link.getAttribute('data-page'));
    });

    nav.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        var link = e.target.closest ? e.target.closest('.nav-link') : null;
        if (!link) return;
        e.preventDefault();
        showPage(link.getAttribute('data-page'));
      }
    });
  }

  function showPage(id) {
    var page = null;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].id === id) { page = pages[i]; break; }
    }
    if (!page) return;

    currentPageId = id;

    // Update active state in sidebar
    var links = document.querySelectorAll('.nav-link');
    for (var j = 0; j < links.length; j++) {
      links[j].classList.toggle('active', links[j].getAttribute('data-page') === id);
    }

    // Render content
    var content = document.getElementById('bd-content');
    if (content) {
      content.innerHTML = page.html;
      content.scrollTop = 0;
    }

    // Move focus to content heading
    var h1 = content && content.querySelector('h1');
    if (h1) {
      h1.setAttribute('tabindex', '-1');
      h1.focus();
    }
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ─────────────────────────────────────────────────────────────
  // 4. COLOUR-BUTTON & BACK-KEY HANDLERS
  //
  // Samsung TV remote key codes:
  //   403 = Red   404 = Green   405 = Yellow   406 = Blue
  //   10009 = Return/Back
  // ─────────────────────────────────────────────────────────────
  function bindRemoteKeys() {
    document.addEventListener('keydown', function (e) {
      switch (e.keyCode) {
        case 406: // 🔵 Blue — scroll content back to top
          var content = document.getElementById('bd-content');
          if (content) content.scrollTop = 0;
          // Re-focus the sidebar first link
          var firstLink = document.querySelector('.nav-link');
          if (firstLink) firstLink.focus();
          e.preventDefault();
          break;

        case 10009: // Return/Back — go back to home page
        case 8:     // Backspace (browser fallback)
          if (currentPageId !== 'home') {
            showPage('home');
          }
          e.preventDefault();
          break;

        default:
          break;
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // 5. BOOTSTRAP
  // ─────────────────────────────────────────────────────────────
  function init() {
    buildSidebar();
    showPage('home');
    SpatialNav.init();
    bindRemoteKeys();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
