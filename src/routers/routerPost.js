const express = require('express');
const controllerPost = require('../controllers/controllerPost');
const { tokenValidation } = require('../middlewares/validations');

const router = express.Router();

router.get('/', tokenValidation, controllerPost.postConfig);

module.exports = router;    
