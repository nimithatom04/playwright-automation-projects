import { test, expect } from '@playwright/test';

test('Alert Test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    const alertButton = page.locator(".btn.btn-success")

    page.on("dialog", async (dialog) => {
        await page.waitForTimeout(2000)
        console.log(dialog.message())
        console.log(dialog.type())
        await dialog.accept()
    })
    await alertButton.click()
    await page.waitForTimeout(2000)
})