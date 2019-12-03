require("dotenv").config();

const mongoose = require("mongoose");
const HOST = process.env.HOST;

mongoose.connect(
  HOST,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) throw err;
    console.log("database connected");
  }
);
mongoose.set("useCreateIndex", true);
