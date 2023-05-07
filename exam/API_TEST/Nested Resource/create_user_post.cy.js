/// <reference types="cypress" />

describe('API POST', () => {
    it('create user posts', () => {
      const user_post = {
        "user_id": 874,
        "title": "New post",
        "body": "This is a new post created via JSON request."
      };
  

      const headers = {
        'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
      };
  
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users/874/posts',
        headers: headers,
        body: user_post
      }).then((response) => {       
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('user_id', 874);
        expect(response.body).to.have.property('title', 'New post');
        expect(response.body).to.have.property('body', 'This is a new post created via JSON request.');
      });
    });
  });
  