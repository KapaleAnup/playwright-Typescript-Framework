import { Locator, Page } from "@playwright/test";

export default class HomePageSection {

    page: Page

    readonly logginedUseName: Locator

    constructor(page: Page) {
        this.page = page
        this.logginedUseName = page.locator('.mat-focus-indicator.mat-menu-trigger.mat-button.mat-button-base.ng-star-inserted')
    }

    //locators
    category_list = () => this.page.$$("//mat-nav-list[@role='navigation']//mat-list-item");


    public async loggedInUserName() {
        return await this.logginedUseName.textContent()
    }

    async fetchCategory() {

        let allcaegories = await this.category_list();
        for (let list of allcaegories) {
            console.log(list)
        }
    }
}