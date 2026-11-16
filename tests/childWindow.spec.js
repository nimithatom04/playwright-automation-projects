import { test, expect } from "@playwright/test"

test("Checkbox Test", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://selenium.qabible.in/window-popup.php")
    const facebookButton = page.getByRole("Link", { name: "Like us On Facebook" })
    console.log("Parent page title is: " + await page.title())

    const [childPage] = await Promise.all([
            context.waitForEvent("page"),
            facebookButton.click()
        ])
    await childPage.waitForLoadState()
    console.log("Child page title is: " + await childPage.title())

    await page.waitForTimeout(2000)
})