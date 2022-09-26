describe('player', () => {

  beforeEach(() => {
    cy.intercept("https://acnhapi.com/v1/backgroundmusic/", { fixture: 'background-music'})
    cy.intercept("https://acnhapi.com/v1/hourly/15", {})
  })

  it('loads home route', () => {
    cy.visit('localhost:3000/')
    cy.get('h1').contains("BGM Crossing")
  })

  it('Player component is visible', () => {
    cy.get('footer').get(".current-song").contains("Currently playing")
  })

  it('Player still visible after navigating to saved route', () => {
    cy.get('[href="/saved"]').click()
    cy.url().should("contain", "/saved")
    cy.get('footer').get(".current-song").contains("Currently playing")
  })

  it('Player has a song', () => {
    cy.get('audio').should("have.attr", "src", "https://acnhapi.com/v1/hourly/15")
  })

})