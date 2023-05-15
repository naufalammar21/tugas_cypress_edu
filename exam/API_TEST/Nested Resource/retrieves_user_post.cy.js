describe('GET and POST Requests with Authorization', () => {
  const token = 'fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'

  it('should get existing posts and create a new post with authorization', () => {
    // GET request to retrieve existing posts
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/1092/posts',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((getResponse) => {
      // Display the existing posts
      cy.log('Existing Posts:')
      cy.log(JSON.stringify(getResponse.body))

      // Create a new post
      const newPost = {
        title: 'My New Post',
        body: 'This is the content of my new post.'
      }

      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users/1092/posts',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: newPost
      }).then((postResponse) => {
        // Display the status code
        cy.log('Status Code:', postResponse.status)

        // Display the response body
        cy.log('Response Body:')
        cy.log(JSON.stringify(postResponse.body))
      })
    })
  })
})
