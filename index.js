const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config()
const app = express();
const cors = require("cors")
const connectDB = require("./config/db");
const messageRouter = require("./router/sendMessageRouter")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: "http://localhost:3000"}))

connectDB()
app.use("/",messageRouter)
app.get("/", (req, res) => {
  res.json("hello");
});

const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
