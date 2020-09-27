const express = require('express');
const auth = require('../middelware/security/auth');
const TaxController = require('../entities/tax/infraestructure/tax-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', TaxController.create);
router.get('/', TaxController.getList);
router.delete('/:id', TaxController.remove);

module.exports = router;
