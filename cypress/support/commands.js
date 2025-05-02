/* ------------------------------- IMPORTS -------------------------------------- */
import { createVendor } from '../support/user-faker.utils.js';
import { createStore } from '../support/user-faker.utils.js';


/* ----------------------------- STORE API COMMANDS ----------------------------- */
Cypress.Commands.add('createVendor', () => {
    let vendorData = createVendor()
    cy.writeFile('cypress/fixtures/vendorData.json', vendorData);
    cy.api({
        method: 'POST',
        url: 'https://c15ae1de-2f42-4b47-be18-9e3343299d1f.mock.pstmn.io/user',
        body: vendorData
    }).should((response) => {
        expect(response.status).to.eq(201)
        // expect(response.body).to.have.property('email', `${vendorData.email}`)
        // expect(response.body).to.have.property('username', `${vendorData.username}`)
    })
});

Cypress.Commands.add('createStore', () => {
    let storeData = createStore()
    cy.writeFile('cypress/fixtures/storeData.json', storeData);
})