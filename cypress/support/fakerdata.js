import { faker } from '@faker-js/faker';
 
export function reviewData() {
    return {
        "content": "good",
        "rating": 3,
        "userId": 15,
        "foodId": 1,
        "storeId": 2
    };
}

export function authData() {
    return {
        "email": faker.internet.email(),
        "username": faker.internet.userName(),
        "password": faker.internet.password(),
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "accountType": "user"
    };
}