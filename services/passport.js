//File contains Oauth strategies

const passport = require("passport"); //import passport
const GoogleStrategy = require("passport-google-oauth20").Strategy; //import oauth2.0
const mongoose = require("mongoose"); //import mongoose
const keys = require("../config/keys"); //import keys.js

const User = mongoose.model("users"); //loads user model class (mc)

//assigns session id to user (could even be a guest user)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//searches id's for user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

/////google sign in strategy/////
passport.use(
  new GoogleStrategy(
    {
      //app data sent to google w/ user
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },

    //tokens and profile are given to user by google
    //user gives tokens and profile to following function
    async (accessToken, refreshToken, profile, done) => {
      //User (mc) searches for googleID in db, returns match promise
      //returns null if not in db
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        //existing user
        return done(null, existingUser);
      }
      //new user
      const user = await new User({ googleID: profile.id }).save(); //saves new user profile id in db
      done(null, user);
    }
  )
);
