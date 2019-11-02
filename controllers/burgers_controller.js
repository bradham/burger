var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


//api route to return all burgers
router.get("/", function(req, res) {
    
    burger.getBurgers(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });

  });

  //rout to create a burger in the db
  router.post("/burgers/create", function(req, res){

    burger.addBurger(req.body.burger_name, function(result) {

      res.redirect("/");
      //res.json({ id: result.insertId });
    });
  });

  //route to update a burger
  router.put("/burgers/update", function(req, res) {

    burger.updateBurger(req.body.burger_id, function(result) {

      res.redirect("/");

    })
  })

module.exports = router;
