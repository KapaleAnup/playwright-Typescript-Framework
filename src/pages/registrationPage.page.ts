import { Page } from "playwright/test";
import RegistrationActionPage from "../sections/registrationActions.section";


export default class RegistratonPage {

    page: Page
    registrationActionPage: RegistrationActionPage
    constructor(page: Page) {
        this.page = page;
        this.registrationActionPage = new RegistrationActionPage(this.page)
    }

    public async doRegistration(firstName: string, lastname: string, userName: string, password: string, confirmPassword: string) {
        await this.registrationActionPage.clickOnRegisterTab();
        await this.registrationActionPage
            .registrationForm(firstName, lastname, userName, password, confirmPassword)
    }

}