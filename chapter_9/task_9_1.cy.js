/// <reference types="cypress" />

describe('API Validation Body',()=>{

    it.only('Validate Body',()=>{

        cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto').then((response)=>{       
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name','limber')
            // expect(response.body).to.have.property('job','football')
            })
    });
    
})