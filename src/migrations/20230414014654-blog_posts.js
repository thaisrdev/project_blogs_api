'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', { 
      id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true, 
       autoIncrement:true,
      },
     title: {
      type: Sequelize.STRING,
      allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'users',
          key: 'id',
        },
  
      },
        published: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated: {
          type: Sequelize.DATE,
          allowNull: false,
  
      },
  
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
