import { userRegister } from '../support/registeruser';
import { RegistrationPage } from '../support/pages/register-page.page';
import { LoginPage } from '../support/pages/login-page.page';
import { Login } from '@mui/icons-material';

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();

describe('Registration - USER', () => {

    beforeEach(() => {
        cy.visit('https://afforda-eats.vercel.app/login')
        
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
    it('Verify user can input data on all mandatory fields ("First Name" , "Last Name", "Email", "Username", "Password")', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        registrationPage.fillForm(user);
        
    })
    it('Verify user registration without providing "First Name" field a data while populating all the other  fields ', () => {
        const testUser = { ...user }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.firstName;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    })
    it('Verify user registration without providing "Last Name" field a data while populating all the other  fields ', () => {
        const testUser = { ...user }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.lastName;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")

        //error should occur
    })
    it('Verify user registration without providing "Email" field a data while populating all the other  fields ', () => {
        const testUser = { ...user }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.email;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")

        //error should occur
    })
    it('Verify user registration without providing "Username" field a data while populating all the other  fields ', () => {
        const testUser = { ...user }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.username;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")

        //error should occur
    })
    it('Verify user registration without providing "Password" field a data while populating all the other  fields ', () => {
        const testUser = { ...user }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        delete testUser.password;
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")

        //error should occur
    })
    it('Verify user registration by providing all mandatory field with valid credentials', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        registrationPage.fillForm(user);
        registrationPage.clickSubmit();
        cy.get("Redirected")
        //should procede to next page
    })
    it('Verify user registration by clicking "Register" button without providing any field', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")

        //error should occur
    })
    it('Verify user registration with "First Name" accepts white spaces', () => { //Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.firstName = 'John Jhon'
        testUser.lastName = "Cruz"
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Redirected")

        //should procede to next page
    })
    it('Verify user registration with "Last Name" accepts white spaces', () => { //Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.firstName = "Johnny"
        testUser.lastName = 'Dela Cruz'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get('button[type="submit"]').click()
        cy.get("Redirected")

        //should procede to next page
    })
    it('Verify user registration with "First Name" and "Last Name" accepts white spaces', () => { //Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.firstName = 'John Jhon'
        testUser.lastName = 'Dela Cruz'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Redirected")

        //should procede to next page
    })
    it('Verify user registration with "Email" accepts data without valid email format (e.g. "sample@gmail.com")', () => { //Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.email = 'sampleemail.com'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")

        //error should occur
    })
    it('Verify user registration with "User Name" accepts white spaces', () => { //Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.username = 'Juan John'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    })
    it('Verify user registration with "Password" field accept credentials with special characters and has 6 and above characters', () => { //Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.password = 'password#123'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Redirected")
        //no error should occur
    })
    it('Verify user registration with "Password" field accept credentials with special characters and has 5 and below characters', () => { //Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.password = 'p#123'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Redirected")

        //error should occur
    })
    it('Verify user registration with "Password" field without special characters on credential with 6 characters and above', () => { //Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.password = 'password123'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    })
    it('Verify user registration with "Password" field without special characters on credential with 5 characters and below', () => { //Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.password = 'p123'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    })
    it('Verify user registration with a registered "Username"', () => { //not Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.password = 'user'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    }) 
    it('Verify user registration with a registered "Email"', () => { //not Accept White Spaces
        const testUser = { ...user };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testUser.password = 'email'
        registrationPage.fillForm(testUser);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
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
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    }) 
});