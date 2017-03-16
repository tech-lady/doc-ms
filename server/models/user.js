'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    name: DataTypes.JSON,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Document, {
            foreignKey: 'ownerId'
          }),
          User.belongsTo(models.Role, {
            foreignKey: 'roleId'
          })
      }
    }
  });
  return User;
};
