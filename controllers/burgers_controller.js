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


  });

  router.post("/burgers/create", function(req, res){
    burger.addBurger(req.body.burger_name, function(result) {
      res.json({ id: result.insertId });
    });
  });

module.exports = router;
