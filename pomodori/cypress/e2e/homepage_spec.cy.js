describe('Pomodori homepage flows', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',{
      method: 'GET',
      fixture: '../fixtures/movies.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should have a home page title', () => {
    cy.get('.title').contains('Pomodori Putridi')
  }) 

  it('Should have a live search bar', () => {
    cy.get('input').type('money')
  })

  it('Should display all the movies', () => {
      cy.get('ul').should('have.length', 3)
      cy.get(':nth-child(1) > ul > .card > a > img').should('have.css', 'width', '500px')
      cy.get(':nth-child(1) > ul > .card > a > img').should('have.css', 'height', '600px')

      cy.get('li[class=card]').eq(0).find('img').url('https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
      cy.get('li[class=card]').eq(0).find('img').should('have.attr', 'alt', 'Money Plane')

      cy.get('li[class=card]').eq(1).find('img').url('https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
      cy.get('li[class=card]').eq(1).find('img').should('have.attr', 'alt', 'Mulan')

      cy.get('li[class=card]').eq(2).find('img').url('https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg')
      cy.get('li[class=card]').eq(2).find('img').should('have.attr', 'alt', 'Rogue')
  })

  it('Should be able to click on an image', () => {
    cy.get(':nth-child(1) > ul > .card > a > img').click()
  })
});
