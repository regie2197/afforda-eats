describe('Food API Tests', () => {
    const baseUrl = 'http://localhost:4000/api/food';
    let foodId;
    let vendorData;
    
    before(() => {
        //Create a vendor before running the tests
        cy.createVendor();
        cy.createFood();

        // Load vendor data from fixtures
        cy.readFile('cypress/fixtures/vendorData.json').then((data) => {
            vendorData = data;

        });

        cy.readFile('cypress/fixtures/foodData.json').then((data) => {
            foodId = data.id;
        })
    })

    it('Register a new vendor', () => {
        cy.fixture('vendorData').then((vendorData) => {
            cy.api({
                method: 'POST',
                url: 'http://localhost:4000/api/register',
                body: vendorData,
            }).should((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('email', vendorData.email);
                expect(response.body).to.have.property('username', vendorData.username);
            });
        });
    })

    it('Login as vendor', () => {
        cy.fixture('vendorData').then((vendorData) => {
            cy.api({
                method: 'POST',
                url: 'http://localhost:4000/api/login',
                body: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
            }).should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('token');
            });
        });
    
    })
    

    it('Verify successful POST request for adding new FOOD item.', () => {
        cy.fixture('foodData').then((foodData) => { // Load foodData from the fixture
            cy.api({
                method: 'POST',
                url: `${baseUrl}`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                body: foodData // Use the data from the fixture
            }).should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id');
                expect(response.body.name).to.eq(foodData.name); // Validate against fixture data
                foodId = response.body.id;
            });
        });
    });

    it('Verify unsuccessful POST request for adding a food item with missing fields.', () => {
        const invalidFood = {
            name: 'Pizza',
            // price: 99.99, // Missing price field
            description: 'Delicious cheese pizza',
            storeId: 1
        };

        cy.api({
            method: 'POST',
            url: `${baseUrl}`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: invalidFood
        }).should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'All fields are required.');
        });
    });

    it ('Verify unsuccessful POST request when fields contain trailing and leading spaces.', () => {
        const invalidFood = {
            name: '  Fried Chicken  ', //spaces before and after the name
            description: '  Crispy fried chicken with spices.  ',
            price: 49.99,
            storeId: 1
        };
        api({
            method: 'POST',
            url: `${baseUrl}`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: invalidFood
        }).should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Fields must not have trailing or leading spaces.');
        });
    });

    it('Verify number valdiation for negatice values in Price field.', () => {
        const invalidFood = {
            name: 'Fried Rice',
            description: 'Delicious fried rice with shrimp and crab meat.',
            price: -100, // Invalid price because negative number
            storeId: 1
        };

        cy.api({
            method: 'POST',
            url: `${baseUrl}`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: invalidFood
        }).should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Price must be a positive number.');
        });
    });

    it('Verify number validation for string values in Price field.', () => {
        const invalidFood = {
            name: 'Fried Rice',
            description: 'Delicious fried rice with shrimp and crab meat.',
            price: 'fifty', // Invalid price because it's a string
            storeId: 1
        };
        cy.api({
            method: 'POST',
            url: `${baseUrl}`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: invalidFood
        }).should((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Price must be a valid number.');
        });
    });

    it('Verify succesful food registration using decimal values in Price field.', () => {
        const validFood = {
            name: 'Fried Rice',
            description: 'Delicious fried rice with shrimp and crab meat.',
            price: 49.99, // Valid price with decimal value
            storeId: 1
        };
        cy.api({
            method: 'POST',
            url: `${baseUrl}`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: validFood
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq(validFood.name); 
        });
    });


    it('Verify successful post regardless of existing food data.', () => {
        const duplicateFood = {
            name: 'Fried Rice',
            description: 'Delicious fried rice with shrimp and crab meat.',
            price: 49.99,
            storeId: 1
        };

        cy.api({
            method: 'POST',
            url: `${baseUrl}`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: duplicateFood
        }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body.name).to.eq(duplicateFood.name); 
        });
    });

it('Verify unsuccessful food registration when storeId does not exist.', () => {
    const invalidStoreFood = {
        name: 'yang-chow fried-rice',
        price: 150,
        description: 'Stir-fried fried-rice with veggies and shrimp bits.',
        storeId: 10000
    };
    cy.api({
        method: 'POST',
        url: `${baseUrl}`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        },
        body: invalidStoreFood
    }).should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('error', 'Store not found.');
    });
});

it('Verify successful display of all foods registered to a store.', () => {
    cy.api({
        method: 'GET',
        url: `${baseUrl}/store/1`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
    });
});

it('Verify no data returned when fetching food from non-existing store ID.', () => {
    cy.api({
        method: 'GET',
        url: `${baseUrl}/store/10000`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        },
    }).should((response) => {
        expect(response.status).to.be.oneOf([400, 404]);
        expect(response.body.error).to.include.oneOf(['Invalid store ID', 'No food items found for this store']);
    });
});

it('Verify fetching food with complete details (including reviews).', () => {
    cy.api({
        method: 'GET',
        url: `${baseUrl}/store/1`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.some(food => food.reviews && food.reviews.length > 0)).to.be.true;
    });
});

it('Verify fetching food with existing reviews.', () => {
    cy.api({
        method: 'GET',
        url: `${baseUrl}/store/1`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        },
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.some(food => food.reviews && food.reviews.length > 0)).to.be.true;
    });
});

it('Verify successful PUT request for updating a food item.', () => {
    const updatedFood = {
        name: 'Bang-bang bingsu',
        price: 149,
        description: 'Delish Ice-cold treat.'
    };
    cy.api({
        method: 'PUT',
        url: `${baseUrl}/27`,
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

it('Verify unsuccessful PUT request for non-existing food item.', () => {
    const updatedFood = {
        name: 'Bang-bang bingsu',
        price: 100,
        description: 'Delish Ice-cold treat.',
        storeId: 1
    };
    cy.api({
        method: 'PUT',
        url: `${baseUrl}/1000`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        },
        body: updatedFood
    }).should((response) => {
        expect(response.status).to.eq(500);
        expect(response.body.error).to.include.oneOf(['Food not found.', 'Failed to update food']);
    });
});

it('Verify unsuccessful PUT request when price is not a valid number.', () => {
    const invalidFood = {
        name: 'Bang-bang bingsu',
        price: 'Letters',
        description: 'Delish Ice-cold treat.',
        storeId: 1
    };
    cy.api({
        method: 'PUT',
        url: `${baseUrl}/27`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        },
        body: invalidFood
    }).should((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.include.oneOf([
            'Price must be a valid number.',
            'Price must be a positive number.'
        ]);
    });
});

it('Verify successful deletion of a food item.', () => {
    cy.api({
        method: 'DELETE',
        url: `${baseUrl}/1`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        }
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Food and related reviews deleted successfully.');
    });
});

it('Verify unsuccessful deletion of a non-existing food item.', () => {
    cy.api({
        method: 'DELETE',
        url: `${baseUrl}/222222`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        }
    }).should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.eq('Food not found.');
    });
});

it('Verify food items are returned for store with existing food.', () => {
    cy.api({
        method: 'GET',
        url: `${baseUrl}/store/1`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        }
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
    });
});

it('Verify error is returned for non-existing store when fetching food.', () => {
    cy.api({
        method: 'GET',
        url: `${baseUrl}/store/999999`,
        auth: {
            username: vendorData.username,
            password: vendorData.password,
        }
    }).should((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.eq('Store not found.');
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
});