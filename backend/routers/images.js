const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { createOneImage } = require("../controllers/imageController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/usersImage");
  },
  filename: function async(req, file, cb) {
    cb(null, `${Date.now()}-${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });

router.post("/add", upload.single("image"), createOneImage);
// router.get('/all', Image.getAll);
// router.get('/byTour/:tourID', Image.get_Image_TourId);
// router.get('/:id', Image.getOne);
// router.put('/:id',  upload.single('image'), Image.updateOne);
// router.delete('/:id',  Image.deleteOne);

module.exports = router;
