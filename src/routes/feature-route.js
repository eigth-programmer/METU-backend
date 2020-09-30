const express = require('express');
const auth = require('../middelware/security/auth');
const FeatureController = require('../entities/feature/infraestructure/feature-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/',  auth.isLogged, auth.isAdmin, FeatureController.create);
router.get('/', auth.isLogged, auth.isAdmin, FeatureController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, FeatureController.remove);

module.exports = router;
