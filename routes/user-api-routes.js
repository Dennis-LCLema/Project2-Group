var db = require("../models");

module.exports = function(app) {

  app.get("/api/user", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Users.findAll({}).then(function(Users) {
      
      res.json(Users);
    });
  });


app.post("/api/user", function(req, res) {
    console.log("req.body: ", req.body);
    db.Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    
    
    .then(function(Users) {
      res.json(Users);
    });
  });



}