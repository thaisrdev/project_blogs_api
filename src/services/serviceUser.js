const { User } = require('../models');

const userConfig = async (displayName, email, password, image) => {
  const find = await User.findOne({ where: { email } });
  if (find) return { type: 400, message: 'User already registered' };
  if (image) {
    await User.create({ displayName, email, password, image });
    return { type: null };
  }
    await User.create({ displayName, email, password });
    return { type: null };
};

const getUsers = async () => {
  const result = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return result;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) return { type: 404, message: 'User does not exist' };
  return { type: null, message: user };
};
    
module.exports = { 
    userConfig,
    getUsers,
    getById,
};