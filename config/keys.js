//Seperates development keys from production keys depending on enviornment

//heroku sets NODE_ENV
if (process.env.NODE_ENV == "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
