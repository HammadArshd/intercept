import * as loginPO from './loginPO';

export function typeInPhone(data) {
    cy.get(loginPO.loginPhoneNumberInput).type(data);
}

export function typeInPassword(data) {
    cy.get(loginPO.loginPhoneNumberInput).type(data);
}

export function clickLoginBtn() {
    cy.get(loginPO.loginBtn).click();
}