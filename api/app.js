const express = require("express");
const app = express();

// Load env variables
require("dotenv").config();

// import userRoutes location
const userRoutes = require("./routes/userRoutes");

// Parse incoming urlencoded and json bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Direct requests to userRoutes
app.use("/user", userRoutes);

// Handle requests that cross past the above request handlers
app.use((req, res, next) => {
  res.status(404).json({
    Error: "Not found",
  });
});

module.exports = app;
