const {test, expect} = require('@playwright/test');

test("With Page Playwright test", async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   const username = page.locator('#username');
   const password = page.locator("[type='password']");
   const sigin = page.locator("#signInBtn");
   const DocumentLink = page.locator("[href*='documents-request']")
   await username.type("rahulshettyacademy");
   await password.type("learning")
   await page.locator(".checkmark ").nth(1).click();
 
   await page.locator("#okayBtn").click();
   const dropdown = await page.locator("select.form-control");
  // await dropdown.selectOption("student");
  await page.locator("[type='submit']").click();
  // await expect(DocumentLink).toHaveAttribute("class","blinkingText")

});
