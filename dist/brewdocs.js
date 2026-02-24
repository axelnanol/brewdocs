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
        '  <li><strong>More Mods</strong> — TizenBrowse, TFlix, TizenTube Cobalt, HyperTizen</li>',
        '  <li><strong>Media &amp; Apps</strong> — Jellyfin, Moonlight, Community Packages</li>',
        '  <li><strong>Support</strong> — FAQ and Troubleshooting</li>',
        '</ul>',
        '<h2>Links</h2>',
        '<ul>',
        '  <li><a href="https://github.com/reisxd/TizenBrew" class="ext-link">TizenBrew on GitHub</a></li>',
        '  <li><a href="https://github.com/reisxd/TizenTube" class="ext-link">TizenTube on GitHub</a></li>',
        '  <li><a href="https://github.com/axelnanol/tizenportal" class="ext-link">TizenPortal on GitHub</a></li>',
        '  <li><a href="https://github.com/ghostfxck/TizenBrowse" class="ext-link">TizenBrowse on GitHub</a></li>',
        '  <li><a href="https://github.com/Zyrecx/TFlix" class="ext-link">TFlix on GitHub</a></li>',
        '  <li><a href="https://github.com/reisxd/TizenTubeCobalt" class="ext-link">TizenTube Cobalt on GitHub</a></li>',
        '  <li><a href="https://github.com/reisxd/HyperTizen" class="ext-link">HyperTizen on GitHub</a></li>',
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
        '  <li><strong>No sponsors</strong> — <a href="https://sponsor.ajay.app/" class="ext-link">SponsorBlock</a> integration skips sponsored segments.</li>',
        '  <li><strong>Picture-in-Picture</strong> — watch video in a floating overlay while browsing.</li>',
        '  <li><strong>DeArrow</strong> — replaces clickbait thumbnails and titles via <a href="https://dearrow.ajay.app/" class="ext-link">DeArrow</a>.</li>',
        '  <li><strong>Customizable themes</strong> — custom colour schemes for the YouTube TV interface.</li>',
        '  <li><strong>Hide Shorts</strong> — removes Shorts from home-screen feeds and recommendations.</li>',
        '  <li><strong>Full media-key support</strong> — play/pause, stop, fast-forward, rewind, track skip.</li>',
        '</ul>',
        '<p>TizenTube is <strong>installed by default</strong> in TizenBrew. If missing, add <code>@foxreis/tizentube</code> in the Module Manager.</p>',
        '<h2>Installation</h2>',
        '<ol>',
        '  <li>Open TizenBrew on your TV.</li>',
        '  <li>TizenTube should already be on the home screen. If not, press <strong>GREEN</strong> → Add Module.</li>',
        '  <li>Enter: <code>reisxd/tizentube</code> or <code>@foxreis/tizentube</code></li>',
        '</ol>',
        '<h2>Common Questions</h2>',
        '<h3>How do I disable Shorts?</h3>',
        '<p>Open TizenTube\'s <strong>Settings / Customization</strong> panel and enable <strong>Hide Shorts</strong>.',
        'Restart TizenTube for the change to take effect.</p>',
        '<h3>Can I watch 4K on my FHD (1080p) TV?</h3>',
        '<p>Your TV display is fixed at 1080p — it cannot output 4K pixels. You can select',
        'higher-quality streams via the YouTube quality menu (they will be downscaled to 1080p).',
        'If 4K does not appear as an option, YouTube is limiting it based on detected screen resolution.</p>',
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
        '<h2>Community &amp; Support</h2>',
        '<ul>',
        '  <li><a href="https://discord.gg/m2P7v8Y2qR" class="ext-link">Discord Server</a></li>',
        '  <li><a href="https://t.me/tizentubecobaltofficial" class="ext-link">Telegram Channel</a></li>',
        '  <li><a href="https://github.com/reisxd/TizenTubeCobalt/issues" class="ext-link">Report Issues (TizenTube Cobalt)</a></li>',
        '</ul>',
        '<p><strong>Issue tracker note:</strong> TizenTube Cobalt has its own separate tracker.',
        'Use <a href="https://github.com/reisxd/TizenTubeCobalt/issues" class="ext-link">TizenTubeCobalt/issues</a>',
        'for Android app problems, and',
        '<a href="https://github.com/reisxd/TizenTube/issues" class="ext-link">TizenTube/issues</a>',
        'for Samsung Tizen TV problems.</p>',
      ].join('\n'),
    },

    // ── HyperTizen ─────────────────────────────────────────────
    {
      id: 'ht-overview',
      label: 'HyperTizen',
      section: 'More Mods',
      html: [
        '<h1>HyperTizen — Overview</h1>',
        '<p><strong>HyperTizen</strong> is a',
        '<a href="https://hyperion-project.org/" class="ext-link">Hyperion</a> /',
        '<a href="https://github.com/awawa-dev/HyperHDR" class="ext-link">HyperHDR</a>',
        'screen capturer for Samsung Smart TVs. It enables Ambilight-style ambient lighting',
        'driven by the actual content on your TV screen.</p>',
        '<p>Author: Reis Can &nbsp;|&nbsp; Minimum Tizen: 6.5 (2022+) &nbsp;|&nbsp;',
        '<a href="https://github.com/reisxd/HyperTizen" class="ext-link">GitHub</a></p>',
        '<h2>Components</h2>',
        '<p>HyperTizen requires two components:</p>',
        '<ol>',
        '  <li><strong>Native TPK</strong> — low-level Tizen app that captures the screen and',
        '  sends frames to Hyperion / HyperHDR over the network.</li>',
        '  <li><strong>TizenBrew UI module</strong> — settings and control interface,',
        '  loaded through TizenBrew.</li>',
        '</ol>',
        '<h2>Installation</h2>',
        '<h3>Step 1 — Install the Native TPK (via Tizen Studio)</h3>',
        '<ol>',
        '  <li>Enable Developer Mode on your TV. See the',
        '  <a href="#tb-install" class="int-link">Installation</a> guide.</li>',
        '  <li>Download the latest <code>.tpk</code> from the',
        '  <a href="https://github.com/reisxd/HyperTizen/releases/latest" class="ext-link">releases page</a>.</li>',
        '  <li><code>tizen install -n path/to/io.gh.reisxd.HyperTizen.tpk</code></li>',
        '</ol>',
        '<p>If you get <em>Check certificate error</em>, resign the package with your own',
        'Samsung certificate — see the',
        '<a href="#tb-building" class="int-link">Building &amp; Resigning</a> guide.</p>',
        '<h3>Step 2 — Add the TizenBrew UI Module</h3>',
        '<ol>',
        '  <li>Open TizenBrew and press <strong>GREEN</strong>.</li>',
        '  <li>Add module: <code>reisxd/HyperTizen/HyperTizenUI</code></li>',
        '  <li>Launch HyperTizen from the TizenBrew dashboard.</li>',
        '</ol>',
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

    // ── FAQ ────────────────────────────────────────────────────
    {
      id: 'faq',
      label: 'FAQ',
      section: 'Support',
      html: [
        '<h1>Frequently Asked Questions</h1>',
        '<p>⚠️ <strong>Platform note:</strong> TizenBrew is for Samsung Tizen TVs only.',
        'Many subreddit/Discord questions come from <strong>Android TV / Fire TV / NVIDIA Shield</strong> users.',
        'Those devices use <a href="#ttcobalt-overview" class="int-link">TizenTube Cobalt</a> — a separate Android app.</p>',
        '<table>',
        '  <tr><th>Product</th><th>Platform</th><th>Issue tracker</th></tr>',
        '  <tr><td>TizenTube</td><td>Samsung Tizen TV</td><td><a href="https://github.com/reisxd/TizenTube/issues" class="ext-link">TizenTube/issues</a></td></tr>',
        '  <tr><td>TizenTube Cobalt</td><td>Android / Fire TV / Google TV</td><td><a href="https://github.com/reisxd/TizenTubeCobalt/issues" class="ext-link">TizenTubeCobalt/issues</a></td></tr>',
        '</table>',
        '<h2>Where can I find modules other than TizenTube?</h2>',
        '<p>Press <strong>GREEN</strong> on your remote → Module Manager → Add Module.',
        'Available mods in this wiki: TizenTube, TizenPortal, TizenBrowse, TFlix, HyperTizen.</p>',
        '<h2>Do I need to manually update TizenTube?</h2>',
        '<p>No. Since TizenBrew <strong>v2.0.2</strong>, modules update automatically.</p>',
        '<h2>How do I reinstall TizenTube after uninstalling it?</h2>',
        '<p>Press <strong>GREEN</strong> → Add Module → enter <code>reisxd/tizentube</code>.</p>',
        '<h2>TizenBrew shows a blank screen / no modules</h2>',
        '<p>Press <strong>GREEN</strong> and add <code>reisxd/tizentube</code>. If still blank,',
        'reboot TV. Ensure Host PC IP in Developer Mode is set to <code>127.0.0.1</code>.</p>',
        '<h2>TizenBrew autostart — how do I get back to the menu?</h2>',
        '<p>Press <strong>Back</strong> immediately after TizenBrew opens, before YouTube loads.',
        'On the home screen, go to <strong>Settings</strong> and disable Autostart.',
        'If you cannot interrupt it, reboot your TV first — TizenBrew pauses on the home screen during boot.</p>',
        '<h2>Can TizenTube appear directly on the Tizen home screen?</h2>',
        '<p>Not as a standalone icon — TizenTube is a module inside TizenBrew.',
        'Open TizenBrew from the home screen, then launch TizenTube from the dashboard.</p>',
        '<h2>TizenTube is crashing / UI is unresponsive / can\'t log in</h2>',
        '<p><strong>Check if YouTube is down first.</strong> A worldwide YouTube outage causes identical symptoms.',
        'Check <a href="https://downdetector.com/status/youtube/" class="ext-link">downdetector.com/status/youtube</a>.',
        'If YouTube is up, <strong>reboot your TV</strong>.</p>',
        '<h2>Ads are showing again</h2>',
        '<p><strong>Reboot your TV.</strong> The ad-blocker can fall out of sync with YouTube scripts after an update.',
        'If ads persist across multiple reboots, check the',
        '<a href="https://github.com/reisxd/TizenTube/issues" class="ext-link">TizenTube issue tracker</a>.</p>',
        '<h2>TizenTube "turned into" normal YouTube / settings panel is empty</h2>',
        '<p>The injected script failed to load — usually after a YouTube front-end update.',
        '<strong>Reboot your TV.</strong> If it persists, wait for a TizenTube update on the',
        '<a href="https://github.com/reisxd/TizenTube/releases" class="ext-link">releases page</a>.</p>',
        '<h2>Long-press / context menu options not working</h2>',
        '<p>Reboot TV first. If it persists after reboot, it is likely a YouTube update breaking TizenTube\'s script.',
        'Check the <a href="https://github.com/reisxd/TizenTube/issues" class="ext-link">issue tracker</a>.</p>',
        '<h2>Playback speed stuck at 1.25×</h2>',
        '<p>Reboot TV. If it persists, report on the',
        '<a href="https://github.com/reisxd/TizenTube/issues" class="ext-link">issue tracker</a>.</p>',
        '<h2>"Something went wrong" on YouTube sign-in</h2>',
        '<p>Google changed its login verification. Requires a TizenTube patch — check the',
        '<a href="https://github.com/reisxd/TizenTube/releases" class="ext-link">releases page</a>.</p>',
        '<h2>Phone gets a sign-in notification every time TizenTube opens</h2>',
        '<p>This is a Google account security notification. Disable it in',
        '<strong>Google Account → Security → 2-Step Verification</strong>,',
        'or use a separate YouTube account in TizenTube.</p>',
        '<h2>Shorts enabled in settings but still not working</h2>',
        '<p>Restart TizenTube (back to TizenBrew and relaunch). If still not working,',
        'reboot TV. If it persists, report on the',
        '<a href="https://github.com/reisxd/TizenTube/issues" class="ext-link">issue tracker</a>.</p>',
        '<h2>YouTube requires sign-in to watch videos</h2>',
        '<p><strong>As of a recent TizenTube update, signing in is now optional.</strong>',
        'Update TizenTube to the latest version — the sign-in prompt will be skippable.',
        'If you are still forced to sign in, relaunch TizenTube so TizenBrew can pick up the latest release.</p>',
        '<h2>Casting to TizenTube</h2>',
        '<p>TizenTube must already be <strong>open and active on the TV</strong> to receive a Cast.',
        'Open TizenBrew → TizenTube first, then cast from your phone.</p>',
        '<h2>4K on an FHD (1080p) TV</h2>',
        '<p>Your TV display is fixed at 1080p. You can select higher-quality streams via the YouTube quality menu',
        '(the TV downscales to 1080p). If 4K does not appear, YouTube is limiting it by detected resolution.</p>',
        '<h2>How do I disable YouTube Shorts?</h2>',
        '<p>Open TizenTube <strong>Settings / Customization</strong> → toggle <strong>Hide Shorts</strong> on.',
        'Restart TizenTube for the change to take full effect.</p>',
        '<h2>4K videos lag or crash</h2>',
        '<p>Known Tizen 7+ limitation — not fixable by TizenTube.</p>',
        '<table>',
        '  <tr><th>Resolution</th><th>Works?</th></tr>',
        '  <tr><td>Up to 1080p</td><td>✅ Yes</td></tr>',
        '  <tr><td>4K 24/30 fps, non-HDR</td><td>✅ Usually</td></tr>',
        '  <tr><td>4K 60 fps / HDR</td><td>❌ Lags / crashes</td></tr>',
        '</table>',
        '<h2>TizenBrew works on 2016 Samsung TVs?</h2>',
        '<p>No. TizenBrew requires <strong>Tizen OS 3.0+</strong> (2017+ Samsung TVs). 2016 models run Tizen 2.x.',
        'Use a streaming stick with <a href="#ttcobalt-overview" class="int-link">TizenTube Cobalt</a> instead.</p>',
        '<h2>My 2024 TV shows Tizen 2.x — is that right?</h2>',
        '<p>Almost certainly not. Check <code>Settings → Support → About Smart TV</code> for the exact Tizen OS version.',
        'Most 2024 Samsung TVs run Tizen 7.x or 8.x.</p>',
        '<h2>New Samsung remote has no number buttons — how to enter 12345?</h2>',
        '<p>Use the <strong>Samsung SmartThings app</strong> on your phone as a virtual remote (it has a number pad),',
        'or plug a <strong>USB keyboard</strong> into the TV.</p>',
        '<h2>TizenBrew / TizenTube on LG (webOS) TVs?</h2>',
        '<p>Not compatible. TizenBrew and TizenTube are Samsung Tizen OS only.',
        'LG TVs run webOS — a completely different OS. There is no equivalent for webOS.</p>',
        '<h2>Which APK for TizenTube Cobalt — arm or arm64?</h2>',
        '<p><code>cobalt-arm64.apk</code> for most modern devices (Fire TV 4K, NVIDIA Shield, Onn 4K, etc.).</p>',
        '<p><code>cobalt-arm.apk</code> for older 32-bit ARM devices. Try arm64 first if unsure.</p>',
        '<h2>Is TizenBrew available on Android TV?</h2>',
        '<p>No. TizenBrew is Samsung Tizen only.',
        'Use <a href="#ttcobalt-overview" class="int-link">TizenTube Cobalt</a> on Android / Google TV / Fire TV.</p>',
        '<h2>Which issue tracker should I use?</h2>',
        '<table>',
        '  <tr><th>Product</th><th>Issue tracker</th></tr>',
        '  <tr><td>TizenTube (Samsung Tizen TV)</td><td><a href="https://github.com/reisxd/TizenTube/issues" class="ext-link">TizenTube/issues</a></td></tr>',
        '  <tr><td>TizenTube Cobalt (Android / Fire TV)</td><td><a href="https://github.com/reisxd/TizenTubeCobalt/issues" class="ext-link">TizenTubeCobalt/issues</a></td></tr>',
        '</table>',
      ].join('\n'),
    },

    // ── Troubleshooting ────────────────────────────────────────
    {
      id: 'troubleshooting',
      label: 'Troubleshooting',
      section: 'Support',
      html: [
        '<h1>Troubleshooting</h1>',
        '<h2>"Validity period has expired" / Error (-6)</h2>',
        '<p><strong>Cause:</strong> The USB Demo Package method is permanently dead.',
        'Samsung shut down the signing service. Any USB-based installation guide is outdated.</p>',
        '<p><strong>Fix:</strong> Use the <strong>TizenBrew Installer</strong> desktop app.',
        'See the <a href="#tb-install" class="int-link">Installation guide</a>.</p>',
        '<p>⚠️ Do <strong>not</strong> attempt the USB method — it cannot work.</p>',
        '<h2>"Could not connect to the SDB Daemon"</h2>',
        '<ol>',
        '  <li><strong>TV\'s IP:</strong> <code>TV Settings → Connection → Network → IP Settings</code>',
        '  (different from the Host PC IP in Developer Mode)</li>',
        '  <li>Developer Mode must be <strong>On</strong> (Apps panel → type <code>12345</code>).</li>',
        '  <li>Host PC IP in Developer Mode = your <em>PC\'s</em> IP, not the TV\'s.</li>',
        '  <li><code>sdb connect &lt;TV_IP&gt;</code> then <code>sdb devices</code></li>',
        '  <li>Firewall: port <code>26101</code> must not be blocked.</li>',
        '</ol>',
        '<h2>TizenBrew / TizenTube Crashes on Launch</h2>',
        '<p><strong>Reboot your TV</strong> (long-press power / unplug).',
        'If it persists, reinstall TizenBrew via the TizenBrew Installer.</p>',
        '<h2>TizenBrew Autostart / Cannot Get Back to Menu</h2>',
        '<p>Press <strong>Back</strong> immediately after TizenBrew opens, before YouTube fully loads.',
        'This returns you to the TizenBrew home screen where you can disable Autostart in Settings.</p>',
        '<p>If you cannot interrupt it: reboot TV — TizenBrew pauses on the home screen during boot.',
        'As a last resort, reinstall via the TizenBrew Installer to reset config.</p>',
        '<h2>TizenTube Showing Ads</h2>',
        '<p><strong>Reboot your TV.</strong> If ads continue after several reboots,',
        'check the <a href="https://github.com/reisxd/TizenTube/issues" class="ext-link">TizenTube issue tracker</a>.</p>',
        '<h2>4K Video Playback Issues (Lag or Crashes)</h2>',
        '<p>Known Tizen 7+ limitation. Use the native YouTube app for 4K HDR content.</p>',
        '<h2>Certificate Error Installing a TPK (-12)</h2>',
        '<p>Resign the package with your own Samsung certificate —',
        'see the <a href="#tb-building" class="int-link">Building &amp; Resigning</a> guide.</p>',
        '<h2>TV Rebooting in a Loop (Cobalt on NVIDIA Shield / Android)</h2>',
        '<p>This is an <strong>HDMI-CEC handshake issue</strong> between the Shield and TV,',
        'not caused by TizenTube Cobalt itself.</p>',
        '<ol>',
        '  <li>Disable HDMI-CEC on the TV: <code>Settings → General → External Device Manager → Anynet+ → Off</code></li>',
        '  <li>Disable CEC on the Shield: <code>Settings → Device Preferences → HDMI → CEC control → Disabled</code></li>',
        '  <li>Update TV firmware: <code>Settings → Support → Software Update</code></li>',
        '  <li>Try a different HDMI cable or port.</li>',
        '</ol>',
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
