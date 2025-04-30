describe('AffordaEats Website', {testIsolation: false}, () => {
  before(() => {
      cy.visit('http://localhost:3000/');
      cy.url().should('eq', 'http://localhost:3000/');
    });


    it('Verify display of Landing Pagee', () => {
      cy.get('img[alt="Login Visual"]').should('be.visible');
      cy.get('.css-15qltjq > img').should('be.visible').and('have.attr', 'src').and('include', 'logo.png');
      cy.get('.css-15qltjq > .MuiTypography-root').should('be.visible').and('have.text', 'AffordaEats'); 
      cy.get('.MuiTypography-h6').should('be.visible').and('have.text', 'Login to your account');
      cy.get('#«Rnakq7l7»').should('be.visible').and('be.enabled').and('have.text', '');  
      cy.get('label[for="«Rnakq7l7»"]').should('have.text', 'Username'); 
      cy.get('#«R17akq7l7»').should('be.visible').and('be.enabled').and('have.text', '');
      cy.get('label[for="«R17akq7l7»"]').should('have.text', 'Password');
      cy.get('[data-testid="login-button"]').should('be.visible').and('be.enabled').and('have.text', 'Login');
      cy.get('.MuiTypography-body1').should('be.visible').invoke('text')
          .then((text) => {
          expect(text.trim()).to.eq("Don’t have an account?");
        });
      cy.get('[data-testid="go-to-register"]').should('be.visible').and('be.enabled').and('have.text', 'Register');
      }); 
});