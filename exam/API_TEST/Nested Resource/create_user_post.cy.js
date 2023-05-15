describe('POST Request for User Posts', () => {
  const token = 'fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'

  it('should create a new post for the user', () => {
    const postData = {
      title: 'My New Post',
      body: 'This is the content of my new post.'
    }

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users/1092/posts',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: postData
    }).then((response) => {
      // Display the status code
      cy.log('Status Code:', response.status)

      // Display the response body
      cy.log('Response Body:')
      cy.log(JSON.stringify(response.body))
    })
  })
})
