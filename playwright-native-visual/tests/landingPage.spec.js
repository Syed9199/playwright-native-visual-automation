const { test, expect } = require('@playwright/test');

  test('should match the landingPage', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(3000)
    expect (await page.screenshot({
      fullPage: true,
      animations: 'disabled'})).toMatchSnapshot('landingPage.png',
        {maxDiffPixelRatio: 0.03})
  });
