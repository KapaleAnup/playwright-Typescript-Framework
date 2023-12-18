import { test } from "../src/basepage/basepage"
import { expect } from "@playwright/test"
import * as data from "../Data/registrationData.json"

// username: AutomationUserOne  pass : Automation123

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

test.describe("Verify the user is able to register successfully", async () => {

    test("Check the user is able to registered with new data", async ({ page, registratonPage, loginPage }) => {
        await registratonPage.
            doRegistration(data.firstName,
                data.lastName, data.userName, data.password, data.confirmPassowrd)

        // expect(page.url()).toContain('https://bookcart.azurewebsites.net/login')

        await loginPage.doLogin(data.userName, data.password)
    })

    //test.step("Check the registred user is able to login",async())



})