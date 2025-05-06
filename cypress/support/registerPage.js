import { createRegisterUser } from './user-faker.utils.js';

class RegisterPage {
    firstNameField = 'div[data-testid="firstName"]';
    lastNameField = 'div[data-testid="lastName"]';
    emailField = 'div[data-testid="email"]';
    usernameField = 'div[data-testid="username"]';
    passwordField = 'div[data-testid="password"]';
    registerButton = 'button:contains("Register")';
    loginLink = 'a:contains("Login")';

    visibleAndLabel(field, labelText) {
        cy.get(field).should('be.visible').and('contain.text', labelText);
    }

    fillRegistrationForm() {
        const fakeUser = createRegisterUser();
        cy.writeFile('cypress/fixtures/userReg.json', fakeUser);
        cy.get('input[name="firstName"]').type(fakeUser.firstName);
        cy.get('input[name="lastName"]').type(fakeUser.lastName);
        cy.get('input[name="email"]').type(fakeUser.email);
        cy.get('input[name="username"]').type(fakeUser.username);
        cy.get('input[name="password"]').type(fakeUser.password);
    }

    clickRegisterButton() {
        cy.contains(this.registerButton).click();
    }

    clickLoginLink() {
        cy.contains(this.loginLink).click();
    }
}

export default new RegisterPage();