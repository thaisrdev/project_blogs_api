const jwt = require('jsonwebtoken');
const serviceUser = require('../services/serviceUser');

const { JWT_SECRET } = process.env;

const userConfig = async (req, res) => {
    const { body: { displayName, email, image } } = req;
    const { type, message } = await serviceUser.userConfig(displayName, email, image);

    if (type) return res.status(409).json({ message }); 

    const payload = { displayName, email, image };
    const token = jwt.sign(payload, JWT_SECRET);
    
    return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const result = await serviceUser.getUsers();
  return res.status(200).json(result);
};

  module.exports = {
    userConfig,
    getUsers,
  };