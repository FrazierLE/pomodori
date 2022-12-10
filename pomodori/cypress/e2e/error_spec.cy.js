describe('Pomodori error page flows', () => {

    it('Should display webpage title', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/hi', {
            method: 'GET',
            fixture: '../fixtures/errors.json'
          })
          cy.visit('http://localhost:3000/')
      cy.contains('🍅 Pomodori Putridi 🍅')
    });
  });