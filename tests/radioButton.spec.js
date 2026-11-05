import {test , expect} from "@playwright/test"

test("Radio Button Test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/radio-button-demo.php")
    const femaleRadio = page.getByRole("radio",{name:"Female"})
    await femaleRadio.first().click()
    const selectedButton = page.getByRole("button",{name:"Show Selected Value"})
    const radioButtonValue = page.locator("#message-one")
    await expect(radioButtonValue).not.toBeVisible()
    await selectedButton.click()
    
    await expect(radioButtonValue).toBeVisible()
    const textMessage1=await radioButtonValue.textContent()
    console.log("Radio Button Message: ", textMessage1)

    await expect(radioButtonValue).toHaveText("Radio button 'Female' is checked")
    await expect(textMessage1).toContain("Female")
    await page.waitForTimeout(2000)
})
test("Radio Button Test 2", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/radio-button-demo.php")
    const radioButton = page.getByRole("radio",{name:"Female"})
    await radioButton.first().click()
    const radioButtonFemale= page.getByText("Female", { exact: true })
    await radioButtonFemale.nth(0).click()
})