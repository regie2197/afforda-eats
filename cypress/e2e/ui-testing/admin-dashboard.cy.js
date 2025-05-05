describe('Modal Close on Outside Click', () => {
    it('should close the reviews modal when clicking outside of it', () => {

      cy.visit('http://localhost:3000/admin-dashboard'); 
  
      cy.contains('View Reviews').first().click();

      cy.get('.MuiDialog-root').should('be.visible');
  
      cy.get('body').click(0, 0);
      //cy.get('.MuiBackdrop-root').click('topLeft');

      cy.get('.MuiDialog-root').should('not.exist');
    });
  });
  