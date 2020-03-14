const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3366,
  user: "root",
  password: "root",
  database: "justburgers"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;
