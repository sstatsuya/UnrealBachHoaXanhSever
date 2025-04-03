const express = require("express");
const router = express.Router();
const Cart = require("../model/cart"); // import file model ở trên vào
router.get("/", (req, res) => {
  res.send("dday la trang Cart");
});
router.get("/all", async (req, res) => {
  try {
    const data = await Cart.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error when get Carts" });
  }
});

router.get("/cart-by-user", async (req, res) => {
  try {
    const { userID } = req.body
    let cart = await Cart.findOne({ userID: userID });
    if (cart)
      res.json(cart);
  } catch (err) {
    res.status(500).json({ error: "Error when get Carts" });
  }
});


module.exports = router;
