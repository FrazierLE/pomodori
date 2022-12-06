describe('Pomodori details page flows', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',{
      method: 'GET',
      fixture: '../fixtures/example.json'
    })
    cy.visit('http://localhost:3000/')
  })
  it('Should have a title', () => {
    cy.contains('Pomodori')
  });

  it('Should show the first displayed movie\'s details', () => {
      cy.get('.movie-info-txt').should('contain', 'Money Plane').and('contain', 'Average Rating: 6.666666666666667').and('contain', 'Release Date: 2020-09-29')
    });

    it('Should show the second displayed movie\'s details', () => {
      cy.get('.movie-info-txt').should('contain', 'Mulan').and('contain', 'Average Rating: 4.909090909090909').and('contain', 'Release Date: 2020-09-04')
    })

    it('Should show the third displayed specific movie\'s details', () => {
      cy.get('.movie-info-txt').should('contain', 'Rogue').and('contain', 'Average Rating: 5.428571428571429').and('contain', 'Release Date: 2020-08-20')
    })
});

// beforeEach(() => {
//   cy.intercept('https://tea-list-api.herokuapp.com/api/v1/teas',{
//     method: 'GET',
//     fixture: '../fixtures/teas.json'
//   })
//   cy.visit('localhost:3000')
//   })
// it('Should welcome user to Tea Journal', () => {
//   cy.contains('Welcome To Tea Journal')
// })

// it('Should show all Teas available', () => {
//   cy.get('.card-container').within(()=> {
//     cy.get('.tea-card').should('have.length', 4)
//     cy.get('.tea-card').eq(0).should('contain','Yunnan Gold')
//       .and('contain',"pepper")
//       .and('contain', "chocolate")
//       .and('contain', "Steep at 212° for 3-5 minutes")
//     cy.get('.tea-card').eq(1).should('contain','Silver Needle')
//       .and('contain', "nutty")
//       .and('contain', "floral")
//       .and('contain', "Steep at 180° for 3 minutes" )
//     cy.get('.tea-card').eq(2).should('contain','White Peony')
//       .and('contain', "floral")
//       .and('contain', "herbal")
//       .and('contain', "Steep at 180° for 3 minutes")
//     cy.get('.tea-card').eq(3).should('contain','Irish Breakfast')
//       .and('contain', "brisk")
//       .and('contain', "malty")
//       .and('contain',"Steep at 212° for 3-5 minutes")
//   })
// })