describe('GET Request for User Todos', () => {
  const token = 'fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'

  it('should retrieve todos for the user', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/1093/todos',
      headers: {
        Authorization: `Bearer ${token}`
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
