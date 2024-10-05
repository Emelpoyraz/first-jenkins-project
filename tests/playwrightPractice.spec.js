import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
        
    await page.click('button.yt-spec-button-shape-next[aria-label="Reject the use of cookies and other data for the purposes described"]');


    let searchBox = page.locator("//input[@id='search']");
    searchBox.click();
    searchBox.fill('Cydeo');

    //await searchBox.press('Enter');
    page.locator("//button[@id='search-icon-legacy']").click();

   let firstResult = page.locator("(//a[@id='video-title'])[1]");

   await firstResult.click();

});