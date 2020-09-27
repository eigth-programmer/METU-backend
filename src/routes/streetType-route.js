const express = require('express');
const auth = require('../middelware/security/auth');
const StreetTypeController = require('../entities/streetType/infraestructure/streetType-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', StreetTypeController.create);
router.get('/', StreetTypeController.getList);
router.delete('/:id',  StreetTypeController.remove);

module.exports = router;
