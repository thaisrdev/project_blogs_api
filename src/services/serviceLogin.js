const { User } = require('../models');

const loginConfig = async (email, password) => {
const user = await User.findOne({
    where: { email, password } });
    if (!user) return { type: 'error', message: 'Invalid fields' };
    return { type: null, message: '' };
};
module.exports = { loginConfig };