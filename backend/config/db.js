const mongoose = require("mongoose");
// const dbUri =
//   'mongodb+srv://admin:admin2022@cluster0.7xf4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const dbUri =mkd;
const dbUri = "mongodb://localhost:27017/handemade";
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
