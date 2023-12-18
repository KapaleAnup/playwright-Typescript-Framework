import { Locator, Page } from "playwright/test";

export default class RegistrationActionPage {

    readonly page: Page
    readonly firstName: Locator
    readonly lastName: Locator
    readonly userName: Locator
    readonly password: Locator
    readonly confirmPass: Locator
    readonly gender: Locator
    readonly registerBtn: Locator
    readonly loginBtn: Locator
    readonly registeruser: Locator

    constructor(page: Page) {
        this.page = page
        this.loginBtn = page.getByText('Login')
        this.registeruser = page.getByText('Register')
        this.firstName = page.getByLabel('First name *')
        this.lastName = page.getByLabel('Last name *');
        this.userName = page.getByLabel('User name *');
        this.password = page.getByLabel('Password *', { exact: true })
        this.confirmPass = page.getByLabel('Confirm Password *')
        this.gender = page.getByText('Male', { exact: true })
        //this.registerBtn = page.getByRole('button', { name: 'Register' })
        this.registerBtn = page.locator("button[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary'] span[class='mat-button-wrapper']")
    }

    public async clickOnRegisterTab() {
        await this.page.waitForTimeout(2000)
        await this.loginBtn.click()
        await this.registeruser.click()
    }

    public async registrationForm(firstName: string, lastname: string, userName: string, password: string, confirmPassword: string) {

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastname);
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.confirmPass.fill(confirmPassword);

        await this.gender.check();
        await this.page.waitForTimeout(2000)
        await this.registerBtn.click();


    }


}