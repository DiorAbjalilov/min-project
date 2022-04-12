const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Image", imageSchema);
