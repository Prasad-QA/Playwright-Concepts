const {test,expect } = require('@playwright/test');

test("frames",async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//page.on('dialog',dialog => dialog.accept());
//await page.locator("#confirmbtn").click();
   // const framepage = page.frameLocator("#courses-iframe");
 //await framepage.locator("li a[href*='courses']:visible").click();
 const framepage = await page.frameLocator('iframe[name="iframe-name"]');
 await framepage.getByRole('link', { name: 'Courses', exact: true }).click();

 
})