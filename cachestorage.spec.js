const {test, expect} = require('@playwright/test');

test.beforeAll(async(browser)=>
{
await context = await browser.newcontext();
    await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadstate('networkidle');



})