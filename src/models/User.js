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
     tableName: 'Users',
     underscored: true,
     timestamps: false, 
    }
 
    )
  return tableUser;
 };
 
 module.exports = User;