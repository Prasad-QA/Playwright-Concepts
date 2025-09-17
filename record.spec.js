import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('rahulshetty ac');
  await page.getByText('ademy.com/#/practice-project').click();
  await page.getByText('Practice PageRahul Shetty Academyhttps://rahulshettyacademy.com › AutomationPrac').click();
  await page.locator('#dropdown-class-example').selectOption('option2');
  await page.locator('#checkbox-example').getByText('Option2').click();
  await page.locator('#checkBoxOption2').check();
  await page.getByPlaceholder('Enter Your Name').click();
  await page.getByPlaceholder('Enter Your Name').fill('rebel');
  await page.getByText('Switch Window Example Open Window Switch Tab Example Open Tab Switch To Alert Ex').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirm' }).click();
});