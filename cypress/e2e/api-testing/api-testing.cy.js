

describe('API Endpoint Testing', () => {
    it('POST request for creating a new user', () => {
        cy.api({  
            method: 'POST', 
            url: "http://localhost:4000/api/register",
            body: {
                "email": "lesterdatester1443@gmail.com",
                "username": "LesterDaTester1433",
                "password": "lester1231",
                "firstName": "Lester",
                "lastName": "Tester",
                "accountType": "USER"
            }   
        }).should((response)=>{
            expect(response.status).to.eq(201)
        })
    })
  })