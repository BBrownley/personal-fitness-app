require("dotenv").config();
const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "personal-fitness-app"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = { db };
