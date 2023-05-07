/// <reference types="cypress" />

describe('API GET', () => {
    it('Retrieves user todos', () => {
     
      const headers = {
        'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
      };
  
      cy.request({
        method: 'GET',
        url: ' https://gorest.co.in/public/v2/users/874/todos',
        headers: headers,
      }).then((response) => {       
        expect(response.status).to.eq(200);
      });
    });
  });
  