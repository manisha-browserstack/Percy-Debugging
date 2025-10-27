# Percy Playwright Sample (Valid + Broken 3rd-party assets)

This sample repo demonstrates:
- A simple static app with a page that uses valid 3rd-party assets (`public/valid.html`)
- A page with intentionally broken 3rd-party assets (`public/broken.html`)
- Playwright tests that call Percy snapshots for both pages
- A minimal Express static server (server.js)

## Setup (local)
1. Clone or extract the zip.
2. Install deps:
   ```
   npm install
   ```
3. Start the static server (in one terminal):
   ```
   npm start
   # server runs at http://localhost:3000
   ```
4. In another terminal run Percy-enabled Playwright tests:
   - Make sure you have a Percy project and set the `PERCY_TOKEN` environment variable.
   - Run:
   ```
   npx percy exec -- npx playwright test
   ```
   Or if you prefer the npm script:
   ```
   npm run percy:test
   ```

## What to expect
- `Valid assets page` snapshot: should render correctly if external font & image are reachable.
- `Broken assets page` snapshot: external font and image are broken (404), so page rendering will be affected. Percy will capture the page as rendered in the browser; resources returning 404 will not be proxied into Percy snapshots.

## Percy CLI Support Tool debugging steps
1. Run the failing/broken snapshot and capture Percy CLI logs:
   ```
   export PERCY_LOGLEVEL=debug
   npx percy exec -- npx playwright test
   ```
   (On Windows use `set PERCY_LOGLEVEL=debug` in CMD.)
2. Inspect the debug output — the `proxy` map entries will show which asset URLs were proxied and which returned 404s.
3. To verify rendering locally, open Chrome, load the page, open DevTools -> Network -> Right-click -> "Capture full size screenshot" to verify CSS/asset rendering.

## Files of interest
- `public/valid.html` — valid assets
- `public/broken.html` — intentionally broken asset URLs
- `tests/percy.spec.js` — Playwright tests with Percy snapshots
- `server.js` — static server
- `playwright.config.js` — Playwright config
- `.percy-support.npmrc` — sample (replace with your token if using npm registry for percy support)

## Notes
- Replace `PERCY_TOKEN` environment variable with your Percy token.
- You can modify `public/broken.html` to toggle which assets are broken.
- This sample is intentionally simple so you can inspect how Percy treats third-party assets that 404.
