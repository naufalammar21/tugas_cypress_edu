import 'cypress-iframe';
import 'cypress-xpath'
// import 'cypress-xpath';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the midtrans website #6',()=>{
    //TODO
    cy.visit('https://demo.midtrans.com/')
})

When('I click the buy now button and fill the form #6',()=>{
    cy.contains('BUY NOW').click()
    cy.xpath("//input[@class='text-right']").clear().type('299.000')
    cy.xpath("//input[@value='Budi']").clear().type('Tulus')
    cy.xpath("//input[@value='budi@utomo.com']").clear().type('perahukertas@gmail.com')
    cy.xpath("//input[@value='081808466410']").clear().type('0877741411197')
    cy.xpath("//input[@value='Jakarta']").clear().type('Surabaya')
    cy.xpath("//textarea[.='MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11']").clear().type('Kebayoran Baru Jakarta')
    cy.xpath("//input[@value='10220']").clear().type('15190')

})

Then('payment sucessfully',() => {
    cy.get('.cart-checkout').click()
    cy.iframe('iframe[id="snap-midtrans"]').find('img[alt="Mastercard"]').click();
    cy.iframe('[id="snap-midtrans"]').find('div.card-number-input-container input.valid-input-value').eq(0).clear().type('1946340012345678');
    cy.wait(2000); 
    cy.iframe('[id="snap-midtrans"]').find('#card-expiry.valid-input-value').clear().type('0824');
    cy.iframe('[id="snap-midtrans"]').find('#card-cvv').clear().type('123');
    


    cy.get('iframe[id="snap-midtrans"]')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
    .find('div.card-warning.text-failed')
    .scrollIntoView({ scrollBehavior: 'center' })
    .should('be.visible', { force: true })
    .within(() => {
      cy.contains('Make sure your card info is correct.').should('be.visible');
    });
  
      
    

    
})