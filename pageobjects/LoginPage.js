var loginPageXpaths = require('../locators/loginPageXpaths');

var LoginPageObj = function () {

    this.get = function () {
        browser.driver.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    };

    this.setUserName = function (name) {
        browser.driver.findElement(by.xpath(loginPageXpaths.getuserNameInput())).sendKeys(name);
    };

    this.setPassword = function (name) {
        browser.driver.findElement(by.xpath(loginPageXpaths.getPasswordInput())).sendKeys(name);
    };

    this.clickSignIn = function () {
        browser.driver.findElement(by.xpath("//form/h3[text()='Already registered?']/..//button")).click();
    };

};
module.exports = new LoginPageObj();