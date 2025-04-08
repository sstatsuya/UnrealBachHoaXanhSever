const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Voucher = new Schema({
    _id: String,
    voucherID: String,
    productID: String,
    code: String,
    quantity: Number,
    description: String,
    discountValue: Number,
    maxDiscountValue: Number,
    dateStart: Number,
    dateEnd: Number, // assuming it's a timestamp in string format
})
module.exports = mongoose.model('vouchers', Voucher)