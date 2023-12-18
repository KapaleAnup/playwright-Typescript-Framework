import { test } from "../src/basepage/basepage";
import * as data from "../Data/loginData.json"

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

test.describe("verify the user is able to logoout", () => {

    test("check user is able to logout", async ({ loginPage, logoutPage }) => {
        await loginPage.clickOnLoginTab()
        await loginPage.doLogin(data.userName, data.password);

        await logoutPage.doLogOut()

    })

})