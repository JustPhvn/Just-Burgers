const orm = require("../config/orm");

const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne(name, cb) {
    orm.insertOne("burgers", "burger_name", name, function(res) {
      cb(res);
    });
  },
  updateOne(value, name, cb) {
    orm.updateOne("burgers", "devoured", value, "burger_name", name, function(
      res
    ) {
      cb(res);
    });
  }
};

module.exports = burger;
