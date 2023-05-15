/// <reference types="cypress" />

describe('API GET', () => {
  it('Retrieves Post Comments', () => {

    const headers = {
      'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
    };

    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/posts/24960/comments',
      headers: headers,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array').and.not.be.empty;
      
      expect(response.body[0]).to.have.property('post_id', 24960);
      expect(response.body[0]).to.have.property('name', 'John Doe');
      expect(response.body[0]).to.have.property('email', 'johndoe@example.com');
      expect(response.body[0]).to.have.property('body', 'This is the first comment on post 24960.');
    });
  });
});
