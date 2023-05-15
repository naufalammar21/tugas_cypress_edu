/// <reference types="cypress" />

describe('Create Comment', () => {
  it('Creates a new comment', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/posts/24894/comments',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4',
      },
      body: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        body: 'This is a new comment.',
      },
    }).then((response) => {
      cy.log('Response:', response);

      // Get all fields and values
      const fields = Object.entries(response.body);

      // Log field and value for each entry
      fields.forEach(([field, value]) => {
        cy.log(`${field}: ${value}`);
      });

      expect(response.status).to.equal(201);
    });
  });
});
