import { test as base } from "@playwright/test"
import SearchPage from "../pages/search.page";
import CartSelectionPage from "../pages/cartSelectionPage.page";

//extend the base test 
export const test = base.extend<{
    searchPage: SearchPage
    cartSelectionPage: CartSelectionPage

}>({
    //define fixture
    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },
    cartSelectionPage: async ({ page }, use) => {
        await use(new CartSelectionPage(page));
    }
})



