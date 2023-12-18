import { Locator, Page } from "@playwright/test";

export default class LogoutPage {

    page: Page

    readonly logoutbtn: Locator
    readonly userName: Locator


    constructor(page: Page) {
        this.page = page;
        this.userName = this.userName = page.locator("button[class='mat-focus-indicator mat-menu-trigger mat-button mat-button-base ng-star-inserted'] span[class='mat-ripple mat-button-ripple']")
        this.logoutbtn = page.getByRole('menuitem', { name: 'Logout' })
    }

    async doLogOut() {
        await this.userName.click()
        await this.logoutbtn.click()
    }


}