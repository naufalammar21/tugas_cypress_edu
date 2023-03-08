/// <reference types="cypress" />

describe('working with inputs',()=>{
    it('Visit the websute',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });
    it('Should fill username',()=>{
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password',()=>{
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
    });

    it('Should active checkbox keep me sign in',()=>{
        cy.get('#user_remember_me')
        cy.get('#user_password').type('checkbox')
    });

});