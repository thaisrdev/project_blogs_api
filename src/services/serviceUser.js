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
    
module.exports = { 
    userConfig,
};