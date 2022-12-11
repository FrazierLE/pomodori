describe('Pomodori details page flows', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      method: 'GET',
      fixture: '../fixtures/details.json'
    })
    cy.visit('http://localhost:3000/694919')
  })
  it('Should display webpage title', () => {
    cy.contains('Pomodori Putridi')
  });
  it('Should have a backdrop photo', () => {
    cy.get('.imgs').find('img').url('https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')
})
  it('Should have a poster photo', () => {
    cy.get('.imgs').find('img').url('https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
  })
  it('Should have a title, release date, overview, genre, budget, revenue, runtime, tagline, and average rating', () => {
    cy.get('.movie-info-txt').should('contain', 'Money Plane')
      .and('contain', '2020-09-29')
      .and('contain', "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
      .and('contain', 'Action')
      .and('contain', 0)
      .and('contain', 0)
      .and('contain', '')
      .and('contain', '1 hour 22 minutes')
      .and('contain', '69%')
    })
  it('Should have a home button', () => {
    cy.get('.glow-hover').click()
  })
});

