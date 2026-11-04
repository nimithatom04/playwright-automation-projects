import {test , expect} from "@playwright/test"

test("Radio Button Test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/radio-button-demo.php")
    const femaleRadio = page.getByRole("radio",{name:"Female"})
    await femaleRadio.first().click()
    const selectedButton = page.getByRole("button",{name:"Show Selected Value"})
    await selectedButton.click()
    const radioButtonValue = page.locator("#message-one")
    await page.waitForTimeout(2000)
})