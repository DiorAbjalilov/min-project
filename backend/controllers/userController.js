const User = require("../models/Users");
const EmailCod = require("../models/emailCod");

// POST user register
const register = async (req, res, next) => {
  try {
    const { username, email, password, emailCode } = req.body;
    const isHasUserCod = await EmailCod.find({ sendCode: emailCode });
    // console.log(isHasUserCod);
    if (isHasUserCod) {
      const user = new User({
        username,
        email,
        password,
      });
      await user.save();
      res.status(201).json({ success: true, data: user });
    }
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
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err,
      message: "Something error login user",
    });
  }
};

module.exports = { register, login };
