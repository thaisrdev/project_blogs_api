const express = require('express');
const controllerUser = require('../controllers/controllerUser');

const router = express.Router();

router.post('/user', controllerUser.userConfig);

module.exports = router;