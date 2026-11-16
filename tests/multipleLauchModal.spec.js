import {test,expect} from '@playwright/test'
test("Multiple Launch Modal Test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    const launchButton = await page.getByRole("button", { name: "Launch modal" })
    await launchButton.nth(1).click()

    const modal1 = page.locator("#exampleModalCenter1")
    const lauchButton2 = modal1.getByRole("button", { name: "Launch another modal" })
    await lauchButton2.click()

    const modal2 = page.locator("#exampleModalCenter2")
    const closeButton2 = modal2.locator(".btn.btn-secondary")
    await closeButton2.click()

    const closeButton1 = modal1.locator(".btn.btn-secondary")
    await closeButton1.click()

    await page.waitForTimeout(2000)
})