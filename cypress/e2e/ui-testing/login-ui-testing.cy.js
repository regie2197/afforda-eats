describe('Login Page Workflow', () => {
    const validUsername = 'johnDoe12433433';
    const validPassword = 'MySecur34e2Password12333';
    const invalidUsername = 'wrongusername';
    const invalidPassword = 'wrongPassword';
      
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });
      

    it('TEST CASE 1 - Display and  interact with username and password fields', () => {

        cy.get('input[name="username"]')
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .type(validUsername)
            .should('have.value', validUsername);
    
        cy.get('input[name="password"]')
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .type(validPassword)
            .should('have.value', validPassword);
    
        cy.get('input[name="password"]').should('have.attr', 'type', 'password');
    });

    it('TEST CASE 2 - Display a Login button that is clickable and accessible', () => {
        
        cy.get('[data-testid="login-button"]')
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .click(); 

        cy.get('[data-testid="login-button"]')
            .invoke('attr', 'type')
            .should('eq', 'submit');
    });

    it('TEST CASE 3 - Log in with correct credentials and redirects to /home', () => {
        cy.get('input[name="username"]').type(validUsername);
        cy.get('input[name="password"]').type(validPassword);
        cy.get('[data-testid="login-button"]').click();
        cy.url({ timeout: 10000 }).should('include', '/home');
    });

    it('TEST CASE 4 - Log in with correct username and shows an alert on login with incorrect password', () => {
        cy.get('input[name="username"]').type(validUsername);
        cy.get('input[name="password"]').type(invalidPassword);
        cy.get('[data-testid="login-button"]').click();
    
        cy.on('window:alert', (str) => {
        expect(str).to.contain('Login failed');
        });
    
        cy.url().should('include', '/login');
    });

    it('TEST CASE 5 - Log in with correct password and shows an alert on login with incorrect username', () => {
        cy.get('input[name="username"]').type(invalidUsername);
        cy.get('input[name="password"]').type(validPassword);
        cy.get('[data-testid="login-button"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed');
        });
    
        cy.url().should('include', '/login');
        });

    it('TEST CASE 6 - Shows an alert on login with with incorrect username and password (non-existent)', () => {
        cy.get('input[name="username"]').type(invalidUsername);
        cy.get('input[name="password"]').type(invalidPassword);
        cy.get('[data-testid="login-button"]').click();
    
        cy.on('window:alert', (str) => {
        expect(str).to.contain('Login failed');
        });
    
        cy.url().should('include', '/login');
    });
    
    it('TEST CASE 7 - Prevent login when password is empty with correct username', () => {

        cy.get('input[name="username"]').type(validUsername);
        cy.get('input[name="password"]').should('have.value', '');
        cy.get('[data-testid="login-button"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed'); 
        });
        cy.url().should('include', '/login');
    });

    it('TEST CASE 8 - Prevent login when username is empty with correct password', () => {

        cy.get('input[name="username"]').should('have.value', '');
        cy.get('input[name="password"]').type(validPassword);
        cy.get('[data-testid="login-button"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed'); 
        });
        cy.url().should('include', '/login');
        });

        it('TEST CASE 9 - Prevent login when username is empty with correct password', () => {

        cy.get('input[name="username"]').should('have.value', '');
        cy.get('input[name="password"]').should('have.value', '');
        cy.get('[data-testid="login-button"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.contain('Login failed'); 
        });
        cy.url().should('include', '/login');
        });

    });
    