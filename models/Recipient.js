//File contains recipient model class for database

const mongoose = require("mongoose"); //import mongodb helper lib
const { Schema } = mongoose; //extract schema object from helper lib

//define recipient model schema
const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

//export schema
module.exports = recipientSchema;
