 module.exports = (sequelize, DataTypes) => {
   const Document = sequelize.define('Document', {
     dateCreated: {
       type: DataTypes.STRING,
       defaultValue: Date()
     },
     title: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     access: {
       type: DataTypes.STRING,
       defaultValue: 'public',
       value: ['public', 'private', 'role'],
     },
     content: DataTypes.TEXT,
     ownerId: DataTypes.INTEGER,
     ownerRoleId: DataTypes.INTEGER
   }, {
     classMethods: {
       associate: (models) => {
         // associations can be defined here
         Document.belongsTo(models.User, {
           foreignKey: 'ownerId',
           onDelete: 'CASCADE',
         });
       }
     }
   });
   return Document;
 };
