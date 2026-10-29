import test from '@playwright/test'
test.only("First Test", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.google.com/")

})

test("Second Test", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://playwright.dev/")
})
test("Third Test", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.obsqurazone.com/")
})