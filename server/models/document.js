'use strict';
module.exports = function(sequelize, DataTypes) {
  var Document = sequelize.define('Document', {
    title: DataTypes.STRING,
    access: DataTypes.STRING,
    content: DataTypes.TEXT,
    ownerId: DataTypes.INTEGER,
    ownerRoleId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Document.belongsTo(models.User, {
          foreignKey: 'ownerId'
        });
      }
    }
  });
  return Document;
};
