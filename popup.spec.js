const { expect, default: test } = require('@playwright/test');

test("java popup handling",async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
page.on('dialog',dialog => dialog.accept());
await page.locator("#alertbtn").click();
await page.locator("#confirmbtn").click();
page.on('dialog',dialog => dialog.dismiss());
page.on('dialog',dialog => dialog.dismiss());
})d

 
