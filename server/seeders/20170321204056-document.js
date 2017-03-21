import faker from 'Faker';

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
      const arr = [];
      for (let index = 0; index < 50; index += 1) {
        arr.push(index);
      }
      const access = { 1: 'public', 2: 'private', 3: 'role' };
      const documents = arr.map(() => ({
        title: Faker.Lorem.sentence(),
        content: Faker.Lorem.paragraphs(),
        access: access[Math.round(Math.random() * 2) + 1],
        ownerId: Math.floor(Math.random() * 3) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }));

      return queryInterface.bulkInsert('Documents', documents, { returning: true, validate: true });
    },
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
