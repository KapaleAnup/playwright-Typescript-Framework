import { test } from "../src/basepage/basepage";
import * as data from "../Data/loginData.json"

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

test.describe("Verify fourite book details", () => {

    test("add favourite book", async ({ loginPage, wishlistPage }) => {

        await loginPage.clickOnLoginTab();
        await loginPage.doLogin(data.userName, data.password);

        await wishlistPage.addFavouriteBooks();

    })
})