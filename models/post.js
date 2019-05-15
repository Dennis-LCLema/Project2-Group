module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    body: DataTypes.STRING,
    username: DataTypes.STRING
    // category: DataTypes.STRING,
  });


  // Post.associate = function (models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Post;
};

// module.exports = function(sequelize, DataTypes) {
//     var Post = sequelize.define("Post", {
//       body: {
//         type: DataTypes.TEXT,
//       //  allowNull: false,
//         //len: [1]
//       },
//      category: {
//          type: DataTypes.STRING,
//          allowNull: false,
//      },
//       username: {
//         type: DataTypes.STRING
//       }
//     });


  // };
