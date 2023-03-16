/// <reference types="cypress" />

describe('Searchbox Test',()=>{

    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
       
    });
    it('should type into searchbox and submit',()=>{
        cy.get('#searchTerm').type('Zero - Free Access to Online Banking {enter}','a')
        cy.get('#searchTerm').type('Zero - Online Statements {enter}','a')
        cy.get('h2').contains('Search Results:')
    });


});