const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  userID: String,
  username: String,
  avatar: String,
  password: String,
  fullName: String,
  phoneNumber: String,
  email: String,
});
module.exports = mongoose.model("users", User);
