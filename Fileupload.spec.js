const { expect, default: test } = require('@playwright/test');

test("File upload",async({page})=>{

await page.goto("https://practice.expandtesting.com/upload");
await page.waitForTimeout(4000);
await page.locator("#fileInput").setInputFiles('images.jpg');
await page.locator("#fileSubmit").click();
//await expect(page.getByText('File Uploaded!')[2of2]).toBeVisible();

})

