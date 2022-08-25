// Mock accounts for testing empty registration field

const userAccsEmptyField = [
  {
    username: "",
    email: "user1@email.com",
    password: "123456",
    confirmPassword: "123456"
  },
  {
    username: "user1",
    email: "",
    password: "123456",
    confirmPassword: "123456"
  },
  {
    username: "user1",
    email: "user1@user.com",
    password: "",
    confirmPassword: "123456"
  },
  {
    username: "user1",
    email: "user1@user.com",
    password: "123456",
    confirmPassword: ""
  }
];

// Mock accounts for testing invalid email address

const userAccsInvalidEmail = [
  {
    username: "user1",
    email: "user1email.com",
    password: "123456",
    confirmPassword: "123456"
  },
  {
    username: "user1",
    email: "user1@email",
    password: "123456",
    confirmPassword: "123456"
  }
];

const userAccsPasswordsNotMatching = [
  {
    username: "user1",
    email: "user1@email.com",
    password: "123456",
    confirmPassword: "12345"
  }
];

module.exports = {
  userAccsEmptyField,
  userAccsInvalidEmail,
  userAccsPasswordsNotMatching
};
