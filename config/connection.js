const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "beea993711104e",
  password: "0bcd960c",
  database: "heroku_62f697736c94e91",
  connectionLimit: 5
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;