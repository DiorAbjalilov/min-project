const express = require("express");
const { sendEmail_Reg } = require("../controllers/sendEmailRegController");
const { register, login } = require("../controllers/userController");
const router = express.Router();

// api
router.post("/sendemail", sendEmail_Reg);
router.post("/sigin", register);
router.get("/login", login);

module.exports = router;
