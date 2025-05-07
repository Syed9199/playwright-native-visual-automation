import { test, expect } from '@playwright/test';

test('should match the Login Page', async ({ page }) => {
    await page.goto('/sign-in')
    await page.waitForTimeout(2000)
    expect(await page.screenshot()).toMatchSnapshot('loginPage.png',
        {maxDiffPixelRatio: 0.03})
    })
