const post_category = (sequelize, DataTypes) => {
    const PostCategory  =  sequelize.define('PostCategory', {
     postId: {
       type:  DataTypes.INTEGER,
       primaryKey: true, 
       foreingkey: true,
     }, 
     categoryId: {
        type:  DataTypes.INTEGER,
        primaryKey: true, 
        foreingkey: true,
      }, 
    },
    {
     tableName: 'posts_categories',
     underscored: true,
     timestamps: false, 
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreingkey: 'postId',
            otherkey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreingkey: 'categoryId',
            otherkey: 'postId',
        });
    }
  return PostCategory;
 };

 module.exports = post_category;