import {test, expect} from "@playwright/test"


test("Checkbox Test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php")
    const inputform = page.getByRole("Link", { name: "Input Form" })
    await inputform.click()
    const CheckboxDemo = page.getByRole("Link",{name:"Checkbox Demo"})
    await CheckboxDemo.click()
    const checkbox = page.locator("#gridCheck")

    await checkbox.check()
    await expect(checkbox).toBeChecked()
    const isCheckboxChecked = await checkbox.isChecked()
    console.log("Is Checkbox Checked: ", isCheckboxChecked)
    await expect(isCheckboxChecked).toBeTruthy()

    await checkbox.uncheck()
    const isCheckboxUnChecked = await checkbox.isChecked()
    console.log("Is Checkbox Checked: ", isCheckboxUnChecked)
    await expect(isCheckboxUnChecked).toBeFalsy()
    await page.waitForTimeout(2000)
})