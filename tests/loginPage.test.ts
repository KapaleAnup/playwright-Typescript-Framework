import { test } from "../src/basepage/basepage";
import * as data from "../Data/loginData.json"
import { expect } from "playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

test.describe("verify the user is able to login", () => {

    test("Login with valid Credentials", async ({ loginPage, homePage }) => {
        await loginPage.clickOnLoginTab();
        await loginPage.doLogin(data.userName, data.password)

        let userName = await homePage.homeActions.loggedInUserName();
        console.log(userName)
        expect(userName).toContain(data.userName)
    })

})