import * as navigationHandler from '../fixtures/navigationHandler/navigation';
import * as urlConfig from '../fixtures/configuration/urls';
import * as loginCC from '../fixtures/pageClasses/loginCC';
import * as apiHandler from '../fixtures/apiHandler/apiHandler';
import users from '../fixtures/testData/data';

describe('intercept demo', () => {

    beforeEach(() => {
        navigationHandler.navigateTo(urlConfig.url);
    })

    it('Enter the details and verify request payload', function () {
        
        loginCC.typeInPhone(users[0].username);
        loginCC.typeInPassword(users[0].password);

        apiHandler.interceptLoginApi();

        loginCC.clickLoginBtn();

        
        cy.wait('@loginAPI').then(($login) => {
            let payload = $login.request.body;
            expect(payload.username, 'username matched').to.eq(users[0].username);
            expect(payload.password, 'password matched').to.eq(users[0].password);
        });
    });
});
