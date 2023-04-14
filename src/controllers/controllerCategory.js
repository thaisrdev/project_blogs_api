const serviceCategory = require('../services/serviceCategory');

const categoryConfig = async (req, res) => {
    const { body: { name } } = req;
    const { message } = await serviceCategory.categoryConfig(name);
    return res.status(201).json(message);
};

const getAll = async (_req, res) => {
    const result = await serviceCategory.getAll();
    return res.status(200).json(result);
  };

  module.exports = {
    categoryConfig,
    getAll,
  };