describe('Pomodori homepage flows', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',{
      method: 'GET',
      fixture: '../fixtures/movies.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should have a home page title', () => {
    cy.get('.title').contains('🍅 Pomodori Putridi 🍅')
  }) 

  it('Should have a live search bar', () => {
    cy.get('input').type('woman')
  })

  it('Should display all the movies', () => {
      cy.get('ul').should('have.length', 3)
      cy.get(':nth-child(1) > ul > .card > a > img').should('have.css', 'width', '500px')
      cy.get(':nth-child(1) > ul > .card > a > img').should('have.css', 'height', '600px')

      cy.get('li[class=card]').eq(0).find('img').url('https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
      cy.get('li[class=card]').eq(0).find('img').should('have.attr', 'alt', 'Black Adam')

      cy.get('li[class=card]').eq(1).find('img').url('https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg')
      cy.get('li[class=card]').eq(1).find('img').should('have.attr', 'alt', 'The Woman King')

      cy.get('li[class=card]').eq(2).find('img').url('https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg')
      cy.get('li[class=card]').eq(2).find('img').should('have.attr', 'alt', 'R.I.P.D. 2: Rise of the Damned')
  })

  it('Should be able to click on an image', () => {
    cy.get(':nth-child(1) > ul > .card > a > img').click()
    cy.location("pathname").should("eq", "/movies/436270")
  })
});
