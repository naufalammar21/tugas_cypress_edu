/// <reference types="cypress" />

describe('API POST', () => {
    it('create a post comments', () => {
      const comment = {
        "name": "kk John Doe",
        "email": "johndoe01@example.com",
        "body": "test comment"
      };
  

      const headers = {
        'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
      };
  
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/posts/874/comments',
        headers: headers,
        body: comment
      }).then((response) => {       
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name', 'kk John Doe');
        expect(response.body).to.have.property('email', 'johndoe01@example.com');
        expect(response.body).to.have.property('body', 'test comment');
      });
    });
  });
  