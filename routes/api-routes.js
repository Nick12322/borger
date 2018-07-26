var db = require("../models");


module.exports = function (app) {

app.get("/api/posts", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
      res.json(results);
    })
  });
}