import { test } from "../basepage/basepage"
import { expect } from "@playwright/test"



test("Search the book name", async ({ page, searchPage }) => {

    await page.goto("https://bookcart.azurewebsites.net/");
    await expect(page.getByText('Login')).toBeVisible();
    await searchPage.searchBook('The Simple Wild')
    // await page.getByPlaceholder('Search books or authors').fill('The Simple Wild');
    //await page.locator('.mat-option-text').click();
    await expect(page.getByRole('link', { name: 'The Simple Wild' })).toBeVisible();


    await page.close()

})