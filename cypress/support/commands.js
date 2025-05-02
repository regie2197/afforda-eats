/* ------------------------------- IMPORTS -------------------------------------- */
import { createVendor } from '../support/user-faker.utils.js';
import { createStore } from '../support/user-faker.utils.js';
import { createFoodData } from '../support/user-faker.utils.js';


/* ----------------------------- STORE API COMMANDS ----------------------------- */
Cypress.Commands.add('createVendor', () => {
    let vendorData = createVendor()
    cy.writeFile('cypress/fixtures/vendorData.json', vendorData);
    cy.api({
        method: 'POST',
        url: 'http://localhost:4000/api/register',
        body: vendorData
    }).should((response) => {
        expect(response.status).to.eq(201)
        /expect(response.body).to.have.property('email', `${vendorData.email}`)
         expect(response.body).to.have.property('username', `${vendorData.username}`)
    })
});

Cypress.Commands.add('createStore', () => {
    let storeData = createStore()
    cy.writeFile('cypress/fixtures/storeData.json', storeData);
})

Cypress.Commands.add('createFood', () =>{
    let foodData = createFoodData()
    cy.writeFile('cypress/fixtures/foodData.json', foodData);
    cy.api({
        method: 'POST',
        url: 'http://localhost:4000/api/food',
        body: foodData
    }).should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('name', `${foodData.name}`)
    })
})