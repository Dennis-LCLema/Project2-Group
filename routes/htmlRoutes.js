var db = require("../models");
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");



module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

     // If the user already has an account send them to the members page
     if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../views/index.html"));

  });

    // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

  app.get("/mlb", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/mlb.html"))
  });

  app.get("/nba", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/nba.html"))
  });

  app.get("/nfl", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/nfl.html"))
  });

  // app.get("/home", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/home.html"))
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
 app.get("*", function(req, res) {
   res.render("404");
 });
};
