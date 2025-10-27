const { test, expect } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test.describe('Percy visual snapshots - valid & broken assets', () => {
  test.beforeEach(async ({ page }) => {
    // Nothing here; server should be running via npm start
  });

  test('snapshot valid page', async ({ page }) => {
    await page.goto('http://localhost:3000/valid.html', { waitUntil: 'networkidle' });
    // wait briefly to let external assets load
    await page.waitForTimeout(500);
    await percySnapshot.percySnapshot(page, 'Valid assets page');
  });

  test('snapshot broken page', async ({ page }) => {
    await page.goto('http://localhost:3000/broken.html', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await percySnapshot.percySnapshot(page, 'Broken assets page');
  });
});
