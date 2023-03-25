/// <reference types="cypress" />

describe('API DELETE Test',()=>{

    it.only('Delete New User',()=>{

        cy.request('DELETE','https://reqres.in/api/users/2').then((Response)=>{
            expect(Response.status).equal(204)
                        
        })    
        
    });

    it.only('Validate Header',()=>{

        cy.request('https://reqres.in/api/users/2').as('reqres')
        cy.get('@reqres').its('headers').its('connection').should('include','keep-alive')
        cy.get('@reqres').its('headers').its('server').should('include','cloudflare')
    });
    
})