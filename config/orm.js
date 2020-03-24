const connect = require("../config/connection.js");

const orm = {
  selectAll: function(table, cb) {
    const queryString = "SELECT * FROM " + table;
    console.log(queryString);
    connect.query(queryString, function(err, result) {
      // console.log(queryString);
      if (err) throw err;
      cb(result);
    });
  },
  insertOne(table, columnName, name, cb) {
    const queryString =
      "INSERT INTO " + table + " (" + columnName + ") VALUES ('" + name + "')";
    console.log(queryString);
    connect.query(queryString, ["burgers", "burger_name", name], function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
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
        cb(result);
      }
    );
  },
  delete(name, cb) {
    var queryString =
      "DELETE FROM burgers WHERE devoured = true AND burger_name = '" +
      name +
      "'";

    connect.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
