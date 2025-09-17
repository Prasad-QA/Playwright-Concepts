

import { test, expect } from '@playwright/test';

test('shippotest', async ({ page }) => {
  
  await page.goto('https://apps.shippodev.com/login');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('shippotest330@mailinator.com');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('asdfasdf12');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://apps.shippodev.com/orders');
  //await page.pause();
});

