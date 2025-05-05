describe('TC-HOME: Home Page Test Suite', () => {
  // const baseUrl = "https://afforda-eats.vercel.app";
  const baseUrl = "http://localhost:4000/";

  beforeEach(() => {
    cy.visit(`${baseUrl}home`);
    cy.url().should('include', '/home')
  });

  it('TC-HOME-00 - Home Page - Verify Home Page Accessibility and Buttons', () => {
    // Verify if page is in the Home Page
    cy.url().should('include', '/home');

    // Verify if the AffordaEats logo and brand name is visible with proper capitalization
    cy.get('img.logoPic').should('be.visible');
    cy.get('a.headtitle').should('be.visible').and('contain', 'AffordaEats');

    // Verify if the search field is visible, not disabled, and contains no text
    cy.get(".search-section").find('h2').eq(0).should("have.text", "Eat. Rate. Repeat.");
    cy.get(".search-section").find('h2').eq(1).should("have.text", "The smart way to find what's worth tasting.");

    // Verify if the Filter By drop down is visible and not disabled
    // Click on the Filter By drop down
    cy.contains('div', 'Filter By').should('be.visible').and('not.be.disabled').click();
    cy.wait(1500);

    // Verify if the contents of the Filter By drop down are visible, not disabled,
    // and contains the following selections: Restaurants, Cafes, and Street Food
    cy.get('ul') // Select the parent `<ul>` container
      .children('li[data-value]') // Select all `<li>` elements directly inside the `<ul>`
      .eq(0) // Select the first `<li>`
      .should('be.visible')
      .and('contain.text', 'Filter By');

    cy.get('ul')
      .children('li[data-value]')
      .eq(1) // Select the second `<li>`
      .should('be.visible')
      .and('contain.text', 'Restaurants');

    cy.get('ul')
      .children('li[data-value]')
      .eq(2) // Select the third `<li>`
      .should('be.visible')
      .and('contain.text', 'Cafes');

    cy.get('ul')
      .children('li[data-value]')
      .eq(3) // Select the fourth `<li>`
      .should('be.visible')
      .and('contain.text', 'Street Food')
      .click();

    // Verify if the Sort By drop down is visible and not disabled
    // Click on the Sort By drop down
    cy.contains('div', 'Sort By').should('be.visible').and('not.be.disabled').click();
    cy.wait(1500);

    // Verify if the contents of the Filter By drop down are visible, not disabled,
    // and contains the following selections: Restaurants, Cafes, and Street Food
    cy.get('ul') // Select the parent `<ul>` container
      .children('li[data-value]') // Select all `<li>` elements directly inside the `<ul>`
      .eq(0) // Select the first `<li>`
      .should('be.visible')
      .and('contain.text', 'Sort By');

    cy.get('ul')
      .children('li[data-value]')
      .eq(1) // Select the second `<li>`
      .should('be.visible')
      .and('contain.text', 'Rating');

    cy.get('ul')
      .children('li[data-value]')
      .eq(2) // Select the third `<li>`
      .should('be.visible')
      .and('contain.text', 'Popularity');

    cy.get('ul')
      .children('li[data-value]')
      .eq(3) // Select the fourth `<li>`
      .should('be.visible')
      .and('contain.text', 'Price')
      .click();

    // Verify if the search field is visible, not disabled, and contains no text
    // Verify if the search field is able to type alphanumeric inputs
    cy.get('input[type="text"]')
      .should('be.visible')
      .and('not.be.disabled')
      .and('have.attr', 'placeholder', 'Search for a Jolli-Bus!')
      .type('abcd123')
      .should('have.value', 'abcd123')
      .clear();

    // Verify if the search field is able to type inputs with symbols and whitespaces
    cy.get('input[type="text"]').type('abcd123 !#').should('have.value', 'abcd123 !#');

    // Verify if the search button is visible, and not disabled
    cy.contains('button', 'Search').should('be.visible').and('not.be.disabled');

    // Verify if the home page consists of 12 stores, each with their own images,
    // store name, jolli-jeep name, location address, and store hours visible
    cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-4')
      .each(($element) => {
        // Assert the image visibility
        cy.wrap($element).find('img').should('be.visible');

        // Assert the store name exists
        cy.wrap($element).find('h6.title').should('be.visible').and('not.be.empty');

        // Assert the Jollijeep name exists
        cy.wrap($element).find('h6.MuiTypography-subtitle1').should('be.visible').and('not.be.empty');

        // Assert the location address is visible
        // Assert the store hours are displayed
        cy.wrap($element).find('p.MuiTypography-root.MuiTypography-body2').should('be.visible').and('not.be.empty');
    });

    // Verify if the hamburger menu is not disabled, and visible
    cy.get('div.burger').should('be.visible').and('not.be.disabled');

    // Verify if the pop up window should not be visible before clicking on it
    cy.get('nav.popup-window').should('not.be.visible');

    // Click on the hamburger menu
    cy.get('div.burger').click();
    cy.wait(1500);

    // Verify if a pop up window shows up, has a label signifiying that it shows the users' profile settings,
    // and has visible and not disabled buttons for reviews and log out.
    cy.get('nav.popup-window').should('be.visible');
    cy.get('nav.popup-window > legend').should('contain', 'Profile Settings');
    cy.contains('button', 'Reviews').should('be.visible').and('not.be.disabled');
    cy.contains('button', 'Log Out').should('be.visible').and('not.be.disabled');
  });

  it('TC-HOME-01 - Home Page - Log Out User', () => {
    // Verify if page is in the Home Page
    cy.url().should('include', '/home');

    // Click on the hamburger menu
    cy.get('div.burger').click();
    cy.wait(1500);

    // Press the Log Out button
    cy.contains('button', 'Log Out').click();
    cy.wait(1500);

    // Verify if the user has been redirected to the login page
    cy.url().should('include', '/login');
  });

  const searchInput = 'Store 3';

  it('TC-HOME-02 - Home Page - Searching for a Store', () => {
    // Verify if page is in the Home Page
    cy.url().should('include', '/home');
    
    // Select the search bar and search for a store
    cy.get('input[type="text"]').type('Store 1').should('have.value', searchInput);
    cy.contains('button', 'Search').click();
    cy.wait(1500);
    
    // Assert that only Store 1 is visible
    cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-4')
      .children()
      .should('have.length', 1); // ✅ Test fails if more than one store is visible
  });

  const testCases = [
    { id: "3", input: "Store 1", results: "Results found", assertion: "Store 1", group: "Valid Alphanumeric" }, // ✅ Valid alphanumeric
    { id: "4", input: "Store_1# !", results: "No results found", assertion: "Store_1# !", group: "Alphanumeric with Symbols" }, // ✅ Alphanumeric with symbols
    { id: "5", input: "Store_1# !😜🫨😜", results: "Invalid Input", assertion: "Invalid Input", group: "Invalid - Alphanumeric with Symbols & Emojis" }, // ❌ Alphanumeric with symbols & emojis
    { id: "6", input: "!!!!!!!", results: "Invalid Input", assertion: "No results found", group: "Invalid - Only Symbols" }, // ❌ Invalid: only symbols
    { id: "7", input: "", results: "Invalid Input", assertion: "No results found", group: "Invalid - Empty Search" }, // ❌ Invalid: empty search
    { id: "8", input: "     ", results: "Invalid Input", assertion: "No results found", group: "Invalid - Whitespace Only" }, // ❌ Invalid: whitespace only
  ];
  
  testCases.forEach(({ id, input, results, assertion, group }) => {
    it(`TC-HOME-0${id} - Home Page - Testing the Search Bar Using BVA: ${group}`, () => {
      // Select a search bar and type the corresponding input
      cy.get('input[type="text"]').type(input).should('have.value', input.substring(0, 25));
      cy.contains("button", "Search").click();
      cy.wait(1500);

      if (results === "Results found") {
        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-4')
          .each(($element) => {
            // Check if search results are correct
            cy.wrap($element)
              .children()
              .find('h6')
              .should('contain.text', input);
        });    
      } else {
        // Assert error case
        cy.get(".error-message").should("contain.text", results);
      }
    });
  });

  const boundaryTestCases = [
    { id: "09", input: "A", results: "Results found", assertion: "A", group: "Minimum Valid Input - 1 Characters (min)" },
    { id: "10", input: "AB", results: "No results found", assertion: "AB", group: "One Character more than Minimum Input - 2 Characters (min+)"},
    { id: "11", input: "Store 1234567890", results: "No results found", assertion: "Store 1234567890", group: "Typical Valid Length" },
    { id: "12", input: "Store 12345678901234567890", results: "No results found", assertion: "Store 12345678901234567890", group: "Max Valid Length - 20 Characters (max)" },
    { id: "13", input: "Store 123456789012345678901", results: "Invalid Input", assertion: "No results found", group: "Exceeds Max Length - 21 Characters (max+)" },
    { id: "14", input: "Store 1234567890123456789", results: "Invalid Input", assertion: "No results found", group: "One Character Less than the Max Length - 19 Characters (max-)" },
    { id: "15", input: " ", results: "Invalid Input", assertion: "No results found", group: "Single Whitespace Only" },
  ];
  
  boundaryTestCases.forEach(({ id, input, results, assertion, group }) => {
    it(`TC-HOME-${id} - Testing Search Bar Using BVA: ${group}`, () => {
      cy.get('input[type="text"]').type(input).should('have.value', input.substring(0, 25)); // ✅ Handles trimmed value
      cy.contains("button", "Search").click();
      cy.wait(1500);
  
      if (results === "Results found") {
        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-4')
          .each(($element) => {
            // Check if search results are correct
            cy.wrap($element)
              .children()
              .find('h6')
              .should('contain.text', input);
        });    
      } else {
        // ❌ Verify error message appears
        cy.get(".error-message").should("contain.text", results);
      }
    });
  });

  it("TC-HOME-16 - Home Page - Viewing all the User's Reviews", () => {
    // Verify if page is in the Home Page
    cy.url().should('include', '/home');

    // Click on the hamburger button
    cy.get('div.burger').click();

    // Click on the reviews button
    cy.contains('button', 'Reviews');

    // Verify if the user is able to view their reviews
    cy.url().should('include', '/reviews');
  });

  it('TC-HOME-17 - Home Page - Viewing a Store and Leaving a Review', () => {
    // Verify if page is in the Home Page
    cy.url().should('include', '/home');

    // Select the search bar and type 100 characters
    cy.get('input[type="text"]').type("A".repeat(100)).should('have.text', "A".repeat(25));
    cy.contains("button", "Search").click();

    // Check search results
    cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-4')
      .each(($element) => {
        // Check if search results are correct
        cy.wrap($element)
          .children()
          .find('h6')
          .should('contain.text', "A".repeat(25));
    });
  });
})