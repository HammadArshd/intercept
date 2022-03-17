import * as loginPO from './loginPO';

export function typeInPhone(data) {
    cy.get(loginPO.loginPhoneNumberField).type(data);
}

export function typeInPassword(data) {
    cy.get(loginPO.loginPasswordField).type(data);
}

export function clickLoginBtn() {
    cy.get(loginPO.loginBtn).click();
}