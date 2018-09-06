//File for auth route handlers

const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google", //user makes google Oauth request
    passport.authenticate("google", {
      scope: ["profile", "email"] //returns basic profile info and email
    })
  );

  //callback for google Oauth sign in (in passport.js)
  app.get("/auth/google/callback", passport.authenticate("google"));

  //logout route
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user); //should show as undefined
  });

  //test route returns requesting user's profile data
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
