import { test as base } from "@playwright/test"
import SearchPage from "../pages/search.page";
import CartSelectionPage from "../pages/cartSelectionPage.page";
import HomePage from "../pages/homePage.page";
import RegistratonPage from "../pages/registrationPage.page";
import LoginPage from "../pages/loginPage.page";
import CheckOutPage from "../pages/checkoutPage.page";
import MyOrdersPage from "../pages/myOrderPage.page";
import LogoutPage from "../pages/logoutPage.page";
import WishlistPage from "../pages/wishlistPage.page";


//extend the base test 
export const test = base.extend<{
    searchPage: SearchPage
    cartSelectionPage: CartSelectionPage
    homePage: HomePage
    registratonPage: RegistratonPage
    loginPage: LoginPage
    checkoutPage: CheckOutPage
    myOrderPage: MyOrdersPage
    logoutPage: LogoutPage
    wishlistPage: WishlistPage
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
    myOrderPage: async ({ page }, use) => {
        await use(new MyOrdersPage(page))
    },
    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page))
    },
    wishlistPage: async ({ page }, use) => {
        await use(new WishlistPage(page))
    },

})



