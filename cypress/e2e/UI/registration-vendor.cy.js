import { vendorRegister } from '../../support/registervendor';
import { RegistrationPage } from '../../support/pages/register-page.page';
import { LoginPage } from '../../support/pages/login-page.page';
import { Login } from '@mui/icons-material';

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();

describe('Registration - VENDOR', () => {

    beforeEach(() => {
        cy.visit('https://afforda-eats.vercel.app/login')
        
    });
    const vendor = vendorRegister();

    it('Verify vendor is able to view the proper UI of the login page', () => {
        loginPage.loginView()
        
    });

    it('Verify vendor is able to click "Register" text  button ', () => {
        loginPage.assertRegisterTextButton();
    })
    it('Verify clicking "Vendor" button after clicking register button ', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
    })
    it('Verify clicking "Login" button in Vendor registration page', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        cy.get('a[href="/login"]').should('be.visible').and('not.be.disabled')
        cy.get('a[href="/login"]').click()
    })
    it('Verify vendor can input data on all mandatory fields ("First Name" , "Last Name", "Email", "Username", "Password")', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        registrationPage.fillFormVendor(vendor);
        
    })
    it('Verify vendor registration without providing "First Name" field a data while populating all the other  fields ', () => {
        const testVendor = { ...vendor }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        delete testVendor.firstName;
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        //error should occur
    })
    it('Verify vendor registration without providing "Last Name" field a data while populating all the other  fields ', () => {
        const testVendor = { ...vendor }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        delete testVendor.lastName;
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        //error should occur
    })
    it('Verify vendor registration without providing "Email" field a data while populating all the other  fields ', () => {
        const testVendor = { ...vendor }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        delete testVendor.email;
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        //error should occur
    })
    it('Verify vendor registration without providing "Username" field a data while populating all the other  fields ', () => {
        const testVendor = { ...vendor }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        delete testVendor.username;
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        //error should occur
    })
    it('Verify vendor registration without providing "Password" field a data while populating all the other  fields ', () => {
        const testVendor = { ...vendor }; // Create a new copy
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        delete testVendor.password;
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        //error should occur
    })
    it('Verify vendor registration by providing all mandatory field with valid credentials', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        registrationPage.fillFormVendor(vendor);
        registrationPage.clickSubmit;
        //should procede to next page
    })
    it('Verify vendor registration by clicking "Register" button without providing any field', () => {
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        registrationPage.clickSubmit;
        //error should occur
    })
    it('Verify vendor registration with "First Name" accepts white spaces', () => { //Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        testVendor.FirstName = 'John Jhon'
        testVendor.lastName = "Cruz"
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        //should procede to next page
    })
    it('Verify vendor registration with "Last Name" accepts white spaces', () => { //Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        testVendor.FirstName = "Johnny"
        testVendor.lastName = 'Dela Cruz'
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        cy.get('button[type="submit"]').click()
        //should procede to next page
    })
    it('Verify vendor registration with "First Name" and "Last Name" accepts white spaces', () => { //Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        testVendor.FirstName = 'John Jhon'
        testVendor.lastName = 'Dela Cruz'
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        //should procede to next page
    })
    it('Verify vendor registration with "Email" accepts data without valid email format (e.g. "sample@gmail.com")', () => { //Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        testVendor.email = 'sampleemail.com'
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        //error should occur
    })
    it('Verify vendor registration with "User Name" accepts white spaces', () => { //Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickVendorButton();
        registrationPage.assertFieldsVendor();
        testVendor.username = 'Juan John'
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit;
        //error should occur
    })
    it('Verify user registration with "Password" field accept credentials with special characters and has 6 and above characters', () => { //Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testVendor.password = 'password#123'
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit();
        cy.get("Redirected")
        //no error should occur
    })
    it('Verify user registration with "Password" field accept credentials with special characters and has 5 and below characters', () => { //Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testVendor.password = 'p#123'
        registrationPage.fillForm(testVendor);
        registrationPage.clickSubmit();
        cy.get("Redirected")

        //error should occur
    })
    it('Verify user registration with "Password" field without special characters on credential with 6 characters and above', () => { //Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testVendor.password = 'password123'
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    })
    it('Verify user registration with "Password" field without special characters on credential with 5 characters and below', () => { //Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testVendor.password = 'p123'
        registrationPage.fillForm(testVendor);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    })
    it('Verify user registration with a registered "Username"', () => { //not Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testVendor.password = 'user'
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    }) 
    it('Verify user registration with a registered "Email"', () => { //not Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testVendor.password = 'email'
        registrationPage.fillFormVendor(testVendor);
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    }) 
    it('Verify user registration with password is masked or hidden', () => { //not Accept White Spaces
        const testVendor = { ...vendor };
        loginPage.loginView()
        loginPage.assertRegisterTextButton();
        loginPage.clickUserButton();
        registrationPage.assertFields();
        testVendor.password = 'email'
        registrationPage.fillForm(testVendor);
        cy.get('input[name="password"]').invoke('val').should('not.be.empty');
        registrationPage.clickSubmit();
        cy.get("Error Prompt ")
        //error should occur
    }) 
});