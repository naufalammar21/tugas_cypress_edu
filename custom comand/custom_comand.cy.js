describe('Login with fixture data',function(){

    it('Should try to login',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.fixture("user").then(user => {

            const username=user.username
            const password=user.password

            // cy.get('#user_login').type(username)
            // cy.get('#user_password').type(password)
            // cy.contains('Sign in').click()
            cy.login('username','password')


        });

    });

    it('should try to pay ',()=>{

    cy.fixture("user2").then(user2 =>{

    const payee=user2.payee
    const account = user2.account
    const amount = user2.amount
    const date = user2.date
    const description = user2.description

    cy.buy('payee','account','amount','date','description')

    });
    });

});