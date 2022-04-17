const User = require("../models/Users");
const EmailCod = require("../models/emailCod");

// POST user register
const register = async (req, res, next) => {
  try {
    const { username, email, password, emailCode } = req.body;
    const isHasUserCod = await EmailCod.findOne({ sendCode: emailCode });
    if (isHasUserCod) {
      const user = new User({
        username,
        email,
        password,
        phone: "",
        addres: "",
      });
      await user.save();
      res.status(201).json({ success: true, data: user });
    }
    res.json({ success: false, data: {} });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err,
      message: "Something error creating user",
    });
  }
};

// GET user login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ success: true, data: user });
    }
    res.json({ success: false, data: {} });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err,
      message: "Something error login user",
    });
  }
};

// GET User ID
const userGetId = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findOne({ _id: userId });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(404).json({ success: true, data: [] });
    console.log("error", error);
  }
};

module.exports = { register, login, userGetId };
