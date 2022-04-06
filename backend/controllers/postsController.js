const User = require("../models/Users");
const Posts = require("../models/Posts");

// POST add posts
const addPosts = async (req, res) => {
  try {
    const { userName, lastName, comment, userId } = req.body;
    const result = new Posts({
      userName,
      lastName,
      comment,
      userId,
    });
    await result.save().then(() => {
      res.status(201).json({ seccuss: true, data: result });
    });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ seccuss: false, data: {} });
  }
};

// GET all posts
const getAllPosts = async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await Posts.findOne({ userId });
    await res.status(200).json({ success: true, data: result });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ success: false, data: [] });
  }
};

module.exports = { addPosts, getAllPosts };
