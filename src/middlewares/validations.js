const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const loginValidation = async (req, res, next) => {
    const { body: { email, password } } = req;
    if (email === '' || password === '') {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const tokenValidation = async (req, res, next) => {
    const { headers: { authorization } } = req;

    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const user = jwt.verify(authorization, JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

const userValidation = (req, res, next) => {
    const { body: { displayName, email, password } } = req;

    if (displayName.length < 9) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
        });
    }
    if (!regex.test(email)) {
        return res.status(400).json({
            message: '"email" must be a valid email',
        });
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
        });
    }
    return next();
};

const categoryValidation = (req, res, next) => {
    const { body: { name } } = req;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    return next();
};

module.exports = {
    loginValidation,
    userValidation,
    tokenValidation,
    categoryValidation,
};
