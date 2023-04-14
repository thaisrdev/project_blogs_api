const { Category } = require('../models');

const categoryConfig = async (name) => {
const result = await Category.create({ name });
return { type: null, message: result };
};

module.exports = { categoryConfig };