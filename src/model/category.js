const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Category =  new Schema({
})
module.exports = mongoose.model('categories', Category)