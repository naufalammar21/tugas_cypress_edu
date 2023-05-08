import 'cypress-iframe';
import 'cypress-xpath'
// import 'cypress-xpath';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the midtrans website #7',()=>{
    //TODO
    cy.visit('https://demo.midtrans.com/')
})

When('I click the buy now button and clear several form #7',()=>{
    cy.contains('BUY NOW').click()
    cy.xpath("//input[@value='Budi']").clear()
    cy.xpath("//input[@value='budi@utomo.com']").clear()

})

Then('checked error message',() => {
    cy.get('.cart-checkout').click()
    cy.contains('Sorry, something went wrong.').should('be.visible');
    
  
      
    

    
})