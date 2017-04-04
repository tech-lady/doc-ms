 module.exports = (sequelize, DataTypes) => {
   const Document = sequelize.define('Document', {
     title: {
       type: DataTypes.STRING,
       allowNull: false
     },
     access: {
       type: DataTypes.STRING,
       defaultValue: 'public',
       value: ['public', 'private', 'role'],
     },
     content: {
       type: DataTypes.TEXT,
       allowNull: false
     },
     ownerId: DataTypes.INTEGER,
     ownerRoleId: DataTypes.INTEGER,
     shareId: DataTypes.ARRAY(DataTypes.INTEGER)
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
