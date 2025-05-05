// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from "./pages/login.page" 
import { faker } from '@faker-js/faker';

// Sharlin ----------------
var fakeMessage

Cypress.Commands.add('Login', (username, password) => {
    loginPage.fillLoginForm(username, password)
})

Cypress.Commands.add('VerifyErrMes', (errorcode) => {
    loginPage.verifyErrMessage(errorcode)
})

Cypress.Commands.add('writeFeedback', (n) => {
    fakeMessage = faker.string.alpha(n);; // Limits the text to 100 characters
    cy.get('[rows="8"]').should('be.visible').type(fakeMessage)
    if (n < 500){
        cy.get('[rows="8"]').invoke('val').should('have.length', n);
    } else if (n > 500) {
        cy.get('[rows="8"]').invoke('val').should('have.length', 500); // Checks if it has exactly 500 characters
    }
    
})

// Joshua ----------------
Cypress.Commands.add('generateLocalAPIFile', (NewLocalUser) => {
    cy.writeFile('cypress/fixtures/LocalUser.json', NewLocalUser)
})


Cypress.Commands.add('AffordEatsGenerateUserFile', (NewAffordaEatsUser) => {
    cy.writeFile('cypress/fixtures/AffordaEatsUser.json', NewAffordaEatsUser)
} )

Cypress.Commands.add('AffordEatsGenerateFoodFile', (NewAffordaEatsFood) => {
    cy.writeFile('cypress/fixtures/AffordaEatsFood.json', NewAffordaEatsFood)
} )

Cypress.Commands.add('AffordaEatsGenerateStoreFile', (NewStore) => {
    cy.writeFile('cypress/fixtures/AffordaEatsStoreInfo.json', NewStore)
})


// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }