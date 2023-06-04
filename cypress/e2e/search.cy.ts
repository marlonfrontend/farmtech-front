/* eslint-disable cypress/unsafe-to-chain-command */

describe('Test to validate research', () => {
  it('Type in the search field and display the result', () => {
    cy.visit('/')
    cy.get('input').click().type('Brazil')
  })
})
