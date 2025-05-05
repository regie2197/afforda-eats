import { generateAffordaEatsFoodItem } from "../../support/fakerdata"


// ok
describe('AffordaEats API: Register Food test', () => {

    let FoodName, FoodPrice, FoodDesc
    let uname = 'kangkangkang'
    let pword = 'hehehehe1234'
    const BASE_URL = 'http://localhost:4000/api'
    beforeEach(() => {
        cy.wait(1500)
    })
    before(() =>{
        const FoodItem = generateAffordaEatsFoodItem()

        cy.AffordEatsGenerateFoodFile(FoodItem)
        FoodName = FoodItem.name
        FoodPrice = FoodItem.price
        FoodDesc = FoodItem.description
        
        cy.wait(2000)
    })
    
    it('200: Successfully added a menu item', () => {
       cy.api({
        method: 'POST',
        url: BASE_URL + '/food/',
        auth: {
            username: uname,
            password: pword
        },    
        body: {
            name: FoodName,
            price: FoodPrice,
            description: FoodDesc,
            storeId: 1
        }
       }).then((response) => {
        expect(response.status).to.be.oneOf([200,201])
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('name', FoodName)
        expect(response.body.price.toString()).to.equal(FoodPrice);
        expect(response.body).to.have.property('description', FoodDesc)
        expect(response.body).to.have.property('storeId')
        expect(response.body).to.have.property('createdAt')
        expect(response.body).to.have.property('updatedAt')
        
        cy.wait(2000)
        //Overwrite ID key & addking storeId key to json file for future reference
        cy.readFile('cypress/fixtures/AffordaEatsFood.json').then(existingData => {
            const keyToUpdate = 'id'; 
            const newValue = response.body.id; 
            const NewProperty = 'storeId'
            const NewStoreId = response.body.storeId
          
            const updatedData = { ...existingData };
          
            updatedData[keyToUpdate] = newValue;
            updatedData[NewProperty] = NewStoreId;
            console.log(updatedData);
          
            cy.AffordEatsGenerateFoodFile(updatedData);
          });
       })
       
    })
    
    it('400: Verify passing invalid price will trigger error 400', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/food',
            auth: {
                username: uname,
                password: pword
            },   
            body: {
                name: FoodName,
                price: 'InvalidPrice',
                description: FoodDesc,
                storeId: 1
            },
            failOnStatusCode:false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Price must be a valid number')
        })
    })

    it('400: Verify passing a negative number will trigger error 400', () =>{
        cy.api({
            method: 'POST',
            url: BASE_URL + '/food',
            auth: {
                username: uname,
                password: pword
            },
            body: {
                name: FoodName,
                price: -250,
                description: FoodDesc,
                storeId: 1
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Price must be a positive number')
        })
    })

    it('400: Verify no price will trigger error 400', () => {

        cy.api({
            method: 'POST',
            url: BASE_URL + '/food',
            auth: {
                username: uname,
                password: pword
            },   
            body: {
                name: FoodName,
                description: FoodDesc,
                storeId: 1
            },
            failOnStatusCode: false
           }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', "All fields (name, price, description, storeId) are required")
           })
    })

    it('400: verify no description will trigger error 400', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/food',
            auth: {
                username: uname,
                password: pword
            },   
            body: {
                name: FoodName,
                price: FoodPrice,
                storeId: 1
            },
            failOnStatusCode: false
           }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', "All fields (name, price, description, storeId) are required")
           })
    })

    it('400: Verify no name will trigger error 400', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/food',
            auth: {
                username: uname,
                password: pword
            },   
            body: {
                price: FoodPrice,
                description: FoodDesc,
                storeId: 1
            },
            failOnStatusCode: false
           }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', "All fields (name, price, description, storeId) are required")
           })
    })

    it('400: Verify that no storeId will trigger error 400', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/food',
            auth: {
                username: uname,
                password: pword
            },   
            body: {
                name: FoodName,
                price: FoodPrice,
                description: FoodDesc,
            },
            failOnStatusCode: false
           }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', "All fields (name, price, description, storeId) are required")
           })
    })

    it('404: Verify store not found error', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/food',
            auth: {
                username: uname,
                password: pword
            },   
            body: {
                name: FoodName,
                price: FoodPrice,
                description: FoodDesc,
                storeId: 9234756
            },
            failOnStatusCode: false
           }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error', "Store not found")
           })
    })

    it('500: Verify passing a string to storeId will trigger error 500', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/food',
            auth: {
                username: uname,
                password: pword
            },
            body: {
                name: FoodName,
                price: FoodPrice,
                description: FoodDesc,
                storeId: 'Storeid'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.body).to.have.property('error', 'Failed to create food')
        })
    })

    it('500: Verify Faliled to create food error', () => {
        cy.api({
            method: 'POST',
            url: BASE_URL + '/food',
            auth: {
                username: uname,
                password: pword
            },   
            body: {
                name: FoodName,
                price: FoodPrice,
                description: 12234,
                storeId: 1
            },   
            failOnStatusCode: false 
          }).then((response) => {
            // Assert that the response has a 500 status code
            expect(response.status).to.eq(500);
          });
    })

    after(() => {

    })
})

// ok besides error 500
describe('AffordaEats API: Get menu test', () => {

    let RetID, RetName, RetPrice, RetDesc, RetstoreId
    let uname = 'kangkangkang'
    let pword = 'hehehehe1234'
    const BASE_URL = 'http://localhost:4000/api'
    before(() => {
        cy.readFile('cypress/fixtures/AffordaEatsFood.json').then(RetData => {
            RetID = RetData.id
            RetName = RetData.name
            RetPrice = RetData.price
            RetDesc = RetData.description
            RetstoreId = RetData.storeId
        }) 
    })

    it('200: Successfully returned menu of specific store', () => {

        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/store/' + 1,
            auth: {
                username: uname,
                password: pword
            }   
        }).then((response) => {
            expect(response.status).to.eq(200)
   
             //Check if the response body is correct
            //  expect(response.body).to.have.property('id', RetID)
            //  expect(response.body).to.have.property('name', RetName)
            //  expect(response.body.price.toString()).to.equal(FoodPrice);
            //  expect(response.body).to.have.property('description',RetDesc)
            //  expect(response.body).to.have.property('storeId', RetstoreId)
        })        
    })

    it('400: Veify invalid store id error: passing string', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/store/' + 'apiman',
            auth: {
                username: uname,
                password: pword
            } ,
            failOnStatusCode:false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', "Invalid store ID")
        })
    })

    it('400: Verify invalid store id error: passing symbols', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + "/food/store/$%##",
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            //expect(response.body).to.have.property('error', 'Invalid store ID')
        })
    })

    it('400:Verify invalid store id error: passing combination of string and symbols', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/store/Yes#&',
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode:false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Invalid store ID')
        })
    })

    it('404" Verify No food items found for this store', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/store/' + 456,
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode:false 
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error', 'No food items found for this store')
        })
    })

    it('500: Verify Failed to fetch foods error',() => {
    cy.api({
        method: 'GET',
        url: `${BASE_URL}/store/400000000000000000000000000000000`,
        auth: {
            username: uname,
            password: pword
        },
        failOnStatusCode: false 
    }).then((response) => {
        expect(response.status).to.eq(500);
       // expect(response.body).to.have.property('error', 'Failed to fetch foods')
    });
            
})
})

//ok besides error 500 test
describe('AffordaEats API: Get specific menu item test', () => {

    let uname = 'kangkangkang'
    let pword = 'hehehehe1234'
    const BASE_URL = 'http://localhost:4000/api'
    let RetName, RetPrice, RetDesc, RetStoreid, RetId
    // beforeEach(() => {
    //     cy.wait(1000)
    // })
    before(() => {
        cy.readFile('cypress/fixtures/AffordaEatsFood.json').then(RetData => {
            RetId = RetData.id
            RetName = RetData.name
            RetPrice = RetData.price
            RetDesc = RetData.description
            RetStoreid = RetData.storeId
         })
    })
    it('200: Successfully returned specific food menu', () => {
        cy.log(RetStoreid)
        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/' + RetStoreid,
            auth: {
                username: uname,
                password: pword
            } 
        }).then((response) => {
            expect(response.status).to.eq(200)
            //improvement: add assertion to given record
            // expect(response.body).to.have.property('id',  RetId)
            // expect(response.body).to.have.property('name', RetName)
            // expect(response.body.price.toString()).to.equal(FoodPrice);
            // expect(response.body).to.have.property('description', RetDesc)
            // expect(response.body).to.have.property('storeId', RetStoreid)
        })
    })

    it('400: Verify Invalid food ID error: Passing a string', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/mamamia',
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode:false 
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Invalid food ID')
        })
    })

    it('400: Verify Invalid food ID error: Passing symbols', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/%$#&@',
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
           // expect(response.body).to.have.property('error', 'Invalid food ID')
        })
    })

    it('400: Verify Invailid food ID error: Passing a combination of string and symbols', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/ami%$&@',
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            //expect(response.body).to.have.property('error', "Invalid food ID")
        })
    })

    it('404: Verify food not found error', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/458',
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode:false 
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error', 'Food not found')
        })
    })
    it('500: Verify failed to fetch food error', () => {
        cy.api({
            method: 'GET',
            url: BASE_URL + '/food/18000000000000000000000000000000000000',
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.have.property('error','Failed to fetch food');
        });
})
})

// ok
describe('AffordaEats API: Patch specific food test', () => {

    let uname = 'kangkangkang'
    let pword = 'hehehehe1234'
    let FoodId, UpdatedName, UpdatedPrice, UpdatedDescription, OldName, OldPrice, OldDesc, StoreId
    const BASE_URL = 'http://localhost:4000/api'
    beforeEach(() => {
        cy.wait(1000)
    })
    before(() => {
        cy.readFile('cypress/fixtures/AffordaEatsFood.json').then((OldInfo) => {
            OldName = OldInfo.name
            OldPrice = OldInfo.price
            OldDesc = OldInfo.description
            FoodId = OldInfo.id
            StoreId = OldInfo.storeId
        })

        const UpdatedUser = generateAffordaEatsFoodItem()
        cy.AffordEatsGenerateUpdateFoodFile(UpdatedUser)
        cy.readFile('cypress/fixtures/AffordaEatsUpdatefood.json').then((Newinfo) => {
            UpdatedName = Newinfo.name
            UpdatedPrice = Newinfo.price
            UpdatedDescription = Newinfo.description
        })

    })
    it('200: Successfully patched specific food menu', () => {
        cy.api({
            method: "PATCH",
            url: BASE_URL + '/food/' + FoodId,
            url: BASE_URL + '/food/19',
            auth: {
                username: uname,
                password: pword
            },
            body: {
                description: UpdatedDescription
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            // expect(response.body).to.have.property('message','Partially Updated food description')
            // expect(response.body).to.have.property('storeId', 1)

            expect(response.body).to.have.property('id')
           // expect(response.body).to.have.property('name', OldName) commented until final run of api test
            //expect(response.body).to.have.property('price', OldPrice) commented until final run of api test
            expect(response.body).to.have.property('description', UpdatedDescription)
            expect(response.body).to.have.property('storeId')
            expect(response.body).to.have.property('createdAt')
            expect(response.body).to.have.property('updatedAt')
        }) 
        //improvement: check if record is actually updated
    })

    it('400: Verify Invalid food ID error: Passing a string', () => {
        cy.api({
            method: "PATCH",
            url: BASE_URL + '/food/NaN',
            auth: {
                username: uname,
                password: pword
            },
             failOnStatusCode:false ,
            body: {
                description: UpdatedDescription
            }
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error','Invalid food ID')
        }) 
    })

    it('400: Verify Invalid food ID error: Passing a symbol', () => {
        cy.api({
            method: 'PATCH',
            url: BASE_URL + '/food/&%$#@',
            auth: {
                username: uname,
                password: pword
            },
            body: { 
                description: UpdatedDescription
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            //expect(response.body).to.have.property('error', 'Invalid food ID')
        })
    })

    it('400: Verify Invalid food ID error: Passing a combination of string and symbol', () => {
        cy.api({
            method: 'PATCH',
            url: BASE_URL + '/food/yes$%&',
            auth: {
                username: uname,
                password: pword
            },
            body: {
                description: UpdatedDescription
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            //expect(response.body).to.have.property('error', 'Invalid food ID')
        })
    })

    it('404: Verify food not found error', () => {
        cy.api({
            method: "PATCH",
            url: BASE_URL + '/food/679495876',
            auth: {
                username: uname,
                password: pword
            },
             failOnStatusCode:false ,
            body: {
                description: UpdatedDescription
            }
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error','Food not found')
        }) 
    })

    it('500: Failed to update food error', () => {
            cy.api({
                method: 'PATCH',
                url: BASE_URL + '/food/' + FoodId,
                auth: {
                    username: uname,
                    password: pword
                },  
                body: {
                    name: 'name',
                    price: 123,
                    description: 123234958723495
                },
                failOnStatusCode: false 
              }).then((response) => {

                expect(response.status).to.eq(500);
                expect(response.body).to.have.property('error','Failed to update food');
              });
    })
})

//ok
describe('AffordaEats API: Delete specific food menu', () => {


    let uname = 'kangkangkang'
    let pword = 'hehehehe1234'
    const BASE_URL = 'http://localhost:4000/api'
    let FoodID

    beforeEach(() => {
        cy.wait(1000)
    })
    before(() => {
        cy.readFile('cypress/fixtures/AffordaEatsFood.json').then(RetrievedInfo => {
            FoodID = RetrievedInfo.id
        })
    })

    it('200: Successfully deleted specific food menu', () => {
        cy.api({
            method: 'DELETE',
            // url: BASE_URL + '/food/' + FoodID,
            url: BASE_URL + '/food/19',
            auth: {
                username: uname,
                password: pword
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message', 'Food and related reviews deleted successfully')
        })
    })

    it('400: Verify Invalid food ID error', () => {
        cy.api({
            method: 'DELETE',
            url: BASE_URL + '/food/NaN',
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode:false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Invalid food ID')
        })
    })

    it('404: Verify Food not found error', () => {
        cy.api({
            method: 'DELETE',
            url: BASE_URL + '/food/29384',
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode:false
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error', 'Food not found')
        })
    })

    it('500: Verify failed to delete food error',() => {
        cy.api({
            method: 'DELETE',
            url: `${BASE_URL}/food/1200000000000000000000000000000000000000000000000000000000000`,
            auth: {
                username: uname,
                password: pword
            },
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.have.property('error','Failed to delete food');
        });
     })
})








// HTD 배치 19의 자산, 완료 날짜: 2025/05/02 , 저작권: 2025 









