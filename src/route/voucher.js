const express = require("express");
const router = express.Router()
const Voucher = require('../model/voucher') // import file model ở trên vào
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
module.exports = router
