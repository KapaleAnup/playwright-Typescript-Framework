import { test } from "../src/basepage/basepage"
import { expect } from "@playwright/test"



test("Search and add the book into the cart", async ({ page, searchPage, cartSelectionPage }) => {

    await page.goto("https://bookcart.azurewebsites.net/");
    await expect(page.getByText('Login')).toBeVisible();
    await searchPage.searchBook('The Simple Wild')
    await expect(page.getByRole('link', { name: 'The Simple Wild' })).toBeVisible();

    await cartSelectionPage.addBookToCart();


    // await page.close()

})


// test("Add the searched book to the cart", async ({ page, cartSelectionPage }) => {



// })
