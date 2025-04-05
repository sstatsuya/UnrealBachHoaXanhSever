const express = require("express");
const router = express.Router()
const Product = require('../model/product') // import file model ở trên vào
const { MyResponse } = require('../common')


router.get('/', (req, res) => {
    res.send("dday la trang Product")
})
router.get("/all", async (req, res) => {
    try {
        const data = await Product.find({})
        MyResponse({ res, data })
    }
    catch (err) {
        MyResponse({ res, error: 'Lỗi khi lấy category: ' + err })
    }
});
module.exports = router
