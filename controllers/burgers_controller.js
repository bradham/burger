var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


//api route to return all burgers
router.get("/", function(req, res) {
    
    burger.getBurgers(function(data) {
        var hbsObject = {
          burgers: data
        };
        //console.log(hbsObject);
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
  router.put("/burgers/update/:id", function(req, res) {

    var burgerID = req.params.id;

    console.log("burgerID in router.put controller is: " + burgerID);

    burger.updateBurger(burgerID, function(result) {

      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }

      //res.redirect("/");

    });
  });

module.exports = router;
