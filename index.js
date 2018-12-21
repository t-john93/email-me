//Trevor Johnson
//Index file for loading and executing server

const express = require("express");
const mongoose = require("mongoose"); //middlware for mongodb
const cookieSession = require("cookie-session"); //middleware for cookie  use
const bodyParser = require("body-parser");
const passport = require("passport"); //middleware for Oath compatibility
const keys = require("./config/keys");
require("./models/User"); //***require before passport***
require("./services/passport");

//connect to remote database through mlab
mongoose.connect(keys.mongoURI);

//declare app as new express module
const app = express();

//
app.use(bodyParser.json());

//
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //good for 30 days
    keys: [keys.cookieKey]
  })
);

//
app.use(passport.initialize());
app.use(passport.session());


const authRoutes = require("./routes/authRoutes")(app);
const billingRounts = require("./routes/billingRoutes")(app);

//only runs if in production
if (process.env.NODE_ENV === "production") {

    //checks for and serves production asset requests
    app.use(express.static("/client/build"));

    //serves index.html for any get request
    //not recognized
    const path = require("path");

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000; //dyn port var for heroku, or 5000 local
app.listen(PORT);
