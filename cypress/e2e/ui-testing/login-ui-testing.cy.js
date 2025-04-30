describe('Login Workflow', () => {
    const username = 'johnDoe12433433';
    const password = 'MySecur34e2Password12333';
  
    beforeEach(() => {
      cy.visit('http://localhost:3000/login');
    });
  
    it('should display the login form', () => {
      cy.get('input[name="username"]').should('exist');
      cy.get('input[name="password"]').should('exist');
      cy.get('[data-testid="login-button"]').should('exist');
    });
  
    it('should show error on empty submission', () => {
      cy.get('[data-testid="login-button"]').click();
      // Assuming some alert is shown or form validation message appears
      cy.on('window:alert', (txt) => {
        expect(txt).to.include('Login failed');
      });
    });
  
    it('should fail with wrong credentials', () => {
      cy.get('input[name="username"]').type('wronguser');
      cy.get('input[name="password"]').type('wrongpass');
      cy.get('[data-testid="login-button"]').click();
  
      cy.on('window:alert', (txt) => {
        expect(txt).to.include('Login failed');
      });
    });
  
    it('should login with valid credentials', () => {
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
      cy.get('[data-testid="login-button"]').click();
  
      // After successful login, should be redirected to /home
      cy.url().should('include', '/home');
    });
  
    it('should open account type dialog from register link', () => {
      cy.get('[data-testid="go-to-register"]').click();
      cy.contains('Select Account Type').should('be.visible');
      cy.contains('User').should('exist');
      cy.contains('Vendor').should('exist');
    });
  });
  