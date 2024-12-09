
import { HomePage } from './homePage';





export class LoginPage extends HomePage {

  

    constructor(page) {
        super(page);
        this.emailField = "[id='user-name']";
        this.passwordField = "[id='password']";
        this.signinButton = "[id='login-button']";

    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterEmail(email) {
        await this.fillText(this.emailField, email);
    }

    async enterPassword(password) {
        await this.fillText(this.passwordField, password);
    }

    async clickOnSigninButton() {
        await this.clickOnElement(this.signinButton);
        
    }

   
    
        
    }



   

