// Establish connection to the database
const sequelize = require("../config/database");
// Import the user model
const User = require("../models/User");

exports.signup_user = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(user);
  res.status(200).json({
    message: "User created",
    user,
  });
};

exports.login_user = (req, res, next) => {
  res.status(200).json({
    message: "Login use",
  });
};

exports.change_password = (req, res, next) => {
  res.status(200).json({
    message: "Change user password",
  });
};
