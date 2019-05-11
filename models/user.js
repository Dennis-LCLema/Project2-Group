var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

bcrypt.compareSync("B4c0/\/", hash); // true
bcrypt.compareSync("not_bacon", hash); // false

var hash = bcrypt.hashSync('bacon', 8);


module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
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

  User.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("B4c0/\/", salt, function (err, hash) {
      // Store hash in your password DB.
    });
    // Load hash from your password DB.
    bcrypt.compare("B4c0/\/", hash, function (err, res) {
      // res === true
    });
    bcrypt.compare("not_bacon", hash, function (err, res) {
      // res === false
    });

    // As of bcryptjs 2.4.0, compare returns a promise if callback is omitted:
    bcrypt.compare("B4c0/\/", hash).then((res) => {
      // res === true
    });
    bcrypt.hash('bacon', 8, function(err, hash) {
    });
  });

  return User;
};