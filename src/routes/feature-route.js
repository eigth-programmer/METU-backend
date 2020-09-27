const express = require('express');
const checkAuth = require('../middelware/security/auth');
const FeatureController = require('../entities/feature/infraestructure/feature-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/',  FeatureController.create);
router.get('/', FeatureController.getList);
router.delete('/:id', FeatureController.remove);

module.exports = router;
