import {test, expect} from "@playwright/test"

test("Checkbox Test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    const lauchButton = page.getByRole("button", { name: "Launch modal" })
    await lauchButton.nth(0).click()

    const modal = page.locator("#exampleModalCenter")
    const closeButton = modal.locator(".btn.btn-secondary")
    await closeButton.click()

    await page.waitForTimeout(2000)
})