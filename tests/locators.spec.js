import test from "@playwright/test"

test("Locator Test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/form-submit.php"
    )
    await page.locator("#validationCustom01").fill("Nimitha")
    await page.locator(".form-control").nth(1).fill("Tom")
    await page.locator("[placeholder='Username']").fill("Nimitha01")
    await page.locator("//input[@id='validationCustom03']").fill("Thodupuzha")
    await page.locator("//*[@placeholder='State']").fill("Kerala")
    await page.getByPlaceholder("Zip").fill("685589")
    await page.getByLabel("Agree to terms and conditions").check()
    await page.getByRole("button", { name: "Submit form" }).click()
    await page.waitForTimeout(2000)
})

test("Locator Test 2", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    await page.locator("#single-input-field").fill("Hello Good Morning")
    await page.getByRole("button", { name: "Show Message" }).click()
    await page.locator("//input[@id='value-a']").fill("20")
    await page.locator("//*[@id='value-b']").fill("50")
    await page.getByRole("button",{name:"Get Total"}).click()
    await page.waitForTimeout(4000)

})