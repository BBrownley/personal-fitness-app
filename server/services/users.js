const db = require("../database/connection").db;

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

module.exports = {
  userAlreadyExists
};
