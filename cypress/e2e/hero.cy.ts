/* eslint-disable cypress/unsafe-to-chain-command */

describe('Test to validate hero', () => {
  it('there is header main title', () => {
    cy.visit('/')
    cy.contains('h1', 'Conheça o Covidômetro')
  })
})
