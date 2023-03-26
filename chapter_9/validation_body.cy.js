/// <reference types="cypress" />

describe('API Validation Body',()=>{

    it.only('Validate Body',()=>{

        cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')   
        cy.get('@pokemon').its('status').should('equal',200)
        cy.get('@pokemon').its('body').should('include',{name:'ditto'})
        
    });
    
})