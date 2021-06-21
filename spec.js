var loginPageObj = require('./pageobjects/LoginPage');
var homePageObj = require('./pageobjects/Homepage');
let creds_json = require('./data/creds.json');

creds_json.forEach((pair, index) => {

    describe('automation practice homepage', function () {

        beforeAll(() => {
            console.log('beforeEach');
        });

        it('perfrom Login', function () {
            console.log("first method Started");

            loginPageObj.get();

            loginPageObj.setUserName(pair.uname);
            loginPageObj.setPassword(pair.password);
            loginPageObj.clickSignIn();

            console.log("first method finished");

        });


        it('verify Loggedin user', function () {
            expect(homePageObj.getLoggedInUserName()).toEqual(pair.name);
            homePageObj.signOut();
            console.log("second method");
        });

        afterAll(() => {
            browser.driver.close();
            console.log('afterEach');
        });
    });

});