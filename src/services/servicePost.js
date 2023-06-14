const { Category, BlogPost, User } = require('../models');

const postConfig = async () => BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  
// const testando = async () => {
//   const posts = await BlogPost.findAll();
//   return console.log(posts);
// };

// testando();

module.exports = { postConfig };
