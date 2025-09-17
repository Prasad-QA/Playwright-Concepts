

const{test,expect} = require('@playwright/test');
test("formfilling",async ({page})=>{

await page.goto("https://rahulshettyacademy.com/angularpractice/")
await page.locator("[minlength='2']").fill("prasad");
await page.locator("[minlength='2']").screenshot({path:'partiallSS.PNG'});
await page.getByPlaceholder("Password").fill("1234567");
await page.getByText("Check me out if you Love IceCreams!").check();
await page.getByLabel("Student").check();
await page.getByRole("button",{name:'Submit'}).click();
await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
await page.getByRole("link",{name:'shop'}).click();

await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();
await page.pause();
});

test.only('visual',async({page})=>
{
await page.goto("https://www.naukri.com/mnjuser/recommendedjobs");
expect(await page.screenshot()).toMatchsnapshot('landing.png');

})