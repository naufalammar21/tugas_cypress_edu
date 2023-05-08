import 'cypress-iframe';
import 'cypress-xpath'
// import 'cypress-xpath';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the midtrans website #2',()=>{
    //TODO
    cy.visit('https://demo.midtrans.com/')
})

When('I click the buy now button and fill the form #2',()=>{
    cy.contains('BUY NOW').click()
    cy.xpath("//input[@class='text-right']").clear().type('250000')
    cy.xpath("//input[@value='Budi']").clear().type('ammar')
    cy.xpath("//input[@value='budi@utomo.com']").clear().type('ammarhtr@gmail.com')
    cy.xpath("//input[@value='081808466410']").clear().type('087774403516')
    cy.xpath("//input[@value='Jakarta']").clear().type('Tangerang')
    cy.xpath("//textarea[.='MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11']").clear().type('Bukit Tiara')
    cy.xpath("//input[@value='10220']").clear().type('15710')

})

Then('payment sucess with bank transfer' , () => {
    cy.get('.cart-checkout').click()
    cy.iframe('iframe[id="snap-midtrans"]').find('img[alt="BNI"]').click();
    cy.iframe().contains('BNI').click()
    cy.iframe().contains('Copy').click()
    cy.iframe().contains('Back to merchant').click()  
})