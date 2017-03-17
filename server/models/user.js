'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      DataTypes.JSON,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
    password: {
      DataTypes.STRING,
      allowNull: false,
    }
    roleId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        User.hasMany(models.Document, {
          foreignKey: 'ownerId'
        });
        User.belongsTo(models.Role, {
          foreignKey: 'roleId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return User;
};
