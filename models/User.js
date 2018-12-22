//File contains user model class for database

const mongoose = require("mongoose"); //import mongodb helper lib
const { Schema } = mongoose; //extract schema object from helper lib

//define user model schema
const userSchema = new Schema({
  googleID: String,
  credits: { type: Number, default: 0}
});

//load schema into user model class
mongoose.model("users", userSchema);
