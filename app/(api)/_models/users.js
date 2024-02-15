const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  type: String,
  date: String,
  cost: Number,
  category: String,
});

module.exports = mongoose.model("User", userSchema);
