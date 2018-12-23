//File contains survey model class for database

const mongoose = require("mongoose"); //import mongodb helper lib
const { Schema } = mongoose;//extract schema object from helper lib
const RecipientSchema = require("./Recipient");

//define survey model schema
const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0},
    no: { type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    dateSent: Date,
    lastResponded: Date
});

//load schema into survey model class
mongoose.model("surveys", surveySchema);