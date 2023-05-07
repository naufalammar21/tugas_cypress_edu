/// <reference types="cypress" />

describe('API Test',()=>{

    it('Verify Get users details',()=>{

        cy.request({
            method: 'GET',
            url : 'https://gorest.co.in/public/v2/users/874'
        }).as('users')
        cy.get('@users').its('status').should('equal',200)
    });

});