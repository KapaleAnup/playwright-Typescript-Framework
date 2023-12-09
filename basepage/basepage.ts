import { test as base } from "@playwright/test"
import SearchPage from "../Pages/search.page";

//extend the base test 
export const test = base.extend<{
    searchPage: SearchPage

}>({
    //define fixture
    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    }
})



