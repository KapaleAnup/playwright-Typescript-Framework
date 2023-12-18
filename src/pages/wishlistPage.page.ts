import { Locator, Page, expect } from "@playwright/test"

export default class WishlistPage {

    page: Page

    readonly wishlistBtn: Locator
    readonly wishlist_msg: Locator
    readonly continueShoppingBtn: Locator
    readonly favouriteBtn: Locator
    readonly removeBtn: Locator


    constructor(page: Page) {
        this.page = page;
        this.wishlistBtn = page.locator("button[class='mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted'] mat-icon[role='img']")
        this.wishlist_msg = page.locator('.mat-card-title')
        this.continueShoppingBtn = page.getByRole('button', { name: 'Continue shopping' })
        this.favouriteBtn = page.locator("(//span[@class='material-icons favourite-unselected ng-star-inserted'][normalize-space()='favorite'])").first()
        // this.removeBtn = page.getByRole('button', { name: 'Remove from Wishlist' })
        this.removeBtn = page.getByText('Remove from Wishlist')
    }

    //favouriteBtn = () => this.page.$$('material-icons favourite-unselected ng-star-inserted')

    async addFavouriteBooks() {

        await this.wishlistBtn.click()
        let checkMessage = await this.wishlist_msg.isVisible();
        if (checkMessage == true) {
            await this.continueShoppingBtn.click();
        }


        await this.favouriteBtn.click()
        await this.wishlistBtn.click()
        await this.removeBtn.click()

        expect(await this.wishlist_msg.isVisible());


        //  console.log("favourite counts :", count)
        //    for(let allfavorites of alllist){
        //     allfavorites
        //    }
        //     console.log("Item added to your wishlist")

        //     await this.wishlistBtn.click();


    }

}