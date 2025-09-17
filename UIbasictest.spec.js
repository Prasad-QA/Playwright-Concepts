const {test, expect} = require('@playwright/test');

test("With Page Playwright test", async ({page})=>{

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const username = page.locator('#username');
  const password = page.locator("[type='password']");
  const sigin = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
   await page.locator('#username').type("prasad@gmail.com");
   await page.locator("[type='password']").type("Ragu@1995");
   await page.locator("#signInBtn").click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
   await username.fill("");
   await username.type("rahulshettyacademy");
   await password.fill("");
   await password.type("learning")
  await page.locator(".checkmark ").nth(1).click();
  const dropdown = await page.locator("select.form-control");
  await dropdown.selectOption("student");
 //expect(page.locator(".checkmark").nth(1).isChecked());
 //await page.locator("#okayBtn").click
 //await page.locator("#signInBtn").click();

   //await page.pause();
   //await page.locator("#okayBtn").click
   //await page.locator("#signInBtn").click();
 //console.log(await page.locator(".card-body a").first().textContent());
//console.log(await cardTitles.first().textContent());
//const alltitles =await cardTitles.allTextContents();
//console.log(alltitles);
 


   //await expect(page).toHaveTitle("Let's Shop")
});