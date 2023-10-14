const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const journeySchema = new Schema({
    journeyName : {
        type: String,
        required: true
    },
    NoOfDates : {
        type: Number,
        required: true
    },
    NoOfMembwers : {
        type: Number,
        required: true
    }
})

const Journey = mongoose.model("Journey",journeySchema);

module.exports = Journey;