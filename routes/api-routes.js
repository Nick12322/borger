var db = require("../models");


module.exports = function (app) {

app.get("/api/all", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
      res.json(results);
    })
  });

  app.get("/api/all/:id", function (req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      console.log(results)
      res.json(results);
    })
  });


app.post("/api/new", function (req, res) {
  console.log("Character Data:");
  console.log(req.body);

  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function (results) {
    console.log(results);
  });

});

app.put("/api/all/:id", function (req, res) {
  db.Burger.findOne({
    where: {
      id: req.params.id
    },
    
    devoured: true
    
  }).then(function (results) {
    
  })
});









}