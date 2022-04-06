const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    comment: {
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
module.exports = mongoose.model("Posts", postsSchema);
