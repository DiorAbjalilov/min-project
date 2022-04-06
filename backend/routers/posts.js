const express = require("express");
const { addPosts, getAllPosts } = require("../controllers/postsController");
const router = express.Router();

// api
router.post("/add", addPosts);
router.post("/userPosts", getAllPosts);

module.exports = router;
