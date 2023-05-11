import 'cypress-iframe';
import 'cypress-xpath'
// import 'cypress-xpath';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the midtrans website',()=>{
    //TODO
    cy.visit('https://demo.midtrans.com/')
})

When('I click the buy now button and fill the form',()=>{
    cy.contains('BUY NOW').click()

})

Then('payment sucess' , () => {
    cy.get('.cart-checkout').click()
    cy.iframe('[id="snap-midtrans"]').then(($iframe) => {
        cy.wrap($iframe.contents().find('img[alt="GoPay"]')).click();
    });
    cy.iframe('iframe[id="snap-midtrans"]').find('img[alt="qr-code"]').should('be.visible');
    

    
})