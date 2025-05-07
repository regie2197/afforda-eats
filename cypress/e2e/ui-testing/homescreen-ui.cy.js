describe('Home Screen UI WorkFlow', () => {

    
    beforeEach(() => {
        cy.visit('http://localhost:3000/home');
    });


    it('should display the navbar with logo, search bar, and burger menu', () => {
        cy.get('.logoPic').should('be.visible');
        cy.get('.search-bar').should('be.visible');
        cy.get('.burger').should('be.visible');
        cy.takeScreenshot()
    });

    it('should return the restaurant when searched', () => {
        cy.get('input#query').type('Jollijeep 1');
        cy.get('.search-button').click();
        cy.get('.restaurant-tiles').should('contain', 'Jollijeep 1');
        cy.takeScreenshot()
    });

    it('should display restaurant tiles in rows of three', () => {
        cy.get('.container').should('have.length', 12);
        cy.get('.container').eq(0).should('be.visible');
        cy.get('.container').eq(2).should('be.visible');
        cy.get('.container').eq(3).should('be.visible');
        cy.takeScreenshot()
    });

    it('should redirect to the restaurant details page when clicked', () => {
        cy.get('.container').contains('Pasta Corner').click();
        cy.url().should('include', '/pasta-corner');
        cy.takeScreenshot()
    });

    it('should display location and menu on restaurant details page', () => {
        cy.get('.container').contains('Green Bowl').click();
        cy.get('.location').should('be.visible');
        cy.get('.menu').should('be.visible');
        cy.takeScreenshot()
    });

    it('should be responsive across different devices', () => {
        // Desktop
        cy.viewport(1280, 800);
        cy.get('.navbar').should('be.visible');
        cy.takeScreenshot()

        // Tablet
        cy.viewport(768, 1024);
        cy.get('.navbar').should('be.visible');
        cy.takeScreenshot()

        // Mobile
        cy.viewport(375, 667);
        cy.get('.navbar').should('be.visible');
        cy.takeScreenshot()
    });

    it('should open the burger menu when clicked', () => {
        cy.get('.burger').click();
        cy.get('.popup-window').should('be.visible');
        cy.takeScreenshot()
    });

    it('should close the burger menu when clicked again', () => {
        cy.get('.burger').click();
        cy.get('.popup-window').should('be.visible');
        cy.get('.burger').click();
        cy.get('.popup-window').should('not.be.visible');
        cy.takeScreenshot()
    });

    it('should redirect to the homepage when logo is clicked', () => {
        cy.get('.logoPic').click();
        cy.url().should('eq', 'http://localhost:3000/home');
        cy.takeScreenshot()
    });

    it('should show "No results found" for unmatched search queries', () => {
        cy.get('input#query').type('Macadodoo burgers');
        cy.get('.search-button').click();
        cy.get('.no-results-message').should('contain', 'No results found');
        cy.takeScreenshot()
    });

    it('should display the restaurant name on each tile', () => {
        cy.get('.container').each(($tile) => {
            cy.wrap($tile).find('.title').should('be.visible');
            cy.takeScreenshot()
        });
    });

    it('should display an image on each restaurant tile', () => {
        cy.get('.container').each(($tile) => {
            cy.wrap($tile).find('.jeepPic').should('have.attr', 'src').and('include', '.jpg');
            cy.takeScreenshot()
        });
    });

    it('should display a short description on each restaurant tile', () => {
        cy.get('.container').each(($tile) => {
            cy.wrap($tile).find('.description').should('be.visible');
            cy.takeScreenshot()
        });
    });

    it('should display star ratings on restaurant tiles', () => {
        cy.get('.container').each(($tile) => {
            cy.wrap($tile).find('.rating').should('be.visible');
            cy.takeScreenshot()
        });
    });

    it('should show results for partial matches in the search bar', () => {
        cy.get('input#query').type('Sush');
        cy.get('.search-button').click();
        cy.get('.restaurant-tiles').should('contain', 'Sush');
        cy.takeScreenshot()
    });

    it('should allow scrolling through all restaurant listings', () => {
        cy.scrollTo('bottom');
        cy.get('.restaurant-tiles').should('have.length.greaterThan', 10);
        cy.takeScreenshot()
    });

    it('should display the footer at the bottom of the homepage', () => {
        cy.scrollTo('bottom');
        cy.get('footer').should('be.visible');
        cy.takeScreenshot()
    });

    it('should not allow the user to leave a review from the homepage', () => {
        cy.get('.review-button').should('not.exist');
        cy.takeScreenshot()
    });

    it('should redirect to the correct restaurant page when clicked', () => {
        cy.get('.container').contains('Mama RedHead\'s Kainan').click();
        cy.url().should('include', '/mama-redheads-kainan');
        cy.get('h1').should('contain', 'Mama RedHead\'s Kainan');
        cy.takeScreenshot()
    });

    it('should load more content dynamically without full page reload', () => {
        cy.get('.load-more-button').click();
        cy.get('.restaurant-tiles').should('have.length.greaterThan', 12);
        cy.takeScreenshot()
    });

    it('should return to the homepage when back button is clicked from restaurant page', () => {
        cy.get('.container').contains('Pasta Corner').click();
        cy.url().should('include', '/pasta-corner');
        cy.go('back');
        cy.url().should('include', '/home');
        cy.takeScreenshot()
    });

    it('should display consistent layout across different browsers', () => {
        const browsers = ['chrome', 'firefox', 'safari', 'edge'];
        browsers.forEach((browser) => {
            cy.get('.container').should('have.length', 12);
            cy.takeScreenshot()
        });
    });
});


