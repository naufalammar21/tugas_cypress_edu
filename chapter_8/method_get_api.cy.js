/// <reference types="cypress" />

describe('API Test',()=>{

    it('Verify the list users will displayed',()=>{

        cy.request({
            method: 'GET',
            url : 'https://reqres.in/api/users/'
        }).as('users')
        cy.get('@users').its('status').should('equal',200)
    });

});