const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router.post("/signup", usersController.signup_user);
router.post("/login", usersController.login_user);
router.patch("/change_password", usersController.change_password);

module.exports = router;