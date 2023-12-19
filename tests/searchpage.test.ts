import { test } from "../src/basepage/basepage"
import { expect } from "@playwright/test"
import * as data from "../Data/searchData.json"
import * as loginData from "../Data/loginData.json"
import * as shippingData from "../Data/shippingData.json"

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

test.describe("Search and add the book into the cart", async () => {
    test("Search and add the book into the cart", async ({ page, searchPage, cartSelectionPage, loginPage, checkoutPage }) => {
        await expect(page.getByText('Login')).toBeVisible();
        await searchPage.searchBook(data.bookName)
        await expect(page.getByRole('link', { name: data.bookName })).toBeVisible();
        await cartSelectionPage.addBookToCart();
        await loginPage.doLogin(loginData.userName, loginData.password)
        await checkoutPage.
            placeOrder(shippingData.firstName, shippingData.address1,
                shippingData.address2, shippingData.pincode, shippingData.state)
    })


})


