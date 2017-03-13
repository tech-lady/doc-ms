'use strict';
module.exports = function(sequelize, DataTypes) {
  var document = sequelize.define('document', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return document;
};