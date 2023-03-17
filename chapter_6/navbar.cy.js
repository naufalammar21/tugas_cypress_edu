/// <reference types="cypress" />

describe('Navbar Test',()=>{

    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
       
    });
    it('should check navbar',()=>{
    // navbar online banking
       cy.get('#nav').should('have.length',1) //new assertion
       cy.contains('Online Banking').click()
       cy.url().should('include','online-banking.html')
       cy.get('h1').should('be.visible')

    // navbar feedback
       cy.contains('Feedback').click()
       cy.url().should('include','feedback.html')

       cy.contains('Zero Bank').click()
       cy.url().should('include','index.html')
       cy.get('.navbar-inner').should('have.css', 'padding-left', '0px') //new assertion
    });


});