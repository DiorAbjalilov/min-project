const Image = require("../models/image");

const createOneImage = async (req, res, next) => {
  try {
    const { user_id } = req.body;
    const result = new Image({
      image: `/usersImage/${req.file.filename}`,
      userId: user_id,
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

module.exports = { createOneImage };
