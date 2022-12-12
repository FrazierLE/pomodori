describe('Pomodori details page flows', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      method: 'GET',
      fixture: '../fixtures/details.json'
    })
    cy.visit('http://localhost:3000/movies/436270')
  })
  it('Should display webpage title', () => {
    cy.get('.title').contains('🍅 Pomodori Putridi 🍅')
  });
  it('Should have a backdrop photo', () => {
    cy.get('.imgs').find('img').url('https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
})
  it('Should have a poster photo', () => {
    cy.get('.imgs').find('img').url('https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
  })
  it('Should have a title, release date, overview, genre, budget, revenue, runtime, tagline, and average rating', () => {
    cy.get('.movie-info-txt').should('contain', 'Black Adam')
      .and('contain', '2022-10-19')
      .and('contain', "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.")
      .and('contain', 'Action, Fantasy, Science Fiction')
      .and('contain', '$200,000,000.00')
      .and('contain', '$384,571,691.00')
      .and('contain', "The world needed a hero. It got Black Adam.")
      .and('contain', '2 hours 5 minutes')
      .and('contain', '40%')
    })
  it('Should have a home button', () => {
    cy.get('.glow-hover').click()
  })
});

