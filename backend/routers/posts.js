const express = require("express");
const {
  addPosts,
  getAllPosts,
  deletePost,
} = require("../controllers/postsController");
const router = express.Router();

// api
router.post("/add", addPosts);
router.post("/userPosts", getAllPosts);
router.delete("/delete/:id", deletePost);

module.exports = router;
