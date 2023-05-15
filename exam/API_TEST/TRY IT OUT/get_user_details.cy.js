/// <reference types="cypress" />

describe('API GET', () => {
  it('should get a user detail', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/1107',
      headers: {
        'Authorization': 'Bearer fa5928debee83de6885741df29ce9ff452ad976a4f62c86aaf160cb7d08540d4'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)

      cy.wrap(response.body).should((body) => {
        expect(response.body).to.have.property('id', 1107);
        expect(response.body).to.have.property('name', 'Chandrakin Verma');
        expect(response.body).to.have.property('email', 'chandrakin_verma@leannon-douglas.name');
        expect(response.body).to.have.property('gender', 'female');
        expect(response.body).to.have.property('status', 'inactive');
      });
      
    })
  })
})

