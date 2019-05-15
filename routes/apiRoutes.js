var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the todos
 

  
  app.get("/api/chat", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Post.findAll({}).then(function(Posts) {
      
      res.json(Posts);
    });
  });

  // POST route for saving a new todo
  app.post("/api/chat", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Post.create({
      body: req.body.body,
      username: req.body.username,
      category: req.body.category
     
    }).then(function(Posts) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(Posts);
    });
  });

 


 
};
