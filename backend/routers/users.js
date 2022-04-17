const express = require("express");
const { sendEmail_Reg } = require("../controllers/sendEmailRegController");
const { register, login, userGetId } = require("../controllers/userController");
const router = express.Router();

// api
router.post("/sendemail", sendEmail_Reg);
router.post("/login", login);
router.post("/sigin", register);
router.post("/me", userGetId);

module.exports = router;
