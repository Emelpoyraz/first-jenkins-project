import { test } from '@playwright/test';
import { before, beforeEach } from 'node:test';

test.describe('Test Group', () => {

    //create a beforeEach function
    test.beforeEach(async ({ page }) => {
      await page.goto('https://practice.cydeo.com');
    });

  test('check() checks the radio buttons and checkboxes if they havent been checked yet', async ({ page }) => {
   
    let checkboxesLink=page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox1 = page.locator("#box1");
    await checkBox1.check();
    
  });

  test('uncheck()  checks the radio buttons and checkboxes if they havent been unchecked yet', async ({ page }) => {
    let checkboxesLink=page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox2 = page.locator("#box2");
    await checkBox2.uncheck();
      
    });

  test('selectOption() used for dropdowns', async ({ page }) => {
    
    await page.locator("text='Dropdown'").click();
    let simpleDropdown = page.locator("#dropdown");
        
    //select by visible text
    //await simpleDropdown.selectOption("Option 1");
    await simpleDropdown.selectOption({label:"Option 1"});

    //select by value
    //await simpleDropdown.selectOption("1");

    //select by index
    //await simpleDropdown.selectOption({ index: 1 });

  });

  test('innerText() retrives the visible text', async ({ page }) => {

    let headerElement = page.locator("//span[@class='h1y']");

    let actualText = await headerElement.innerText();

    console.log(actualText);
   
 });

 
  test('inputValue(): only works with <input>, <textarea>, <select>', async ({ page }) => {

    let inputsLink = page.getByText("Inputs");

    //  await inputsLink.scrollIntoViewIfNeeded();
    //  await page.waitForTimeout(3000);

    await inputsLink.click();

    let inputBox = page.locator("//input[@type='number']");

    await inputBox.fill("123");

    let inputValue = await inputBox.inputValue();
    console.log(inputValue);
  });


});