import { Page } from "@playwright/test"
import SearcPageActions from "../sections/searchActions.section"

export default class SearchPage {

    page: Page
    searchActions: SearcPageActions

    constructor(page: Page) {
        this.page = page
        this.searchActions = new SearcPageActions(this.page)
    }

    public async searchBook(book: string) {
        await this.searchActions.searchBookData(book)
    }




}