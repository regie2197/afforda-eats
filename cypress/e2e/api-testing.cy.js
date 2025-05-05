import { userData } from '../support/userdata';
// const authUsername = "sampleapi"
// const authPassword = "password#123"
describe('template spec', () => {
  it('passes', () => {
    const data = userData();
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/register',
      body: data,
        // "email" : "testing4@gmail.com",
        // "username" : "testingtwo",
        // "password" : "password123",
        // "firstName" : "Testtest",
        // "lastName": "Ing",
        // "accountType": "USER"
      
      // auth: {
      //   username: "uname",
      //   password: "heheh"
      // }
    }).should((response) => {
      expect(response.status).to.eq(201)
    })
  })
  it('passes', () => {
    const data = userData();
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/review',
      body:{
        content: "Very good",
        rating: 1,
        userId: 280,
        foodId: 1,
        storeId: 1.
      },
      auth: {
        username: "sampleaaapi",
        password: "password#123"
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
  

 