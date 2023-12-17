import { test } from "../src/basepage/basepage"
import { expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
    await page.goto("/")

})

test.describe("Search and add the book into the cart", async () => {
    test("Search and add the book into the cart", async ({ page, searchPage, cartSelectionPage }) => {

        //  await page.goto("https://bookcart.azurewebsites.net/");
        await expect(page.getByText('Login')).toBeVisible();
        await searchPage.searchBook('The Simple Wild')
        await expect(page.getByRole('link', { name: 'The Simple Wild' })).toBeVisible();

        await cartSelectionPage.addBookToCart();


        // await page.close()
    })

    // test("Add book to the cart", async ({ page, searchPage, cartSelectionPage }) => {

    //     await searchPage.searchBook('The Simple Wild')
    //     await cartSelectionPage.addBookToCart();

    // })

})


