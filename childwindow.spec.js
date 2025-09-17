const {test, expect} = require('@playwright/test');

test("Window handling", async ({browser})=>{

const context = await browser.newContext();
const page =await context.newPage();

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const DocumentLink = page.locator("[href*='documents-request']");
const [newpage] = await Promise.all([

context.waitForEvent('page'),
   DocumentLink.click(),
])
const test = await newpage.locator(".red").textContent();
console.log(text);

});
