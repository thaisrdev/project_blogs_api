const express = require('express');
const controllerLogin = require('../controllers/controllerLogin');
const { loginValidation } = require('../middlewares/validations');

const router = express.Router();

router.post('/', loginValidation, controllerLogin.loginConfig);

module.exports = router;