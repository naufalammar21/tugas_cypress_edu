/// <reference types="cypress" />

describe('API GET', () => {
  it('Retrieves user posts', () => {

    const headers = {
      'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
    };

    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/1109/todos',
      headers: headers,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array').and.not.be.empty;
      expect(response.body[0]).to.have.property('user_id', 1109);
      expect(response.body[0]).to.have.property('title', 'Task 1');
      expect(response.body[0]).to.have.property('due_on', '2023-05-15T00:00:00.000+05:30');
      expect(response.body[0]).to.have.property('status', 'pending');
    });
  });
});

