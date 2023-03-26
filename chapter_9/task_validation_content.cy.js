/// <reference types="cypress" />

describe('API Validation Content',()=>{

   
    it('Update User',()=>{

        var user = {
            "abilities" : [
                {
                    "ability":{
                        "name" : "limber",
                        "url" : 'https://pokeapi.co/api/v2/ability/7/'
                    },
                }
            ],
       }

       expect(response.body.abilities).to.eq({name:'limber'})
    });
    
    
})