const User = (sequelize, DataTypes) => {
    const tableUser  =  sequelize.define('User', {
     id: {
       type:  DataTypes.INTEGER,
       primaryKey: true, 
       autoIncrement:true,
     },
     displayName: DataTypes.STRING,
     email: DataTypes.STRING,
     password: DataTypes.STRING,
     image: DataTypes.STRING,
    },
 
    {
     tableName: 'users',
     underscored: true,
     timestamps: false, 
    });
    tableUser.associate = (models) => {
      tableUser.hasMany(models.BlogPost, {
        as: 'blogPost',
        foreignKey: 'user_id',
   
      })
    }
  return tableUser;
 };
 
 module.exports = User;

 