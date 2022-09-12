class UsernameError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "UsernameError";
  }
}

class PasswordError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "PasswordError";
  }
}

module.exports = {
  UsernameError,
  PasswordError
};
