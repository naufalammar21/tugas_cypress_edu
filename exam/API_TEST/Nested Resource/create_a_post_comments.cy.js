/// <reference types="cypress" />

describe('API POST', () => {
  it('create post comments', () => {
    const user_post = {
      "post_id": 24960,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "body": "This is the first comment on post 24960."
    }


    const headers = {
      'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
    };

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/posts/24960/comments',
      headers: headers,
      body: user_post
    }).then((response) => {       
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('post_id', 24960);
      expect(response.body).to.have.property('name', 'John Doe');
      expect(response.body).to.have.property('email', 'johndoe@example.com');
      expect(response.body).to.have.property('body', 'This is the first comment on post 24960.');
    });
  });
});