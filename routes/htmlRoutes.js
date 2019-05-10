var db = require("../models");
var path = require("path");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));

    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  app.get("/mlb", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/sports.html"))
  });

  app.get("/nba", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/cars.html"))
  });

  app.get("/nfl", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/music.html"))
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"))
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};