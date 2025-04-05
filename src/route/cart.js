const express = require("express");
const router = express.Router();
const Cart = require("../model/cart");
const { MyResponse } = require('../common')

router.get("/", (req, res) => {
  res.send("dday la trang Cart");
});
router.get("/all", async (req, res) => {
  try {
    const data = await Cart.find({});
    MyResponse({ res, data })
  } catch (err) {
    MyResponse({ res, error: 'Lỗi khi lấy giỏ hàng: ' + err })
  }
});

router.post("/cart-by-user", async (req, res) => {
  try {
    const { userID } = req.body
    console.log('tien xeme userID ', userID)
    let cart = await Cart.findOne({ userID: userID });
    console.log('tien xem cart ', cart)
    if (cart)
      return MyResponse({ res, data: cart })
    else return MyResponse({ res, error: 'Không tìm thấy giỏ hàng' })
  } catch (err) {

    return MyResponse({ res, status: 500, error: "Lỗi lấy giỏ hàng " + err })
  }
});


module.exports = router;
