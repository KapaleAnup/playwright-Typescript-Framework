import { Locator, Page } from "playwright/test";

export default class LoginPage {
    page: Page
    readonly userName: Locator
    readonly password: Locator
    readonly loginBtn: Locator
    readonly loginTab: Locator

    constructor(page: Page) {
        this.page = page
        this.userName = page.getByLabel('Username *')
        this.password = page.getByLabel('Password *')
        this.loginBtn = page.locator('.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary')
        this.loginTab = page.getByRole('button', { name: 'Login' });
    }

    public async clickOnLoginTab() {
        await this.loginTab.click()
    }

    public async doLogin(username: string, password: string) {
        await this.page.waitForTimeout(2000)
        await this.userName.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }




}