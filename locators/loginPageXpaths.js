var LoginPageXpaths = function () {
    var userNameInput = "//form/h3[text()='Already registered?']/..//input[contains(@name,'email')]";
    var passwordInput = "//form/h3[text()='Already registered?']/..//input[contains(@name,'passwd')]";
    this.getuserNameInput = function () {
        return userNameInput;
    };
    this.getPasswordInput = function () {
        return passwordInput;
    };
};
module.exports = new LoginPageXpaths();