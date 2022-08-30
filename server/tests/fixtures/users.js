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

// for testing not matching passwords

const userAccsPasswordsNotMatching = [
  {
    username: "user1",
    email: "user1@email.com",
    password: "123456",
    confirmPassword: "12345"
  }
];

// for testing duplicate usernames in database

const userAccsDuplicateUsername = [
  {
    username: "user14658458",
    email: "user1@email.com",
    password: "123456",
    confirmPassword: "123456"
  }
];

// for testing duplicate emails in database

const userAccsDuplicateEmail = [
  {
    username: "user1",
    email: "user1123515@email.com",
    password: "123456",
    confirmPassword: "123456"
  }
];

// account with valid credentials

const userAccsValid = [
  {
    username: "user200",
    email: "user200@email.com",
    password: "123456",
    confirmPassword: "123456"
  }
];

module.exports = {
  userAccsEmptyField,
  userAccsInvalidEmail,
  userAccsPasswordsNotMatching,
  userAccsDuplicateUsername,
  userAccsDuplicateEmail,
  userAccsValid
};
