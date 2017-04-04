const faker = require('Faker');
const bcrypt = require('bcrypt-nodejs')

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Users', [{
      id: 1,
      firstname: 'administrator',
      lastname: 'admin',
      username: 'admin',
      email: 'admin@someone.com',
      password: bcrypt.hashSync('1234567'),
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      firstname: 'someone',
      lastname: 'person',
      username: 'regular',
      email: 'seun@seun.com',
      password: bcrypt.hashSync('1234567'),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      firstname: 'person',
      lastname: 'gender',
      username: 'regular',
      email: 'sola@sola.com',
      password: bcrypt.hashSync('1234567'),
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: true
    });
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
