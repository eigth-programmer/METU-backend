const express = require('express');
const auth = require('../middelware/security/auth');
const TaxController = require('../entities/tax/infraestructure/tax-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', auth.isLogged, auth.isAdmin, TaxController.create);
router.get('/', auth.isLogged, auth.isAdmin, TaxController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, TaxController.remove);

module.exports = router;
