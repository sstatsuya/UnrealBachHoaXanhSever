const express = require("express");
const router = express.Router();
const User = require("../model/user"); // import file model ở trên vào
router.get("/", (req, res) => {
  res.send("dday la trang User");
});
router.get("/all", async (req, res) => {
  try {
    const data = await User.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error when get Users" });
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const newUser = new User({
      userID: req.body.userID,
      username: req.body.username,
      avatar: req.body.avatar,
      password: req.body.password,
      fullName: req.body.fullName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error when register" });
  }
});
module.exports = router;
