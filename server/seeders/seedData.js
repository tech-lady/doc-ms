const faker = require('faker');
const model = require('../models');
const bcrypt = require('bcrypt-nodejs');

/**
 * seedData class to generate test user data
 */
class seedData {

  /**
   * @method constructor
   */
  constructor() {
    this.model = model;
  }

  /**
   * Initialize the order of running the seed.
   * @returns {void}
   */
  init() {
    this.model.sequelize.sync({ force: true })
      .then(() => {
        this.seedRoles()
          .then(() => {
            this.seedUsers()
              .then(() => {
                this.seedDocuments();
              })
              .catch(err => console.log(`seed documents error: ${err}`));
          })
          .catch(err => console.log(`seed users error: ${err}`));
      })
      .catch(err => console.log(`seed roles error: ${err}`));
  }

  /**
   * Creates roles in the database
   * @method seedRoles
   * @returns {object} roles data
   */
  seedRoles() {
    const roles = [{
      title: 'admin'
    }, {
      title: 'regular'
    }];
    return this.model.Role.bulkCreate(roles);
  }

  /**
   * Create users in the database
   * @method seedUsers
   * @returns {object} users data
   */
  seedUsers() {
    const users = [{
      username: 'admin',
      name: { first: faker.name.firstName(), last: faker.name.lastName() },
      email: 'admin@dms.com',
      password: bcrypt.hashSync('admin'),
      roleId: 1
    }];
    return this.model.User.bulkCreate(users);
  }

  /**
   * Create documents in the database
   * @method seedDocuments
   * @returns {object} documents data
   */
  seedDocuments() {
    const documents = [{
      dateCreated: Date(),
      title: faker.lorem.word(),
      access: 'public',
      content: faker.lorem.sentences(),
      ownerId: 1,
      ownerRoleId: 2
    }]
    return this.model.Document.bulkCreate(documents);
  }
}

module.exports = new seedData().init();
