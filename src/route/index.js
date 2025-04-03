const express = require("express");
const router = express.Router();
router.use('/alert', require('./alert'))
router.use('/voucher', require('./voucher'))
router.use('/user', require('./user'))
router.use('/category', require('./category'))
router.use('/product', require('./product'))
router.use('/comment', require('./comment'))
router.use('/cart', require('./cart'))
module.exports = router;