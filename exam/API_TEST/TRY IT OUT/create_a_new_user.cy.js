/// <reference types="cypress" />

describe('API POST', () => {
    it('Add a New User', () => {
      const user = {
        "name": "yeni inka",
        "email": "yeniinka01@macgyver.com",
        "gender": "female",
        "status": "active"
      };
  
      const headers = {
        'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
      };
  
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users/',
        headers: headers,
        body: user
      }).then((response) => {       
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name', 'yeni inka');
        expect(response.body).to.have.property('email', 'yeniinka01@macgyver.com');
        expect(response.body).to.have.property('gender', 'female');
        expect(response.body).to.have.property('status', 'active');
      });
    });
  });
  