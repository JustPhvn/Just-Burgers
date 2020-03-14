const connect = require("./connection.js");

const orm = {
  selectAll(table, columnName, name) {
    const queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connect.query(queryString, [table, columnName, name], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne(table, columnName, name) {
    const queryString = "INSERT INTO ?? (??) VALUES (?)";
    connect.query(queryString, [table, column, name], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne(table, columnName, value, secondColumn, name) {
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
