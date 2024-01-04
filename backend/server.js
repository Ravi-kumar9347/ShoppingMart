const express = require("express");
const path = require("path");
const connectToDB = require('./config/database')

require("dotenv").config({ path: "backend/config/process.env" });

connectToDB()

const app = express();



const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server is running on ${process.env.NODE_MODE} mode on port ${PORT}`
  )
);
