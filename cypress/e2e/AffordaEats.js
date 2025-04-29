describe('AffordaEats Website', {testIsolation: false}, () => {
  before(() => {
      cy.visit('https://afforda-eats.vercel.app/');
      cy.url().should('eq', 'https://afforda-eats.vercel.app/');
    });


    it('Verify display of Landing Pagee', () => {
      cy.get('.css-1xzvf8u > img').should('be.visible').and('have.attr', 'src').and('include', 'logo.png'); 
      cy.get('.css-15qltjq > img').should('be.visible').and('have.attr', 'src').and('include', 'logo.png');
      cy.get('.MuiTypography-root.MuiTypography-h5.css-dl0uk6').should('be.visible').and('have.text', 'AffordaEats'); 
      cy.get('.MuiTypography-h6').should('be.visible').and('have.text', 'Login to your account');
      cy.get('#«R1el9kfb»').should('be.visible').and('be.enabled').and('have.text', '');
      cy.get('label[for="«R1el9kfb»"]').should('have.text', 'Username');
      cy.get('#«R2el9kfb»').should('be.visible').and('be.enabled').and('have.text', '');
      cy.get('label[for="«R2el9kfb»"]').should('have.text', 'Password');
      cy.get('.MuiButtonBase-root').should('be.visible').and('be.enabled').and('have.text','Login');
      cy.get('span.MuiTypography-root.MuiTypography-body1.css-fyswvn')
        .should('be.visible')
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.eq("Don’t have an account?");
        });

      cy.get('.MuiTypography-inherit').should('be.visible').and('be.enabled').and('have.text', 'Register');
      }); 
});