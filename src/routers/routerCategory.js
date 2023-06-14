const express = require('express');
const controllerCategory = require('../controllers/controllerCategory');
const { tokenValidation } = require('../middlewares/validations');
const { categoryValidation } = require('../middlewares/validations');

const router = express.Router();

router.post('/', categoryValidation, tokenValidation, controllerCategory.categoryConfig);
router.get('/', tokenValidation, controllerCategory.getAll);

module.exports = router;