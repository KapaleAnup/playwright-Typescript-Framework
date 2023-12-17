import { test } from "../src/basepage/basepage"
import { expect } from "@playwright/test"

test("Select the category", async ({ page, homePage }) => {

    await page.goto("https://bookcart.azurewebsites.net/");
    await homePage.selectCategory();
})