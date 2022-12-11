describe('Pomodori homepage flows', () => {

    it('Should have a title when there is a server error', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',{
            method: 'GET',
            fixture: ''
          })
          cy.visit('http://localhost:3000/')
          cy.get('.title').should('contain', '🍅 Pomodori Putridi 🍅' )
    })

    it('Should have a error message when a server error occurs', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',{
            method: 'GET',
            fixture: ''
          })
          cy.visit('http://localhost:3000/')
          cy.get('h1').should('contain', 'Something went wrong. Please try again later.')
    })

    it('Should have a title when a bad url is given', () => {
        cy.visit('http://localhost:3000/sketchy/bananas')
        cy.get('.title').should('contain', '🍅 Pomodori Putridi 🍅' )
    })

    it('Should have a error message when a bad url is given', () => {
          cy.visit('http://localhost:3000/sketchy/bananas')
          cy.get('h1').should('contain', '404')
          cy.get('h2').should('contain', 'Page not found.')
    })

    it('Should have a home button', () => {
        cy.visit('http://localhost:3000/sketchy/bananas')
        cy.get('.glow-hover').click()
      })
  });




