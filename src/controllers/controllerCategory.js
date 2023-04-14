const serviceCategory = require('../services/serviceCategory');

const categoryConfig = async (req, res) => {
  const { body: { name } } = req;
  const { message } = await serviceCategory.categoryConfig(name);
  return res.status(201).json(message);
};

  module.exports = {
    categoryConfig,
  };