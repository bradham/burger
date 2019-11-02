var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "process.env.JAWSDB_URL",
    port: 3306,
    user: "brad",
    password: "123456",
    database: "burgers_db",
    use_env_variable: "JAWSDB_URL"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;