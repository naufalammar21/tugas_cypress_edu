/// <reference types="cypress" />

describe('Searchbox Test',()=>{

    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
       
    });
    it('should type into searchbox and submit',()=>{
        // cy.get('#searchTerm').type('Zero - Free Access to Online Banking {enter}','a')
        // cy.get('#searchTerm').type('Zero - Online Statements {enter}','a')
        cy.get('#searchTerm').type('Zero - Account {enter}')
        // cy.get('h2').contains('Search Results:')

        let checkString = () =>{
            if(cy.get('.top_offset >ul > li')){
                cy.get('.top_offset > ul > li ').contains('Zero')
            }
        }
        checkString()
    });
});