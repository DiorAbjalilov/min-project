const express = require("express");
const { register } = require("../controllers/userController");
const router = express.Router();
router.post("/sigin", register);
// router.post("/login", login);

module.exports = router;
