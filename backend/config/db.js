const mongoose = require("mongoose");
// const dbUri =
//   "mongodb+srv://admin:admin2022@cluster0.7xf4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const dbUri =mkd;
// diyor@2001
// mongodb+srv://diyor:diyor@2001@mini-project1.ewnyi.mongodb.net/min-project
// const dbUri = "mongodb://localhost:27017/mini-project";
const dbUri =
  "mongodb+srv://admin:admin20220208@maximartuz.66fyo.mongodb.net/maximart";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUri, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
