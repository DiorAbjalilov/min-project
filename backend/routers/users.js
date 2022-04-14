const express = require("express");
const { sendEmail_Reg } = require("../controllers/sendEmailRegController");
const {
  register,
  login,
  userUpdate,
} = require("../controllers/userController");
const router = express.Router();

// api
router.post("/sendemail", sendEmail_Reg);
router.post("/login", login);
router.post("/sigin", register);
router.get("/user", userUpdate);
router.put("/user/update", userUpdate);

module.exports = router;
