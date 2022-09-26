describe('clock', () => {
  beforeEach(() => {
    cy.intercept("https://acnhapi.com/v1/backgroundmusic/", { fixture: 'background-music'})
    cy.intercept("https://acnhapi.com/v1/hourly/15", {})
    cy.intercept("https://acnhapi.com/v1/hourly/12", {})
  })
  
  it('loads home route', () => {
    cy.wait(1500)
    cy.visit('localhost:3000/')
    cy.get('h1').contains("BGM Crossing")
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

  it('time travel component has the correct hour options', () => {
    cy.get('option').first().contains("Real Time")
    cy.get('option').eq(13).contains("12 PM")
    cy.get('option').last().contains("11 PM")
  })

  it('song changes to proper hour when its option is selected', () => {
    cy.get('#hour-select').select(4)
    cy.get("audio").should("have.attr", "src", "https://acnhapi.com/v1/hourly/12")
  })

  it('song changes back when Real Time is selected', () => {
    cy.get('#hour-select').select(0)
    cy.get("audio").invoke("attr", "src").should("not.equal", "https://acnhapi.com/v1/hourly/12")
  })
})