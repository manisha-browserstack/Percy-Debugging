// Playwright test config (minimal)
const { devices } = require('@playwright/test');
module.exports = {
  timeout: 30 * 1000,
  testDir: 'tests',
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
};
