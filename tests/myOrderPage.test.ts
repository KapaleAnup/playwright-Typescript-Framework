import { test } from "../src/basepage/basepage";
import * as data from "../Data/loginData.json"
import { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

test.describe("Verify the placed orders are visible", () => {

    test("Verify orders in Myorder section", async ({ loginPage, myOrderPage }) => {
        await loginPage.clickOnLoginTab();
        await loginPage.doLogin(data.userName, data.password)

        let title = await myOrderPage.navigateToMyorders();
        await expect(title).toContain('My Orders')



    })

})