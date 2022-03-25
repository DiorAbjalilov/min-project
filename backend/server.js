const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(require("morgan")("dev"));

app.use("/api/user", require("./routers/users"));
// app.use("/api/sigin");

app.listen(PORT, console.log(`Server runing in Port => ${PORT}`));
