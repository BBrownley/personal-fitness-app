import axios from "axios";

const baseUrl = "http://localhost:9000";

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

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
    throw new Error("Email is invalid");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  try {
    const res = await axios.post(`${baseUrl}/users`, {
      username,
      email,
      password,
      confirmPassword
    });

    console.log(res);
  } catch (err) {
    return { error: err.message };
  }
};

const usersService = { register };

export default usersService;
