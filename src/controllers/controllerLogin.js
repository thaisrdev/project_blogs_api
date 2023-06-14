const jwt = require('jsonwebtoken');
const loginService = require('../services/serviceLogin');

const { JWT_SECRET } = process.env;

const loginConfig = async (req, res) => {
  const { body: { email, password } } = req;
  const { type, message } = await loginService.loginConfig(email, password);

  if (type) return res.status(400).json({ message });

  const payload = { email };
  const token = jwt.sign(payload, JWT_SECRET);

  return res.status(200).json({ token });
  };

  module.exports = {
    loginConfig,
  };
