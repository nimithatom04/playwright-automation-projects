import { test, expect } from '@playwright/test';

test('Prompt Alert Test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    const promptButton = page.locator(".btn.btn-danger")
    page.on("dialog", async (dialog) => {
        await page.waitForTimeout(2000)
        console.log(dialog.message())
        console.log(dialog.defaultValue())
        console.log(dialog.type())

        await dialog.accept("Nimitha")
      await new Promise(resolve => setTimeout(resolve, 2000));
   


    })
    await promptButton.click()
    await page.waitForTimeout(2000)
})