const { Category } = require('../models');

const categoryConfig = async (name) => {
const result = await Category.create({ name });
return { type: null, message: result };
};

const getAll = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  categoryConfig,
  getAll,
};