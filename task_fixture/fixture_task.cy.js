
describe('Login with fixture data',function(){
    
    
     it('Should try to login',()=>{
            cy.visit('https://www.saucedemo.com/')
            cy.fixture("data_sauce_demo").then(user=>{
        

            const username = user.username
            const password = user.password
            const first_name = user.first_name
            const last_name = user.last_name
            const zip = user.zip

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)
            cy.get('#login-button').click()


            //page2
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').click()
            cy.get('#checkout').click()
            cy.get('#first-name').type(first_name)
            cy.get('#last-name').type(last_name)
            cy.get('#postal-code').type(zip)
            cy.get('#continue').click()
            cy.get('#finish').click()
            
        })

            

            


        

    });
});