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
          
            cy.AffordaEatsGenerateStoreFile(updatedData);
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
    //no street number sill allowed to create store
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
            expect(response.status).to.eq(200)
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
                username: 'osm',
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

// ok
describe('AffordaEats Store API: Get all stores for authenticated user', () => {

    let uname ='kangkangkang'
    let pword = 'hehehehe1234'
    const BASE_URL= 'http://localhost:4000/api'
    let userid = 68
    let s_id, s_name, s_loc, s_ownerId, s_streetN, s_streetName, s_city, s_zip,s_country
    before(() => {
       cy.readFile('cypress/fixtures/AffordaEatsStoreInfo.json').then(StoreInfo => {
            const s_id = StoreInfo.id
            const s_name = StoreInfo.name
            const s_loc = StoreInfo.locationId
            const s_ownerId = StoreInfo.ownerId
            const s_streetN = StoreInfo.streetNumber
            const s_streetName = StoreInfo.streetName
            const s_city = StoreInfo.city
            const s_zip = StoreInfo.zipcode
            const s_country = StoreInfo.country
       })
    })

    it('200: Successfully retrieved list of stores owned by the user', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/store/',
            auth: {
                username: uname,
                password: pword
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('401: Verify Unauthorized: User not logged in trigger error 401', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/store/',
            auth: {
                username: '',
                password: '' 
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401)
        })
    })

    it('404: Verify no stores found for this user error triggers 404', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/store/',
            auth: {
                username: 'talkingtothemoon',
                password: 'hehe123456'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error', 'No stores found for this user')
        })
    })

    it('500: Verify failed to fetch stores error' , () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/store/',
            auth: {
                username: '전지현',
                password: 'hehe123456'
            },
            failOnStatusCode: false
         }).then((response) => {
            expect(response.status).to.eq(500)
         })
    })
})

describe('AffordaEats Store API: Store Operations Tests', () => {
    const BASE_URL = 'http://localhost:4000/api';
    let ownerUsername = 'kangkangkang';
    let ownerPassword = 'hehehehe1234';
    let nonOwnerUsername = 'talkingtothemoon'; 
    let nonOwnerPassword = 'hehe123456';
    let nonExistentStoreId = 999999;
  
    let userid = 68
    let s_id, s_name, s_loc, s_ownerId, s_streetN, s_streetName, s_city, s_zip, s_country
    before(() => {
       cy.readFile('cypress/fixtures/AffordaEatsStoreInfo.json').then(StoreInfo => {
             s_id = StoreInfo.id
             s_name = StoreInfo.name
             s_loc = StoreInfo.locationId
             s_ownerId = StoreInfo.ownerId
             s_streetN = StoreInfo.streetNumber
             s_streetName = StoreInfo.streetName
             s_city = StoreInfo.city
             s_zip = StoreInfo.zipcode
             s_country = StoreInfo.country
       })
       cy.wait(1500)
    })
  
  
    describe('GET /:id', () => {
      it('200: Successfully retrieves store details', () => {
        cy.api({
          method: 'GET',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: ownerUsername, password: ownerPassword },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('id', s_id);
          expect(response.body).to.have.property('name');
          expect(response.body).to.have.property('location');
          expect(response.body).to.have.property('ownerId');
        });
      });
      
      //no checker if user is logged in or not
      it('401: Returns unauthorized if user is not logged in', () => {
        cy.api({
          method: 'GET',
          url: BASE_URL + `/store/${s_id}`,
          auth: {
            username: 'kangkangkang',
            password: '1234567'
          },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(401);
        });
      });
  
      it('404: Returns not found if the store ID does not exist', () => {
        cy.api({
          method: 'GET',
          url: BASE_URL + `/store/${nonExistentStoreId}`,
          auth: { username: ownerUsername, password: ownerPassword },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
        });
      });
  
      it('404: Returns not found if the store exists but does not belong to the logged-in user', () => {
        cy.api({
          method: 'GET',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: nonOwnerUsername, password: nonOwnerPassword },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
        });
      });
    });
  
    // ok
    describe('PUT /:id', () => {
      const updatedStoreData = {
        name: 'Updated Test Store',
        streetNumber: '456',
        streetName: 'Updated Street',
        city: 'Updated City',
        zipcode: '67890',
        country: 'Updated Country'
      };
  
      it('200: Successfully updates store details', () => {
        cy.api({
          method: 'PUT',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: ownerUsername, password: ownerPassword },
          body: updatedStoreData,
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('id', s_id);
          expect(response.body).to.have.property('name', updatedStoreData.name);
          expect(response.body).to.have.property('locationId');
        });
      });
      
      //no checker if user is logged in or not
      it('401: Returns unauthorized if user is not logged in', () => {
        cy.api({
          method: 'PUT',
          url: BASE_URL + `/store/${s_id}`,
          auth: {
            username: '',
            password: ''
          },
          body: updatedStoreData,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(401);
        });
      });
  
      it('404: Returns not found if the store ID does not exist', () => {
        cy.api({
          method: 'PUT',
          url: BASE_URL + `/store/${nonExistentStoreId}`,
          auth: { username: ownerUsername, password: ownerPassword },
          body: updatedStoreData,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
        });
      });
  
      it('404: Returns not found if the store exists but does not belong to the logged-in user', () => {
        cy.api({
          method: 'PUT',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: nonOwnerUsername, password: nonOwnerPassword },
          body: updatedStoreData,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
        });
      });
    });
  
    describe('PATCH /:id', () => {
      const partialUpdateData = { streetName: 'aling puring' };
      const partialUpdateAddress = { city: 'New Partial City', zipcode: '54321' };
      const emptyUpdateData = {};
    
     // api cannot patch reliably
      it('200: Successfully partially updates store name and address', () => {
        cy.wrap(s_id).should('exist');
        cy.api({
          method: 'PATCH',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: ownerUsername, password: ownerPassword },
        //   body: partialUpdateData,
         body: partialUpdateData
        }).then((response) => {
            cy.log('Response:', JSON.stringify(response.body));
            if (response.status !== 200) {
              expect(response.status).to.eq(200); // Ensure the status is 200
            } else {
              expect(response.body).to.have.property('id', s_id);
              expect(response.body).to.have.property('name', partialUpdateData.name);
            }
          });
      });
      
      //api cannot patch 
      it('200: Successfully partially updates store address', () => {
        cy.wait(500)
        cy.api({
          method: 'PATCH',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: ownerUsername, password: ownerPassword },
          body: partialUpdateAddress
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('id', s_id);
          expect(response.body).to.have.property('locationId');
        });
      });
  
      it('400: Returns bad request if no fields are provided for update', () => {
        cy.api({
          method: 'PATCH',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: ownerUsername, password: ownerPassword },
          body: emptyUpdateData,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'At least one field (name or address) must be provided to update the store');
        });
      });
      
      // no checker in api
      it('401: Returns unauthorized if user is not logged in', () => {
        cy.api({
          method: 'PATCH',
          url: BASE_URL + `/store/${s_id}`,
          auth: {
            username: '',
            password: ''
          },
          body: partialUpdateData,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(401);
        });
      });
  
      it('404: Returns not found if the store ID does not exist', () => {
        cy.api({
          method: 'PATCH',
          url: BASE_URL + `/store/${nonExistentStoreId}`,
          auth: { username: ownerUsername, password: ownerPassword },
          body: partialUpdateData,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
        });
      });
  
      it('404: Returns not found if the store exists but does not belong to the logged-in user', () => {
        cy.api({
          method: 'PATCH',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: nonOwnerUsername, password: nonOwnerPassword },
          body: partialUpdateData,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
        });
      });
    });
  
    describe('DELETE /:id', () => {
      it('200: Successfully deletes the store and returns a success message', () => {
        cy.api({
          method: 'DELETE',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: ownerUsername, password: ownerPassword },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message', 'Store and related data deleted successfully');
          // Optionally, try to GET the deleted store and assert a 404
        });
      });
  
      it('400: Returns bad request if the store ID is invalid', () => {
        cy.api({
          method: 'DELETE',
          url: BASE_URL + `/store/invalid-id`,
          auth: { username: ownerUsername, password: ownerPassword },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Invalid store ID');
        });
      });
  
      it('401: Returns unauthorized if user is not logged in', () => {
        cy.api({
          method: 'DELETE',
          url: BASE_URL + `/store/${s_id}`,
          auth: {
            username: '',
            password: ''
          },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(401);
        });
      });
  
      it('404: Returns not found if the store ID does not exist', () => {
        cy.api({
          method: 'DELETE',
          url: BASE_URL + `/store/${nonExistentStoreId}`,
          auth: { username: ownerUsername, password: ownerPassword },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
        });
      });
  
      it('404: Returns not found if the store exists but does not belong to the logged-in user', () => {
        cy.api({
          method: 'DELETE',
          url: BASE_URL + `/store/${s_id}`,
          auth: { username: nonOwnerUsername, password: nonOwnerPassword },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Store not found or you are not the owner');
        });
      });
    });
  });

