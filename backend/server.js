const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(require("morgan")("dev"));

app.use("/api/user", require("./routers/users"));
// app.use("/api/sigin");

app.listen(5000, console.log("Server runing in Port => 5000"));
