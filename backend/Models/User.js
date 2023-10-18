const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  Name: {
    type: String,
    required: false
  },
  Email: {
    type: String,
    required: false
  },
  Password: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model("User", userSchema);

