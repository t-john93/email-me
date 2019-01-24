//File for auth route handlers

const passport = require("passport");


module.exports = app => {

    //google route
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );
    //google callback
    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => { res.redirect("/surveys"); }
    );

    //logout route
    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    //test route returns requesting user's profile data
    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });
};
