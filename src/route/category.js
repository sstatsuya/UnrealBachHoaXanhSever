const express = require("express");
const router = express.Router()
const Category = require('../model/category') // import file model ở trên vào
const { MyResponse } = require('../common')

router.get('/', (req, res) => {
    res.send("dday la trang Category")
})
router.get("/all", async (req, res) => {
    try {
        const data = await Category.find({})
        MyResponse({ res, data })
    }
    catch (err) {
        MyResponse({ res, error: 'Lỗi khi lấy category: ' + err })
    }
});
module.exports = router
