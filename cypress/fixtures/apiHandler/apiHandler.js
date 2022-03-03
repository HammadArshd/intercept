export function interceptLoginApi() {
    cy.intercept('POST', 'api/c2c-host/user/login').as('loginAPI');
}