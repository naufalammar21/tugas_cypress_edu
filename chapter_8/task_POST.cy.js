/// <reference types="cypress" />

describe('API POST Test',()=>{

    it('Add a New User',()=>{

        var user = {
            "name": "king messi",
            "job": "football"
        }
    
        cy.request('POST','https://reqres.in/api/users', user).then((Response)=>{
        expect(Response.status).equal(201)  
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name','king messi')
            expect(response.body).to.have.property('job','football')
        })
        



    });
})