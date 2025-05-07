import { userRegister } from '../../support/registeruser';
import { RegistrationPage } from '../../support/pages/register-page.page';
import { LoginPage } from '../../support/pages/login-page.page';
import { Login } from '@mui/icons-material';
import { faker } from '@faker-js/faker';

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();

describe('Registration - USER', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
//         cy.clearCookies();
//   cy.clearLocalStorage();
//   cy.reload();

    });
    const user = userRegister();

    it('Verify user is able to view the proper UI of the login page', () => {
        loginPage.loginView()
        
    });

    it('Verify user is able to click "Register" text  button ', () => {
        loginPage.assertRegisterTextButton();
    })
    it('Verify clicking "User" button after clicking register button ', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
    })
    it('Verify clicking "Login" button in User registration page', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        cy.get('a[href="/login"]').should('be.visible').and('not.be.disabled')
        cy.get('a[href="/login"]').click()
    })
    it.only('Verify user can input data on all mandatory fields ("First Name" , "Last Name", "Email", "Username", "Password")', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        cy.get('.css-1xzvf8u > img').should('be.visible')
        registrationPage.fillForm(user);
        
    })
    // it('Verify reloading the page after inputting data on all mandatory fields ("First Name" , "Last Name", "Email", "Username", "Password")', () => {
    //     loginPage.loginView()
    //     loginPage.assertRegisterTextButton();
    //     loginPage.clickUserButton();
    //     registrationPage.assertFields();
    //     cy.get('.css-1xzvf8u > img').should('be.visible')
    //     registrationPage.fillForm(user);
    //     cy.reload()
    //     cy.get('form').should('be.visible');
    // })
    it('Verify user registration without providing "First Name" field a data while populating all the other  fields ', () => {
        const testUser = {
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password123",   
          }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.firstName;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 }) // Waits up to 10 seconds
        //error should occur
    })
    it('Verify user registration without providing "Last Name" field a data while populating all the other  fields ', () => {
        const testUser = {
            firstName: faker.person.firstName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password123",      }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.lastName;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 }) // Waits up to 10 seconds

        //error should occur
    })
    it('Verify user registration without providing "Email" field a data while populating all the other  fields ', () => {
        const testUser = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            username: faker.person.firstName(),
            password: "password123",      }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.email;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 }) // Waits up to 10 seconds

        //error should occur
    })
    it('Verify user registration without providing "Username" field a data while populating all the other  fields ', () => {
        const testUser = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: "password123", 
         }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.username;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 }) // Waits up to 10 seconds

        //error should occur
    })
    it('Verify user registration without providing "Password" field a data while populating all the other  fields ', () => {
        const testUser = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            username: faker.person.firstName(),
            password: "password123", };
             // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.password;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 }) // Waits up to 10 seconds

        //error should occur
    })
    it('Verify user registration by providing all mandatory field with valid credentials', () => {
        const testUser = { 	
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password123",     };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.url().should('include', 'http://localhost:3000/home', { timeout: 15000 });
 // Waits up to 10 seconds
        //should procede to next page
    })
    it('Verify registration with one field contain 1 alphanumeric characters and above (e.g. First Name)', () => {
        const testUser = { 	
            firstName: 'M',
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password123",     };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        // cy.get('Error prompt')
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal(/Registration failed: Please try again/);
        //     return true;
        // });
        cy.url().should('contain', '/user', { timeout: 15000 }) // Waits up to 10 seconds
    })
    it('Verify if registration accepts input field with 51 characters and above', () => {
        const testUser = { 	
            firstName: 'MaximilianoChristopherAlexanderJonathanRobinsonLee',
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password123",     };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get('Error prompt')
    })
    it('Verify if registration accepts input field with 2 to 50 characters', () => {
        const testUser = { 	
            firstName: 'Maximilian',
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password123",     };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.url().should('contain', '/user', { timeout: 15000 }) 
    })
    it('Verify user registration by clicking "Register" button without providing any field', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 }) // Waits up to 10 seconds

        //error should occur
    })
    it('Verify user registration with "First Name" accepts white spaces', () => { //Accept White Spaces
        const testUser = { firstName: 'John Johnny', // Verify that user registration accepts white spaces for First Name and Last Name
            lastName: faker.person.lastName(),           // Assert input field for first name and last name accepts white spaces
            email: faker.internet.email(),               // Assert that the user is successfully register and additional assertion - assert the profile first name and last name
            username: faker.person.firstName(),
            password: "password123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.firstName = 'John Jhonny'
        // testUser.lastName = "Cruzz"
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.url().should('include', 'http://localhost:3000/home', { timeout: 15000 });

        //should procede to next page
    })
    it('Verify user registration with "Last Name" accepts white spaces', () => { //Accept White Spaces
        const testUser = { firstName: 'Johnny',
            lastName: 'John Jhon',
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.firstName = "Johnnyt"
        // testUser.lastName = 'Dela Cruzzer'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        // cy.get('button[type="submit"]').click()
        cy.url().should('include', 'http://localhost:3000/home', { timeout: 15000 });

        //should procede to next page
    })
    it('Verify user registration with "First Name" and "Last Name" accepts white spaces', () => { //Accept White Spaces
        const testUser = { firstName: 'Johnny Dela',
            lastName: 'John Cruz',
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.firstName = 'Johny Jhony'
        // testUser.lastName = 'Delaa Cruzz'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.url().should('include', 'http://localhost:3000/home', { timeout: 15000 });

        //should procede to next page
    })
    it('Verify user registration with "Email" accepts data with valid email format (e.g. "sample@gmail.com")', () => { //Accept White Spaces
        const testUser = { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: 'sample3@email.com',
            username: faker.person.firstName(),
            password: "password123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.email = 'samplemail.com'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.url().should('contain', '/home', { timeout: 15000 }) 

        //error should occur
    })
    it('Verify user registration with "Email" accepts data without valid email format (e.g. "samplegmail.com")', () => { //Accept White Spaces
        const testUser = { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: 'sampleemail.com',
            username: faker.person.firstName(),
            password: "password123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.email = 'samplemail.com'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 }) 

        //error should occur
    })
    it('Verify user registration with "User Name" accepts white spaces', () => { //Accept White Spaces
        const testUser = { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: 'Jhon Cruz',
            password: "password123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.username = 'Juann John'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 }) 
        //error should occur
    })
    it('Verify user registration with "Password" field accept credentials with special characters and has 6 and above characters', () => { //Accept White Spaces
        const testUser = { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password#123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.password = 'password#123'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.url().should('contain', '/home', { timeout: 15000 })
        //no error should occur
    })
    it('Verify user registration with "Password" field accept credentials with special characters and has 5 and below characters', () => { //Accept White Spaces
        const testUser = { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "pas#1",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.password = 'p#123'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 })

        //error should occur
    })
    it('Verify user registration with "Password" field without special characters on credential with 6 characters and above', () => { //Accept White Spaces
        const testUser = { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "password123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.password = 'password123'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        // cy.on('window:alert', (text) => {
        //     expect(text).to.equal('Registration failed: Please try again');
        // });
        // cy.url().should('contain', 'http://localhost:3000/register/home', { timeout: 15000 })
        // //error should occur
    })
    it('Verify user registration with "Password" field without special characters on credential with 5 characters and below', () => { //Accept White Spaces
        const testUser = { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: faker.person.firstName(),
            password: "pas1",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        // testUser.password = 'p123'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 })
        //error should occur
    })
    it('Verify user registration with a registered "Username"', () => { //not Accept White Spaces
        const testUser = { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            username: 'emailjho@gmail,com',
            password: "password#123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.password = 'user'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 })
        //error should occur
    }) 
    it('Verify user registration with a registered "Email"', () => { //not Accept White Spaces
        const testUser = { firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: 'emailjho@gmail,com',
            username: faker.person.firstName(),
            password: "password#123",    };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.password = 'email'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Registration failed: Please try again');
        });
        cy.url().should('contain', '/user', { timeout: 15000 })
        //error should occur
    }) 
    it('Verify user registration with password is masked or hidden', () => { //not Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.password = 'email'
        registrationPage.fillForm(testUser);
        cy.get('input[name="password"]').invoke('val').should('not.be.empty');
     
    }) 
});
