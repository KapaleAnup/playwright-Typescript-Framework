import { Page } from "@playwright/test";

export default class HomePageSection {

    page: Page
    constructor(page: Page) {
        this.page = page
    }

    //locators
    category_list = () => this.page.$$("//mat-nav-list[@role='navigation']//mat-list-item");


    async fetchCategory() {

        let allcaegories = await this.category_list();
        for (let list of allcaegories) {
            console.log(list)
        }
    }
}