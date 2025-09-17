const { expect, default: test } = require('@playwright/test');

test('visualtesting',async({page})=>{

await page.goto("https://www.google.com")
expect(await page.screenshot()).toMatchSnapshot('testpage');
});


