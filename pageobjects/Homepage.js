var HomePageXpaths = require('../locators/homePageXpaths');

var HomePageObj = function () {

    this.getLoggedInUserName = function () {
        return browser.driver.findElement(by.xpath(HomePageXpaths.getuserNameText())).getText();
    };

    this.signOut = function () {
        browser.driver.findElement(by.xpath(HomePageXpaths.getsignOutButton())).click();
    }

};
module.exports = new HomePageObj();