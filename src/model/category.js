const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Category = new Schema({
    categoryID: { type: String },
    name: { type: String },
    img: { type: String },
}, { collection: "categories" })

module.exports = mongoose.model('categories', Category)