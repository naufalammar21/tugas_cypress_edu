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

Cypress.Commands.add('login_saucedemo', (user_name, password,login_button) => {
       
        cy.fixture("data_sauce_demo").then(user=>{
        

            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('#login-button').should('be.visible')
            cy.get('#login-button').click()
             
        })
})

Cypress.Commands.add('main_navbar_saucedemo', (user_name, password,login_button) => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#inventory_sidebar_link').click()
    cy.get('#about_sidebar_link').click()
    cy.go('back')
    cy.get('#reset_sidebar_link').click({force:true})
    cy.get('#logout_sidebar_link').click({force:true})
   
})

Cypress.Commands.add('login_negative_saucedemo', (user_login,invalid_username,user_password,sign_in,alert_error) => {

    cy.fixture("data_sauce_demo").then(user=>{
        

        const username_negative = user.username_negative
        const password_negative = user.password_negative

        cy.get('#user-name').clear()
        cy.get('#user-name').type(username_negative)
        cy.get('#password').clear()
        cy.get('#password').type(password_negative)
        cy.get('#login-button').click() 
        cy.get('h3').contains('Epic sadface: Username and password do not match any user in this service')

    })
})

Cypress.Commands.add('sort_item', (product_az,product_ha,product_low,product_height) => {
    // cy.get('.product_sort_container').click()
    cy.get('.product_sort_container').select('az')
    cy.get('.product_sort_container').select('za')
    cy.get('.product_sort_container').select('lohi')
    cy.get('.product_sort_container').select('hilo')
    
   
})

Cypress.Commands.add('cancel_buy_product', (add_jacket,add_backpack,remove_jacket,shoping_cart,remove2,continue_shop) => {
    // cy.get('.product_sort_container').click()
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#remove-sauce-labs-fleece-jacket').click()
    cy.get('.shopping_cart_badge').click()
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('#continue-shopping').click()
})

Cypress.Commands.add('buy_product', (add_jacket,add_backpack,remove_jacket,chart,add_bike,add_tshirt,chart2,checkout) => {
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#remove-sauce-labs-fleece-jacket').click()
    cy.get('.shopping_cart_badge').click()
    cy.get('#continue-shopping').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    cy.get('.shopping_cart_badge').click()
    cy.get('#checkout').click()
})

Cypress.Commands.add('cancel_order', () => {
    cy.fixture("data_sauce_demo").then(user=>{
        

        const first_name = user.first_name
        const last_name = user.last_name
        const zip = user.zip

        cy.get('#first-name').clear()
        cy.get('#first-name').type(first_name)
        cy.get('#last-name').clear()
        cy.get('#last-name').type(last_name)
        cy.get('#postal-code').clear()
        cy.get('#postal-code').type(zip)
        cy.get('#cancel').click() 
        

    })
})

Cypress.Commands.add('order', () => {
    cy.fixture("data_sauce_demo").then(user=>{
        

        const first_name = user.first_name
        const last_name = user.last_name
        const zip = user.zip

        cy.get('#first-name').clear()
        cy.get('#first-name').type(first_name)
        cy.get('#last-name').clear()
        cy.get('#last-name').type(last_name)
        cy.get('#postal-code').clear()
        cy.get('#postal-code').type(zip)
        cy.get('#continue').click() 
        cy.get('#finish').click()
        cy.get('.complete-header').should('be.visible')
        

    })
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
