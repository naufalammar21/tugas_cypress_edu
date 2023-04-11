/// <reference types="cypress" />

// describe("Test Object Ability", () => {
//     it("should have name: limber", () => {
//       const obj = {
//         "abilities": [
//           {
//             "ability": {
//               "name": "limber",
//               "url": "https://pokeapi.co/api/v2/ability/7/"
//             }
//           }
//         ]
//       };
      
//       // Memastikan objek ability memiliki atribut "name" yang diharapkan
//       expect(obj.abilities[0].ability.name).to.eq("limber");
//     });
//   });
  
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
     cy.request('GET','https://pokeapi.co/api/v2/ability/7/', user).then((response) => {
      expect(response.body.name).to.eq(user.abilities[0].ability.name)
     })
  });
})