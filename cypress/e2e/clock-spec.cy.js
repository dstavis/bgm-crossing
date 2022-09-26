describe('clock', () => {
  it('loads home route', () => {
    cy.visit('localhost:3000/')
    cy.get('h1').contains("BGM Crossing")
  })

  it('correct link is active', () => {
    cy.get('.active').contains("Clock")
  })

  it('correct link is active', () => {
    cy.get('.active').contains("Clock")
  })

  it('shows current time component', () => {
    cy.get('.current-time-heading').contains("Current Time")
    cy.get('.current-time').contains("M")
  })

  it('shows time travel component', () => {
    cy.get('#hour-select').should("exist")
  })

  it('has the correct hour options', () => {
    cy.get('option').first().contains("Real Time")
    cy.get('option').eq(13).contains("12 PM")
    cy.get('option').last().contains("11 PM")
  })
})