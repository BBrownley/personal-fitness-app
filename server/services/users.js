require("dotenv").config();

const bcrypt = require("bcrypt");

const dbModule = require("../database/connection");
const db = process.env.NODE_ENV === "test" ? dbModule.testDb : dbModule.db;

const userAlreadyExists = async username => {
  const usernameUniqueQuery = `
    SELECT * FROM users
    WHERE user_username = ?
  `;

  return new Promise((resolve, reject) => {
    db.query(usernameUniqueQuery, [username], (err, result) => {
      if (err) {
        reject(err);
      }

      if (Number(result.length) !== 0) {
        resolve(true);
      }
      resolve(false);
    });
  });
};

const emailAlreadyExists = async email => {
  const emailUniqueQuery = `
    SELECT * FROM users
    WHERE user_email = ?
  `;

  return new Promise((resolve, reject) => {
    db.query(emailUniqueQuery, [email], (err, result) => {
      if (err) {
        reject(err);
      }

      if (Number(result.length) !== 0) {
        resolve(true);
      }
      resolve(false);
    });
  });
};

const registerUser = async (username, email, password) => {
  const insertUserQuery = `
    INSERT INTO users (user_username, user_email, user_hashed_password)
    VALUES (?)
  `;

  const hashedPassword = await bcrypt.hash(password, 10);

  const values = [username, email, hashedPassword];

  return new Promise((resolve, reject) => {
    db.query(insertUserQuery, [values], (err, result) => {
      if (err) {
        reject();
      }

      resolve();
    });
  });
};

const findUser = async username => {
  const findUserQuery = `
    SELECT * FROM users
    WHERE user_username = ?
  `;

  return new Promise((resolve, reject) => {
    db.query(findUserQuery, [username], (err, result) => {
      if (err) {
        return reject(new Error("oh no"));
      }

      if (!result[0]) {
        return resolve(null);
      }

      resolve({
        userID: result[0].user_id,
        username: result[0].user_username,
        userPWHash: result[0].user_hashed_password
      });
    });
  });
};

module.exports = {
  userAlreadyExists,
  emailAlreadyExists,
  registerUser,
  findUser
};
