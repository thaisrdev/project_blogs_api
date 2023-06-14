const servicePost = require('../services/servicePost');

const postConfig = async (_req, res) => {
  const result = await servicePost.postConfig();
  return res.status(200).json(result);
};

module.exports = { postConfig };
