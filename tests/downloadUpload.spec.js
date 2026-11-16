import { test, expect } from '@playwright/test';

test("Download Test", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download")
    const downloadButton = await page.locator("#downloadButton")
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        downloadButton.click()
    ])
    await download.saveAs('downloadedfile.jpeg')
    await page.waitForTimeout(2000)
}) 

test("Upload Test", async ({ page }) => {
    await page.goto("https://demoqa.com/upload-download")
    const uploadFile = await page.locator("#uploadFile")
    await uploadFile.setInputFiles("C:\\Users\\nimit\\Downloads\\Nimitha_Tom_Cover_Letter_RecruitIT_Senior_Test_Automation_Engineer.docx")

    await page.waitForTimeout(2000)
})