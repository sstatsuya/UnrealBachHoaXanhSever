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
    let oldUser = await User.findOne({ username: newUser.username });
    console.log("tien xem olduser ", oldUser);
    if (oldUser !== null) {
      console.log("phat hien loi");
      res.status(200).json({
        isError: true,
        error: `Tài khoản ${newUser.username} đã được đăng ký, vui lòng dùng tên đăng nhập khác`,
      });
      return;
    }
    oldUser = await User.findOne({ phoneNumber: newUser.phoneNumber });
    if (oldUser !== null) {
      res.status(200).json({
        isError: true,
        error: `Số điện thoại ${newUser.phoneNumber} đã được sử dụng, vui lòng dùng số điện thoại khác`,
      });
      return;
    }
    oldUser = await User.findOne({ email: newUser.email });
    if (oldUser !== null) {
      res.status(200).json({
        isError: true,
        error: `Email ${newUser.email} đã được sử dụng, vui lòng dùng email khác`,
      });
      return;
    }
    console.log("oldUser", oldUser);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({
      error: `Error when register ${typeof error === "string" ? error : ""}`,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      res
        .status(200)
        .json({
          isError: true,
          error: "Vui lòng nhập đủ tên đăng nhập và mật khẩu",
        });
      return;
    }
    let loginUser = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (loginUser === null) {
      res
        .status(200)
        .json({
          isError: true,
          error: "Tên đăng nhập hoặc mật khẩu không chính xác",
        });
      return;
    }
    res.json({
      userID: loginUser.userID,
      username: loginUser.username,
      avatar: loginUser.avatar,
      fullName: loginUser.fullName,
      phoneNumber: loginUser.phoneNumber,
      email: loginUser.email,
    });
  } catch (error) {
    res.status(500).json({
      error: `Error when login ${typeof error === "string" ? error : ""}`,
    });
  }
});

module.exports = router;
