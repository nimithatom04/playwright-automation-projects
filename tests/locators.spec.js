import test from "@playwright/test"

test("Locator Test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.waitForTimeout(2000)
})