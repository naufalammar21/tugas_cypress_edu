import 'cypress-iframe';
import 'cypress-xpath'
// import 'cypress-xpath';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the midtrans website #3',()=>{
    //TODO
    cy.visit('https://demo.midtrans.com/')
})

When('I click the buy now button and fill the form #3',()=>{
    cy.contains('BUY NOW').click()
    cy.xpath("//input[@class='text-right']").clear().type('20000')
    cy.xpath("//input[@value='Budi']").clear().type('Avril')
    cy.xpath("//input[@value='budi@utomo.com']").clear().type('avrillavigne@utomo.com')
    cy.xpath("//input[@value='081808466410']").clear().type('08180987272456')
    cy.xpath("//input[@value='Jakarta']").clear().type('Texas')
    cy.xpath("//textarea[.='MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11']").clear().type('White Building')
    cy.xpath("//input[@value='10220']").clear().type('1045')

})

Then('payment sucess with shopee' , () => {
    cy.get('.cart-checkout').click()
    // cy.iframe('[id="snap-midtrans"]').then(($iframe) => {
    //     cy.wrap($iframe.contents().find('img[alt="ShopeePay"]')).click();
    // });
    cy.iframe('iframe[id="snap-midtrans"]').find('img[alt="ShopeePay"]').click();
    cy.iframe('iframe[id="snap-midtrans"]').find('img[alt="qr-code"]').should('be.visible');
    cy.iframe().contains('Back to merchant').click()

    
})