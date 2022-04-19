const express = require("express");
const { sendEmail_Reg } = require("../controllers/sendEmailRegController");
const {
  register,
  login,
  userGetId,
  userPutId,
} = require("../controllers/userController");
const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/usersImage");
  },
  filename: function async(req, file, cb) {
    cb(null, `${Date.now()}-${file.fieldname}`);
  },
});
const upload = multer({ storage: storage });
// api
router.post("/sendemail", sendEmail_Reg);
router.post("/login", login);
router.post("/sigin", register);
router.post("/me", userGetId);
router.put("/mePut", upload.single("image"), userPutId);

module.exports = router;
