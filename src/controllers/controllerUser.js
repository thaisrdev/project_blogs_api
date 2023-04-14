const jwt = require('jsonwebtoken');
const userService = require('../services/serviceUser');

const { JWT_SECRET } = process.env;

const userConfig = async (req, res) => {
    const { body: { displayName, email, image } } = req;
    const { type, message } = await userService.userConfig(displayName, email, image);

    if (type) return res.status(409).json({ message }); 

    const payload = { displayName, email, image };
    const token = jwt.sign(payload, JWT_SECRET);
    
    return res.status(201).json({ token });
};

  module.exports = {
    userConfig,
  };