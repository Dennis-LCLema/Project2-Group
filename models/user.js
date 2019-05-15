var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Author model a name of type STRING
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
     validate: {
        isEmail: true
     },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  
  Users.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Users.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Users.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
    
  return Users;
};