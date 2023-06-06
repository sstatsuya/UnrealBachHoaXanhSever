const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Alert =  new Schema({
})
module.exports = mongoose.model('alerts', Alert)