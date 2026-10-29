import test from "@playwright/test"

test("Second Test", async ({ page }) => {

    await page.goto("https://industryconnect.org/")
})