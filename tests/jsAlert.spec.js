import { test, expect } from '@playwright/test';
test('JS Alert Test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/javascript-alert.php")

    const yellowButton = page.locator(".btn.btn-warning")
    page.on("dialog", async (dialog) => {
        await page.waitForTimeout(2000)
        console.log(dialog.message())
        //await dialog.accept()
        await dialog.dismiss()
    })
    await yellowButton.click()
    await page.waitForTimeout(2000)
})