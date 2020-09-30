const express = require('express');
const auth = require('../middelware/security/auth');
const BrandController = require('../entities/brand/infrastructure/brand-controller')

const router = express.Router();

// @TODO sanitize parameters
router.post('/', auth.isLogged, auth.isAdmin, BrandController.create);
router.get('/', BrandController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, BrandController.remove);

module.exports = router;
