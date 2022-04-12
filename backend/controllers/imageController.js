const Image = require("../models/image");
// const path = require("path");
// const fs = require("fs");
// const UploadFile=require('../config/Sharp');

const createOneImage = async (req, res, next) => {
  try {
    // const { user_id } = req.body;
    const result = new Image({
      image: `/public/usersImage/${req.file.filename}`,
      //   user_id,
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
