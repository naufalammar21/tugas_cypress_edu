/// <reference types="cypress" />

describe('API PUT', () => {
    it('update user', () => {
      const user = {
        "name": "Woro Widowati singer",
        "email": "woro_widowati0071@gmail.com",
        "gender": "female",
        "status": "inactive"
      };
  
      const headers = {
        'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
      };
  
      cy.request({
        method: 'PUT',
        url: 'https://gorest.co.in/public/v2/users/874',
        headers: headers,
        body: user
      }).then((response) => {       
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Woro Widowati singer');
        expect(response.body).to.have.property('email', 'woro_widowati0071@gmail.com');
        expect(response.body).to.have.property('gender', 'female');
        expect(response.body).to.have.property('status', 'inactive');
      });
    });
  });
  