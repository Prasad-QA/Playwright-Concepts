
const { expect, default: test } = require('@playwright/test');

test("Mouse actions",async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

await page.locator("#mousehover").hover();
await page.getByText("Reload").click();
})