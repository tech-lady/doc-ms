import bcrypt from 'bcrypt-nodejs';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Oops. An account already exist with this username',
        fields: [sequelize.fn('lower', sequelize.col('username'))]
      },
      validate: {
        min: {
          args: 3,
          msg: `Username must start with a letter, have no spaces, 
            and be at least 3 characters.`
        },

        max: {
          args: 40,
          msg: `Username must start with a letter, have no spaces, 
            and be at less than 40 characters.`
        },
        is: {
          args: /^[A-Za-z][A-Za-z0-9-]+$/i,
          msg: `Username must start with a letter, have no spaces, 
            and be 3 - 40 characters.`
        }
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Name should contain only alphabets'
        },
      }

    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      verify: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 7
      }
    },
    roleId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        User.hasMany(models.Document, {
          foreignKey: 'ownerId',
          as: 'documents'
        });
        User.belongsTo(models.Role, {
          foreignKey: 'roleId',
          onDelete: 'CASCADE'
        });
      }
    },

    instanceMethods: {
      authenticate(password) {
        return bcrypt.compareSync(password, this.password)
      },

      toPublicJson() {
        delete this.password;
        return this;
      }
    },
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      },
      beforeUpdate: (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      }
    }
  });
  return User;
};
