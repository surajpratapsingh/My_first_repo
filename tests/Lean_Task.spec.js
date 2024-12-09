import{test , expect} from '@playwright/test';
import {LoginPage } from '../pages/loginPage'
import {HomePage} from '../pages/homePage';


test("Lean Task" , async function ({page}) {

const login= new LoginPage(page);
const home= new HomePage(page);

await login.navigateToLoginPage();
await login.enterEmail("standard_user");
await login.enterPassword("secret_sauce");
await login.clickOnSigninButton();

await expect(page).toHaveURL(/inventory/);

await home.clickOnAddToCartButton();

await home.clickonAddtoCartTrolleyIcon();

await expect(page).toHaveURL(/cart/);

await home.clickonCheckoutButton();

await expect(page).toHaveURL(/checkout/);

await home.enterfirstName("Suraj");

await home.enterlastName("Singh");

await home.enterzipCode("226005");

await home.clickonContinueButton();

await expect(page.locator("//div[text()='Payment Information:']")).toContainText('Payment');




    
}
)