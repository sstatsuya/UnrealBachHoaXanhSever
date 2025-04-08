const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserVoucher = new Schema({
    _id: String,
    userID: String,
    voucherList: [String],
})
module.exports = mongoose.model('user_vouchers', UserVoucher)