const express = require('express');
const controllerUser = require('../controllers/controllerUser');
const { userValidation } = require('../middlewares/validations');
const { tokenValidation } = require('../middlewares/validations');

const router = express.Router();

router.post('/', userValidation, controllerUser.userConfig);
router.get('/', tokenValidation, controllerUser.getUsers);
router.get('/:id', tokenValidation, controllerUser.getById);

module.exports = router;