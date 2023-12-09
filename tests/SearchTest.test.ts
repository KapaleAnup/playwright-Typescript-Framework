import { test, expect } from "@playwright/test"

test("Search the book name", async ({ page }) => {

    await page.goto("https://bookcart.azurewebsites.net/");
    expect(page.getByText('Login')).toBeVisible();
    await page.getByPlaceholder('Search books or authors').fill('The Simple Wild');
    await page.locator('.mat-option-text').click();
    await expect(page.getByRole('link', { name: 'The Simple Wild' })).toBeVisible();


    await page.close()

})