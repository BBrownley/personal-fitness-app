require("dotenv").config();

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

module.exports = {
  userAlreadyExists,
  emailAlreadyExists
};
