import {test, expect} from '@playwright/test';

test('Dropdown Test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/select-input.php")
    const dropdown = page.locator("#single-input-field")
})