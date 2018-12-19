//Trevor Johnson
//
//Index file for loading and executing server

const express = require("express"); //import express
const mongoose = require("mongoose"); //import mongoose
const cookieSession = require("cookie-session"); //import cookie-session
const passport = require("passport"); //import passport
const keys = require("./config/keys"); //import keys.js
require("./models/User"); //import User.js (***require before passport***)
require("./services/passport"); //import passport.js (auth route handle)

//connect to remote db thru mlab
mongoose.connect(keys.mongoURI);

const app = express(); //declare app as new express module

//start new cookie session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //good for 30 days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize()); //
app.use(passport.session());

// require and call authRoutes(app);
const authRoutes = require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; //dyn port var for heroku, or 5000 local
app.listen(PORT);
