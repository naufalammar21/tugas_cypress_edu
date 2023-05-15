/// <reference types="cypress" />

describe('Get Comments', () => {
  it('Retrieves comments', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/posts/24894/comments',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4',
      },
    }).then((response) => {
      cy.log('Response Status:', response.status);
      cy.log('Response Body:', response.body);

      if (response.body.data && response.body.data.length > 0) {
        const comment = response.body.data[0];
        const fields = Object.entries(comment);

        fields.forEach(([field, value]) => {
          cy.log(`${field}: ${value}`);
        });
      } else {
        cy.log('No comments found.');
      }

      expect(response.status).to.equal(200);
    });
  });
});
