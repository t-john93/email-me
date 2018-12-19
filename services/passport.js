//File contains Oauth strategies

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); //loads user model class

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
      //User model class searches for googleID in database, returns match promise
      //returns null if not in database
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      //else new user
      const user = await new User({ googleID: profile.id }).save(); //saves new user profile id in database
      done(null, user);
    }
  )
);
