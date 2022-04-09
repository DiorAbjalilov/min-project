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
    const result = await Posts.find({ userId });
    await res.status(200).json({ success: true, data: result.reverse() });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ success: false, data: [] });
  }
};

// DELETE one post
const deletePost = async (req, res) => {
  try {
    await Posts.findByIdAndDelete({ _id: req.params.id });
    res.status(204).json({ success: true, data: [] });
  } catch (error) {
    console.log("error", error);
    res.status(404).json({ success: false, data: [] });
  }
};

module.exports = { addPosts, getAllPosts, deletePost };
