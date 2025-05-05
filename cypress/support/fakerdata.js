import { faker } from '@faker-js/faker';
 
// Godwynne ----------------
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

// Joshua ----------------

export function generateAffordaEatsUserInfo() {
    return{
        email: faker.internet.email(),
        username: faker.internet.username(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        accountType: 'USER',
}
}

export function generateAffordaEatsFoodItem() {
    return{
       id: 0,
        name: faker.commerce.productName(),
        price: faker.commerce.price(undefined, undefined, 2),
        description: faker.commerce.productDescription()
    }
}

export function generateAffordaEatsStore() {
    return{
        name: faker.company.name(),
        streetName: faker.location.streetAddress(),
        streetNumber: faker.location.street(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country()
    }
}

export function generateAffordaEatsStoreOwner() {
    return{
        email: faker.internet.email(),
        username: faker.internet.username(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        accountType: 'STORE_OWNER',
    }
}



