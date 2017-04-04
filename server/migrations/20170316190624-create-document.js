module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      access: {
        type: Sequelize.ENUM,
        defaultValue: 'public',
        values: ['public', 'private', 'role']
      },
      content: {
        type: Sequelize.TEXT
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      ownerRoleId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shareId: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        defaultValue: []
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Document');
  }
};
