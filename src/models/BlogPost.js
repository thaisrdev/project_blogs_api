const Blog_posts = (sequelize, DataTypes) => {
    const BlogPost  =  sequelize.define('BlogPost', {
     id: {
       type:  DataTypes.INTEGER,
       primaryKey: true, 
       autoIncrement:true,
     }, 
     title: DataTypes.STRING,
     content: DataTypes.STRING,
     userId: {
        type: DataTypes.INTEGER,
        foreingkey: true },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },

    {
     tableName: 'blog_posts',
     underscored: true,
     timestamps: false, 
    });
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            as: 'user',
            foreingkey: 'userId',
        });
    }
  return BlogPost;
 };

 module.exports = Blog_posts;