import { Store } from "lucide-react"
import { generateAffordaEatsStore, generateAffordaEatsStoreOwner } from "../../support/fakerdata"

describe('AffordaEats Store API: Register Store test', () => {

    
    let uname ='kangkangkang'
    let pword = 'hehehehe1234'
    const BASE_URL= 'http://localhost:4000/api'
    let StoreData,VendorData, StoreID, StoreName, locID, ownerID, StoreNum, StoreStreet, StoreCity, StoreZipcode, StoreCountry
    before(() => {
        StoreData = generateAffordaEatsStore()
        VendorData = generateAffordaEatsStoreOwner()
        cy.AffordaEatsGenerateStoreFile(StoreData)
        
        StoreName = StoreData.name
        StoreStreet = StoreData.streetName
        StoreNum = StoreData.streetNumber.toString()
        StoreCity = StoreData.city
        StoreZipcode = StoreData.zipcode.toString()
        StoreCountry = StoreData.country
    })
    it('200: Successfully created a store', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: uname,
                password: pword
            },
            body: {
                name: StoreName,
                streetName: StoreStreet,
                streetNumber: StoreNum,
                city: StoreCity,
                zipcode: StoreZipcode,
                country: StoreCountry
                // name: 'StoreName',
                // streetName: 'StoreStreet',
                // streetNumber: '12345',
                // city: 'piltover',
                // zipcode: '332211',
                // country: 'rok'
            }
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('name', StoreName)
        expect(response.body).to.have.property('locationId')
        expect(response.body).to.have.property('ownerId')
        expect(response.body).to.have.property('createdAt')
        expect(response.body).to.have.property('updatedAt')

        StoreID = response.body.id
        locID = response.body.locationId
        ownerID = response.body.ownerId
        
        //append StoreId, locID, ownerId to store json
        cy.readFile('cypress/fixtures/AffordaEatsStoreInfo.json').then(existingData => {
            const keyToUpdate = 'id'; 
            const NewStoreId = response.body.id; 
            const NewProperty = 'ownerId'
            const NewOwnerId = response.body.ownerId
            const NewProperty2 = 'locationId'
            const NewLocationId2 = response.body.locationId
          
            const updatedData = { ...existingData };
          
            updatedData[keyToUpdate] = NewStoreId;
            updatedData[NewProperty] = NewOwnerId
            updatedData[NewProperty2] = NewLocationId2
          
            cy.AffordEatsGenerateFoodFile(updatedData);
          });
    })
    })

    it('400: Verify no store name  will trigger error 400', () =>{
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: uname,
                password: pword
            },
            body:{
                streetNumber: '1234',
                streetName: 'NewPort Street',
                city: "laoag",
                zipcode: '12345678',
                country: "Mesapotamia"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'All fields are required (name, address)')
        })
    })

    it('400: Verify no street number will trigger error 400', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: uname,
                password: pword
            },
            body:{
                name: 'buko',
                streetName: 'NewPort Street',
                city: "laoag",
                zipcode: '12345678',
                country: "Mesapotamia"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'All fields are required (name, address)')
        })
    })

    it('400: Verify no street name will trigger error 400', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: uname,
                password: pword
            },
            body:{
                name: 'buko',
                streetNumber: '1234',
                city: "laoag",
                zipcode: '12345678',
                country: "Mesapotamia"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'All fields are required (name, address)')
        })
    })

    it('400: Verify no city will trigger error 400', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: uname,
                password: pword
            },
            body:{
                name: 'palette',
                streetNumber: '1234',
                streetName: 'NewPort Street',
                zipcode: '12345678',
                country: "Mesapotamia"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'All fields are required (name, address)')
        })
    })

    it('400: Verify no zipcode will trigger error 400', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: uname,
                password: pword
            },
            body:{
                name: 'palette',
                streetNumber: '1234',
                streetName: 'NewPort Street',
                city: "laoag",
                country: "Mesapotamia"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'All fields are required (name, address)')
        })
    })

    it('400: Verify no country will trigger error 400', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: uname,
                password: pword
            },
            body:{
                name: 'palette',
                streetNumber: '1234',
                streetName: 'NewPort Street',
                city: "laoag",
                zipcode: '12345678',
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'All fields are required (name, address)')
        })
    })

    it('401: Verify unauthorized error', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: 'notauser',
                password: 'notapassword'
            },
            body: StoreData,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.have.property('error','Unauthorized: User not logged in' )
        })
    })

    it('401: Verify unauthorized error', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: '',
                password: ''
            },
            body: StoreData,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.have.property('error','Username or password missing' )
        })
    })

    //incase 404 would appear in cypress gui
    it('404: Verify user not found error', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: '이지은',
                password: 'paletteisgood'
            },
            body: StoreData,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error', 'User not found')
        })
    })

    it('500: Verify failed to create store error', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/store/',
            auth: {
                username: uname,
                password: pword
            },
            body: {
                name: 112233,
                streetNumber: '1234',
                streetName: 455232,
                city: "laoag",
                zipcode: '12345678',
                country: "001100"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.body).to.have.property('error', 'Failed to create store')
        })
    })
})


// describe('AffordaEats Store API: Get all stores for authenticated user', () => {

//     let uname ='kangkangkang'
//     let pword = 'hehehehe1234'
//     const BASE_URL= 'http://localhost:4000/api'
//     let userid = 68
//     before(() => {
//        cy.readFile('cypress/fixtures/AffordaEatsStoreInfo.json').then(StoreInfo => {
//             const S_id = StoreInfo.id
//             const s_name = StoreInfo.name
//             const s_loc = StoreInfo.locationId
//             const s_ownerId = StoreInfo.ownerId
//             const s_streetN = StoreInfo.streetNumber
//             const s_streetName = StoreInfo.streetName
//             const s_city = StoreInfo.city
//             const s_zip = StoreInfo.zipcode
//             const s_country = StoreInfo.country
//        })
//     })

//     it('200: Successfully retrieved list of stores owned by the user', () => {
//         cy.api({
//             method: 'GET',
//             url: BASE_URL + '/store/',
//             auth: {
//                 username: uname,
//                 password: pword
//             }
//         }).then((response) => {
//             expect(response.status).to.eq(200)
//             expect(response.body).to.have.property('id', S_id)
//             expect(response.body).to.have.property('name', s_name)
//             expect(response.body).to.have.property('locationId', s_loc)
//             expect(response.body).to.have.property('ownerId', s_ownerId)
//             expect(response.body.location).to.have.property('id', S_id)
//             expect(response.body.location).to.have.property('streetNumber', s_streetN)
//             expect(response.body.location).to.have.property('streetName',s_streetName)
//             expect(response.body.location).to.have.property('city', s_city)
//             expect(response.body.location).to.have.property('zipcode', s_zip)
//             expect(response.body.location).to.have.property('country', s_country)
//         })
//     })

//     it('401: Verify Unauthorized: User not logged in trigger error 401', () => {
//         cy.api({
//             method: 'GET',
//             url: BASE_URL + '/store/',
//             auth: {
//                 username: '',
//                 password: '' 
//             }
//         }).then((response) => {
//             expect(response.status).to.eq(401)
//         })
//     })

//     it('404: Verify no stores found for this user error triggers 404', () => {
//         cy.api({
//             method: 'GET',
//             url: BASE_URL + '/store/',
//             auth: {
//                 username: 'talkingtothemoon',
//                 password: 'hehe123456'
//             }
//         }).then((response) => {
//             expect(response.status).to.eq(404)
//             expect(response.body).to.have.property('error', 'No stores found for this user')
//         })
//     })

//     it('500: Verify failed to fetch stores error' , () => {
//         cy.api({
//             method: 'GET',
//             url: BASE_URL + '/store/',
//             auth: {
//                 username: '전지현',
//                 password: 'hehe123456'
//             }
//          }).then((response) => {
//             expect(response.status).to.eq(500)
//          })
//     })
// })

// describe('AffordaEats Store API: Store Operations Tests', () => {
//     const BASE_URL = 'http://localhost:4000/api';
//     let S_id;
//     let ownerUsername = 'kangkangkang';
//     let ownerPassword = 'hehehehe1234';
//     let nonOwnerUsername = 'outsider'; // Assuming a different user for ownership checks
//     let nonOwnerPassword = 'password';
//     let nonExistentStoreId = 999999;
  
//     // Helper function to create a store for testing
//     const createTestStore = (overrideData = {}, auth = { username: ownerUsername, password: ownerPassword }) => {
//       const defaultStoreData = {
//         name: `Test Store ${Date.now()}`,
//         streetNumber: '123',
//         streetName: 'Test Street',
//         city: 'Test City',
//         zipcode: '12345',
//         country: 'Test Country'
//       };
//       return cy.api({
//         method: 'POST',
//         url: BASE_URL + '/store/',
//         auth: auth,
//         body: { ...defaultStoreData, ...overrideData },
//       }).then(response => response.body.id);
//     };

//     let userid = 68
//     before(() => {
//        cy.readFile('cypress/fixtures/AffordaEatsStoreInfo.json').then(StoreInfo => {
//             const S_id = StoreInfo.id
//             const s_name = StoreInfo.name
//             const s_loc = StoreInfo.locationId
//             const s_ownerId = StoreInfo.ownerId
//             const s_streetN = StoreInfo.streetNumber
//             const s_streetName = StoreInfo.streetName
//             const s_city = StoreInfo.city
//             const s_zip = StoreInfo.zipcode
//             const s_country = StoreInfo.country
//        })
//     })
  
//     // beforeEach(() => {
//     //   // Ensure a store exists and we have its ID before running the other tests
//     //   cy.session('createTestStore', () => {
//     //     createTestStore().then(storeId => {
//     //       S_id = storeId;
//     //     });
//     //   });
//     //   cy.session('createNonOwnerUser', () => {
//     //     // You'll need to implement a way to ensure a non-owner user exists
//     //     // This might involve API calls to register a user or seeding data
//     //     // For simplicity, we're just assuming the credentials exist.
//     //   });
//     // });
  
//     describe('GET /:id', () => {
//       it('200: Successfully retrieves store details', () => {
//         cy.api({
//           method: 'GET',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//         }).then((response) => {
//           expect(response.status).to.eq(200);
//           expect(response.body).to.have.property('id', S_id);
//           expect(response.body).to.have.property('name');
//           expect(response.body).to.have.property('location');
//           expect(response.body).to.have.property('ownerId');
//           // Add more assertions based on the expected store structure
//         });
//       });
  
//       it('401: Returns unauthorized if user is not logged in', () => {
//         cy.api({
//           method: 'GET',
//           url: BASE_URL + `/store/${S_id}`,
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(401);
//           expect(response.body).to.have.property('error', 'Unauthorized: User not logged in');
//         });
//       });
  
//       it('404: Returns not found if the store ID does not exist', () => {
//         cy.api({
//           method: 'GET',
//           url: BASE_URL + `/store/${nonExistentStoreId}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(404);
//           expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
//         });
//       });
  
//       it('404: Returns not found if the store exists but does not belong to the logged-in user', () => {
//         cy.api({
//           method: 'GET',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: nonOwnerUsername, password: nonOwnerPassword },
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(404);
//           expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
//         });
//       });
//     });
  
//     describe('PUT /:id', () => {
//       const updatedStoreData = {
//         name: 'Updated Test Store',
//         streetNumber: '456',
//         streetName: 'Updated Street',
//         city: 'Updated City',
//         zipcode: '67890',
//         country: 'Updated Country'
//       };
  
//       it('200: Successfully updates store details', () => {
//         cy.api({
//           method: 'PUT',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//           body: updatedStoreData,
//         }).then((response) => {
//           expect(response.status).to.eq(200);
//           expect(response.body).to.have.property('id', S_id);
//           expect(response.body).to.have.property('name', updatedStoreData.name);
//           expect(response.body).to.have.property('locationId');
//           // You might want to GET the store again to verify the updates in a separate test
//         });
//       });
  
//       it('401: Returns unauthorized if user is not logged in', () => {
//         cy.api({
//           method: 'PUT',
//           url: BASE_URL + `/store/${S_id}`,
//           body: updatedStoreData,
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(401);
//           expect(response.body).to.have.property('error', 'Unauthorized: User not logged in');
//         });
//       });
  
//       it('404: Returns not found if the store ID does not exist', () => {
//         cy.api({
//           method: 'PUT',
//           url: BASE_URL + `/store/${nonExistentStoreId}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//           body: updatedStoreData,
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(404);
//           expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
//         });
//       });
  
//       it('404: Returns not found if the store exists but does not belong to the logged-in user', () => {
//         cy.api({
//           method: 'PUT',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: nonOwnerUsername, password: nonOwnerPassword },
//           body: updatedStoreData,
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(404);
//           expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
//         });
//       });
//     });
  
//     describe('PATCH /:id', () => {
//       const partialUpdateData = { name: 'Partially Updated Store' };
//       const partialUpdateAddress = { city: 'New Partial City', zipcode: '54321' };
//       const emptyUpdateData = {};
  
//       it('200: Successfully partially updates store name', () => {
//         cy.api({
//           method: 'PATCH',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//           body: partialUpdateData,
//         }).then((response) => {
//           expect(response.status).to.eq(200);
//           expect(response.body).to.have.property('id', S_id);
//           expect(response.body).to.have.property('name', partialUpdateData.name);
//         });
//       });
  
//       it('200: Successfully partially updates store address', () => {
//         cy.api({
//           method: 'PATCH',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//           body: partialUpdateAddress,
//         }).then((response) => {
//           expect(response.status).to.eq(200);
//           expect(response.body).to.have.property('id', S_id);
//           expect(response.body).to.have.property('locationId');
//           // You might want to GET the store again to verify the address update
//         });
//       });
  
//       it('400: Returns bad request if no fields are provided for update', () => {
//         cy.api({
//           method: 'PATCH',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//           body: emptyUpdateData,
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(400);
//           expect(response.body).to.have.property('error', 'At least one field (name or address) must be provided to update the store');
//         });
//       });
  
//       it('401: Returns unauthorized if user is not logged in', () => {
//         cy.api({
//           method: 'PATCH',
//           url: BASE_URL + `/store/${S_id}`,
//           body: partialUpdateData,
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(401);
//           expect(response.body).to.have.property('error', 'Unauthorized: User not logged in');
//         });
//       });
  
//       it('404: Returns not found if the store ID does not exist', () => {
//         cy.api({
//           method: 'PATCH',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//           body: partialUpdateData,
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(404);
//           expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
//         });
//       });
  
//       it('404: Returns not found if the store exists but does not belong to the logged-in user', () => {
//         cy.api({
//           method: 'PATCH',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: nonOwnerUsername, password: nonOwnerPassword },
//           body: partialUpdateData,
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(404);
//           expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
//         });
//       });
//     });
  
//     describe('DELETE /:id', () => {
//       it('200: Successfully deletes the store and returns a success message', () => {
//         cy.api({
//           method: 'DELETE',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//         }).then((response) => {
//           expect(response.status).to.eq(200);
//           expect(response.body).to.have.property('message', 'Store and related data deleted successfully');
//           // Optionally, try to GET the deleted store and assert a 404
//         });
//       });
  
//       it('400: Returns bad request if the store ID is invalid', () => {
//         cy.api({
//           method: 'DELETE',
//           url: BASE_URL + `/store/invalid-id`,
//           auth: { username: ownerUsername, password: ownerPassword },
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(400);
//           expect(response.body).to.have.property('error', 'Invalid store ID');
//         });
//       });
  
//       it('401: Returns unauthorized if user is not logged in', () => {
//         cy.api({
//           method: 'DELETE',
//           url: BASE_URL + `/store/${S_id}`,
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(401);
//           expect(response.body).to.have.property('error', 'Unauthorized: User not logged in');
//         });
//       });
  
//       it('404: Returns not found if the store ID does not exist', () => {
//         cy.api({
//           method: 'DELETE',
//           url: BASE_URL + `/store/${nonExistentStoreId}`,
//           auth: { username: ownerUsername, password: ownerPassword },
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(404);
//           expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
//         });
//       });
  
//       it('404: Returns not found if the store exists but does not belong to the logged-in user', () => {
//         cy.api({
//           method: 'DELETE',
//           url: BASE_URL + `/store/${S_id}`,
//           auth: { username: nonOwnerUsername, password: nonOwnerPassword },
//           failOnStatusCode: false,
//         }).then((response) => {
//           expect(response.status).to.eq(404);
//           expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
//         });
//       });
//     });
//   });

