var connection = require("./connection.js");

// Object Relational Mapper (ORM)

//TODO - check code for use with this burger app.
/* In the orm.js file, create the methods that will execute the necessary 
MySQL commands in the controllers. These are the methods you will need to 
use in order to retrieve and store data in your database.

selectAll()
insertOne()
INSERT INTO burgers (burger_name) VALUES ('Chicken Burger');
updateOne()
 */

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function (tableInput, callBack) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            //console.log("selectAll in orm.js result: " + result);
            callBack(result);
        });
    },
    insertOne: function (tableInput, colInput, valOfCol, callBack) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, colInput, valOfCol], function (err, result) {
            if (err) throw err;
            console.log("orm.js insertOne Inserted result: " + result);
            callBack(result);
        });
    },
    updateOne: function (tableInput, colInput, valOfCol, valOfID, callBack) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";

        //TODO: set devoured value to true

        connection.query(queryString, [tableInput, colInput, valOfCol, valOfID], function (err, result) {
            if (err) throw err;
            console.log("Updated: " + result);
            callBack(result);
        });
    },

    //Extra functions for future use 
    selectWhere: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectAndOrder: function (whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findWhoHasMost: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString =
            "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(
            queryString,
            [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;