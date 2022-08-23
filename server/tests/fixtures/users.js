// Mock accounts for testing empty registration field

const user1 = {
  username: "",
  email: "user1@email.com",
  password: "123456",
  confirmPassword: "123456"
}

const user2 = {
  username: "user1",
  email: "",
  password: "123456",
  confirmPassword: "123456"
}

const user3 = {
  username: "user1",
  email: "user1@user.com",
  password: "",
  confirmPassword: "123456"
}

const user4 = {
  username: "user1",
  email: "user1@user.com",
  password: "123456",
  confirmPassword: ""
}

const userAccsEmptyField = [user1, user2, user3, user4];

module.exports = {
  userAccsEmptyField
}