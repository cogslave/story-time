module.exports = function (app, passport) {
    require("./landingpage")(app);
    require("./authentication")(app, passport);
};