const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Cart = new Schema({
    _id: String,
    userID: String,
});
module.exports = mongoose.model("carts", Cart);
