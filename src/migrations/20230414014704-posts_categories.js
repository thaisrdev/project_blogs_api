'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', { 
      post_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true,
       reference: {
        model: 'blog_posts',
        key: 'id',
      },
  
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        reference: {
         model: 'categories',
         key: 'id',
       },
  
      },
  
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
