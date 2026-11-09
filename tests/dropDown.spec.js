import {test, expect} from '@playwright/test';

test('Dropdown Test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/select-input.php")
    const dropdown = page.locator("#single-input-field")
    await dropdown.selectOption("Green")
    const selectedOption = await page.getByText("Selected Color : Green").textContent()
    await expect(selectedOption).toContain("Green")

    await page.waitForTimeout(2000)
})

test('Multiple Dropdown Test', async ({ page }) => {
    await page.goto("https://selenium.qabible.in/select-input.php")
    const multipleDropdown = page.locator("#multi-select-field")
    await multipleDropdown.selectOption(["Yellow","Green"])
    await expect(multipleDropdown).toHaveValues(["Yellow","Green"])


    const button1 = page.locator("#button-first")
    await button1.click()
    const message1 = await page.getByText("First selected color is : Yellow").textContent()
    await expect(message1).toContainText("Yellow") 

    const button2= page.locator("#button-all")
    await button2.click()
    const message2 = await page.getByText("All selected colors are : Yellow,Green").textContent()
    await expect(message2).toContainText("Yellow,Green")

    await page.waitForTimeout(2000)

})