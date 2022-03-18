const mongoose = require("mongoose");
const emailCod = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    sendCode: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("EmailCod", emailCod);
