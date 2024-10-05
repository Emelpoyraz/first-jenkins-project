import { test } from '@playwright/test';

test.describe('@smoke Test Group1', () => {

  test.beforeEach(async({page}) => {
    await page.goto("https://practice.cydeo.com/");
  });
    
  test.afterEach(async ({page}) => {

  });


  test('@lib01 Getting the title of the page', async ({ page }) => {
    console.log(await page.getTitle);
  });

  test('Getting the current  URL of the page', async ({ page }) => {
    console.log(page.url());
  });
});