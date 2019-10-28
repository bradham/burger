var orm = require("../config/orm.js");

/* 
TODO
create the code that will call the ORM functions using burger specific input for the ORM
*/

var burger = {
    //code 
    getBurgers: function(callBack) {
        orm.selectAll("burgers", function(res) {
            console.log("res in getBurgers burger.js: " + res);
            callBack(res);
          });
    },

    addBurger: function(newBurger) {
        orm.insertOne("burgers", "burger_name", newBurger);
    },

    updateBurger: function(burger, id) {
        orm.updateOne("burgers", "burger_name", burger, id);
    }
};

module.exports = burger;