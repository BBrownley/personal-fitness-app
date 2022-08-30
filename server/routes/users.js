var express = require("express");
var router = express.Router();
const createError = require("http-errors");

const usersService = require("../services/users");

// Register a user

router.post("/", async (req, res, next) => {
  // Get user-inputted data from request body
  const { username, email, password, confirmPassword } = req.body;

  // Validate form

  if (username.trim().length === 0) {
    return next(createError(401, "Username field is empty"));
  }

  if (email.trim().length === 0) {
    return next(createError(401, "Email field is empty"));
  }

  if (password.trim().length === 0) {
    return next(createError(401, "Password field is empty"));
  }

  if (confirmPassword.trim().length === 0) {
    return next(createError(401, "Confirm password field is empty"));
  }
  // Validate email

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
    return next(createError(401, "Email is invalid"));
  }

  // Check if passwords are matching

  if (password !== confirmPassword) {
    return next(createError(401, "Passwords do not match"));
  }

  // Check if username/email is unique

  const userAlreadyExists = await usersService.userAlreadyExists(username);

  if (userAlreadyExists) {
    return next(createError(409, "Username is already taken"));
  }

  const emailAlreadyExists = await usersService.emailAlreadyExists(email);

  if (emailAlreadyExists) {
    return next(createError(409, "Email is already taken"));
  }

  // // --- Validation passed, user can be registered --- //

  try {
    await usersService.registerUser(username, email, password);
  } catch (err) {
    return next(createError(500, "Unable to register user"));
  }

  res.status(200).json({ message: "User successfully registered" });
});

module.exports = router;
