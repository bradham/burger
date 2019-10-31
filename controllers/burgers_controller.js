var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

//Home route
router.get("/", function(req, res) {
  // cat.all(function(data) {
  //   var hbsObject = {
  //     cats: data
  //   };
  //   console.log(hbsObject);
    res.render("index");
  //});
});

//api route to return all burgers
router.get("/api/burgers", function(req, res) {
    
    burger.getBurgers(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });

    // cat.create([
    //   "name", "sleepy"
    // ], [
    //   req.body.name, req.body.sleepy
    // ], function(result) {
    //   // Send back the ID of the new quote
    //   res.json({ id: result.insertId });
    // });

  });

module.exports = router;
