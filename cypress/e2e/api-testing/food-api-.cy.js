describe('Food API Tests', () => {
    const baseUrl = 'http://localhost:4000/api/food';
    let foodId;
    let vendorData;
    
    before(() => {
        //Create a vendor before running the tests
        cy.createVendor();

        // Load vendor data from fixtures
        cy.readFile('cypress/fixtures/vendorData.json').then((data) => {
            vendorData = data;
        });
    })
    

    it('Verify successful POST request for adding new FOOD item.', () => {
        const newFood = {
            name: 'yang-chow fried-rice',
            price: 150,
            description: 'Stir-fried fried-rice with veggies and shrimp bits.',
            storeId: 1
        };
        cy.api({
            method: 'POST',
            url: `${baseUrl}`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: newFood
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq(newFood.name);
            foodId = response.body.id;
        });
    });

    it('Verify successful PUT request for updating an existing food item.', () => {
        const updatedFood = {
            name: 'Seafood-Fried Rice',
            description: 'Delicious fried rice with shrimp and crab meat.',
            price: 199.99,
            storeId: 1
        };

        cy.api({
            method: 'PUT',
            url: `${baseUrl}/${foodId}`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: updatedFood
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(updatedFood.name);
        });
    });

    it('should delete a food item', () => {
        cy.api({
            method: 'DELETE',
            url: `${baseUrl}/${foodId}`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
        }).should((response) => {
            expect(response.status).to.eq(200);
        });
    });
});