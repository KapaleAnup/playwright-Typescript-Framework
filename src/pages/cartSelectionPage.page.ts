import { Page } from "@playwright/test";
import CartSelectionAction from "../sections/cartselectionActions.section";

export default class CartSelectionPage {

    page: Page
    cartSelectionActions: CartSelectionAction
    constructor(page: Page) {
        this.page = page;
        this.cartSelectionActions = new CartSelectionAction(this.page)
    }

    async addBookToCart() {
        await this.cartSelectionActions.addToCartButton();
    }
}