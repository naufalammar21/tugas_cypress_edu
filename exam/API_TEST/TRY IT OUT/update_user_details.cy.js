describe('PUT Request for User Update', () => {
  const token = 'fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'

  it('should update user data with authorization', () => {
    const updatedUser = {
      name: 'Bang Messi', 
      email: 'messigoat@example.com', 
      gender: 'male', 
      status: 'active'
    }

    cy.request({
      method: 'PUT',
      url: 'https://gorest.co.in/public/v2/users/1092',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: updatedUser
    }).then((response) => {
      // Display the status code
      cy.log('Status Code:', response.status)

      // Display the response body
      cy.log('Response Body:')
      cy.log(JSON.stringify(response.body))
    })
  })
})
