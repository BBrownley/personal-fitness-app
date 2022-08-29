require("dotenv").config();
const mysql = require("mysql");

var db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "personal-fitness-app"
});

var testDb = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "personal-fitness-app-test"
});

module.exports = { db, testDb };
