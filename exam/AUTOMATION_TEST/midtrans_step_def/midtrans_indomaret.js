import 'cypress-iframe';
import 'cypress-xpath'
// import 'cypress-xpath';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the midtrans website #4',()=>{
    //TODO
    cy.visit('https://demo.midtrans.com/')
})

When('I click the buy now button and fill the form #4',()=>{
    cy.contains('BUY NOW').click()
    cy.xpath("//input[@class='text-right']").clear().type('20000')
    cy.xpath("//input[@value='Budi']").clear().type('Robert')
    cy.xpath("//input[@value='budi@utomo.com']").clear().type('robertlewandowski@barcelona.com')
    cy.xpath("//input[@value='081808466410']").clear().type('081888878988')
    cy.xpath("//input[@value='Jakarta']").clear().type('Barcelona')
    cy.xpath("//textarea[.='MidPlaza 2, 4th Floor Jl.Jend.Sudirman Kav.10-11']").clear().type('Camp Nou')
    cy.xpath("//input[@value='10220']").clear().type('14999')

})

Then('payment sucess with indomaret payment method' , () => {
    cy.get('.cart-checkout').click()
    cy.iframe('iframe[id="snap-midtrans"]').find('img[alt="Indomaret"]').click();
    cy.iframe('iframe[id="snap-midtrans"]').find('img[alt="Barcode"]').should('be.visible');
    

    
})