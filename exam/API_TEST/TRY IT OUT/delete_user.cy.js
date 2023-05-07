/// <reference types="cypress" />

describe('API DELETE', () => {
    it('should delete a user with ID 874', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://gorest.co.in/public/v2/users/874',
        headers: {
          'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
        }
      }).then((response) => {
        expect(response.status).to.eq(204)
      })
    })
  })
  