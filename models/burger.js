var orm = require("../config/orm.js");


var burger = {
    //code 
    getBurgers: function(callBack) {
        orm.selectAll("burgers", function(res) {
            //console.log("res in getBurgers burger.js: " + JSON.stringify(res));
            callBack(res);
          });
    },

    addBurger: function(newBurger, callBack) {
        orm.insertOne("burgers", "burger_name", newBurger, function(res) {
            callBack(res);
        });

    },

    updateBurger: function(burger, id, callBack) {
        //TODO: set devoured value to true
        orm.updateOne("burgers", "devoured", true, id, function(res) {
            callBack(res);
        });
    }
};

module.exports = burger;