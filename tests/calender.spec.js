import {test,expect} from '@playwright/test'
test("Date Picker Test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/date-picker.php")
    const enterDate = page.locator("#single-input-field")
    await enterDate.click()
    const datepickerSwitch = await page.locator(".datepicker-days").locator("th.datepicker-switch")
    await datepickerSwitch.click()
    const yearPicker = await page.locator(".datepicker-months").locator("th.datepicker-switch").click()
    
    const yearToSelect = 2022
    const monthToSelect = 7
    const dayToSelect = 1

    while(true){
    const yearSelect = await page.locator(".datepicker-years").locator("th.datepicker-switch").textContent()
    console.log("Year selected is: " + yearSelect)
    const yearArry= yearSelect.split("-")
    const startYear =parseInt(yearArry[0])
    const endYear = parseInt(yearArry[1])
    console.log("Start Year is: " + startYear)
    console.log("End Year is: " + endYear)
    if(yearToSelect >= startYear && yearToSelect <= endYear){
      break;
    }
    else if(yearToSelect < startYear){
        const prevButton = await page.locator(".datepicker-years").locator(".prev").click()
    }
    else {
        const nextButton = await page.locator(".datepicker-years").locator(".next").click()
    }}

    await page.locator(".datepicker-years").locator(".year",{hasText:yearToSelect.toString()}).click()
    await page.locator(".datepicker-months").locator(".month").nth(monthToSelect - 1).click()
    await page.locator(".datepicker-days").locator(".day:not(.new):not(.old)",{hasText:new RegExp(`^${dayToSelect}$`)}).click() // Regular Expression to select exact day

    await page.waitForTimeout(2000)
})
