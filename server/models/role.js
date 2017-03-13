'use strict';
module.exports = function(sequelize, DataTypes) {
  var role = sequelize.define('role', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return role;
};