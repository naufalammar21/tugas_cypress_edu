/// <reference types="cypress" />

before(()=>{
    cy.visit('zero.webappsecurity.com/index.html')
    cy.url().should('include','index.html')
    cy.get('#signin_button').click()
})

it('should try to login and logout',()=>{
    cy.login_negative()
    cy.login_positive()
    // cy.logout()

    cy.get('.icon-user').click()
    cy.get('#logout_link').click()
    cy.contains('Online Banking').should('be.visible')

})