describe('Web Automation', function () {
    it('Visit site and validate response mapping', function () {

        cy.intercept('POST', '/api/accommodation/property/search').as('searchAPI');

        cy.visit("https://next-staging.almosafer.com/mweb/chalets/search?cityId=24&lang=en");

        cy.get('[data-testid=searchResults_PropertyCard_0_name]').then(($div) => {
            let propertyName = $div.text();
            cy.wait('@searchAPI').then(($func) => {
                let response = $func.response.body.properties;
                let propertyId = Object.keys(response)[0];
                expect(response[propertyId].nameEn, 'nameEn is matched').to.eq(propertyName);
            });
        });
    });
    

});