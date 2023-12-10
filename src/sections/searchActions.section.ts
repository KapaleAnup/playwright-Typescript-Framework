import { Page } from "@playwright/test";

export default class SearcPageActions {

    page: Page
    constructor(page: Page) {
        this.page = page
    }

    //Locators 
    //searchText = () => this.page.getByPlaceholder('Search books or authors');

    searchText = () => this.page.locator("input[placeholder='Search books or authors']");
    selectsearchedText = () => this.page.locator('.mat-option-text');

    //Action
    public async searchBookData(bookName: string) {
        await this.searchText().fill(bookName)
        await this.selectsearchedText().click()
    }


}