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

  // const emailUniqueQuery = `
  //   SELECT * FROM users
  //   WHERE user_email = ?
  // `;

  // db.query(emailUniqueQuery, [email], (err, result) => {
  //   if (err) throw err;

  //   if (result.length !== 0) {
  //     next(createError(409, "Email already taken"));
  //   }
  // });

  // // --- Validation passed, user can be registered --- //

  // const createUserQuery = `
  //   INSERT INTO users (user_id, user_username, user_email, user_hashed_password)
  //   VALUES (?, ?, ?, ?)
  // `;

  // db.query(
  //   createUserQuery,
  //   [null, username, email, password],
  //   (err, result) => {
  //     if (err) throw err;
  //     console.log(result);
  //   }
  // ); // TODO: hash password

  // Hash the password

  // Create user object and store in database

  //res.json(req.body);

  res.json({ message: "Hello" });
});

module.exports = router;
