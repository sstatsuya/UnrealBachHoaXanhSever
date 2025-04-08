const express = require("express");
const router = express.Router()
const Voucher = require('../model/voucher')
const UserVoucher = require('../model/userVoucher')
const { MyResponse } = require('../common')

router.get('/', (req, res) => {
    res.send("dday la trang Voucher")
})
router.get("/all", async (req, res) => {
    try {
        const data = await Voucher.find({})
        MyResponse({ res, data })
    }
    catch (err) {
        MyResponse({ res, error: 'Lỗi khi lấy Voucher: ' + err })
    }
});

router.post("/get-by-user", async (req, res) => {
    try {
        const { userID } = req.body
        if (!userID) return MyResponse({ res, error: "Vui lòng nhập userID" })
        const data = await UserVoucher.findOne({ userID })
        const voucherList = await Voucher.find({ voucherID: { $in: data.voucherList } })
        MyResponse({ res, data: voucherList })
    }
    catch (err) {
        MyResponse({ res, error: 'Lỗi khi lấy Voucher: ' + err })
    }
});
module.exports = router
