const express = require('express');
const auth = require('../middelware/security/auth');
const BrandController = require('../entities/brand/infrastructure/brand-controller')

const router = express.Router();

// @TODO sanitize parameters
router.post('/', BrandController.create);
router.get('/', BrandController.getList);
router.delete('/:id', BrandController.remove);

module.exports = router;
