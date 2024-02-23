const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  token: String,
  name: String,
  type: String,
  date: String,
  cost: Number,
  category: String,
});

module.exports = mongoose.model("User", userSchema);
