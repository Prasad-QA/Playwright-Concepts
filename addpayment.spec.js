
import{test, expect} from '@playwright/test'

test("add payment card",async ({browser})=>{

     const context = await browser.newContext({
           storageState:"./auth.json"

    })
     const page = await context.newPage();
  await page.goto('https://apps.shippodev.com/orders');
  await page.getByTestId('settings-link-nav').click();
  await page.getByTestId('/settings/account/billing').click();
  await page.getByRole('button', { name: 'Add payment method' }).click();
    const Fpage= await page.frameLocator('iframe[name="__privateStripeFrame4614"]');
 await Fpage.getByPlaceholder('1234 1234 1234 1234').type('4242 4242 4242 4242');

});
