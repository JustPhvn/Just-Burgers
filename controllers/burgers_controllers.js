const express = require("express");
const burger = require("../models/burger.js");

const route = express.Router();

route.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const burgersObj = {
      burgers: data
    };
    console.log(burgersObj);
    res.render("index", burgersObj);
  });
});

route.post("/api/burgers", function(req, res) {
  burger.insertOne(["name"], [req.body.name], function(result) {
    res.json(result);
  });
});

route.put("/api/burgers/:name", function(req, res) {
  const name = req.params.name;
  burger.updateOne(true, name, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.sendStatus(200).end();
  });
});

module.exports = route;
