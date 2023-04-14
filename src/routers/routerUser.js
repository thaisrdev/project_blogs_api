const express = require('express');
const controllerUser = require('../controllers/controllerUser');
const { userValidation } = require('../middlewares/validations');

const router = express.Router();

router.post('/', userValidation, controllerUser.userConfig);

module.exports = router;