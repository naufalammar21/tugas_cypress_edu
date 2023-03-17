/// <reference types="cypress" />

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
})


Cypress.Commands.add('pay', (sp_payee, sp_account, sp_amount,sp_description,sp_date,pay_saved_payees) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#sp_payee').select('sprint')
    cy.get('#sp_account').select('2')
    cy.get('#sp_amount').type('50000')
    cy.get('#sp_description').type('This is the Description')
    cy.get('#sp_date').type('2022-03-09')
    cy.get('#pay_saved_payees').click()
})


Cypress.Commands.add('login_negative', (user_login,invalid_username,user_password,sign_in,alert_error) => {
    cy.get('#user_login').should('be.visible')
    cy.get('#user_login').type('invalid username')
    cy.get('#user_password').type('invalid password')
    cy.contains('Sign in').click()
    cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')
})

Cypress.Commands.add('login_positive', (user_login,password,sign_in,nav_tabs) => {
    cy.fixture('user').then(user => {
        const username = user.username
        const password = user.password
        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        cy.contains('Sign in').click()
        cy.get('ul.nav-tabs').should('be.visible')
    })

   

    
})



Cypress.Commands.add('logout', (icon_user, logout_link,online_banking) => {
       
    cy.get('.icon-user').click()
    cy.get('#logout_link').click()
    cy.contains('Online Banking').should('be.visible')
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
