import { LogIn } from 'lucide-react'
import createUser from '../../support/user-faker.utils.js'
import { Password } from '@mui/icons-material'

describe('API Endpoint Testing', () => {
    const newUser = createUser()
    let userId
    
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
        })
    })










    it('DELETE request for deleting user by ID', () => {
        cy.api({
            method: 'DELETE',
            url: "http://localhost:4000/api/user/" + userId,
            body: {
                username: newUser.username,
                password : newUser.password
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
    })

})