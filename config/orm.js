const connect = require("../config/connection.js");

const orm = {
  selectAll: function(table, cb) {
    const queryString = "SELECT * FROM " + table;
    connect.query(queryString, function(err, result) {
      // console.log(queryString);
      if (err) throw err;
      cb(result);
    });
  },
  insertOne(table, columnName, name, cb) {
    const queryString = "INSERT INTO ?? (??) VALUES (?)";
    connect.query(queryString, [table, column, name], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne(table, columnName, value, secondColumn, name, cb) {
    const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connect.query(
      queryString,
      [table, columnName, value, secondColumn, name],
      function(err, result) {
        if (err) throw err;
        result.sendStatus(200).end();
      }
    );
  }
};

module.exports = orm;
