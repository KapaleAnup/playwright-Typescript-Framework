import { Locator, Page } from "@playwright/test";

export default class MyOrdersPage {

    page: Page
    readonly userName: Locator
    readonly myOrdersBtn: Locator
    readonly myOrdersTitle: Locator
    readonly orderid: Locator
    readonly productDetails: Locator

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator("button[class='mat-focus-indicator mat-menu-trigger mat-button mat-button-base ng-star-inserted'] span[class='mat-ripple mat-button-ripple']")
        this.myOrdersBtn = page.getByRole('menuitem', { name: 'My Orders' })
        this.myOrdersTitle = page.getByRole('heading', { name: 'My Orders' })
    }

    async navigateToMyorders() {
        await this.userName.click()
        await this.myOrdersBtn.click()
        let orderTitle = await this.myOrdersTitle.textContent()
        return orderTitle;
    }

}