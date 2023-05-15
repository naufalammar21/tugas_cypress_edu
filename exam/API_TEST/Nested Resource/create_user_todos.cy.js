/// <reference types="cypress" />

describe('API POST', () => {
  it('create user todos', () => {
    const user_todos = {
      "title": "Task 1",
      "due_on": "2023-05-15",
      "status": "pending"
    };


    const headers = {
      'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
    };

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users/1107/todos',
      headers: headers,
      body: user_todos
    }).then((response) => {       
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('title', 'Task 1');
      expect(response.body).to.have.property('due_on', '2023-05-15T00:00:00.000+05:30');
      expect(response.body).to.have.property('status', 'pending');
    });
  });
});