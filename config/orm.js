const connection = require("./connection.js");

const orm = {
  selectAll: function(tableName, cb){
    var queryString = "SELECT * FROM `"+ tableName +"`;"
    connection.query(queryString, (err, result) => {
      if(err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableName, burgerName, cb){
    //the only variable available on insert is the name,
    //the result are assigned by default;
    var queryString = "INSERT INTO `"+ tableName +"` (`burger_name`) VALUES ('" + burgerName + "');";
    connection.query(queryString, (err, result) => {
      if(err) throw err;
      cb(result);
    });

  },
  updateOne: function(tableName, id, cb){
    //cannot undevour so the its always the same operation
    var queryString = "UPDATE `"+ tableName +"` SET `devoured`= true WHERE `id` = "+ id +";";
    connection.query(queryString, (err, result) => {
      if(err) throw err;
      cb(result);
    })
  }
}

module.exports = orm;