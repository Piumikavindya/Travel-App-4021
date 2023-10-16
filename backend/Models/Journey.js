const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const journeySchema = new Schema({
    journeyName : {
        type: String,
        required: false
    },
    NoOfDates : {
        type: Number,
        required: false
    },
    NoOfMembwers : {
        type: Number,
        required: false
    },
    StartingDate : {
        type: Date,
        required: false
    },
    ContactNO : {
        type: String,
        required: false
    },
    Locations : {
        type: [String],
        required: false
    },
    Events : {
        type: [String],
        required: false
    },
    Resorts : {
        type: [String],
        required: false
    },
    Packages : {
        type: [String],
        required: false
    }
})

const Journey = mongoose.model("Journey",journeySchema);

module.exports = Journey;