const express = require("express");
const router = express.Router()
const Category = require('../model/category') // import file model ở trên vào
const { MyResponse } = require('../common')
const { v4: uuidv4 } = require("uuid");

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

router.post("/add", async (req, res) => {
    try {
        const { name, img } = req.body
        const newCate = {
            categoryID: uuidv4(),
            name,
            img
        }
        const newCategory = new Category(newCate)
        await newCategory.save()
        MyResponse({ res, data: newCategory })
    }
    catch (err) {
        MyResponse({ res, error: 'Lỗi khi tạo category: ' + err })
    }
});

router.post("/delete", async (req, res) => {
    try {
        const { id } = req.body
        await Category.deleteOne({ _id: id })
        MyResponse({ res, data: { message: 'Xoá category thành công' } })
    }
    catch (err) {
        MyResponse({ res, error: 'Lỗi khi tạo category: ' + err })
    }
});

router.post("/update", async (req, res) => {
    try {
        const { _id, name, img } = req.body
        await Category.updateOne({ _id: _id }, { name, img })
        const updatedCate = await Category.findOne({ _id: _id })
        console.log('tien xem updated', updatedCate, _id)
        MyResponse({ res, data: updatedCate })
    }
    catch (err) {
        MyResponse({ res, error: 'Lỗi khi tạo category: ' + err })
    }
});

module.exports = router
