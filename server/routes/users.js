var express = require("express");
var router = express.Router();
const createError = require("http-errors");

// Register a user

router.post("/", (req, res, next) => {
  // Get user-inputted data from request body
  const { username, email, password, confirmPassword } = req.body;

  // Validate form

  if (username.trim().length === 0) {
    next(createError(401, "Username field is empty"));
  }

  if (email.trim().length === 0) {
    next(createError(401, "Email field is empty"));
  }

  if (password.trim().length === 0) {
    next(createError(401, "Password field is empty"));
  }

  if (confirmPassword.trim().length === 0) {
    next(createError(401, "Confirm password field is empty"));
  }
  // Validate email

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
    next(createError(401, "Email is invalid"));
  }

  // Check if passwords are matching

  if (password !== confirmPassword) {
    next(createError(401, "Passwords do not match"));
  }

  // Check if username/email is unique

  // --- Validation passed, user can be registered --- //

  // Hash the password

  // Create user object and store in database
  //res.json(req.body);

  next();
});

module.exports = router;
