import { LogIn } from 'lucide-react'
import createUser from '../../support/user-faker.utils.js'
import { Password } from '@mui/icons-material'


describe('API Endpoint Testing', { testIsolation: false }, () => {
    const newUser = createUser()
    let userId
    //let token
    
    it('post (404) - User or food not found', () => {
        cy.api({
          method: 'POST',
          url: 'http://localhost:4000/api/review/',
          body: {
            "content": "good",
            "rating": 2,
            "userId": 2000,
            "foodId": 2,
            "storeId": 8
          },
          auth: {
            username: "JOhndsss",
            password: "MySecur34e2Password12333"
          },
          failOnStatusCode: false
        }).should((response) => {
          expect(response.status).to.eq(404)
          expect(response.body).to.have.property('error', 'User or food not found')
        })
      })

    it('POST request for creating a new user', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/register",
            body: newUser
        }).should((response) => {
            expect(response.status).to.eq(201)
            userId = response.body.id
        })
    })

    it('POST request for Login In using email', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            body: {
                email: newUser.email,
                password : newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('POST request for Login In using username', () => {
        cy.api({
            method: 'POST',
            url: "http://localhost:4000/api/login",
            body: {
                username: newUser.username,
                password : newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
            //token = response.body.token
        })
    })

it('DELETE request for deleting user by ID', () => {

   const credentials = (`${newUser.username}:${newUser.password}`)
    cy.api({
        method: 'DELETE',
        url: "http://localhost:4000/api/user/" + userId,
        headers: {
            Authorization: `Basic ` +  btoa(credentials) // Add Basic Auth header
        }
    }).should((response) => {
        expect(response.status).to.eq(204)
    })
})

})
