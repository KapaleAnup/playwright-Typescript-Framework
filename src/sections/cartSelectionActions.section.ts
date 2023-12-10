import { Page, expect } from "@playwright/test";

export default class CartSelectionAction {

    page: Page
    constructor(page: Page) {
        this.page = page
    }

    //Localtor 
    amountText = () => this.page.locator("mat-card-content[class='mat-card-content'] p")
    addToCartBtn = () => this.page.getByText('Add to Cart');
    cartBadgeCount = () => this.page.locator("//span[@class='mat-badge-content mat-badge-active']")
    cartItems = () => this.page.locator('button').filter({ hasText: 'shopping_cart1' })
    clickOnAddItemBtn = () => this.page.locator('button').filter({ hasText: 'add_circle' });

    //mat-icon[normalize-space()='shopping_cart']

    // Actions
    async addToCartButton() {
        let bookPrice = await this.amountText().textContent();
        if (bookPrice !== null || bookPrice !== " ") {
            await this.addToCartBtn().click()
        } else {
            throw new Error("Book amount not available")
        }

        let badgeCount = await this.cartBadgeCount().textContent()
        console.log("Added cart count is :" + badgeCount)

        await this.cartItems().click();

        await this.clickOnAddItemBtn().click();
    }
}