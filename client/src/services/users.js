import axios from "axios";

const register = async (username, email, password, confirmPassword) => {
  if (username.trim().length === 0) {
    throw new Error("Username field is empty");
  }

  if (email.trim().length === 0) {
    throw new Error("Email field is empty");
  }

  if (password.trim().length === 0) {
    throw new Error("Password field is empty");
  }

  if (email.trim().length === 0) {
    throw new Error("Confirm password field is empty");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  const res = await axios.post("/users", {
    username,
    password,
    email
  });

  console.log(res);
};

const usersService = { register };

export default usersService;
