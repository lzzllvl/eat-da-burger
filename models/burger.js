const orm = require('../config/orm.js');

const burger = {
  selectAllBurgers: function(cb) {
    orm.selectAll("burgers", res => cb(res));
  },
  insertBurger: function(burgerName, cb) {
    orm.insertOne("burgers", burgerName, res => cb(res));
  },
  devour: function(burgerName, cb) {
    orm.updateOne("burgers", burgerName, res => cb(res));
  }
};

module.exports = burger;