const express = require("express");
const { sendEmail_Reg } = require("../controllers/sendEmailRegController");
const { register, login } = require("../controllers/userController");
const router = express.Router();

// api
router.post("/sendemail", sendEmail_Reg);
router.post("/login", login);
router.post("/sigin", register);

module.exports = router;
