import 'cypress-iframe';
import 'cypress-xpath'
// import 'cypress-xpath';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the midtrans website #5',()=>{
    //TODO
    cy.visit('https://demo.midtrans.com/')
})

When('I click the buy now button and fill the form #5',()=>{
    cy.contains('BUY NOW').click()
    cy.xpath("//input[@class='text-right']").clear().type('220000')
    cy.xpath("//input[@value='Budi']").clear().type('Christina Peri')
    cy.xpath("//input[@value='budi@utomo.com']").clear().type('christinaperi@athousandyear.com')
    cy.xpath("//input[@value='081808466410']").clear().type('0821998929889')
    cy.xpath("//input[@value='Jakarta']").clear().type('New York')
    cy.xpath("//textarea[.='MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11']").clear().type('Staples Center')
    cy.xpath("//input[@value='10220']").clear().type('137575')

})

Then('payment sucess with Alfa Mart payment method' , () => {
    cy.get('.cart-checkout').click()
    cy.iframe('iframe[id="snap-midtrans"]').find('img[alt="Alfamart"]').click();
    cy.iframe('iframe[id="snap-midtrans"]').find('img[alt="Barcode"]').should('be.visible');
    

    
})