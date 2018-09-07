//Handles database schema for user id collection

const mongoose = require("mongoose");
const { Schema } = mongoose; // destructured: const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema); //loads userSchema into model class
