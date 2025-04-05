const express = require("express");
const router = express.Router()
const Comment = require('../model/comment') // import file model ở trên vào
const { MyResponse } = require('../common')


router.get('/', (req, res) => {
    res.send("dday la trang Comment")
})
router.get("/all", async (req, res) => {
    try {
        const data = await Comment.find({})
        MyResponse({ res, data })
    }
    catch (err) {
        MyResponse({ res, error: 'Lỗi khi lấy comment: ' + err })
    }
});
module.exports = router
