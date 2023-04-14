const Joi = require('joi');
const { User } = require('./models');

const loginValidation = async (req, res, next) => {
    const { email, password } = req.body;
    if (email === '' || password === '') {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const userValidation = (user) => Joi.object({
    displayName: Joi.string().min(8).required().messages({
        'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().required().messages({
        'string.min': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
    }),
    image: Joi.string().optional(),
}).validate(user);

const userEmail = async (email) => {
    const user = await User.findOne({
        where: { email },
        attributes: { exclude: ['password'] },
    });
    return user;
};

module.exports = {
    loginValidation,
    userValidation,
    userEmail,
};
