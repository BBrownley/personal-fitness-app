import axios from "axios";

const baseUrl = "http://localhost:9000";

const register = async (username, email, password, confirmPassword) => {
  let errors = {};

  if (username.trim().length === 0) {
    errors.username = "Username field is empty";
  }

  if (email.trim().length === 0) {
    errors.email = "Email field is empty";
  }

  if (password.trim().length === 0) {
    errors.password = "Password field is empty";
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
    errors.email = "Email is invalid";
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (confirmPassword.trim().length === 0) {
    errors.confirmPassword = "Confirm password field is empty";
  }

  if (Object.keys(errors).length > 0) {
    throw errors;
  }

  try {
    await axios.post(`${baseUrl}/users`, {
      username,
      email,
      password,
      confirmPassword
    });
  } catch (err) {
    // either the username or email was taken

    if (err.response.data.error.includes("Username")) {
      errors.username = err.response.data.error;
    }

    if (err.response.data.error.includes("Email")) {
      errors.email = err.response.data.error;
    }

    throw errors;
  }
};

const login = async (username, password) => {
  let errors = {};

  if (username.trim().length === 0) {
    errors.username = "Username field is empty";
  }

  if (password.trim().length === 0) {
    errors.password = "Password field is empty";
  }

  if (Object.keys(errors).length > 0) {
    throw errors;
  }

  try {
    // attempt to log in the user
    await axios.post(`${baseUrl}/users/login`, {
      username,
      password
    });
  } catch (e) {
    // if request fails, username/password was incorrect
    errors.password = "Incorrect username or password";
    throw errors;
  }
};

const usersService = { register, login };

export default usersService;
