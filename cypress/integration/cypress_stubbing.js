describe('Web Automation', function () {
    it('Verify error message by mocking status code', function () {

        cy.intercept('POST', '/api/accommodation/property/search', {
            statusCode: 400,
        });
        
        cy.visit("https://next-staging.almosafer.com/mweb/chalets/search?cityId=24&lang=en");
        cy.get('[data-testid=searchFailed_cta]').should('exist');

    });

    it('Verify UI layer by mocking json response object', function () {

        cy.intercept('POST', '/api/accommodation/property/search', { fixture: 'apiHandler/mockResponse.json' }).as('mockSearch');

        cy.visit("https://next-staging.almosafer.com/mweb/chalets/search?cityId=24&lang=en");
        cy.intercept('POST', '/api/accommodation/property/advance-search', {
            statusCode: 400,
        });

    });

});