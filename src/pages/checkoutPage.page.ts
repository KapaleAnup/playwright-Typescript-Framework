import { Locator, Page } from "playwright-core";

export default class CheckOutPage {

    page: Page
    readonly checkoutTitle: Locator
    readonly orderSummaryText: Locator
    readonly bookTitle: Locator
    readonly bookQty: Locator
    readonly bookMRP: Locator
    readonly bookTotal: Locator
    readonly grandTotal: Locator

    readonly username: Locator
    readonly addressLine1: Locator
    readonly addressLine2: Locator
    readonly pincode: Locator
    readonly state: Locator
    readonly placeOrderBtn: Locator

    //table tr td a

    constructor(page: Page) {
        this.page = page;
        this.checkoutTitle = page.locator("div[class='docs-example-viewer-title-spacer'] h2")
        this.orderSummaryText = page.locator("mat-card[class='mat-card mat-focus-indicator mat-elevation-z4 ng-star-inserted'] mat-card-title[class='mat-card-title']")
        this.bookTitle = page.locator('table tr td a')
        this.bookQty = page.locator("table[class='table'] td:nth-child(1)")
        this.bookMRP = page.locator('body > app-root:nth-child(1) > div:nth-child(2) > app-checkout:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > mat-card:nth-child(1) > mat-card-content:nth-child(2) > table:nth-child(1) > tr:nth-child(2) > td:nth-child(2)')
        this.bookTotal = page.locator("body app-root td:nth-child(4)")

        this.username = page.getByLabel('Name *')
        this.addressLine1 = page.getByLabel('Address Line 1 *')
        this.addressLine2 = page.getByLabel('Address Line 2 *')
        this.pincode = page.getByLabel('Pincode *')
        this.state = page.getByLabel('State *')
        this.placeOrderBtn = page.getByText('Place Order')

    }


    public async OrderSummaryDetails() {
        let orderSummaryData = this.orderSummaryText.isVisible()
        console.log("Order summary title : ", orderSummaryData)

        let booktitle = await this.bookTitle.textContent();
        console.log("booktitle is : ", booktitle)

        let bookMRP = await this.bookMRP.textContent();
        console.log("bookMRP is : ", bookMRP)

        let bookQty = await this.bookQty.textContent();
        console.log("bookQty is : ", bookQty)

        let bookTotal = await this.bookTotal.textContent();
        console.log("bookTotal is : ", bookTotal)

    }


    public async placeOrder(
        firstName: string,
        address1: string,
        address2: string,
        pincode: string,
        state: string
    ) {
        await this.username.fill(firstName)
        await this.addressLine1.fill(address1)
        await this.addressLine2.fill(address2)
        await this.pincode.fill(pincode)
        await this.state.fill(state)

        await this.placeOrderBtn.click()
    }
}