export class HomePage {

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page) {
        this.page = page;
        this.addToTrolleyIcon = "//a[@class='shopping_cart_link']";
        this.checkOutButton = "//button[@id='checkout']";
        this.firstName = "[id='first-name']";
        this.lastName = "[id='last-name']";
        this.zipCode = "[id='postal-code']";
        this.continueButton = "[id='continue']";
    }

    /* Wait for timeout */
    async wait(){
        await this.page.waitForTimeout(3000);
    }

   
    /* Click on the element */
    async clickOnElement(locator) {
        await this.page.locator(locator).click();
    }

   

    /* Enter the text into the text field */
    async fillText(locator, text) {
        await this.page.locator(locator).fill(text);
    }

    /* Click on Add to Cart Button */
    async clickOnAddToCartButton() {
       
        let len=await this.page.getByText("Add to cart").count();
    
       let counter = 3;
     
        while(counter){
        let ran=Math.floor(Math.random() * (len-1));
        
       
        await this.page.getByText("Add to cart").nth(ran-1).click();
        counter--;
        }

        
    }  
    
    async clickonAddtoCartTrolleyIcon() {
        await this.clickOnElement(this.addToTrolleyIcon);
        
    }

    async clickonCheckoutButton() {
        await this.clickOnElement(this.checkOutButton);
        
    }

    async enterfirstName(firstName) {
        await this.fillText(this.firstName, firstName);
    }

    async enterlastName(lastName) {
        await this.fillText(this.lastName, lastName);
    }

    async enterzipCode(zipCode) {
        await this.fillText(this.zipCode, zipCode);
    }

    async clickonContinueButton() {
        await this.clickOnElement(this.continueButton);
        
    }
   

   

   
    

}