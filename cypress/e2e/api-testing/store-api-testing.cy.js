describe('Store API Testing', () => {
    let vendorData;
    let storeData;
    let storeId;

    before(() => {
        cy.createStore();
        cy.createVendor();

        cy.readFile('cypress/fixtures/userData.json').then((data) => {
            vendorData = data;
        });

        cy.readFile('cypress/fixtures/storeData.json').then((data) => {
            storeData = data;
        });
    });

    it('Verify successful POST request for creating a new store with valid inputs.', () => {
        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: storeData,
        }).should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Verify unsuccessful POST request for creating a new store with invalid inputs.', () => {

        const invalidStoreData = {...storeData, streetNumber: 99 , zipcode: 1000,};

        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: invalidStoreData,
        }).should((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('Verify unsuccessful POST request for creating a new store with missing required fields.', () => {

        const invalidStoreData = {...storeData, name: null ,};

        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: invalidStoreData,
        }).should((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('Verify unsuccessful POST request for creating a new store with no account logged in.', () => {
        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: null,
                password: null,
            },
            body: storeData,
        }).should((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('Verify unsuccessful POST request for creating a new store with invalid user.', () => {
        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: "nonexisting",
                password: "nopassword!",
            },
            body: storeData,
        }).should((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('Verify unsuccessful POST request for creating a new store on database error .', () => {
        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/review',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: storeData,
        }).should((response) => {
            expect(response.status).to.eq(500);
        });
    });

    it('Verify successful GET request for accessing stores of a valid user.', () => {
        cy.api({
            method: 'GET',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: storeData,
        }).should((response) => {
            expect(response.status).to.eq(200);
            storeId = response.body.id;
            cy.log(`Store ID: ${storeId}`);
        });
        cy.wrap(storeId).as('storeId'); 
    });

    



});