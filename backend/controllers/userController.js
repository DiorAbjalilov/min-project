const User = require("../models/User");

const register = async () => {
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username,
      email,
      password,
    });
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: error,
      message: "Something error creating user",
    });
  }
};

module.exports = { register };
