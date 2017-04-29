const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(req, res) {
  //get all burgers from db via orm and send to express-handlebars
  //engine w/ `res.render`
  burger.selectAllBurgers(data => res.render("index", {burgers: data}));
});


//these methods redirect to the root path, this makes it easy for us
//to change the client view from the template and then resend it with above
//method
router.post("/", function(req, res) {
  console.log(req.body);
  burger.insertBurger(req.body.name, function() {
    res.redirect("/");
  })
});

router.put("/", function(req, res) {
  console.log(req.body);
  burger.devour(req.body.name, function() {
    res.redirect("/");
  });
});

module.exports = router;