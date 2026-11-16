import {test, expect} from '@playwright/test';
test("Frame Test", async ({ page }) => {
    await page.goto("https://demoqa.com/frames")
    const frame1 = await page.frameLocator("#frame1")
    const frame1Heading = await frame1.locator("#sampleHeading").textContent()
    console.log("Frame 1 Heading is: " + frame1Heading)

    await page.waitForTimeout(2000)
})