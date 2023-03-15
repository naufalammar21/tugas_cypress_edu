/// <reference types="cypress" />

describe('Custom commands',()=>{

    it('Should Load Login page',()=>{

        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.login('username','password')
        cy.get('#pay_bills_tab').click()
        cy.pay()
    });

});