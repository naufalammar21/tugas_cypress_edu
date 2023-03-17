
describe('All Process E2E',function(){

    before(()=>{
        cy.visit('https://www.saucedemo.com')
        // cy.url().should('include','index.html')
    });
    
    
    it('Should try to login',()=>{
        
        cy.login_saucedemo()
        cy.main_navbar_saucedemo()
        cy.login_negative_saucedemo()
        cy.login_saucedemo()
        cy.sort_item()
        cy.cancel_buy_product()
        cy.buy_product()
        cy.cancel_order()
        cy.get('#checkout').click()
        cy.order()

    })
        
});