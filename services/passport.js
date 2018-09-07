//File handles Oauth requests by either finding existing user in db,
//or creating a new user in db.

const passport = require("passport"); //import passport
const GoogleStrategy = require("passport-google-oauth20").Strategy; //import oauth2.0
const mongoose = require("mongoose"); //import mongoose
const keys = require("../config/keys"); //import keys.js

const User = mongoose.model("users"); //loads model class (mc)

//assigns session id to user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//searches id's for user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

/////google sign in route/////
passport.use(
  new GoogleStrategy(
    {
      //app data sent to google w/ user
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },

    //access token, refresh token and profile are given to user by google
    //user gives tokens and profile data to callback
    (accessToken, refreshToken, profile, done) => {
      //User.findOne searches for googleID in db, returns match promise
      //returns null if not in db
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //user exist in db
          done(null, existingUser);
        } else {
          //new user
          new User({ googleId: profile.id })
            .save() //saves new user profile id in db
            .then(user => (null, user));
        }
      });
    }
  )
);
