describe('POST Request for Creating Todo', () => {
  const token = 'fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'

  it('should create a new todo for the user', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users/1093/todos',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: {
        title: 'My New Todo',
        completed: false,
        due_on: '2023-05-15',
        status: 'pending'
      }
    }).then((response) => {
      // Display the status code
      cy.log('Status Code:', response.status)

      // Display the response body
      cy.log('Response Body:')
      cy.log(JSON.stringify(response.body))
    })
  })
})
