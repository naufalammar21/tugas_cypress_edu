describe('GET Request - User Details', () => {
  it('should get user details', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/1092'
    })
    .then((response) => {
      // Display the status code
      cy.log('Status Code:', response.status)

      // Display the response body
      cy.log('Response Body:')
      cy.log(JSON.stringify(response.body))
    })
  })
})
