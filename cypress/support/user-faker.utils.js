import { faker } from '@faker-js/faker';

export function createUser(){
    return {
        "email": faker.internet.email(),
        "username": faker.internet.username(),
        "password": faker.internet.password(),
        "firstName": faker.person.firstName(),
        "lastName": faker.person.lastName(),
        "accountType": "USER"
    }
}

export function createReview(){
    return {
        "userId": 25,
        "foodId": 4,
        "storeId" : 4, 
        "content": faker.string.sample({length : 30}),
        "rating" : faker.number.int({ min: 1, max: 5 })
    }
}