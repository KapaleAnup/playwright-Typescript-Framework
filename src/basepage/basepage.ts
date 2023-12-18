import { test as base } from "@playwright/test"
import SearchPage from "../pages/search.page";
import CartSelectionPage from "../pages/cartSelectionPage.page";
import HomePage from "../pages/homePage.page";
import RegistratonPage from "../pages/registrationPage.page";
import LoginPage from "../pages/loginPage.page";
import CheckOutPage from "../pages/checkoutPage.page";


//extend the base test 
export const test = base.extend<{
    searchPage: SearchPage
    cartSelectionPage: CartSelectionPage
    homePage: HomePage
    registratonPage: RegistratonPage
    loginPage: LoginPage
    checkoutPage: CheckOutPage

}>({
    //define fixture
    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },
    cartSelectionPage: async ({ page }, use) => {
        await use(new CartSelectionPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    registratonPage: async ({ page }, use) => {
        await use(new RegistratonPage(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckOutPage(page))
    },

})



