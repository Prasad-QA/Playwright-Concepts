const {test, expect} = require('@playwright/test');

test('scrollpage',async ({ page }) =>{

await page.goto('https://www.amazon.com/');
await page.locator("//form[@id='nav-search-bar-form']").fill("Pen");
//await page.getByRole('textbox', { name: 'Search For' }).keyboard.press('Enter');


//form[@id='nav-search-bar-form']
await page.locator("//input[@id='nav-search-submit-button']").click();
await page.pause();
})