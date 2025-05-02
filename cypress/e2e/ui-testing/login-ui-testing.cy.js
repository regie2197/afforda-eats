
    // const username = 'johnDoe12433433';
    // const password = 'MySecur34e2Password12333';
    describe('Login Page Workflow', () => {
        const validUsername = 'johnDoe12433433';
        const validPassword = 'MySecur34e2Password12333';
        const invalidPassword = 'wrongPassword';
      
        beforeEach(() => {
          cy.visit('http://localhost:3000/login'); // Adjust the URL if needed
        });
      
        it('logs in with valid credentials and redirects to /home', () => {
          cy.get('input[name="username"]').type(validUsername);
          cy.get('input[name="password"]').type(validPassword);
          cy.get('[data-testid="login-button"]').click();
      
          // Assert redirected to /home
          cy.url({ timeout: 10000 }).should('include', '/home');
        });
      
        it('shows an alert on login with incorrect password', () => {
          cy.get('input[name="username"]').type(validUsername);
          cy.get('input[name="password"]').type(invalidPassword);
          cy.get('[data-testid="login-button"]').click();
      
          // Alert should appear
          cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed');
          });
      
          cy.url().should('include', '/login');
        });
      
        it('shows an alert on login with a non-existent user', () => {
          cy.get('input[name="username"]').type('ghostUser');
          cy.get('input[name="password"]').type('somePassword');
          cy.get('[data-testid="login-button"]').click();
      
          cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed');
          });
      
          cy.url().should('include', '/login');
        });
      
        it('does not allow login with empty fields', () => {
          cy.get('[data-testid="login-button"]').click();
      
          cy.url().should('include', '/login');
        });
      
        it('opens register dialog on clicking register link', () => {
          cy.get('[data-testid="go-to-register"]').click();
      
          cy.contains('Select Account Type').should('be.visible');
          cy.contains('button', 'User').should('exist');
          cy.contains('button', 'Vendor').should('exist');
        });
      
        it('redirects to /register/user when "User" is clicked in dialog', () => {
          cy.get('[data-testid="go-to-register"]').click();
          cy.contains('button', 'User').click();
      
          cy.url().should('include', '/register/user');
        });
      });
      