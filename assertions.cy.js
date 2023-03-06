/// <reference types="cypress" />
describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')
        cy.pause()

        cy.contains('type').click()

        // should be on a new url which includes '/comands/actiona'
        cy.url().should('include','/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('ammarhtr@gmail.com')
            .should('have.value','ammarhtr@gmail.com')
    })
})