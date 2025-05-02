describe('Store API Testing', () => {
    let vendorData;
    let storeData;
    let storeId;

    before(() => {
        cy.createStore();
        cy.createVendor();

        cy.readFile('cypress/fixtures/vendorData.json').then((data) => {
            vendorData = data;
        });

        cy.readFile('cypress/fixtures/storeData.json').then((data) => {
            storeData = data;
        });
    });

    /* ----------------------------- POST METHOD ----------------------------- */


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

        const invalidStoreData = { ...storeData, streetNumber: 99, zipcode: 1000, };

        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: invalidStoreData,
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(500);
        });
    });

    it('Verify unsuccessful POST request for creating a new store with missing required fields.', () => {

        const invalidStoreData = { ...storeData, name: "", };

        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: invalidStoreData,
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('Verify unsuccessful POST request for creating a new store with no account logged in.', () => {
        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: "",
                password: "",
            },
            body: storeData,
            failOnStatusCode: false,
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
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('Verify unsuccessful POST request for creating a new store on database error .', () => {
        cy.api({
            method: 'POST',
            url: 'https://c15ae1de-2f42-4b47-be18-9e3343299d1f.mock.pstmn.io/store/dataBaseError',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            body: storeData,
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(500);
        });
    });

    /* ----------------------------- GET METHOD ----------------------------- */


    it('Verify successful GET request for accessing stores of a valid user.', () => {
        cy.api({
            method: 'GET',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
        }).should((response) => {
            expect(response.status).to.eq(200);
            storeId = response.body.id;
        });
        cy.log(`Store ID: ${storeId}`);
        cy.wrap(storeId).as('storeId');
    });

    it('Verify unsuccessful GET request for accessing stores without account', () => {
        cy.api({
            method: 'GET',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: "",
                password: "",
            },
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('Verify unsuccessful GET request for accessing stores with valid user without stores', () => {
        cy.api({
            method: 'GET',
            url: 'http://localhost:4000/api/store',
            auth: {
                username: "joshazarconitomgaidol",
                password: "joshjosh1",
            },
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(404);
        });
    });

    it('Verify unsuccessful GET request for accessing stores with invalid userId.', () => {
        cy.api({
            method: 'GET',
            url: 'http://localhost:4000/api/store/invalidUserId',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(500);
        });
    });

    it('Verify unsuccessful GET request for accessing stores with database error.', () => {
        cy.api({
            method: 'GET',
            url: 'https://c15ae1de-2f42-4b47-be18-9e3343299d1f.mock.pstmn.io/store/dataBaseError',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(500);
        });
    });

    it('Verify successful GET request for accessing stores with valid storeId.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'GET',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.id).to.eq(storeId);
            });
        });
    });

    it('Verify unsuccessful GET request for accessing stores with invalid storeId.', () => {
        cy.api({
            method: 'GET',
            url: 'http://localhost:4000/api/store/invalidStoreId',
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(500);
        });
    });

    it('Verify unsuccessful GET request for accessing stores with valid storeId without account logged on.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'GET',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: "",
                    password: "",
                },
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });

    it('Verify unsuccessful GET request for accessing stores with user not owning the storeId.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'GET',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: 'JKWALANGTINDAHAN',
                    password: 'IDKONASAN',
                },
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(404);
            });
        });
    });

    it('Verify unsuccessful GET request for accessing stores with database error.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'GET',
                url: `https://c15ae1de-2f42-4b47-be18-9e3343299d1f.mock.pstmn.io/store/dataBaseError`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(500);
            });
        });
    });


    /* ----------------------------- PUT METHOD ----------------------------- */

    it('Verify successful PUT request for updating a store with valid inputs.', () => {
        cy.get('@storeId').then((storeId) => {
            const updatedStoreData = { ...storeData, name: 'Updated Store Name' };

            cy.api({
                method: 'PUT',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                body: updatedStoreData,
            }).should((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    it('Verify unsuccessful PUT request for updating a store with invalid inputs.', () => {
        cy.get('@storeId').then((storeId) => {
            const invalidStoreData = { ...storeData, zipcode: 'invalidZip' };

            cy.api({
                method: 'PUT',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                body: invalidStoreData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(500);
            });
        });
    });

    it('Verify unsuccessful PUT request for updating a store with no account logged in.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'PUT',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: "",
                    password: "",
                },
                body: storeData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });

    it('Verify unsuccessful PUT request for updating stores with user not owning the storeId', () => {
        cy.get('@storeId').then((storeId) => {
            const updatedStoreData = { ...storeData, name: 'PUT updated' };

            cy.api({
                method: 'PUT',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: 'JKWALANGTINDAHAN',
                    password: 'IDKONASAN',
                },
                body: updatedStoreData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(404); 
            });
        });
    });

    it('Verify unsuccessful PUT request for updating a store with database error.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'PUT',
                url: `https://c15ae1de-2f42-4b47-be18-9e3343299d1f.mock.pstmn.io/store/dataBaseError`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                body: storeData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(500);
            });
        });
    });

    /* ----------------------------- PATCH METHOD ----------------------------- */

    it('Verify successful PATCH request for updating a store with valid inputs.', () => {
        cy.get('@storeId').then((storeId) => {
            const updatedStoreData = { name: 'Updated Store Name - PATCH' };

            cy.api({
                method: 'PATCH',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                body: updatedStoreData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq('Updated Store Name');
            });
        });
    });

    it('Verify unsuccessful PATCH request for updating a store with invalid inputs.', () => {
        cy.get('@storeId').then((storeId) => {
            const invalidStoreData = { zipcode: 'invalidZipPatch' };

            cy.api({
                method: 'PATCH',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                body: invalidStoreData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(500);
            });
        });
    });

    it('Verify unsuccessful PATCH request for updating a store with missing input.', () => {
        cy.get('@storeId').then((storeId) => {
            const missingInputData = { name: "" };

            cy.api({
                method: 'PATCH',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                body: missingInputData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(400);
            });
        });
    });

    it('Verify unsuccessful PATCH request for updating a store with no account logged in.', () => {
        cy.get('@storeId').then((storeId) => {
            const updatedStoreData = { name: 'Updated Store Name - PATCH' };

            cy.api({
                method: 'PATCH',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: "",
                    password: "",
                },
                body: updatedStoreData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });

    it('Verify unsuccessful PATCH request for updating stores with user not owning the storeId.', () => {
        cy.get('@storeId').then((storeId) => {
            const updatedStoreData = { name: 'Updated Store Name' };

            cy.api({
                method: 'PATCH',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: 'JKWALANGTINDAHAN',
                    password: 'IDKONASAN',
                },
                body: updatedStoreData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(404); 
            });
        });
    });

    it('Verify unsuccessful PATCH request for updating stores with database error.', () => {
        cy.get('@storeId').then((storeId) => {
            const updatedStoreData = { name: 'Updated Store Name' };

            cy.api({
                method: 'PATCH',
                url: `https://c15ae1de-2f42-4b47-be18-9e3343299d1f.mock.pstmn.io/store/dataBaseError`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                body: updatedStoreData,
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(500);
            });
        });
    });


    /* ----------------------------- DELETE METHOD ----------------------------- */

    it('Verify successful DELETE request for deleting a store with valid userId and storeId.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'DELETE',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
            }).should((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    it('Verify unsuccessful DELETE request for deleting a store with invalid userId.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'DELETE',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: 'ASD',
                    password: 'asd',
                },
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });

    it('Verify unsuccessful DELETE request for deleting a store with invalid storeId.', () => {
        cy.api({
            method: 'DELETE',
            url: `http://localhost:4000/api/store/invalidId`,
            auth: {
                username: vendorData.username,
                password: vendorData.password,
            },
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('Verify unsuccessful DELETE request for deleting a store with no account logged in.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'DELETE',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: "",
                    password: "",
                },
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });

    it('Verify unsuccessful DELETE request for deleting stores with user not owning the storeId.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'DELETE',
                url: `http://localhost:4000/api/store/${storeId}`,
                auth: {
                    username: 'JKWALANGTINDAHAN',
                    password: 'IDKONASAN',
                },
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(404);
            });
        });
    });

    it('Verify unsuccessful DELETE request for deleting a store with database error.', () => {
        cy.get('@storeId').then((storeId) => {
            cy.api({
                method: 'DELETE',
                url: `https://c15ae1de-2f42-4b47-be18-9e3343299d1f.mock.pstmn.io/store/dataBaseError`,
                auth: {
                    username: vendorData.username,
                    password: vendorData.password,
                },
                failOnStatusCode: false,
            }).should((response) => {
                expect(response.status).to.eq(500);
            });
        });
    });
});