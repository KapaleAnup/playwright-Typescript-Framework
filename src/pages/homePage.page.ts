import { Page } from "@playwright/test";
import HomePageSection from "../sections/homeActions.section";

export default class HomePage {

    page: Page
    homeActions: HomePageSection
    constructor(page: Page) {
        this.page = page
        this.homeActions = new HomePageSection(this.page);
    }

    async selectCategory() {
        this.homeActions.fetchCategory();
    }

}