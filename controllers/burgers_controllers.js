const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const burgersObj = {
      burgers: data
    };
    // console.log("this is route" + burgersObj);
    res.render("index", burgersObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(["name"], [req.body.name], function(result) {
    res.json(result);
  });
});

router.put("/api/burgers/:name", function(req, res) {
  const name = req.params.name;
  burger.updateOne(true, name, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.sendStatus(200).end();
  });
});

module.exports = router;
