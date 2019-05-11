var db = require("../models");

module.exports = function(app) {



app.post("/api/user", function(req, res) {
    console.log("req.body: ", req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });



}