const Image = require("../models/image");

// POST img add
const createOneImage = async (req, res, next) => {
  try {
    const { userId, title, comment } = req.body;
    const result = new Image({
      image: `/usersImage/${req.file.filename}`,
      userId,
      title,
      comment,
    });
    await result
      .save()
      .then(() => {
        res.status(201).json({ success: true, data: result });
      })
      .catch((error) => {
        res.status(400).json({ success: false, error: error });
      });
  } catch (error) {
    console.log(error);
  }
};

// GET user img
const getUserImages = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const result = await Image.find({ userId });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, data: [] });
    console.log(error);
  }
};

module.exports = { createOneImage, getUserImages };
