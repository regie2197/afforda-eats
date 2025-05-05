/// <reference types="cypress" />
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
import 'cypress-plugin-api';
// import { userRegister } from '../support/registeruser';
// import { vendorRegister } from '../support/registervendor';

// // Cypress.Commands.add('registerUser', ()=>{
// //     cy.get('button').should('contain', 'Register').and('not.be.disabled');
// //     cy.get('.MuiTypography-inherit').click()
// //     cy.get('#«Rl3rnb»').should('contain', 'Select Account Type');
// //     cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
// //     cy.get('.MuiDialogActions-root > :nth-child(2)').should('be.visible')
// //     cy.get('.MuiDialogActions-root > :nth-child(1)').click()
    
// // })
// Cypress.Commands.add('registerVendor', ()=>{
//     cy.get('button').should('contain', 'Register').and('not.be.disabled');
//     cy.get('.MuiTypography-inherit').click()
//     cy.get('#«Rl3rnb»').should('contain', 'Select Account Type');
//     cy.get('.MuiDialogActions-root > :nth-child(1)').should('be.visible')
//     cy.get('.MuiDialogActions-root > :nth-child(2)').should('be.visible')
//     cy.get('.MuiDialogActions-root > :nth-child(2)').click()
    
// })
// Cypress.Commands.add('fields', ()=>{
//     cy.get('input[type="text"][name="firstName"]').should('be.visible')
//     cy.get('input[type="text"][name="lastName"]').should('be.visible')
//     cy.get('input[type="text"][name="email"]').should('be.visible')
//     cy.get('input[type="text"][name="username"]').should('be.visible')
//     cy.get('input[type="password"][name="password"]').should('be.visible')
    
// })
// Cypress.Commands.add('fieldsvendor', ()=>{
//     cy.get('input[type="text"][name="FirstName"]').should('be.visible')
//     cy.get('input[type="text"][name="lastName"]').should('be.visible')
//     cy.get('input[type="text"][name="email"]').should('be.visible')
//     cy.get('input[type="text"][name="username"]').should('be.visible')
//     cy.get('input[type="password"][name="password"]').should('be.visible')
    
// })

// Cypress.Commands.add('faker', ()=>{
//     const userReg = userRegister();
//     cy.get('input[type="text"][name="firstName"]').type(userReg.firstName)
//     cy.get('input[type="text"][name="lastName"]').type(userReg.lastName)
//     cy.get('input[type="text"][name="email"]').type(userReg.email)
//     cy.get('input[type="text"][name="username"]').type(userReg.username)
//     cy.get('input[type="password"][name="password"]').type(userReg.password)
//     cy.get('button[type="submit"]').should('be.visible').and('not.be.disabled');
//     cy.get('button[type="submit"]').click()
    
// })

// Cypress.Commands.add('fakervendor', ()=>{
//     const vendorReg = vendorRegister();
//     cy.get('input[type="text"][name="FirstName"]').type(vendorReg.FirstName)
//     cy.get('input[type="text"][name="lastName"]').type(vendorReg.lastName)
//     cy.get('input[type="text"][name="email"]').type(vendorReg.email)
//     cy.get('input[type="text"][name="username"]').type(vendorReg.username)
//     cy.get('input[type="password"][name="password"]').type(vendorReg.password)
//     cy.get('button[type="submit"]').should('be.visible').and('not.be.disabled');
//     cy.get('button[type="submit"]').click()
    
// })