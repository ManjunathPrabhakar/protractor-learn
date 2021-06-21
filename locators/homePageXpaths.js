var HomePageXpaths = function () {
    var userNameText = "//div[@class='header_user_info']/a/span";
    var signOutButton = "//div[@class='header_user_info']/a[@class='logout' and contains(text(),'Sign out')]";

    this.getuserNameText = function () {
        return userNameText;
    };

    this.getsignOutButton = function () {
        return signOutButton;
    };

};
module.exports = new HomePageXpaths();