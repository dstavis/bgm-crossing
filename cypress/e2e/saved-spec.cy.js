describe('saved list', () => {

  beforeEach(() => {
    cy.intercept("https://acnhapi.com/v1/backgroundmusic/", { fixture: 'background-music'})
    cy.intercept("https://acnhapi.com/v1/hourly/15", {})
    cy.intercept("https://acnhapi.com/v1/hourly/12", {})
  })

  it('can visit the saved route', () => {
    cy.wait(1500)
    cy.visit('localhost:3000/')
    cy.get('[href="/saved"]').click()
    cy.url().should("contain", "/saved")
  })

  it('can save a song', () => {
    cy.get('.save-button').click()
    cy.get('.saved-song-name').should("exist")
  })

  it('can save a different song', () => {
    cy.get('[href="/"]').click()
    cy.get('#hour-select').select(4)
    cy.get('.save-button').click()
    cy.get('[href="/saved"]').click()
    cy.get('.saved-song-name').should("have.length", 2)
  })

  it('can switch to a saved song', () => {
    cy.get('audio').should("have.attr", "src", "https://acnhapi.com/v1/hourly/12")
    cy.get(':nth-child(2) > .play-button').click()
    cy.get('audio').invoke("attr", "src").should("not.equal", "https://acnhapi.com/v1/hourly/12")
  })

  it('can remove a saved song', () => {
    cy.get('.remove-button').first().click()
    cy.get('.saved-song-name').should("have.length", 1)
  })

})